import { Link, Outlet } from "react-router-dom";
import ListItem from "../components/ListItem";
import logo from '../assets/images/logo.jpg'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export default function Root() {
  return (
    <div className="bg-indigo-950 text-white">
      <header className="pt-5 px-24">
        <nav className="flex justify-between">
            <ul className="flex items-center">
                <img src={logo} alt="natchen logo" className="rounded-full h-11 w-12 -ml-10 mr-5" />
                <ListItem to="/" name="Home" />
                <ListItem to="jobs" name="Jobs" />
                <ListItem to="about" name="about" />
                <ListItem to="people" name="people" />
            </ul>
            <ul className="flex items-center bg-red-9000">
                <button className="p-1 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">Login</button>
                <ListItem to="signup" name="Sign Up" />
            </ul>
        </nav>
      </header>
      <main className="px-24">
        <Outlet />
      </main>
      <footer className="flex justify-between px-24 py-5 bg-black items-center">
        <img src={logo} alt="logo" className="w-12 h-11 rounded-full" />
        <ul className="flex items-center">
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
