import { Form, Link } from "react-router-dom";
import useStateProvider, { useDispatchProvider } from "../Contexts/ContextProvider";

export default function PostJob() {
  const { isLoggedIn } = useStateProvider() 
  const { dispatch } = useDispatchProvider()

  const rolePlaceholder = 'Write a short description of the job, be sure to include your contac details'
  const qualificationPlacholder = `Write the qualifications for this position as one paragraph. \nNB: Writing in point form wont't work`
 
  return (
    <div className="max-w-4xl mx-auto my-3">
        {isLoggedIn ? <Form className="w-full" method="post" action="/post-job">
          <div className="md:flex gap-10">
            <label htmlFor="title" className="basis-full">
              <span>Job Title</span>
              <input className="text_input" type="text" id="title" name="title" placeholder="e.g machine operator" required />
            </label>
            <label htmlFor="closing" className="basis-full">
              <span>Application Deadline</span>
              <input className="text_input" type="date" name="closing" id="closing" placeholder="Closing date" required />
            </label>
          </div>
          <div className="md:flex gap-10 my-5">
            <label htmlFor="salary" className="basis-full">
              <span>Salary</span>
              <input className="text_input" type="number" id="salary" name="salary" placeholder="salary, optional" />
            </label>    
            <label htmlFor="location" className="basis-full">
              <span>Location</span>
              <input className="text_input" type="text" id="location" name="location" placeholder="location" required/>
            </label>
          </div>
          <div className="md:flex gap-10 my-5">
            <label htmlFor="contact" className="basis-full">
              <span>Contact</span>
              <input className="text_input" type="number" id="salary" name="contact" placeholder="Cell or Tel" />
            </label>    
            <label htmlFor="email" className="basis-full">
              <span>Email</span>
              <input className="text_input" type="email" id="email" name="email" placeholder="Email" required/>
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
            <textarea  className="w-full p-3 leading-6"  name="description" id="description" cols="30" rows="10" 
            placeholder={rolePlaceholder} required>
              
            </textarea>
          </label>
          <label htmlFor="qualification">
            <span>Qualification</span>
            <textarea  className="w-full p-3 leading-4"  name="qualification" id="qualification" cols="30" rows="10" 
            placeholder={qualificationPlacholder} required>
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

