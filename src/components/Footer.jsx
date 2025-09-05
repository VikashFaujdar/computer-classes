import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='h-full bg-[#272727] w-full pt-10'>
      <div className="container flex flex-col justify-center w-full">
        <div className="footerTop flex flex-col items-center flex-wrap md:flex-row md:justify-between mx-auto md:mx-0 gap-4 mb-4">
          <div className="dts flex flex-col items-center justify-center md:items-start text-center md:text-start" >
            <p className='text-sm my-5 text-white font-thin max-w-sm pr-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="flex justify-center md:justify-start items-center w-full my-5">
              <input type="text" className='py-3 pl-5 border-2 md:w-xs w-[60vw] rounded-l-2xl border-r-0 border-white bg-transparent text-white text-sm' placeholder='Enter your email' />
              <button className='bg-[#EB5942] cursor-pointer hover:bg-green-500 transition-all duration-300 text-white py-3 px-6 rounded-r-2xl'>Send</button>
            </div>
            <div className="icons flex items-center gap-5 my-8">
              <div className="w-8 h-8 rounded-full hover:bg-green-400 hover:border-green-400 cursor-pointer transition-all duration-300 border-1 border-white flex items-center justify-center">
                <FiInstagram className='text-white' />
              </div>
              <div className="w-8 h-8 rounded-full hover:bg-green-400 hover:border-green-400 cursor-pointer transition-all duration-300 border-1 border-white flex items-center justify-center">
                <FaTwitter className='text-white' />
              </div>
              <div className="w-8 h-8 rounded-full hover:bg-green-400 hover:border-green-400 cursor-pointer transition-all duration-300 border-1 border-white flex items-center justify-center">
                <FaFacebookF className='text-white' />
              </div>
            </div>
          </div>
          <div className="links text-center md:text-start mb-5 md:mb-0">
            <ul className='space-y-6'>
              <h1 className='text-white font-extralight text-xl tracking-wider'>Useful Links</h1>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Home</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>About</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Mentors</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Courses</li>
            </ul>
          </div>
          <div className="links text-center md:text-start mb-5 md:mb-0">
            <ul className='space-y-6'>
              <h1 className='text-white font-extralight text-xl tracking-wider'>Top categories</h1>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Web Development</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Digital Mrketing</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Business Insight</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Computer Science</li>
            </ul>
          </div>
          <div className="links text-center md:text-start mb-5 md:mb-0">
            <ul className='space-y-6'>
              <h1 className='text-white font-extralight text-xl tracking-wider'>Help & support</h1>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Contact</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Privacy Policy</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Terms</li>
              <li className='text-white font-thin text-sm hover:text-green-500 transition-all duration-300 cursor-pointer'>Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='text-white'/>
      <div className="container flex items-center justify-between w-full py-3 text-white flex-col-reverse md:flex-row gap-3 md:gap-0">
        <h1 className='text-sm font-thin'>Copyright © 2025 Coaching Lab By Vikash Kumar</h1>
        <h2 className='text-sm font-thin'>Created by Vikash Kumar</h2>
      </div>
    </div>
  )
}

export default Footer