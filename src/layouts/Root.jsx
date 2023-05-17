import {Outlet } from "react-router-dom";

// context
import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider";

// components
import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";

export default function Root() {
  const { menuIsOpen, popupIsOpen } = useStateProvider()
  const { dispatch } = useDispatchProvider()

  return (
    <div className="">
      { popupIsOpen && <Popup isloggedIn={popupIsOpen} />}
      <Backdrop onBackDropClick={() => {
        dispatch({type: "closeMenu"})
        dispatch({type: "closePopup"})
      }} isOpen={ menuIsOpen || popupIsOpen} />
      <Header />
      <main className="px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
