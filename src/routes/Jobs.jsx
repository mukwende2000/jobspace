import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Jobs() {
    const jobs = useLoaderData()
    // console.log(jobs)

    const navigate = useNavigate()
  return (

    <div>
        <h1>Jobs</h1>
        <button onClick={ () => navigate('/post-job') }>post a job</button>
        <ul>{ jobs.map((job, index) => {
            return <li key={job.id}><Link to={`${index}`} className="text-white text-lg">{jobs[index].title}</Link></li>
        }) }</ul>
    </div>
  )
}

// export async function loader() {
//     const response = await fetch('http://localhost:3000/jobs')// JSON.parse(localStorage.getItem("jobs")) 
//     const resData = await response.json()
//     return resData
// }
export async function loader() {
    const response = JSON.parse(localStorage.getItem("jobs")) 
    // const resData = await response.json()
    return response
}
