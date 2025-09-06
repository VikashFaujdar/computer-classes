import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Logo from '../assets/Logo-3.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const [showmenu, setShowmenu] = useState(true);

  const menu = () => {
    setShowmenu(!showmenu);
    console.log(showmenu);

  }

  useGSAP(() => {
    const headerTl = gsap.timeline();
    headerTl.from(".logo", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    headerTl.from(".Nav", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    });
  });

  return (
    <div className="header sticky top-0 left-0 right-0 z-40 w-full h-full bg-[#FEFBEC] ">
      <div className='container w-full px-4 lg:px-0 flex items-center justify-between h-18 '>
        <div className="logo w-40 md:w-50 object-center" >
          <img src={Logo} alt="" />
        </div>

        <nav className='Nav lg:flex items-center space-x-15 hidden'>
        
          <Link to='' className='active:text-[#4DC879] links transition-all hover:text-[#4DC879] duration-300 text-[15px]'>Home</Link>
          <Link to='' className='active:text-[#4DC879] links transition-all hover:text-[#4DC879] duration-300 text-[15px]'>About Us</Link>
          <Link to='' className='active:text-[#4DC879] links transition-all hover:text-[#4DC879] duration-300 text-[15px]'>Mentors</Link>
          <Link to='' className='active:text-[#4DC879] links transition-all hover:text-[#4DC879] duration-300 text-[15px]'>Courses</Link>
        </nav>

        <div className="btnsContainer hidden sm:flex lg:flex-row-reverse lg:gap-12 space-x-10 items-center">
          <RiMenu3Line className='size-10 font-bold text-[#4DC879] transition-all hover:text-orange-300 cursor-pointer' />
          <button className='py-3 rounded-2xl px-6 border-1 border-zinc-500 text-zinc-500 transition-all hover:bg-[#4DC879] hover:border-[#4DC879] hover:text-zinc-50'>
            <Link to='/contact'>Register Now</Link>
          </button>
        </div>


        <div className="mob-menu sm:hidden">
          <IoMdMenu onClick={menu} className='size-9 text-orange-400' />

        </div>
      </div>

      <nav className={showmenu == true ? ' fixed top-18  -left-[120%] transition-all duration-500 w-full h-screen  z-50' : 'md:hidden items-start pl-5 pt-4 transition-all duration-500 text-xs font-normal space-y-5 fixed left-0 top-18   flex z-50 flex-col bg-[#FEFBEC] h-screen w-[400px]'}>
        <Link to=''>Home</Link>
        <Link to=''>About Us</Link>
        <Link to=''>Mentors</Link>
        <Link to=''>Courses</Link>
      </nav>
    </div>
  )
}

export default Header