import { NavLink } from "react-router-dom"

export default function ListItem({toggleMenu, to, name}) {
  return <li className="ml-4" onClick={toggleMenu} ><NavLink to={to} className={`text-white text-sm uppercase hover:text-pink-500 transition-all`}>{ name }</NavLink></li>
}
