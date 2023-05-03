export default function Input({label, type, name,}) {
  return (
    <div>
        <label htmlFor={ type }></label>
        <input type={type} name={name} id={label}/>
    </div>
  )
}
