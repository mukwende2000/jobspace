import { Form, redirect, Link } from "react-router-dom";
import useStateProvider, { useDispatchProvider } from "../Contexts/ContextProvider";

export default function PostJob() {
  const { isLoggedIn } = useStateProvider() 
  const { dispatch } = useDispatchProvider()
 
  return (
    <div className="max-w-4xl mx-auto my-3">
        {isLoggedIn ? <Form className="w-full" method="post" action="/post-job">
          <div className="md:flex gap-10">
            <label htmlFor="title" className="basis-full">
              <span>Job Title</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="text" id="title" name="title" placeholder="e.g machine operator" required />
            </label>
            <label htmlFor="closing" className="basis-full">
              <span>Application Deadline</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="date" name="closing" id="closing" placeholder="Closing date" required />
            </label>
          </div>
          <div className="md:flex gap-10 my-5">
            <label htmlFor="salary" className="basis-full">
              <span>Salary</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="number" id="salary" name="salary" placeholder="salary, optional" />
            </label>    
            <label htmlFor="location" className="basis-full">
              <span>Location</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="text" id="location" name="location" placeholder="location" required/>
            </label>
          </div>
          <div className="md:flex gap-10 my-5">
            <label htmlFor="contact" className="basis-full">
              <span>Contact</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="number" id="salary" name="contact" placeholder="Cell or Tel" />
            </label>    
            <label htmlFor="email" className="basis-full">
              <span>Email</span>
              <input className="w-full h-8 text-[.9rem] px-2 border-gray-500 border focus:outline-none" type="email" id="email" name="email" placeholder="Email" required/>
            </label>
          </div>

          <div>
            <label htmlFor="full">
              <input type="radio" name="type" value={'Full Time'} id="full" required />
              <span>Full Time</span>
            </label>
         
            <label htmlFor="part" className="mx-3">
              <input type="radio" name="type" value={'Part Time'} id="part" required />
              <span>Part Time</span>
            </label>
            
            <label htmlFor="contract">
              <input type="radio" name="type" value={'Contract'} id="contract" required />
              <span>Contract</span>
            </label>
          </div>
          <label htmlFor="description">
            <span>Role</span>
            <textarea  className="w-full"  name="description" id="description" cols="30" rows="10" 
            placeholder="Write a short description of the job, be sure to include your contac details" required>
              
            </textarea>
          </label>
          <label htmlFor="qualification">
            <span>Qualification</span>
            <textarea  className="w-full"  name="qualification" id="qualification" cols="30" rows="10" 
            placeholder="Write the qualifications for this position as one paragraph. NB: Writing in point form wont't work" required>
              
            </textarea>
          </label>
          <button type="submit" className="cursor-pointer bg-sky-500 text-white duration-200 hover:text-sky-500 border-solid border hover:border-sky-500 hover:bg-white px-5 py-3 text-lg">Submit</button>
        </Form> : 
        <div>
          <p>Sorry, you need to be signed in to post a job</p>
          <p> 
            <Link onClick={() =>{
              dispatch({type: "openPopup"})
              dispatch({type: "setPopupView", payload: 'login'})
            }}>Log in</Link><span> or </span>
           
           <Link onClick={() => {
            dispatch({type: "openPopup"})
            dispatch({type: "setPopupView", payload: 'signup'})
           }}>Create Account</Link> 
          </p>
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


