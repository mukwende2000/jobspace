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

// export async function loader({ params }) {
//     const res = await fetch('http://localhost:3000/jobs/' + params.jobId)
//     const resData = await res.json()
//     return resData
// }
export async function loader({ params }) {
  const response = JSON.parse(localStorage.getItem("jobs")) // await fetch('http://localhost:3000/jobs')
  // console.log(response)
  const resData = response[params.jobId]
  // const resData = await response.json()
  return resData
}
