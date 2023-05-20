import { NavLink } from "react-router-dom"

export default function ListItem({closeMenu, to, name, footer}) {
  return <li 
  className={`${footer ? 'font-light' : 'border-b border-solid border-b-gray-500 md:border-none cursor-pointer group'}`} onClick={closeMenu} >
    <NavLink to={to} className={`${footer ? 'font-extralight text-sm' : 'font-bold'} my-1 text-zinc-500 w-full block group-hover:text-pink-500 hover:text-pink-500 transition-all md:text-white`}>
      { name }
    </NavLink>
  </li>
}
