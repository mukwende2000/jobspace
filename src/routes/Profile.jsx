import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Popup from "../components/Popup"

export default function Profile() {
    const data = useLoaderData()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleClick() {
        const usersDb = JSON.parse(localStorage.getItem("users"))
        usersDb.forEach(user => {
            if(user.isLoggedIn) {
                user.isLoggedIn = false
            }
        localStorage.setItem("users", JSON.stringify(usersDb))
        setIsLoggedIn(false)
        }) 
    }
  return (
    <>
    {/* <Popup /> */}
    {isLoggedIn ? <div>
        <h1>{ data.name }</h1>
        <h1>{ data.location }</h1>
        <p>{ data.company }</p>
        <button onClick={handleClick} className="text-lg text-teal-400 border border-solid">Logout</button>
    </div>
    :
<button className="text-lg text-teal-400 border border-solid">Login</button>
}
    </>
    
  )
}


export function loader() {
    const usersDb = JSON.parse(localStorage.getItem("users"))
    let currentUser 
    usersDb.forEach(user => {
        if(user.isLoggedIn) {
            currentUser = user
        }
    })
    return currentUser || null
}
