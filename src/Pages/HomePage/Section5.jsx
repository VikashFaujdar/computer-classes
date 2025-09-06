import Circle from '../../assets/sec-5Circle.png'
import girl from '../../assets/girl-2.png'
import vc1 from '../../assets/vc.png'
import vc2 from '../../assets/vc-1.png'
import point from '../../assets/point.png'
import icon from '../../assets/icon.png'
import cyber from '../../assets/cyber.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Section5 = () => {

    useGSAP(()=>{

        const featureTl = gsap.timeline({
            scrollTrigger:{
                trigger: ".feature",
                start: "top 50%",
                markers:true,
        }})

        featureTl.from(".feature .left", {
            x:-100,
            opacity:0,
            duration:1
        })

        featureTl.from(".feature .right", {
            x:100,
            opacity:0,
            duration:1
        })
    })

  return (
    <div className='section-5 feature bg-[#FEFBEC]'>
        <div className="container lg:flex justify-between gap-10 items-center px-4 py-10">
            <div className="left relative flex justify-start w-full  lg:w-1/2 h-full py-4">
                <img src={Circle} alt="circle" className='scale-75'/>
                <img src={girl} alt="girl" className='absolute z-10 scale-75'/>
                <img src={vc1} alt="vc" className='absolute z-10 h-28 sm:h-35 sm:top-10 sm:right-5 lg:h-40 top-5 right-0'/>
                <img src={vc2} alt="vc" className='absolute z-10 h-28 sm:h-35 sm:bottom-10 md:bottom-0 md:left-0 sm:left-5 lg:h-40 bottom-0 left-0'/>
                <img src={point} alt="point" className='absolute z-10 size-15 md:size-20 bottom-5 right-5 md:bottom-20'/>
                <img src={icon} alt="icon" className='absolute z-10 size-25 md:size-35 top-0 left-0'/>
            </div>
            <div className="right lg:w-1/2 h-full">
            <h3 className='text-green-400 text-xl my-2 md:text-2xl'>Features</h3>
            <h1 className='text-[32px] leading-9 text-zinc-700 my-2 md:text-5xl md:leading-[1] font-medium'>Elevate  your skills <span className='text-green-400'>with</span> expert <span className='text-green-400'>coaching courses</span></h1>
            <p className='text-sm text-zinc-600 my-2 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.fdjhd jHUY87rey  Quisquam, sequi facilis!</p>
            <div className="card flex items-center gap-4 w-full h-full bg-white p-4 rounded-2xl shadow-2xl mt-5">
                <img src={cyber} alt="cyber" className='h-15'/>
                <div className="dts">
                    <h1 className='text-zinc-800 my-2 text-sm font-medium'>3500+ fresh & in demand courses</h1>
                    <p className='text-zinc-600 text-xs my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                </div>
            </div>
            <div className="card flex items-center gap-4 w-full h-full bg-white p-4 rounded-2xl shadow-2xl mt-5">
                <img src={cyber} alt="cyber" className='h-15'/>
                <div className="dts">
                    <h1 className='text-zinc-800 my-2'>3500+ fresh & in demand courses</h1>
                    <p className='text-zinc-600 text-xs my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                </div>
            </div>
            <button className='hover:bg-green-400 mx-auto flex md:mx-0 md:block bg-zinc-800 text-white py-4 px-8 rounded-2xl mt-10 text-sm transition-all duration-200'>Register Now</button>
            </div>
        </div>
    </div>
  )
}

export default Section5