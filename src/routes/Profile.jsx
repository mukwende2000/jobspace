import { useLoaderData, useNavigate } from "react-router-dom"
import { useDispatchProvider } from "../Contexts/ContextProvider"
import useStateProvider from "../Contexts/ContextProvider"
import { useEffect } from "react"

export default function Profile() {
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    const { isLoggedIn, currentUser } = useStateProvider()
    const newUser = useLoaderData();
    
    useEffect(() => {
        console.log("working")
        dispatch({type: 'setCurrentUser', payload: {currentUser: newUser}})
        dispatch({type: "loginUser"})
    }, [newUser])
    
    console.log(newUser)
    console.log(currentUser)

     function handleClick() {
        dispatch({type: "logoutUser"})
        dispatch({type: 'setCurrentUser', payload: {currentUser: null}})
        navigate('/')
    }

    return (
    <>
    <div>
        <h1>{ currentUser?.username }</h1>
        <h1>{ currentUser?.location }</h1>
        <p>{ currentUser?.company }</p>
        <button onClick={handleClick} className="text-lg text-teal-400 border border-solid">Logout</button>
    </div>
    </>
    
  )
}


export async function loader() {
    return JSON.parse(localStorage.getItem('newUser'))
}
