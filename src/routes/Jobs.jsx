import { FaBriefcase, FaLocationArrow, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

// helper functions
import { calculatePostAge, shortedDescription } from "../functions";

export default function Jobs() {
    const jobs = useLoaderData()
    const navigate = useNavigate()
    
  return (

    <div>
        <h1>Jobs</h1>
        <button className="border-solid border-teal-100 border text-lg text-orange-600 rounded p-3 transition-all duration-100 hover:bg-teal-100" onClick={ () => navigate('/post-job') }>Post a job</button>
        {jobs ? 
        <ul>{ jobs.map((job, index) => {
            return (
            <li key={job.id} className="-ml-10 bg-indigo-800 text-teal-100 my-3 p-3 rounded">
              <p className="my-0 text-sm flex justify-between"><span>Company</span><span className="text-sm">{ calculatePostAge(jobs[index].datePosted, new Date().toLocaleString())}</span></p>
                <Link to={`${index}`} className="text-4xl text-teal-100">
                  {jobs[index].title}
                </Link>
              <div className="flex justify-between">
                <p className="flex items-center"><FaBriefcase className="mr-2" /> <span>{`K ${jobs[index].salary}`}</span></p>
                <p className="flex"><FaShoppingBag className="mr-2" /> <span>{jobs[index].type}</span></p>
                <p className="flex items-center"><FaLocationArrow className="mr-2" /> <span>{jobs[index].location}</span></p>
              </div>
              <p>{shortedDescription(jobs[index].description)} <Link to={`${index}`} className="text-orange-600">read more</Link></p>
            </li>
              )
              }) }
        </ul> 
        : <h1>Database is empty, looks like there are jobs, start a business</h1>
        }
    </div>
  )
}

export async function loader() {
    const response = JSON.parse(localStorage.getItem("jobs")) 
    return response
}
