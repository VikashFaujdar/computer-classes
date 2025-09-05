import styled from 'styled-components';
import Dev from '../assets/dev-course.jpg'
import kevin from '../assets/kevin.png'
import { MdPlayCircleOutline } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import business from '../assets/business-course.jpg';
import marketing from '../assets/marketing-course.jpg';

const CourseCard = () => {
  return (
    <StyledWrapper>
      <div className="container overflow-hidden h-full py-20">
        <div style={{ '--r': -15 }} className="glass border-1 bg-zinc-300 border-green-300 hover:border-[1px solid rgba(255, 255, 255, 0.1)] transition-all duration-200">
          <img src={Dev} alt="dev-image" className='rounded-lg'/>
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
                <img src={kevin} alt="kevin" className='w-[30%]'/>
                <h4 className='text-sm text-zinc-500'>Kevin Murray</h4>
            </div>
          <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
            View Course
          </button>
          </div>
          <div className="time-duration flex justify-between items-center mt-5">
            <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8'/>
                <h1 className='text-sm'>10 Lessons</h1>
            </div>
            <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8'/>
                <h1 className='text-sm'>2 Months</h1>
            </div>
          </div>
        </div>

        <div style={{ '--r': 5 }} className="glass border-1 bg-zinc-300 border-green-300 hover:border-[1px solid rgba(255, 255, 255, 0.1)]  transition-all duration-200">
            <img src={business} alt="dev-image" className='rounded-lg'/>
          <div className="flex w-full items-center justify-between mt-3">
            <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>business</h3>
            <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <h1 className='mt-5 text-sm'>Entrepreneurship 101: launching and scaling your startup</h1>
          <div className="user flex items-center justify-between my-4">
            <div className="user flex items-center gap-2 w-1/2">
                <img src={kevin} alt="kevin" className='w-[30%]'/>
                <h4 className='text-sm text-zinc-500'>Nancy Munoz</h4>
            </div>
          <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
            View Course
          </button>
          </div>
          <div className="time-duration flex justify-between items-center mt-5">
            <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8'/>
                <h1 className='text-sm'>10 Lessons</h1>
            </div>
            <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8'/>
                <h1 className='text-sm'>2 Months</h1>
            </div>
          </div>
        </div>

        <div style={{ '--r': 25 }} className="glass border-1 bg-zinc-300 border-green-300 hover:border-[1px solid rgba(255, 255, 255, 0.1) ] transition-all duration-200">
            <img src={marketing} alt="dev-image" className='rounded-lg'/>
          <div className="flex w-full items-center justify-between mt-3">
            <h3 className='bg-gray-200 rounded-2xl px-3 text-zinc-500 text-sm'>Marketing</h3>
            <div className="rating flex items-center">
                <h1 className='text-sm '>4.6</h1>
                <span className='text-xs'>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <h1 className='mt-5 text-sm'>Digital marketing mastery: strategies for online success</h1>
          <div className=" flex items-center justify-between my-4">
            <div className=" flex items-center gap-2 w-1/2">
                <img src={kevin} alt="kevin" className='w-[30%]'/>
                <h4 className='text-sm text-zinc-500'>Jonathan John</h4>
            </div>
          <button className='text-md border-1 border-zinc-500 py-2 px-3 rounded-2xl hover:bg-green-400 transition-all duration-200 hover:border-green-400 hover:text-zinc-50'>
            View Course
          </button>
          </div>
          <div className="time-duration flex justify-between items-center mt-5">
            <div className="left flex items-center gap-4">
                <MdPlayCircleOutline className='bg-amber-600 rounded-full size-8'/>
                <h1 className='text-sm'>10 Lessons</h1>
            </div>
            <div className="right duration flex items-center gap-2">
                <HiOutlineClock className=' size-8'/>
                <h1 className='text-sm'>2 Months</h1>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 30%;
    height: 50%;
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    padding: 20px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }
  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }
`;

export default CourseCard;