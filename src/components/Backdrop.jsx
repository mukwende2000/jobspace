function Backdrop({onBackDropClick, isOpen}) {
  return  <div onClick={onBackDropClick} className={`${ isOpen ? 'block' : 'hidden'} fixed left-0 right-0 bottom-0 top-0 bg-black opacity-75`}></div>
}

export default Backdrop
