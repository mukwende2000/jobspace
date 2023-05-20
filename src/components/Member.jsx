import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

function Member({ img, title, name}) {
  return (
    <div className="mb-10 p-5 text-white flex flex-col items-start justify-end relative overflow-hidden w-[90%] h-[40rem] md:h-[27rem] group cursor-pointer">
        <img className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover cursor-pointer group-hover:scale-110 group-hover:rotate-3 duration-300" src={img} alt={name} />
        <div className="opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100  transition-all duration-500 relative z-20">
            <p className="mb-0 font-extrabold text-left text-2xl">
                { name }
            </p>
            <p className="text-left mt-0 relative z-20 "> { title } </p>
            <div className="flex gap-5 relative z-20 ">
                <FaFacebook className="text-2xl"  />
                <FaTwitter className="text-2xl" />
                <FaLinkedin className="text-2xl" />
                <FaInstagram className="text-2xl" />
            </div>

        </div>
        <div className="hidden group-hover:block absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 z-10" />
    </div>
  )
}

export default Member