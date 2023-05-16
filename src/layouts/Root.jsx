import {Outlet } from "react-router-dom";

// context
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider";

// components
import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";


// images
import logo from '../assets/images/logo.jpg'

// React Icons Library
import { FaTwitter, FaLinkedin,  FaFacebook } from 'react-icons/fa'

export default function Root() {

  const { menuIsOpen, isLoggedIn, popupIsOpen } = useStateProvider()
  const { dispatch } = useDispatchProvider()

  return (
    <div className="">
      { popupIsOpen && <Popup isloggedIn={popupIsOpen} />}
      <Backdrop onBackDropClick={() => {
        dispatch({type: "closeMenu"})
        dispatch({type: "closePopup"})
      }} isOpen={ menuIsOpen || popupIsOpen} />
      <Header />
      <main className="px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
