import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider"

export default function Popup({ setIsLoggedIn, setPopupIsOpen }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isLoggedIn, message, currentUser } = useStateProvider()
  const { dispatch } = useDispatchProvider()
  
  function handleSubmit(e) {
    e.preventDefault()
    const usersDb = JSON.parse(localStorage.getItem('users'))
    usersDb.map(user => {
      if(username === user.username && password === user.password) {
        dispatch({type: 'loginUser'})
        dispatch({type: 'setCurrentUser', payload: {currentUser: user}})
        dispatch({type: 'closePopup'})

        navigate('/profile')
      } else {
        dispatch({type: 'displayInvalidMessage'})
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="fixed top-20 flex flex-col justify-center items-center ">
        <div className="bg-red-500 p-3">
            <div >
                <label htmlFor="username">Username</label>
                < input onChange={e => setUsername(e.target.value)} className="block" type="text" placeholder='userName'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                < input onChange={e => setPassword(e.target.value)} className="block" type="password" id='password' placeholder='password'/>
            </div>
            <p> { message } </p>
            <button className="text-5xl text-yellow-400" type='submit'>Login</button>
        </div>
    </form>
  )
}