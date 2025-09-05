import student from '../../assets/student.png'
import expert from '../../assets/expert.png'
import course from '../../assets/course.png'
import circle from '../../assets/hero-circle.png'
import girl from '../../assets/girl.png'
import point from '../../assets/point.png'
import CountUp from 'react-countup';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'


const Section1 = () => {


  const CardsDts = [
    {
      img: student,
      end: 100,
      text: "Student learning"
    },
    {
      img: expert,
      end: 50,
      text: "Expert instructor"
    },
    {
      img: course,
      end: 150,
      text: "Course enrollment"
    }
  ]

  useGSAP(() => {

    const herotl = gsap.timeline();
    const splitTitle = new SplitText(".heroLeft h1", { type: "words" });

    herotl.from(".heroLeft", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
    gsap.from(".heroRight", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
    herotl.from(splitTitle.words, {
      y:50,
      opacity:0,
      duration:0.5,
      stagger:0.1,
      ease:"power2.out"
    })
    herotl.from(".heroLeft p", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    herotl.from(".form", {
      y:50,
      opacity:0,
      duration:0.5,
      ease:"power2.out"
    })
    herotl.from(".card", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    })
  });
  return (
    <div className="relative min-h-screen bg-[#FEFBEC] pb-30 md:pb-0 lg:pb-0">
      <div className="container flex h-full flex-col sm:items-start lg:items-center px-4 pt-10 md:flex-row md:pt-30">

        {/* Left Section */}
        <div className="md:w-1/2 heroLeft">
          <h1 className="md:py-5 text-center text-[50px] overflow-hidden  leading-none text-zinc-800 opacity-90 sm:text-[50px] md:text-start">
            Discover the <span className="text-green-500 ">path</span> to your <span className="text-green-500">dreams</span> with our <span className="text-green-500">courses.</span>
          </h1>
          <p className="py-5 paragraph text-center text-sm text-zinc-400 md:text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis minus magnam quod ab expedita aperiam deserunt ex sit deleniti iure aliquam odio, veniam sint dolores nobis iste aspernatur voluptatum recusandae!
          </p>

          {/* Form */}
          <div className="form my-5 flex w-full flex-col items-center justify-center gap-5 py-3 md:flex-row md:gap-0">
            <select
              name="Categories"
              className="w-[80%] rounded-2xl border border-zinc-300 bg-white px-5 py-2 text-zinc-500 outline-none md:rounded-br-none md:rounded-tr-none md:py-3"
            >
              <option>Categories</option>tgb54['/']
              <option>ADCA</option>
              <option>ADCA</option>
              <option>ADCA</option>
              <option>ADCA</option>
            </select>

            <select
              name="courses"
              className="w-[80%] rounded-2xl border border-zinc-300 bg-white px-5 py-2 text-zinc-500 outline-none md:rounded-none md:py-3"
            >
              <option>Courses</option>
              <option>ADCA</option>
              <option>ADCA</option>
              <option>ADCA</option>
              <option>ADCA</option>
            </select>

            <button className="w-[80%] cursor-pointer rounded-2xl border-2 border-[#4DC879] bg-[#4DC879] py-3 text-xs text-zinc-800 md:w-[48%] md:rounded-tl-none md:rounded-bl-none md:py-4 font-semibold md:font-normal">
              BOOK NOW
            </button>
          </div>

          {/* Cards */}
          <div className="card-container mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-3">
            {CardsDts.map((elem, i) => (
              <div
                key={i}
                className="card flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-2xl md:p-0 lg:p-5"
              >
                <img src={elem.img} alt="logo" className="w-[20%] md:w-[30%]" />
                <h1 className="text-xl">
                  <CountUp end={elem.end} duration={2} delay={4} className="text-xl" />
                </h1>
                <p className="text-sm text-zinc-500">{elem.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative heroRight mt-20 flex flex-col items-center md:mt-0 md:w-1/2 sm:mt-30">
          <div className="imgs-container relative flex h-full w-full items-start justify-end">
            <img src={circle} alt="circle" className="w-[95%]" />
            <img
              src={girl}
              alt="girl"
              className="absolute left-12 -top-11 h-full scale-105 sm:-top-20 sm:left-22 md:-top-13 md:left-14 lg:-top-18 lg:left-20"
            />
            <img src={point} alt="points" className="absolute right-8 -top-15 h-18" />
          </div>

          {/* Details */}
          <div className="dts absolute -bottom-22 flex w-[230px] flex-col gap-2 rounded-xl bg-zinc-50 shadow-xl px-3 py-3 md:bottom-0 md:right-5 lg:right-8">
            <h3 className="text-center">45k+ Students enrolled</h3>
            <div className="imgs-container relative flex justify-center items-center">
              <div className="img absolute left-0 top-0 h-10 w-10 rounded-full bg-zinc-400"></div>
              <div className="img absolute left-5 top-0 h-10 w-10 rounded-full bg-zinc-300"></div>
              <div className="img absolute left-10 top-0 h-10 w-10 rounded-full bg-zinc-200"></div>
              <div className="img relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-400">
                <FiPlus className="scale-125" />
              </div>
            </div>

            <h1 className="flex items-center gap-2 pl-4">
              4.6
              <div className="rating-stars flex flex-row">
                <FaStar className="text-[#F0AD4E]" />
                <FaStar className="text-[#F0AD4E]" />
                <FaStar className="text-[#F0AD4E]" />
                <FaStar className="text-[#F0AD4E]" />
                <FaStarHalfAlt className="text-[#F0AD4E]" />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section1