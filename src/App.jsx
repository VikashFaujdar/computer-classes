import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


function App() {

  return (
    <ReactLenis root options={{
      lerp: 1,
      smooth: true,
      duration: 1.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      smoothWheel: true,
    }}>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </ReactLenis>
  )
}

export default App
