import {FaCaretLeft, FaCaretRight, FaLocationArrow } from "react-icons/fa";
import { Link, useLocation, useNavigate, useLoaderData } from "react-router-dom";
import useStateProvider, { useDispatchProvider } from "../Contexts/ContextProvider";
import { useEffect } from "react";

import Input from "../components/Input";
import { calculatePostAge } from "../utils/helperFunctions";

function Jobs() {
    const jobs = useLoaderData()
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    const { currentUser } = useStateProvider()
    const { pathname } = useLocation()

    useEffect(() => {
      document.title = `Jobspace | ${pathname.slice(1)}`
    }, [])

    useEffect(() => {
      const usersDb = JSON.parse(localStorage.getItem('users'))
      const filteredDb = usersDb.filter(user => user?.username !== currentUser?.username)
      const nextUser = {...currentUser}
    
      nextUser.jobs = []
      jobs?.map(job => {
          if(job.poster?.username === currentUser?.username) {
              nextUser.jobs.push(job)
              dispatch({type: "setCurrentUser", payload: {currentUser: nextUser}})
          } 
      })
      filteredDb.push(nextUser)
      localStorage.setItem('users', JSON.stringify(filteredDb))
    },[])

     return (

    <div className="md:px-20">
        <button onClick={() => navigate('/post-job')} className="cursor-pointer bg-sky-500 text-white duration-200 hover:text-sky-500 border-solid border hover:border-sky-500 hover:bg-white px-5 py-3 text-lg">Post A Job</button>
        {!jobs ?
        <h1>Database is empty, looks like there are jobs, start a business</h1> 
        :
        <div className="lg:flex gap-24"> 
          <ul className="md:w-[70%]">
            <li className="-ml-10">
              <div className="flex items-center justify-between text-gray-500">
                <p>Showing 1-10 of 34 Jobs</p>
                <div>
                  <span className="mr-2">Sort by:</span>
                  <select name="sort" className="focus:outline-none p-2 text-gray-500">
                    <option value="1">Most Recent</option>
                    <option value="1">Most Popular</option>
                    <option value="1">Top Rated</option>
                  </select>
                </div>
              </div>
            </li>
            { jobs.map((job, index) => {
            return (

            <li key={job.id} className="-ml-10 my-3 mx-auto p-3 border-b border-solid border-transparent border-b-gray-400 hover:shadow-2xl shadow-slate-900 hover:border-b-transparent transition-[border] duraion-300">
              <Link className="text-black" to={`${index}`}>
                  <div className="flex items-start justify-between">
                      <p className="capitalize font-bold text-sky-500">{job.company || job.poster.company}</p>
                      <div>
                        <p>{job.salary === 'TBA' ? 'TBA' :`K ${job.salary}`}</p>
                        <p className={`${job.type == 'Full Time' ? 'bg-green-500' : job.type == 'Part Time' ? 'bg-orange-400' : 'bg-red-400'} text-xs p-1`}>{job.type}</p>
                      </div>
                  </div>
                  <p className="mt-0 font-bold">{job.title}</p>
                  <p>{ calculatePostAge(job.datePosted, new Date().toLocaleString())}</p>
                  <div className="flex gap-5 -mt-8 text-gray-600">
                      <p> <FaLocationArrow className="text-xs" /> { job.location} </p>
                  </div>
              </Link>
            </li>
              )
              }) }
            <li>
              <ul className="flex gap-1 items-center justify-center py-7  border-transparent border border-b-gray-400 border-solid">
                <li className="page"><FaCaretLeft /></li>
                <li className="page current">1</li>
                <li className="page">2</li>
                <li className="page">3</li>
                <li className="page">4</li>
                <li className="page"><FaCaretRight /></li>
              </ul>
            </li>
        </ul> 
        <div className="lg:w-[30%]">
          <form>
            <div className="input_container">
                <h3>Search Keywords</h3>
                <input className=" text-[1rem] p-2" type="text" placeholder="e.g Web design" />
            </div>

            <div className="input_container">
                <h3>Category</h3>
                <select  className="text-[1rem] p-2"name="" id="">
                  <option value="1">Any Category</option>
                  <option value="1">Web designer</option>
                  <option value="1">Web develoer</option>
                  <option value="1">Graphic designer</option>
                  <option value="1">UX/UI designer</option>
                </select>
            </div>

            <div className="input_container">
                <h3>Location</h3>
                <input className="text-[1rem] p-2" type="text" placeholder="Location" />
            </div>

            <div className="input_container">
              <h3>Salary Range</h3>
              <input type="range" defaultValue={1000} max={5000} />
            </div>

            <div className="input_container">
                <h3>Job Type</h3>
                <Input type="checkbox" text="All Types" defaultChecked />
                <Input type="checkbox" text="Full Time" />
                <Input type="checkbox" text="Part Time" />
                <Input type="checkbox" text="Contract" />
            </div>

            <div className="input_container">
              <h3>Experience</h3>
              <Input type="radio" text="Any Experience" name="experience" defaultChecked />              
              <Input type="radio" text="1 to 2 Years" name="experience" />              
              <Input type="radio" text="2 to 3 Years" name="experience" />              
              <Input type="radio" text="3 to 4 Years" name="experience" />              
              <Input type="radio" text="4 to 5 Years" name="experience" />              
            </div>

            <div className="input_container">
              <h3>Date Posted</h3>
              <Input type="radio" name="posted" text="Any Day" defaultChecked/>             
              <Input type="radio" name="posted" text="Last Hour" />             
              <Input type="radio" name="posted" text="Last 24 Hours" />             
              <Input type="radio" name="posted" text="Last 7 Days" />             
              <Input type="radio" name="posted" text="Last 14 Days" />             
              <Input type="radio" name="posted" text="Last 30 Days" />             
            </div>

            <div className="input_container">
              <h3>Qualification</h3>
              <Input type="radio" text="Matriculation" name="matriculation" defaultChecked/>
              <Input type="radio" text="Graduate" name="graduate" />
              <Input type="radio" text="Masters Degree Holder" name="masters" />
            </div>
          </form>
        </div>
        </div>
        }
    </div>
  )
}
export default Jobs
