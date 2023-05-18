function Button({ text, width, mwidth, lwidth }) {
  return (
    <button className={`w-${width} md:w-${mwidth} lg:w-${lwidth} bg-sky-500 text-white hover:text-sky-500 hover:bg-transparent border border-sky-500 border-solid hover:border-sky-500 duration-300 text-xl py-2 mb-3 mx-auto cursor-pointer`}>
        { text }
    </button>
  )
}
export default Button
