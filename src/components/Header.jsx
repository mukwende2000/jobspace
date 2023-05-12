import { FaBars } from 'react-icons/fa'
import Popup from "../components/Popup"
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.jpg'

import Navbar from './Navbar';

import useStateProvider from '../Contexts/ContextProvider';
import { useDispatchProvider } from '../Contexts/ContextProvider';

function Header() {

    const { popupIsOpen, menuIsOpen, isLoggedIn } = useStateProvider()
    const { dispatch } = useDispatchProvider()
    function openMenu() {
        dispatch({type: "openMenu"})
      }
    


  return (
    <header className="pt-5 px-20 flex justify-between items-center">
    <img onClick={() => navigate('/')} src={logo} alt="natchen logo" className="rounded-full h-11 w-12 -ml-10 mr-5" />
    <FaBars onClick={openMenu} className="cursor-pointer text-2xl" />
    { popupIsOpen && <Popup isloggedIn={popupIsOpen} />}
    <Navbar />
  </header>
  )
}
export default Header
