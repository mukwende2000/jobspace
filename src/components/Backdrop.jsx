function Backdrop({onToggleMenu, menuIsOpen}) {
  return  <div onClick={onToggleMenu} className={`${ menuIsOpen ? 'block' : 'hidden'} fixed left-0 right-0 bottom-0 top-0 bg-black opacity-75`}></div>
}

export default Backdrop
