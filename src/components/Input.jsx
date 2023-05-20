function Input({text, type, name, defaultChecked}) {
  return (
    <label className="cursor-pointer" htmlFor={ text }>
    <input className="mr-3" type={ type } value={ text } id={ text } name={ name } defaultChecked={ defaultChecked }/>
    { text }
  </label>
  )
}
export default Input