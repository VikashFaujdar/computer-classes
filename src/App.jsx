import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Contact from "./Pages/Contact/Contact"


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
