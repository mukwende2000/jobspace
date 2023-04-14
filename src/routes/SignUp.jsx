import { useState } from "react";
import { Form, redirect } from "react-router-dom";


export default function SignUp() {
  const [isEmployer, setIsEmployer] = useState(false)

  return (
    <section>
        <Form method="POST" action="/signup">
          <div>
            <label htmlFor="name">Userame</label>
            <input className="w-full" type="text" id="name" name="name" placeholder="Enter Name" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="w-full" type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="matcher">Confirm Password</label>
            <input className="w-full" type="password" name="matcher" id="matcher" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input className="w-full" type="text" name="location" id="location" />
          </div>
          <div>
            <input onChange={() => setIsEmployer(false)} defaultChecked type="radio" name="position" id="employee" />
            <label htmlFor="employee">Employee</label>
          </div>
          <div>
            <input onChange={() => setIsEmployer(true)} type="radio" name="position" id="employer" />
            <label htmlFor="employer">Employer</label>
          </div>
          {isEmployer && (<div>
            <label htmlFor="company">Company</label>
            <input className="w-full" type="text" name="company" id="company" />
          </div>)}
          <button className="text-lg text-teal-100" type="submit">Create Account</button>
        </Form>
    </section>
  )
}


export async function action({ request }) {
  const data = await request.formData()
  const user = {
    name: data.get("name"),
    password: data.get("password"),
    matcher: data.get("matcher"),
    location: data.get("location"),
    position: data.get('position'),
    company: data.get("company"),
    dateCreated: new Date().toLocaleString(),
    isLoggedIn: true
  }
  console.log(user)
  if(localStorage.getItem("users")) {
    const usersDd = JSON.parse(localStorage.getItem('users'))
    usersDd.unshift(user)
    localStorage.setItem("users", JSON.stringify(usersDd))
  } else {
    localStorage.setItem("users", JSON.stringify([user]))
  }
  return redirect('/profile')
}