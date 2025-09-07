import React from 'react'
import Accordion from '../../components/Accordion'

const Faq= () => {
  return (
    <div className="bg-[url('././assets/background.jpg')] min-h-screen h-full w-full bg-fixed py-10 bg-center bg-cover flex flex-col justify-center items-center">
        <div className="container md:flex md:items-center justify-end px-4">
            <Accordion/>
        </div>
    </div>
  )
}

export default  Faq