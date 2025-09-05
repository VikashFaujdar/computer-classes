import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Cursor = () => {

    useGSAP(()=>{
        window.addEventListener('mousemove', (dets)=>{
            gsap.to(".cursor", {
                top: dets.clientY,
                left: dets.clientX,
                duration: 1,
                ease: "power1.out"
            })
    })
})
  return (
    <div className='cursor hidden z-50 bg-zinc-700 blur-xl w-20 h-20 rounded-full lg:fixed lg:block mix-blend-color-burn'>

    </div>
  )
}

export default Cursor