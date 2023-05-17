import { useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom"
import { useDispatchProvider } from "../Contexts/ContextProvider"
import useStateProvider from "../Contexts/ContextProvider"
import { useEffect } from "react"

export default function Profile() {
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    let { currentUser, isLoggedIn } = useStateProvider()
    const data = useLoaderData() || currentUser;
    const newUser = JSON.parse(localStorage.getItem('newUser')) 
    const jobs = JSON.parse(localStorage.getItem('jobs')) 
    useEffect(() => {
        if(!currentUser) {
            dispatch({type: "loginUser"})   
        }

        if(newUser !== null) {
            dispatch({type: 'setCurrentUser', payload: { currentUser: newUser}})
            localStorage.setItem('newUser', JSON.stringify(null)) 
            console.log(currentUser)
        } 
        // console.log(currentUser?.username)
       
    }, [])
    console.log(isLoggedIn)
    

     function handleClick() {
        dispatch({type: "logoutUser"})
        localStorage.setItem('newUser', JSON.stringify(null))
        navigate('/')
    }

    return (
    <>
    <div className="bg-blue-950">
        <h1>{ data?.username }</h1>
        <h1>{ data?.location }</h1>
        <p>{ data?.company }</p>
        <button onClick={handleClick} className="text-lg text-teal-400 border border-solid">Logout</button>
    </div>
    </>
    
  )
}


export async function loader() {
    const data = await JSON.parse(localStorage.getItem('newUser')) 
    return data;
}
