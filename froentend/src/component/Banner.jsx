// import React from 'react'

export default function banner() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white container px-4 max-w-screen-2xl ml-0 flex overflow-hidden bg-white">
      <div className="text-black w-1/2 ">
      <h1 className="text-4xl font-bold mt-36 ml-12 dark:bg-slate-900 dark:text-white "><span className="text-pink-500">WELCOME</span> to my website! Something span new here!!!</h1>
      <p className="mt-5 ml-12 dark:bg-slate-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis quidem. Dolor, quaerat voluptas quod facere porro voluptatem architecto. Odit placeat beatae doloremque maiores. Sed illum perspiciatis tenetur eveniet, voluptatem eligendi provident sequi qui deserunt assumenda quidem repudiandae ea laboriosam?</p>
      <label className=" bg-white input input-bordered flex items-center gap-2 ml-12 mt-4 border-stone-900">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 bh-white">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label >
<button className="btn btn-secondary ml-12 mt-4">Submit</button>
      </div>


      <div className="text-black dark:bg-slate-900 dark:text-white bg-white w-1/2 mt-16">
      
      <img src="https://scholarlykitchen.sspnet.org/wp-content/uploads/2018/07/iStock-506432952.jpg" alt=""  className="rounded-lg  mt-4 pl-4 pr-3"/> </div>
    </div>
    </>
  )
}
