function Button({ text, width, mwidth, lwidth, auto }) {
  return (
    <button className={`w-${width} md:w-${mwidth} lg:w-${lwidth} ${auto ? 'mx-auto' : 'ml-2'} bg-sky-500 text-white hover:text-sky-500 hover:bg-transparent border border-sky-500 border-solid hover:border-sky-500 duration-300 text-xl py-2 px-5 mb-3 cursor-pointer`}>
        { text }
    </button>
  )
}
export default Button
