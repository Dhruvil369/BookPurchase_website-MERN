import React from 'react'

export default function Contacta() {
  return (
    <div className="min-h-screen">
      <div className="mt-16">
        <div className=" min-h-screen flex flex-col items-center mt-64 ">
            <div className="font-bold text-3xl text-blue-700 mr-32 mb-5">

            Contact us
            </div>
            <div className="text-2xl flex flex-col">
            Name
            <input className="input border-black mr-10 input-bordered  mt-4 p-5 pr-20 mb-4" placeholder="Enter Your Name"></input>
            E-mail
            <input className="input border-black mr-10 input-bordered  mt-4 p-5 pr-20 mb-4" placeholder="Enter Your E-mail"></input>
            Message
            <input className="input border-black mr-10 input-bordered  mt-4 p-5 pr-20 h-32" placeholder="Enter Your Medssage"></input>

            <button className="p-0 hover:bg-blue-400 bg-blue-500 mt-4 w-32">Submit</button>
            </div>

            
        </div>
      </div>
    </div>
  )
}
