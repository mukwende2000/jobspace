import { Form, redirect } from "react-router-dom";

export default function PostJob() {
  return (
    <div>
        <Form className="w-full" method="post" action="/post-job">
          <div>
            <label htmlFor="title">Title</label>
            <input className="w-full" type="text" id="title" name="title" placeholder="e.g machine operator" />
          </div>
          <div>
            <label htmlFor="closing">Closing Date</label>
            <input className="w-full" type="date" name="closing" id="closing" placeholder="Closing date" />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input className="w-full" type="number" id="salary" name="salary" placeholder="salary, optional" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input className="w-full" type="text" id="location" name="location" placeholder="location"/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea className="w-full" name="description" id="description" cols="30" rows="10" 
            placeholder="Write a short description of the job, be sure to include your contac details"></textarea>
          </div>
          <div>
            <p>
            <input type="radio" name="type" value={'permanent'} id="permanent" />
            <label htmlFor="permanent">Permanent</label>
            </p>
            <p>
            <input type="radio" name="type" value={'permanent'} id="casual" />
            <label htmlFor="casual">Casual</label>
            </p>
            <p>
            <input type="radio" name="type" value={'permanent'} id="contract" />
            <label htmlFor="contract">Contract</label>
            </p>
          </div>
          <button type="submit" className="bg-white text-lg">Submit</button>
        </Form>
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
    datePosted: new Date().toLocaleString()
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