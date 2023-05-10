import { redirect, Form, useActionData } from "react-router-dom";

let message
export default function SignUp() {
  const data = useActionData()

  return (
    <Form method="POST" action="/signup">
          <div>
            <label htmlFor="username">Full Name</label>
            <input className="block w-full" type="text" name="username" id="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="block w-full" type="password" name="password" id="password" required />
          </div>
          <div>
            <label htmlFor="confirmation">Confirm Password</label>
            <input className="block w-full" type="password" name="confirmation" id="confirmation" required />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input className="block w-full" type="text" name="location" id="location" required />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input className="block w-full" type="text" name="company" id="company" required />
          </div>
          <p>{data?.error}</p>
         <button type="submit" className="text-white text-xl">Submit</button>
    </Form> )
  }

export async function action({ request }) {
  const data = await request.formData()

  const user = {
    username: data.get("username"),
    password: data.get("password"),
    confirmation: data.get("confirmation"),
    location: data.get("location"),
    company: data.get("company"),
    dateCreated: new Date().toLocaleString(),
    isLoggedIn: true
  }

  if(!passwordValidation(data)) {
    return {error: 'Password do not match, try again'}
  }
  localStorage.setItem('newUser', JSON.stringify(user))

  if(localStorage.getItem("users")) {
    const usersDd = JSON.parse(localStorage.getItem('users'))
    usersDd.unshift(user)
    localStorage.setItem("users", JSON.stringify(usersDd))
  } else {
    localStorage.setItem("users", JSON.stringify([user]))
  }
  return redirect('/profile')
}

function passwordValidation(data) {
   return data.get("password") === data.get("confirmation")
  }
