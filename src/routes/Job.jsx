import { useLoaderData } from "react-router-dom"

export default function Job() {
  const data = useLoaderData()
  return (
    <div>
        <h1>{ data.title }</h1>
    </div>
  )
}

export async function loader({ params }) {
    const res = await fetch('http://localhost:3000/jobs/' + params.jobId)
    const resData = await res.json()
    return resData
}