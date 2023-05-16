function Button({ text, width, mwidth, lwidth }) {
  return (
    <button className={`w-${width} md:w-${mwidth} lg:w-${lwidth} bg-blue-600 text-white text-xl py-2 mb-3 mx-auto cursor-pointer hover:opacity-90 transition-opacity`}>
        { text }
    </button>
  )
}
export default Button
