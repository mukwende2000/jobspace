import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Jobs() {
    const jobs = useLoaderData()

    const navigate = useNavigate()
  return (

    <div>
        <h1>Jobs</h1>
        <button onClick={ () => navigate('/post-job') }>post a job</button>
        <ul>{ jobs.map(job => {
            return <li key={job.id}><Link to={`${job.id}`}>{jobs[job.id-1].title}</Link></li>
        }) }</ul>
    </div>
  )
}

export async function loader() {
    const response = await fetch('http://localhost:3000/jobs')
    const resData = await response.json()
    return resData
}
