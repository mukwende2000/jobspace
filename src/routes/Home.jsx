import { Link } from "react-router-dom"
import Button from "../components/Button"
import { useEffect} from "react"

export default function Home() {

  useEffect(() => {
    document.title = `Jobspace | Home`
  }, [])

  return (
    <div className="px-20 py-5 bg-[url('./assets/images/hero.jpg')] flex flex-col items-center md:block  my-5 text-white">
      <div className="md:flex justify-between my-10">
        <div className="text-center">
          <p className="font-bold text-3xl mt-5 mb-1">{ 1576 }</p>
          <p className="text-xl m-0">Job Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-3xl mt-5 mb-1">{ 1200 }</p>
          <p className="text-xl m-0">Members</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-3xl mt-5 mb-1">{ 921}</p>
          <p className="text-xl m-0">Resume</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-3xl mt-5 mb-1">{ 110 }</p>
          <p className="m-0">Company</p>
        </div>
      </div>
      <Link to={'jobs'}>
         <Button text="Find a Job" width={'48'} />
      </Link>
    </div>
  )
}