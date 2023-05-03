import { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Popup from "../components/Popup"

const usersDb = JSON.parse(localStorage.getItem("users"))
export default function Profile() {
    const navigate = useNavigate()
    const data = useLoaderData()
    const [isLoggedIn, setIsLoggedIn] = useState(usersDb.some(user => user.isLoggedIn))
    const [popupIsActive, setPopupIsActive] = useState(false)
    
     function handleClick() {
    
        usersDb.forEach(user => {
            if(user.isLoggedIn) {
                user.isLoggedIn = false
            }
        localStorage.setItem("users", JSON.stringify(usersDb))
    }) 
    setIsLoggedIn(false)
    navigate('/')
    }
    console.log(isLoggedIn)
  return (
    <>
    { popupIsActive && <Popup />}
    {isLoggedIn ? <div>
        <h1>{ data.username }</h1>
        <h1>{ data.location }</h1>
        <p>{ data.company }</p>
        <button onClick={handleClick} className="text-lg text-teal-400 border border-solid">Logout</button>
    </div>
    :
<button 
onClick={() => setPopupIsActive(true)}
className="text-lg text-teal-400 border border-solid">Login</button>
}
    </>
    
  )
}


export async function loader() {
    const usersDb = JSON.parse(localStorage.getItem("users"))
    if(!usersDb) return
    let currentUser 
    usersDb.forEach(user => {
        if(user.isLoggedIn) {
            currentUser = user
        }
    })
    return currentUser || null
}
