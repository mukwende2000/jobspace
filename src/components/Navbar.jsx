import { FaUser, FaWindowClose } from 'react-icons/fa'
import ListItem from './ListItem';

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
    <nav className={`bg-blue-900 fixed ${menuIsOpen ? '-right-0' : '-right-60' } bottom-0 top-0 w-3/6 md:hidden`}>
        <ul className={''}>
           <button type="button"><FaWindowClose onClick={closeMenu} className="cursor-pointer text-2xl"/></button>
            <ListItem closeMenu={closeMenu} to="/" name="Home" />
            <ListItem closeMenu={closeMenu} to="jobs" name="Jobs" />
            <ListItem closeMenu={closeMenu} to="about" name="about" />
        </ul>
        {isLoggedIn ?
         <ul className="flex items-center bg-red-9000">
            <li>
              <Link onClick={() => dispatch({type: "closeMenu"})} to={"profile"} className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">
                <FaUser />
              </Link></li>
            <li className="ml-3" >
              <button onClick={handleClick} className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">
                logout
              </button>
            </li>
        </ul>
         
        : <ul className="flex items-center bg-red-9000">
            <li><button onClick={() => {
              dispatch({type: "openPopup"})
              closeMenu()
            } } className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">Login</button></li>
            <ListItem closeMenu={closeMenu} to="signup" name="Sign Up" />
        </ul>}
    </nav>
  )
}
export default Navbar
