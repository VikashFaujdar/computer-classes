import React from 'react'
import CtaAnimation from '../../components/CtaAnimation'

const Cta = () => {
  return (
    <div className='relative w-[90%] rounded-md my-10 flex flex-col justify-center items-center text-center mx-auto py-20 bg-transparent overflow-hidden'>
        <CtaAnimation />
        <div className="container bg-transparent relative  flex flex-col justify-center items-center">
        <h1 className='md:text-2xl md:w-[68%] text-white my-3 text-center'>So why wait? start one of our 2,000 high quality courses from the best world’s leading experts today</h1>
        <button className='my-3 font-extralight bg-white py-3 px-5 rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer md:text-xl text-sm'>Start Learning Now</button>
        </div>
    </div>
  )
}

export default Cta