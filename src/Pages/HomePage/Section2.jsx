import design from '../../assets/design.png'
import development from '../../assets/development.png'
import business from '../../assets/business.png'
import programming from '../../assets/programming.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

const Section2 = () => {

    useGSAP(() => {

        const cateTitle = SplitText.create(".category h3", {
            type: "chars"
        })
        
        const cateHeading = SplitText.create(".category h1 span", {
            type: "chars"
        })

        const catePara = SplitText.create(".category p", {
            type: "chars"
        })
        
        const categorytl = gsap.timeline({
            scrollTrigger: {
                trigger: ".category",
                start: "top bottom",
                end: "center center",
                scrub: true,
            }
        });
        gsap.from(cateTitle.chars,{
            y: 50,
            stagger: 0.2,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".category",
            }
        })
        categorytl.from(cateHeading.chars, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
        })

        gsap.from(".category h1", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".category",
            }
        })

        categorytl.from(catePara.chars, {
            y: 50,
            opacity: 0,
            duration: 0.2,
            stagger: 0.1,
        })

        categorytl.from(".category-card", {
            y: 50,
            opacity: 0,
            duration: 3,
            stagger: 2,
            ease: "power2.out"
        });
    });

    const cards = [
        {
            image: design,
            title: "Design",
            description: "Lorem ipsum dolor sit amet, dolores magnam excepturi repellendus aut totam iure maiores sapiente impedit."
        },
        {
            image: development,
            title: "Development",
            description: "Lorem ipsum dolor sit amet, dolores magnam excepturi repellendus aut totam iure maiores sapiente impedit."
        },
        {
            image: business,
            title: "Business",
            description: "Lorem ipsum dolor sit amet, dolores magnam excepturi repellendus aut totam iure maiores sapiente impedit."
        },
        {
            image: programming,
            title: "Programming",
            description: "Lorem ipsum dolor sit amet, dolores magnam excepturi repellendus aut totam iure maiores sapiente impedit."
        }
    ]

  return (
    <div className='relative category bg-transparent section2 md:my-5 my-10'>

        <div className="container h-full px-4 md:flex md:flex-col relative z-30">
            <h3 className='text-[#4DC879] text-center text-xl py-2 md:text-2xl md:py-4'>Categories</h3>
            <h1 className='text-center text-3xl pb-2 md:text-5xl font-medium'>Top <span className='text-[#4DC879]'>Categories</span></h1>
            <p className='text-center text-zinc-500 text-xs py-2 md:w-1/2 self-center md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum blanditiis harum laborum odio sapiente ipsum hic! Delectus commodi, rerum illo ex,  ea accusantium.</p>
            <div className="card-container grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:my-4 my-3">

                {cards.map((card, index) => (
                    <div className="category-card flex flex-col gap-2 p-4 bg-zinc-100 h-full w-full justify-start items-start rounded-xl" key={index}>
                        <img src={card.image} alt={card.title} className='w-[15%] md:w-[20%] my-2'/>
                        <h2 className='text-md'>{card.title}</h2>
                        <h4 className='text-sm text-zinc-500'>{card.description}</h4>
                        <button className="text-red-400 text-xs ">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Section2