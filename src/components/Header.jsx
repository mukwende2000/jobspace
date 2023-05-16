import { FaBars } from 'react-icons/fa'
import logo from '../assets/images/logo.jpg'
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';

import { useDispatchProvider } from '../Contexts/ContextProvider';
import Button from './Button';
import { useEffect } from 'react';

function Header() {
    const location = useLocation()
    const { dispatch } = useDispatchProvider()

    let h1 
    let p = location.pathname === '/' ? 'More than 1,523 jobs listed here' : location.pathname.slice(1)
    if(location.pathname === '/') {
        h1 = 'Find your next job'
    } else if(location.pathname === '/about') {
        h1 = 'About us'
    } else if(location.pathname === '/jobs') {
        h1 = 'Jobs'
    }
    function openMenu() {
        dispatch({type: "openMenu"})
      }
    
  return (
    <header className={`mb-60 h-1/8 px-10 text-white items-center bg-[url('./assets/images/hero.jpg')]  bg-no-repeat bg-cover bg-center`}>
        <div className='flex justify-between items-center p-5'>
            <img onClick={() => navigate('/')} src={logo} alt="natchen logo" className="rounded-full h-11 w-12 -ml-10 mr-5" />
            <Navbar />
            <FaBars onClick={openMenu} className="cursor-pointer text-2xl md:hidden" />
        </div>
        <div className="hero flex flex-col items-center mt-20 mb-20">
            <h1 className='capitalize m-0 p-0 text-5xl'>{ h1 }</h1>
            <p className='m-0 text-xl'>{ p }</p>
        </div>
        { location.pathname === '/' && <form className='bg-white py-16 px-8 mt-5 w-11/12 flex flex-wrap md:flex-row gap-4 items-center shadow-md shadow-black/20' >
            <input type="text" placeholder='e.g web design' className='border border-gray-300 focus:outline-none w-full lg:w-2/15 md:w-5/12 h-10 block' />
            <input type="text" placeholder='Location' className='border border-gray-300 focus:outline-none w-full md:w-5/12 lg:w-2/15 h-10 my-4 block' />
            <select name="" id="" className='border border-gray-300 focus:outline-none w-full md:w-5/12 lg:w-2/15 h-10 block mb-4 lg:mt-4 lg:h-11'>
                <option value="1">Any Category</option>
                <option value="2">Web designer</option>
                <option value="3">Web developer</option>
                <option value="4">Graphic designer</option>
                <option value="5">UX/UI designer</option>
            </select>
            <Button text='Search' width={'full'} mwidth={'5/12'} lwidth={'2/15'} />
        </form>}
  </header>
  )
}
export default Header
