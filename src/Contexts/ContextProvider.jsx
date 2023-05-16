import { useReducer, useContext, createContext } from "react";
import { reducer } from "../utils/functions";

const initialState = {
    popupIsOpen: false,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
    menuIsOpen: false,
    message: "",
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
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