export async function postJobAction({ request }) {
    const data = await request.formData()
    const job = {
      title: data.get("title"),
      closing: data.get("closing"),
      salary: data.get("salary") ? data.get("salary") : 'TBA',
      description: data.get("description"),
      type: data.get("type"),
      location: data.get('location'),
      contact: data.get('contact'),
      email: data.get('email'),
      qualification: data.get('qualification'),
      datePosted: new Date().toLocaleString(),
      poster: JSON.parse(localStorage.getItem('newUser')) || JSON.parse(localStorage.getItem('currentUser'))
    }
    if(localStorage.getItem("jobs")) {
      const jobsDd = JSON.parse(localStorage.getItem('jobs'))
      jobsDd.unshift(job)
      localStorage.setItem("jobs", JSON.stringify(jobsDd))
    } else {
      localStorage.setItem("jobs", JSON.stringify([job]))
    }
    return redirect('/jobs')
  }
  
  import { redirect } from "react-router-dom";

export async function signupAction({ request }) {
  const data = await request.formData()

  const user = {
    username: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    confirmation: data.get("confirmation"),
    location: data.get("location"),
    company: data.get("company"),
    dateCreated: new Date().toLocaleString(),
    isLoggedIn: true,
    jobs: []
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
  console.log(user)
  return redirect('/profile')
}

function passwordValidation(data) {
   return data.get("password") === data.get("confirmation")
  }
