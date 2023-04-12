import { Outlet } from "react-router-dom";
import ListItem from "../components/ListItem";

export default function Root() {
  return (
    <div>
        <nav>
            <ul className="flex">
                <ListItem to="/" name="Home" />
                <ListItem to="jobs" name="Jobs" />
                <ListItem to="about" name="about" />
                <ListItem to="people" name="people" />
                <ListItem to="signup" name="Sign Up" />
            </ul>
        </nav>
        <Outlet />
        <h1>Footer</h1>
    </div>
  )
}
