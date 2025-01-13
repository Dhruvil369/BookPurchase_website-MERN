// import React from 'react'
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useEffect , useState } from "react";
import axios from "axios";

export default function Freebook() {
  
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4001/book').then((response) => {
      setBooksList(response.data)
    })
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const filterData = list.filter((data) => data.category === "free");

  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white ml-16 mb-8 mt-4">
        <div className="mb-4 font-bold text-black dark:text-white text-3xl">Free Course</div>
        <p className="dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis autem doloribus dolores impedit, quaerat obcaecati corrupti velit asperiores ad! Omnis, excepturi maxime cumque autem minima asperiores culpa distinctio quae dolores eum velit harum odio eius eaque aperiam, obcaecati accusantium?
        </p>
      </div>

      <div className="slider-container overflow-hidden pb-8 ml-12 dark:bg-slate-900 dark:text-white">
        <Slider {...settings}>
          {booksList.map((item,index) => (
            <Card item={item} key={index} />
          ))}
        </Slider>
      </div>
    </>
  );
}
