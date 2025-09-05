import React from 'react'
import girl from '../../assets/girl.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Slider = () => {

    useGSAP(()=>{
        const slideTl = gsap.timeline({
            scrollTrigger:{
                trigger: ".imgSlider",
                pin: true,
                scrub: 1,
                start: "top 8%",
                snap: 1 / 3,
                end: "+=3000"
            }
        })
        slideTl.to(".imgSlider", {x: "-250vw", ease: "none"})
    })

  return (
    <div className='flex imgSlider flex-nowrap gap-10 overflow-hidden w-[400vw] bg-yellow-300 py-20 h-screen'>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>
        <div className="img-container flex justify-center items-center h-200 w-200 rounded-full overflow-hidden bg-zinc-50">
            <img src={girl} alt="Girl" className='h-full w-full object-contain'/>
        </div>

    </div>
  )
}

export default Slider