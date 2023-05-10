import { useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom"
import { useDispatchProvider } from "../Contexts/ContextProvider"
import useStateProvider from "../Contexts/ContextProvider"
import { useEffect } from "react"

export default function Profile() {
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    let { currentUser } = useStateProvider()
    const data = useLoaderData() || currentUser;
    
    useEffect(() => {
        if(!currentUser) {
         dispatch({type: "loginUser"})   
        }
    }, [])
    

     function handleClick() {
        dispatch({type: "logoutUser"})
        localStorage.setItem('newUser', JSON.stringify(null))
        navigate('/')
    }

    return (
    <>
    <div>
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
