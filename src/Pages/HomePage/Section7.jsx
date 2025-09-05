import React from 'react'
import teacher1 from '../../assets/teacher-1.png'
import teacher2 from '../../assets/teacher-2.png'
import teacher3 from '../../assets/teacher-3.png'
import teacher4 from '../../assets/teacher-4.png'

const Section7 = () => {

    const faculty = [
        {
            name: 'Debra Stevens', role: 'Instructor', img: teacher1
        },
        {
            name: 'Gloria Burton', role: 'Instructor', img: teacher2
        },
        {
            name: 'Peter Webb', role: 'Instructor', img: teacher3
        },
        {
            name: 'Victoria Flores', role: 'Instructor', img: teacher4
        },
    ]

    return (
        <div className='h-full md:py-10 mt-10'>
            <div className="container px-4">
                <h3 className='text-xl text-center text-green-400 mb-4 font-medium'>Our team</h3>
                <h1 className='text-3xl text-center md:text-5xl font-medium'>Our <span className='text-green-400'>instructors</span></h1>
                <p className='text-center mt-5 text-xs text-zinc-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio voluptas omnis voluptatum numquam culpa doloremque odit placeat ab at? Amet veniam rerum suscipit magnam repellat, deleniti nesciunt est esse.</p>

                <div className="card-container grid grid-cols md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">

                    {faculty.map((item, index) => {
                        return (
                            <div key={index} className=" card bg-[#FFF9EB] h-full w-full flex flex-col items-center rounded-3xl p-5">
                        <img src={item.img} alt="" />
                        <div className="dts w-full bg-white my-3 text-black px-5 rounded-xl py-3 flex flex-col items-center">
                            <h3 className='text-lg text-zinc-500 text-center mb-2'>{item.name}</h3>
                            <hr className='w-[70%] text-zinc-500' />
                            <p className='text-sm text-zinc-500 text-center mt-3'>{item.role}</p>
                        </div>
                    </div>
                        )
                    }    
                    )}
                </div>
            </div>
        </div>
    )
}

export default Section7