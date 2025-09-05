import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App
