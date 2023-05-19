import { useLoaderData, Link } from "react-router-dom"

export default function Job() {
  const data = useLoaderData()
  return (
    <div className="w-6/12">
        <h1>{ data.title }</h1>
        <p>{ data.poster.company }</p>
        <div>
          <h2 className="mb-0">Role</h2>
           <p className="mt-0">{data.description}</p>
        </div>
        <div>
          <h2 className="mb-0">Qualifications</h2>
           <p className="mt-0">{data.qualification}</p>
        </div>
        <div>
          <h2 className="mb-0">How to apply</h2>
          <p className="font-bold mt-0">To apply for this job, use the contacts below</p>
          <p><Link>{data.email}</Link></p>
          <p>{data.contact}</p>
        </div>
        <p> {`Closing Date: ${data.closing}`} </p>
        <p> {`Salary ranges from: ${data.salary}`} </p>
    </div>
  )
}

export async function loader({ params }) {
  const response = JSON.parse(localStorage.getItem("jobs"))
  const resData = response[params.jobId]
  return resData
}
