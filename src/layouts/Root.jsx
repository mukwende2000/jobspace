import { Link, Outlet } from "react-router-dom";

// components
import Backdrop from "../components/Backdrop";
import ListItem from "../components/ListItem";

// images
import logo from '../assets/images/logo.jpg'

// React Icons Library
import { FaBars, FaFacebook, FaHamburger, FaWindowClose } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { useState } from "react";

export default function Root() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className="bg-indigo-950 text-white">
      <Backdrop onToggleMenu={toggleMenu} menuIsOpen={ menuIsOpen} />
      <header className="pt-5 px-20 flex justify-between items-center">
        <img src={logo} alt="natchen logo" className="rounded-full h-11 w-12 -ml-10 mr-5" />
        <FaBars onClick={toggleMenu} />
        <nav className={`bg-blue-900 fixed ${menuIsOpen ? '-right-0' : '-right-60' } bottom-0 top-0 w-3/6`}>
            <ul className={''}>
               <button type="button"><FaWindowClose onClick={toggleMenu} /></button>
                <ListItem toggleMenu={toggleMenu} to="/" name="Home" />
                <ListItem toggleMenu={toggleMenu} to="jobs" name="Jobs" />
                <ListItem toggleMenu={toggleMenu} to="about" name="about" />
                <ListItem toggleMenu={toggleMenu} to="people" name="people" />
            </ul>
            <ul className="flex items-center bg-red-9000">
                <button className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">Login</button>
                <ListItem to="signup" name="Sign Up" />
            </ul>
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
