import { useLoaderData } from "react-router-dom"

export default function Job() {
  const data = useLoaderData()
  return (
    <div>
        <h1>{ data.title }</h1>
        <h2>{ data.type }</h2>
        <p>{data.description}</p>
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
