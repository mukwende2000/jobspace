import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider"
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Popup() {
  const data = useActionData()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { message, popupView } = useStateProvider()
  const { dispatch } = useDispatchProvider()
  
  function handleLogin() {
    const usersDb = JSON.parse(localStorage.getItem('users'))
    usersDb.map(user => {
      if(username === user.username && password === user.password) {
        dispatch({type: 'loginUser'})
        dispatch({type: 'setCurrentUser', payload: {currentUser: user}})
        dispatch({type: 'closePopup'})
      } else {
        dispatch({type: 'displayInvalidMessage'})
      }
    })
  }

  return (
    <div className={`overflow-hidden fixed bg-white right-2/4 ${popupView === 'login' ? '-top-40' : '-top-60'}  translate-x-2/4 translate-y-2/4 w-[90%] max-w-lg flex flex-col justify-center z-50 rounded-lg`}>
        <div>
          <div className="flex w-full outline outline-gray-500 outline-1 ">
            <button onClick={() => dispatch({type: "setPopupView", payload: 'login'} )} className={`${popupView === 'login' ? 'bg-[#007bff] text-white': 'text-[#007bff] bg-white'} w-6/12 h-14 text-xl cursor-pointer`}>Login</button>
            <button onClick={() => dispatch({type: "setPopupView", payload: 'signup'} )} className={`${popupView === 'signup' ? 'bg-[#007bff] text-white': 'text-[#007bff] bg-white'} w-6/12 h-14 text-xl cursor-pointer`}>Sign up</button>
          </div>
          {popupView === 'login' ? <form>
          <div className="w-10/12 my-7 mx-auto">
                < input onChange={e => setUsername(e.target.value)} className="block w-full h-8 my-5" type="text" placeholder='Username'/>
                < input onChange={e => setPassword(e.target.value)} className="block w-full h-8 my-3" type="password" id='password' placeholder='Password'/>
                <div className="flex justify-between my-3">
                  <label htmlFor="remember" className="cursor-pointer">
                    <input type="checkbox" id="remember" />
                    <span>Remember me</span>
                  </label>
                  <button className="cursor-pointer text-[1rem] hover:text-pink-500 transition-colors duration-200">Forget Password</button>
                </div>
                <button className="text-xl text-white p-2 w-full bg-[#007bff] cursor-pointer" type='button' onClick={handleLogin}>Login</button>
          </div>
          <p className="text-center text-gray-600">Or Log in with</p>
          <div className="flex gap-5 justify-center">
            <FaFacebook className="text-xl"/>
            <FaTwitter className="text-xl"/>
            <FaGoogle className="text-xl"/>
            <FaLinkedin className="text-xl"/>
          </div>
          <p> { message } </p>
          </form> : (
            <Form method="POST" action="signup">
              <p>{data?.error}</p>
              <div className="w-10/12 my-7 mx-auto">
                <input className="block w-full h-8 my-5" type="text" name="username" placeholder='Your Username' required/>
                <input className="block w-full h-8 my-5" type="email" name="email" placeholder='Your Email' required/>
                <input className="block w-full h-8 my-3" type="password" name='password' placeholder='Choose Password' required/>
                <input className="block w-full h-8 my-3" type="password" name='confirmation' placeholder='Confirm Password' required/>
                <input className="block w-full h-8 my-3" type="text" name="company" placeholder='Company Name' required/>
                <input className="block w-full h-8 my-3" type="text" name='location' placeholder='Location' required/> 
                <button className="text-xl text-white p-2 w-full bg-[#007bff] cursor-pointer" type='submit'>Sign Up</button>
              </div>
              <p className="text-center text-gray-600">Or Register with</p>
              <div className="flex gap-5 justify-center">
                <FaFacebook className="text-xl"/>
                <FaTwitter className="text-xl"/>
                <FaGoogle className="text-xl"/>
                <FaLinkedin className="text-xl"/>
              </div>
              <p> { message } </p>
            </Form>
          )}
        </div>
    </div>
  )
}
