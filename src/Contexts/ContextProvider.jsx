import { useReducer, useContext, createContext } from "react";
const usersDb = JSON.parse(localStorage.getItem('users'))

const initialState = {
    popupIsOpen: false,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
    menuIsOpen: false,
    message: "",
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
}

function reducer(state, {type, payload}) {
    switch (type) {
        case "openPopup":
            return {
                ...state, popupIsOpen: true
            }
        case "closePopup":
            return {
                ...state, popupIsOpen: false
            }
        case "openMenu": 
            return {
                ...state, menuIsOpen: true
            }
        case "closeMenu": 
            return {
                ...state, menuIsOpen: false
            }
        case "loginUser": 
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            return {
                ...state, isLoggedIn: true
            }
            case "logoutUser": 
            localStorage.setItem('isLoggedIn', JSON.stringify(false))
            return {
                ...state, isLoggedIn: false
            }
        case "displayInvalidMessage":
            return {
                ...state, message: "Invalid Password or email"
            }
        case "setCurrentUser": 
             localStorage.setItem('currentUser', JSON.stringify(payload.currentUser))
            return {
                ...state, currentUser: payload.currentUser
            }
    
        default:
            return state;
    }
}

export const Context = createContext()
export const Dispatch = createContext()

export function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{
            popupIsOpen: state.popupIsOpen,
            menuIsOpen: state.menuIsOpen,
            isLoggedIn: state.isLoggedIn,
            message: state.message,
            currentUser: state.currentUser}}>
            <Dispatch.Provider value={{ dispatch }}>
                { children }
            </Dispatch.Provider>
        </Context.Provider>
    )
}

export default function useStateProvider() {
    return useContext(Context)
}
export function useDispatchProvider() {
    return useContext(Dispatch)
}