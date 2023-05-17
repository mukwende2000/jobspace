import { Form, redirect, Link } from "react-router-dom";
import useStateProvider, { useDispatchProvider } from "../Contexts/ContextProvider";

export default function PostJob() {
  const { isLoggedIn } = useStateProvider() 
  const { dispatch } = useDispatchProvider()
  return (
    <div>
        {isLoggedIn ? <Form className="w-full" method="post" action="/post-job">
          <div>
            <label htmlFor="title">Title</label>
            <input className="w-full" type="text" id="title" name="title" placeholder="e.g machine operator" required />
          </div>
          <div>
            <label htmlFor="closing">Closing Date</label>
            <input className="w-full" type="date" name="closing" id="closing" placeholder="Closing date" required />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input className="w-full" type="number" id="salary" name="salary" placeholder="salary, optional" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input className="w-full" type="text" id="location" name="location" placeholder="location" required/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea className="w-full" name="description" id="description" cols="30" rows="10" 
            placeholder="Write a short description of the job, be sure to include your contac details" required></textarea>
          </div>
          <div>
            <p>
            <input type="radio" name="type" value={'Full Time'} id="permanent" required />
            <label htmlFor="permanent">Full Time</label>
            </p>
            <p>
            <input type="radio" name="type" value={'Part Time'} id="casual" required />
            <label htmlFor="casual">Part Time</label>
            </p>
            <p>
            <input type="radio" name="type" value={'Contract'} id="contract" required />
            <label htmlFor="contract">Contract</label>
            </p>
          </div>
          <button type="submit" className="bg-white text-lg">Submit</button>
        </Form> : 
        <div>
          <p>Sorry, you need to be signed in to post a job</p>
          <p> <Link onClick={() => dispatch({type: "openPopup"})}>Log in</Link> or <Link to={'/signup'}>Create Account</Link>  </p>
        </div>}
    </div>
  )
}

export async function action({ request }) {
  const data = await request.formData()
  const job = {
    title: data.get("title"),
    closing: data.get("closing"),
    salary: data.get("salary") ? data.get("salary") : 'TBA',
    description: data.get("description"),
    type: data.get("type"),
    location: data.get('location'),
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


