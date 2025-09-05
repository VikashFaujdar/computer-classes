import CourseCard from '../../components/CourseCard.jsx'
import Dev from '../../assets/dev-course.jpg'
import kevin from '../../assets/kevin.png'
import { MdPlayCircleOutline } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";

const Section3 = () => {

  return (
    <div className='section3 py-5'>
      <div className="container flex flex-col px-4 h-full md:flex md:flex-col">
        <h3 className='text-[#4DC879] text-center text-xl md:text-2xl py-2 font-medium'>Courses</h3>
        <h1 className='text-center text-3xl pb-2 md:text-5xl font-medium'>Our popular <span className='text-[#4DC879]'>courses</span></h1>
        <p className='text-center text-zinc-500 md:py-2 self-center md:w-1/2 md:text-[14px] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum illo ex,  ea accusantium.</p>
        <div className="cards hidden lg:block w-full overflow-x-hidden ">
          <CourseCard />
        </div>
        <div className="cards lg:hidden grid grid-col sm:grid-cols-2 md:grid-cols-3 h-full w-full mt-10 gap-5">
          <div className="glass relative w-full h-[500px] bg-gradient-to-b from-white/20 to-transparent shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)]">
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h3 className='text-sm '>4.6</h3>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h3 className='mt-5 text-sm'>Full stack web development with react and node.js</h3>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='md:text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50 text-sm'>
                View Course
              </button>
            </div>
            <div className="time-duration w-full flex justify-between items-center mt-5">
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

          <div className="glass relative w-full h-[500px] bg-gradient-to-b from-white/20 to-transparent shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)]">
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h3 className='text-sm '>4.6</h3>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h3 className='mt-5 text-sm'>Full stack web development with react and node.js</h3>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='md:text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50 text-sm'>
                View Course
              </button>
            </div>
            <div className="time-duration w-full flex justify-between items-center mt-5">
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

          <div className="glass relative w-full h-[500px] bg-gradient-to-b from-white/20 to-transparent shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center transition-all duration-500 rounded-[10px] m-0 p-5 backdrop-blur-[10px] border border-green-300 hover:border-[1px_solid_rgba(255,255,255,0.1)]">
            <img src={Dev} alt="dev-image" className='rounded-lg' />
            <div className="flex w-full items-center justify-between mt-3">
              <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Development</h3>
              <div className="rating flex items-center">
                <h3 className='text-sm '>4.6</h3>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <h3 className='mt-5 text-sm'>Full stack web development with react and node.js</h3>
            <div className="user flex items-center justify-between my-4">
              <div className="user flex items-center gap-2 w-1/2">
                <img src={kevin} alt="kevin" className='w-[30%]' />
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
              </div>
              <button className='md:text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50 text-sm'>
                View Course
              </button>
            </div>
            <div className="time-duration w-full flex justify-between items-center mt-5">
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

export default Section3