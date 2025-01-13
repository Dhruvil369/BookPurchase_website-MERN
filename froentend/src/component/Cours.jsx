// import React from 'react'
import {Link} from "react-router-dom"
export default function Cours() {

  return (
    <>
    <div className="items-center justify-center text-center mt-16">
    <div className="text-pink-500 font-bold text-4xl">WELCOME </div>
    <p className="ml-64 mr-64 mt-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam repudiandae nostrum modi pariatur unde ipsam quibusdam dolores culpa, rerum iusto provident veniam, eum deleniti debitis ab, eligendi corrupti ea voluptate beatae obcaecati itaque labore inventore? Quidem aperiam blanditiis velit.</p>
    
    <Link to="/" className="btn btn-secondary m-0 mt-4 rounded-md hover:bg-pink-600">Back</Link>
    </div>
    </>
  )
}
