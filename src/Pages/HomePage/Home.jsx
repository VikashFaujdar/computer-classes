import Cta from './Cta.jsx'
import Faq from './Faq.jsx'
import Section1 from './Section1'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section5 from './Section5.jsx'
import Section6 from './Section6.jsx'
import Section7 from './Section7.jsx'

const Home = () => {
  return (
    <div className='relative z-20 bg-transparent'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Cta/>
      <Faq/>
      </div>
  )
}

export default Home