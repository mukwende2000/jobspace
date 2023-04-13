import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg"

export default function Home() {
  return (
    <section className="mb-8 mt-7">
      <div>
        <h1 className="uppercase text-5xl font-[700]">hello, we are jobspace</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam quo doloremque quia ullam amet excepturi, voluptas provident 
          repellat explicabo fuga vitae nemo sequi, ab modi repellendus nulla. 
          Aperiam, quas libero.
        </p>
        <Link to="jobs" className="p-3 cursor-pointer transition-all duration-500 border-white border-solid border rounded text-sm uppercase bg-white text-blue-900 hover:bg-transparent hover:text-white font-bold">Find a Job</Link>
      </div>
      <img src={ hero } alt="A man on a laptop" className="" />
    </section>
  )
}
