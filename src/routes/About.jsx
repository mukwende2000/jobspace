import Member from '../components/Member'

import about1 from '../assets/images/about1.jpg'
import brie from '../assets/images/brie.jpg'
import lex from '../assets/images/lex.jpg'
import roy from '../assets/images/roy.jpg'
import emma from '../assets/images/emma.jpg'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function About() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = `Jobspace | ${pathname.slice(1)}`
  }, [])

  return (
    <>
      <article className="text-gray-500 md:px-16 lg:flex gap-10">
        <div className='md:w-[100%]'>
          <h1 className="text-black">About Jobspace</h1>
          <div>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam eius, cumque eaque iste amet deleniti repudiandae debitis consequatur, vel, non nulla autem sequi qui accusamus? Tempore pariatur deleniti voluptas quas porro incidunt id, doloremque quidem at fugiat neque soluta temporibus!
              </p>
              <ul>
                <li>Tempore pariatur deleniti voluptas</li>
                <li>Amet deleniti repudiandae debitis consequatu</li>
                <li>Lorem ipsum, dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Numquam eius, cumque eaque iste</li>
              </ul>
          </div>
        </div>
        <div>
          <img src={about1} alt="Chefs in the kitchen" />
        </div>
      </article>
      <div className='text-center'>
        <div>
            <h2 className='-mb-5 mt-10'>Our Team</h2>
           <p>Our team is made of professional members who always try to get the work done.</p>
        </div>
        <div className='md:flex justify-center gap-10'>
            <Member title="Founder" name="Lex Moyo" img={emma} />
            <Member title="Product Manager" name="Emmanuel Chisome" img={roy} />
            <Member title="Designer" name="Brie Chisomo" img={brie} />
            <Member title="Full Stack Developer" name="Lex Moyo" img={lex} />
        </div>
      </div>
    </>
  )
}
export default About