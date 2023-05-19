import { FaBriefcase, FaCaretLeft, FaCaretRight, FaLocationArrow, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

// helper functions
import { calculatePostAge, shortedDescription } from "../utils/functions";
import { useEffect } from "react";
import useStateProvider, { useDispatchProvider } from "../Contexts/ContextProvider";

export default function Jobs() {
    const jobs = useLoaderData()
    const navigate = useNavigate()
    const { dispatch } = useDispatchProvider()
    const { currentUser } = useStateProvider()
    
    useEffect(() => {
      const usersDb = JSON.parse(localStorage.getItem('users'))
      const filteredDb = usersDb.filter(user => user?.username !== currentUser?.username)
      const nextUser = {...currentUser}
      console.log(nextUser)
      nextUser.jobs = []
      jobs?.map(job => {
          if(job.poster?.username === currentUser?.username) {
              nextUser.jobs.push(job)
              console.log(nextUser)
              dispatch({type: "setCurrentUser", payload: {currentUser: nextUser}})
          } else {
              console.log('No match found')
          }
      })
      filteredDb.push(nextUser)
      localStorage.setItem('users', JSON.stringify(filteredDb))
    },[])

     return (

    <div className="md:px-20">
        <button onClick={ () => navigate('/post-job') } className="cursor-pointer bg-sky-500 text-white duration-200 hover:text-sky-500 border-solid border hover:border-sky-500 hover:bg-white px-5 py-3 text-lg">Post A Job</button>
        {jobs ? <div className="lg:flex gap-24"> 
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
                  <div className="flex gap-5 -mt-8 text-gray-600">
                      <p> <FaLocationArrow className="text-xs" /> { job.location} </p>
                  </div>
              </Link>
            </li>
              )
              }) }
            <li>
              <ul className="flex gap-1 items-center justify-center py-7  border-transparent border border-b-gray-400 border-solid">
                <li className="transition-colors duration-200 cursor-pointer  px-4 py-2 hover:bg-sky-500 hover:text-white"><FaCaretLeft /></li>
                <li className="transition-colors duration-200 cursor-pointer bg-sky-500 text-white px-4 py-2">1</li>
                <li className="transition-colors duration-200 cursor-pointer px-4 py-2 hover:bg-sky-500 hover:text-white">2</li>
                <li className="transition-colors duration-200 cursor-pointer px-4 py-2 hover:bg-sky-500 hover:text-white">3</li>
                <li className="transition-colors duration-200 cursor-pointer px-4 py-2 hover:bg-sky-500 hover:text-white">4</li>
                <li className="transition-colors duration-200 cursor-pointer px-4 py-2 hover:bg-sky-500 hover:text-white"><FaCaretRight /></li>
              </ul>
            </li>
        </ul> 
        <div className="lg:w-[30%]">
          <form action="">
            <div className=" flex flex-col border-solid border border-gray-400 my-5 px-3 py-5">
                <h3>Search Keywords</h3>
                <input className=" text-[1rem] p-2" type="text" placeholder="e.g Web design" />
            </div>

            <div className=" flex flex-col border-solid border border-gray-400 my-5 px-3 py-5">
                <h3>Category</h3>
                <select  className="text-[1rem] p-2"name="" id="">
                  <option value="1">Any Category</option>
                  <option value="1">Web designer</option>
                  <option value="1">Web develoer</option>
                  <option value="1">Graphic designer</option>
                  <option value="1">UX/UI designer</option>
                </select>
            </div>

            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
                <h3>Location</h3>
                <input className="text-[1rem] p-2" type="text" placeholder="Location" />
            </div>

            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
              <h3>Salary Range</h3>
              <input type="range" defaultValue={1000} max={5000} />
            </div>

            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
                <h3>Job Type</h3>
                <label className="cursor-pointer" htmlFor="all">
                  <input className="mr-3" type="checkbox" id="" />
                  All Types
                </label>
                <label className="cursor-pointer" htmlFor="full">
                  <input className="mr-3" type="checkbox" id="full" />
                  Full Time
                </label>
                <label className="cursor-pointer" htmlFor="part">
                  <input className="mr-3" type="checkbox" id="part" />
                  Part Time
                </label>
                <label className="cursor-pointer" htmlFor="contract">
                  <input className="mr-3" type="checkbox" id="contract" />
                  Contract
                </label>
            </div>

            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
              <h3>Experience</h3>
              <label className="cursor-pointer" htmlFor="any">    
                <input className="mr-3" type="radio" id="any" name="posted"/>
                Any Experience
              </label>
              <label className="cursor-pointer" htmlFor="1 to 2">
                <input className="mr-3" type="radio" id="1 to 2" name="posted"/>
                1 to 2 Years
              </label>
              <label className="cursor-pointer" htmlFor="2 to 3">
                <input className="mr-3" type="radio" id="2 to 3" name="posted"/>
                2 to 3 Years
              </label>
              <label className="cursor-pointer" htmlFor="3 to 4">
                <input className="mr-3" type="radio" id="3 to 4" name="posted"/>
                3 to 4 Years
              </label>
              <label className="cursor-pointer" htmlFor="4 to 5">
                <input className="mr-3" type="radio" id="4 to 5" name="posted" value={'Any Date'} />
                4 to 5 Years
              </label>              
            </div>
            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
              <h3>Date Posted</h3>
              <label className="cursor-pointer" htmlFor="any">
                <input className="mr-3" type="radio"id="any" name="posted"/>
                Any Date
              </label>
              <label className="cursor-pointer" htmlFor="last hour">
                <input className="mr-3" type="radio" id="last hour" name="posted"/>
                Last Hour
              </label>
              <label className="cursor-pointer" htmlFor="last 24">
                <input className="mr-3" type="radio" id="last 24" name="posted"/>
                Last 24 Hours
              </label>
              <label className="cursor-pointer" htmlFor="last 7">
                <input className="mr-3" type="radio" id="last 7" name="posted"/>
                Last 7 Days
              </label>
              <label className="cursor-pointer" htmlFor="last 14">
                <input className="mr-3" type="radio" id="last 14" name="posted"/>
                Last 14 Days
              </label>
              <label className="cursor-pointer" htmlFor="last 30">
                <input className="mr-3" type="radio" id="last 30" name="posted" value={'Any Date'} />
                Last 30 Days
              </label>              
            </div>

            <div className="flex flex-col border-solid border border-gray-400 my-5 p-2">
              <h3>Qualification</h3>
              <label className="cursor-pointer" htmlFor="matriculation">
                <input className="mr-3" type="radio" id="matriculation" name="qualification"/>
                Matriculation
              </label>
              <label className="cursor-pointer" htmlFor="graduation">
                <input className="mr-3" type="radio" id="graduation" name="qualification"/>
                Graduate
              </label>
              <label className="cursor-pointer" htmlFor="masters">
                <input className="mr-3" type="radio" id="masters" name="qualification"/>
                Master Degree Holder
              </label>              
            </div>
          </form>
        </div>
        </div>
        : <h1>Database is empty, looks like there are jobs, start a business</h1>
        }
    </div>
  )
}

export async function loader() {
    const response = await JSON.parse(localStorage.getItem("jobs")) 
    return response
}
