import React from 'react'
import { MdPlayCircleOutline } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import Dev from '../../assets/dev-course.jpg'
import Kevin from '../../assets/kevin.png'


const Section6 = () => {
  return (
    <div className='section6 bg-[#EAF0FF] py-15'>
      <div className="container flex items-center flex-col px-4">
        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between md:items-end">
          <div className="dts">
            <h1 className='text-center text-3xl md:text-start md:text-[2.5vw] font-medium'>Find your <span className='text-green-400'>courses</span></h1>
            <p className='text-center my-4 text-xs text-zinc-500 md:w-[60%] md:text-start'>Lorem ipsum dolor, sit amet dafghjadg afhdsgjhfga fhadsjhfk fadsjhf consectetur adipisicing elit.o illo omnis facere numquam culpa.</p>
          </div>
          <button className='bg-transparent py-3 text-zinc-600 text-sm border-1 px-5 rounded-2xl my-3 self-center hover:bg-green-500 hover:text-white hover:border-green-300 transition-all duration-200 cursor-pointer md:text-2sm'>See All Courses</button>
        </div>
        <div className="cards-container mt-10 md:mt-20 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>

          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>

          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>

          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>

          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>

          <div className="relative lg:mb-5 sm:mb-10 mb-8 w-full h-[500px] bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)] ">
            <div className="absolute -top-10 right-5 price h-22 w-22 rounded-full bg-red-700 flex items-center justify-center text-white">
              <h1 className="text-3xl">$35</h1>
            </div>
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h1 className='mt-5 text-sm'>Full stack web development with react and node.js</h1>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={Kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
                View Course
              </button>
            </div>
            <div className="time-duration flex justify-between w-full items-center mt-5">
              <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8' />
                <h1 className='text-sm'>10 Lessons</h1>
              </div>
              <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8' />
                <h1 className='text-sm'>2 Months</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section6