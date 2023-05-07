import { redirect, Form } from "react-router-dom";

let message
export default function SignUp() {

  return (
    <Form method="POST" action="/signup">
          <div>
            <label htmlFor="username">Full Name</label>
            <input className="block w-full" type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="block w-full" type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="confirmation">Confirm Password</label>
            <input className="block w-full" type="password" name="confirmation" id="confirmation" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input className="block w-full" type="text" name="location" id="location" />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input className="block w-full" type="text" name="company" id="company" />
          </div>
          <p>{message}</p>
         <button type="submit" className="text-white text-xl">Submit</button>
    </Form> )
  }

export async function action({ request }) {
  const data = await request.formData()
  // if(!passwordValidation) {
  //   message = "passwords must match"
  //   return null
  // } else {
  //   message = ""
  // }
  const user = {
    username: data.get("username"),
    password: data.get("password"),
    confirmation: data.get("confirmation"),
    location: data.get("location"),
    company: data.get("company"),
    dateCreated: new Date().toLocaleString(),
    isLoggedIn: true
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
