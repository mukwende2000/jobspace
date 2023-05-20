import { useLoaderData, useNavigate } from "react-router-dom"
import { useDispatchProvider } from "../Contexts/ContextProvider"
import useStateProvider from "../Contexts/ContextProvider"
import { useEffect } from "react"

export default function Profile() {
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    let { currentUser } = useStateProvider()
    const data = useLoaderData() || currentUser
    const newUser = JSON.parse(localStorage.getItem('newUser')) 

    useEffect(() => {
        dispatch({type: 'closePopup'})
        if(!currentUser) {
            dispatch({type: 'loginUser'})
        }

        if(newUser) {
            dispatch({type: 'setCurrentUser', payload: {currentUser: newUser}})
            localStorage.setItem('newUser', JSON.stringify(newUser))
        }
    }, [])

    function handleClick() {
        dispatch({type: "logoutUser"})
        dispatch({type: "setCurrentUser", payload: {currentUser: null}})
        localStorage.setItem('newUser', JSON.stringify(null))
        navigate('/')
    }

    return (
    <>
    <div className="bg-sky-600 p-5 m-5 text-center">
        <h2 className="text-white">You are signed in as <span className="text-pink-600">{ data?.username} </span> </h2>
        {data.company && <h2 className="text-white">Your company name is <span className="text-pink-500">{ data.company }</span></h2>}
        <div className="flex justify-center gap-7">
            <button onClick={handleClick} className="cursor-pointer bg-sky-500 text-white duration-200 hover:text-sky-500 hover:border-sky-500 hover:bg-white px-5 py-3 text-lg">Logout</button> 
            <button onClick={() => navigate('/post-job')} className="cursor-pointer bg-sky-500 duration-200 hover:border-sky-500 hover:bg-white text-white hover:text-sky-500 px-5 py-3 text-lg"> Post A Job </button> 
        </div>
    </div>
    </>
    
  )
}


