import { Outlet } from "react-router-dom";

import useStateProvider from "../Contexts/ContextProvider";
import { useDispatchProvider } from "../Contexts/ContextProvider";

import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";
import { useEffect } from "react";

function Root() {
  const { menuIsOpen, popupIsOpen } = useStateProvider()
  const { dispatch } = useDispatchProvider()

  useEffect(() => {
    function handleResize() {
      dispatch({type: "closePopup"})
      dispatch({type: "closeMenu"})
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
export default Root