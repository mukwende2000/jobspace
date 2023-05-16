import { useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider"
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Popup() {
  // const data = useActionData()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [popupView, setPopupView] = useState('login')

  const { isLoggedIn, message, currentUser } = useStateProvider()
  const { dispatch } = useDispatchProvider()
  
  function handleLogin(e) {
    e.preventDefault()
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
    <div className={`overflow-hidden fixed bg-white right-2/4 ${popupView === 'login' ? '-top-40' : '-top-60'}  translate-x-2/4 translate-y-2/4 w-[97%] max-w-xl flex flex-col justify-center z-50 rounded-lg`}>
        <div>
          <div className="flex w-full outline outline-gray-500 outline-1 ">
            <button onClick={() => setPopupView('login')} className={`${popupView === 'login' ? 'bg-[#007bff] text-white': 'text-[#007bff] bg-white'} w-6/12 h-14 text-xl cursor-pointer`}>Login</button>
            <button onClick={() => setPopupView('signup')} className={`${popupView === 'signup' ? 'bg-[#007bff] text-white': 'text-[#007bff] bg-white'} w-6/12 h-14 text-xl cursor-pointer`}>Sign up</button>
          </div>
          {popupView === 'login' ? <form onSubmit={handleLogin}>
          <div className="w-10/12 my-7 mx-auto">
              <div>
                  < input onChange={e => setUsername(e.target.value)} className="block w-full h-8 my-5" type="text" placeholder='Username'/>
              </div>
              <div>
                  < input onChange={e => setPassword(e.target.value)} className="block w-full h-8 my-3" type="password" id='password' placeholder='Password'/>
              </div>
              <div className="flex justify-between my-3">
                <label htmlFor="remember" className="cursor-pointer">
                  <input type="checkbox" id="remember" />
                  Remember me
                </label>
                <button className="text-[1rem]">Forget Password</button>
              </div>
              <button className="text-xl text-white p-2 w-full bg-[#007bff] cursor-pointer" type='submit'>Login</button>
          </div>
          {/* <p className="text-center text-gray-600">Or Log in with</p> */}
          <div className="flex gap-5 justify-center">
            <FaFacebook className="text-xl"/>
            <FaTwitter className="text-xl"/>
            <FaGoogle className="text-xl"/>
            <FaLinkedin className="text-xl"/>
          </div>
          <p> { message } </p>
          </form> : (
            <Form method="POST" action="/">
              <p>{data?.error}</p>
                  <div className="w-10/12 my-7 mx-auto">
              <div>
                  < input className="block w-full h-8 my-5" type="text" placeholder='Your Username'/>
              </div>
              <div>
                  < input className="block w-full h-8 my-5" type="email" placeholder='Your Email'/>
              </div>
              <div>
                  < input onChange={e => setPassword(e.target.value)} className="block w-full h-8 my-3" type="password" id='password' placeholder='Choose Password'/>
              </div>
              <div>
                  < input onChange={e => setPassword(e.target.value)} className="block w-full h-8 my-3" type="password" id='password' placeholder='Confirm Password'/>
              </div>
              <div>
                  < input className="block w-full h-8 my-3" type="text" placeholder='Company Name'/>
              </div>
              <div>
                  < input onChange={e => setPassword(e.target.value)} className="block w-full h-8 my-3" type="text" id='text' placeholder='Location'/>
              </div>
              
              <button className="text-xl text-white p-2 w-full bg-[#007bff] cursor-pointer" type='submit'>Sign Up</button>
          </div>
          <p className="text-center text-gray-600">Or Register in with</p>
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
