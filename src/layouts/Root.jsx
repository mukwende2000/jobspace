import {Outlet } from "react-router-dom";

// context
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider";

// components
import Backdrop from "../components/Backdrop";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

// images
import logo from '../assets/images/logo.jpg'

// React Icons Library
import { FaTwitter, FaLinkedin,  FaFacebook } from 'react-icons/fa'

export default function Root() {

  const { menuIsOpen, isLoggedIn, popupIsOpen } = useStateProvider()
  const { dispatch } = useDispatchProvider()

  return (
    <div className="bg-indigo-950 text-white">
      <Backdrop onBackDropClick={() => {
        dispatch({type: "closeMenu"})
        dispatch({type: "closePopup"})
      }} isOpen={ menuIsOpen || popupIsOpen} />
      <Header />
      <main className="px-5">
        <Outlet />
      </main>
      <footer className="bg-black flex flex-col items-center md:flex-row md:justify-between md:px-24 md:py-5 md:items-center">
        <img src={logo} alt="logo" className="w-12 h-11 rounded-full" />
        <ul className="flex flex-wrap flex-col md:flex-row items-center">
          <ListItem name="About us" />
          <ListItem name="Contact us" />
          <ListItem name="Terms of use" />
          <ListItem name="Privacy Policy" />
          <ListItem name="Other Services" />
        </ul>
        <ul className="flex justify-between">
          <ListItem name={<FaFacebook className=" text-2xl" />} />
          <ListItem name={<FaTwitter className="text-2xl" />} />
          <ListItem name={<FaLinkedin className="text-2xl" />} />
        </ul>
      </footer>
    </div>
  )
}
