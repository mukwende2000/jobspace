import { NavLink } from "react-router-dom"

export default function ListItem({ to, name }) {
  return <li className="m-2"><NavLink to={to}>{ name }</NavLink></li>
}
