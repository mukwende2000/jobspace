import { Form } from "react-router-dom";
import Backdrop from "./Backdrop";

export default function Popup() {
  return (
    <Form className="fixed flex flex-col justify-center items-center ">
        <div className="bg-red-500 p-3">
            <div >
            <label htmlFor="username">Username</label>
            <input className="block" type="text" placeholder='userName'/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input className="block" type="password" id='password' placeholder='password'/>
            </div>
            <button className="text-5xl text-yellow-400" type='submit'>Login</button>
        </div>
    </Form>
  )
}
