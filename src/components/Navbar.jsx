import { FaUser, FaWindowClose } from 'react-icons/fa'
import ListItem from './ListItem';

import { Link } from 'react-router-dom';

import useStateProvider from '../Contexts/ContextProvider';
import { useDispatchProvider } from '../Contexts/ContextProvider';


function Navbar() {
  const { menuIsOpen, isLoggedIn } = useStateProvider()
  const { dispatch } = useDispatchProvider()

  function handleClick() {
    dispatch({type: "logoutUser"})
    dispatch({type: 'setCurrentUser', payload: {currentUser: null}})
    localStorage.setItem('newUser', JSON.stringify(null))
    navigate('/')
  }
  function closeMenu() {
    dispatch({type: "closeMenu"})
  }

  return (
    <nav className={`bg-white fixed md:static md:bg-transparent ${menuIsOpen ? 'right-0' : '-right-full' } duration-500 transition-all bottom-0 top-0 w-2/3 md:flex flex-row-reverse justify-between items-center`}>
        {isLoggedIn ?
         <ul className="flex items-center bg-red-9000">
            <li>
              <Link onClick={() => dispatch({type: "closeMenu"})} to={"profile"} className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">
                <FaUser />
              </Link>
            </li>
            <li className="ml-3" >
              <button onClick={handleClick} className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">
                logout
              </button>
            </li>
        </ul>
         
        : <ul className="flex items-center mt-10 md:mt-0">
            <li>
                <button onClick={() => {
                dispatch({type: "openPopup"})
                closeMenu()
              }} className="p-1 cursor-pointer transition-all duration-500 text-sm uppercase bg-gray-500 md:bg-transparent text-white px-8 py-3 mr-3 hover:bg-sky-500">Login</button>
            </li>
            <li className='bg-gray-500 md:bg-transparent text-white px-6 py-3 hover:bg-sky-500 cursor-pointer'>
                <Link className='text-white uppercase' closeMenu={closeMenu} to="signup">Sign Up</Link>
            </li>
        </ul>}
        <ul className={'md:flex gap-5'}>
           <button className='absolute -left-16 top-10 w-10 h-10' type="button">
             <FaWindowClose onClick={closeMenu} className="cursor-pointer text-white text-5xl md:hidden"/>
           </button>
            <ListItem closeMenu={closeMenu} to="/" name="Home" />
            <ListItem closeMenu={closeMenu} to="jobs" name="Jobs" />
            <ListItem closeMenu={closeMenu} to="about" name="About" />
        </ul>
    </nav>
  )
}
export default Navbar
