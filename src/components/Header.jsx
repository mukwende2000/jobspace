import { useDispatchProvider } from '../Contexts/ContextProvider';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import Navbar from './Navbar';
import Button from './Button';
import logo from '../assets/images/logo.jpg'



function Header() {
    const { pathname } = useLocation()
    const { dispatch } = useDispatchProvider()
    
  return (
    <header className={`${location.pathname === '/' ? 'mb-60' : 'mb-10'} h-1/8 px-10 text-white items-center bg-[url('./assets/images/hero.jpg')]  bg-no-repeat bg-cover bg-center`}>
        <div className='flex justify-between items-center p-5'>
            <Link to="/"><img src={logo} alt="Jobspace logo" className="rounded-full h-11 w-12 -ml-10 mr-5" /></Link>
            <Navbar />
            <FaBars onClick={() => dispatch({type: "openMenu"})} className="cursor-pointer text-2xl md:hidden" />
        </div>
        <div className="hero flex flex-col items-center mt-20 mb-20">
            <h1 className='capitalize m-0 p-0 text-5xl'>Find Your Next Job</h1>
            <p className='m-0 text-xl'>More than 1, 523 jobs listed here</p>
            <p>{pathname === '/' ? "HOME" : pathname.slice(1).toUpperCase()}</p>
        </div>
        { pathname === '/' && 
        <form className='bg-white py-10 px-8 w-11/12 flex flex-wrap md:flex-row gap-4 items-center shadow-md shadow-black/20' >
            <input type="text" placeholder='e.g web design' className='border border-gray-300 focus:outline-none w-full lg:w-2/15 md:w-5/12 h-10 block' />
            <input type="text" placeholder='Location' className='border border-gray-300 focus:outline-none w-full md:w-5/12 lg:w-2/15 h-10 my-2 block' />
            <select name="category" className='border border-gray-300 focus:outline-none w-full md:w-5/12 lg:w-2/15 h-10 block mb-4 lg:mt-4 lg:h-11'>
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
