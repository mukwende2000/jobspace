import { Link, Outlet, useNavigate } from "react-router-dom";

// context
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider";

// components
import Backdrop from "../components/Backdrop";
import ListItem from "../components/ListItem";
import Popup from "../components/Popup"

// images
import logo from '../assets/images/logo.jpg'

// React Icons Library
import { FaBars, FaFacebook, FaHamburger, FaUser, FaWindowClose } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { useEffect, useState } from "react";

export default function Root() {
  const navigate = useNavigate()

  const usersDb = JSON.parse(localStorage.getItem("users"))
  const { menuIsOpen, isLoggedIn, popupIsOpen } = useStateProvider()
  const { dispatch } = useDispatchProvider()

 
  function handleClick() {
    dispatch({type: "logoutUser"})
    dispatch({type: 'setCurrentUser', payload: {currentUser: null}})
    navigate('/')
}
  function closeMenu() {
    dispatch({type: "closeMenu"})
  }
  function openMenu() {
    dispatch({type: "openMenu"})
  }

  return (
    <div className="bg-indigo-950 text-white">
      <Backdrop onBackDropClick={() => {
        closeMenu()
        dispatch({type: "closePopup"})
      }} isOpen={ menuIsOpen || popupIsOpen} />
      <header className="pt-5 px-20 flex justify-between items-center">
        <img onClick={() => navigate('/')} src={logo} alt="natchen logo" className="rounded-full h-11 w-12 -ml-10 mr-5" />
        <FaBars onClick={openMenu} />
        { popupIsOpen && <Popup isloggedIn={popupIsOpen} />}
        <nav className={`bg-blue-900 fixed ${menuIsOpen ? '-right-0' : '-right-60' } bottom-0 top-0 w-3/6 md:hidden`}>
            <ul className={''}>
               <button type="button"><FaWindowClose onClick={closeMenu} /></button>
                <ListItem closeMenu={closeMenu} to="/" name="Home" />
                <ListItem closeMenu={closeMenu} to="jobs" name="Jobs" />
                <ListItem closeMenu={closeMenu} to="about" name="about" />
                <ListItem closeMenu={closeMenu} to="people" name="people" />
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
      </header>
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
