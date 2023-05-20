import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope  } from 'react-icons/fa'
import ListItem from './ListItem'
import logo from '../assets/images/logo.jpg'

function Footer() {
  return (
    <footer className="bg-zinc-800 pr-5 py-5">
       <div className='md:flex items-start justify-between flex-wrap'>
        <ul>
            <li>
                <img src={logo} alt="Jobspace logo" className='w-12 h-12 rounded-full' />
            </li>
            <li>
                <p className='text-white font-extralight w-60'>
                    Lorem ipsum dolor sit amet consecte tur 
                    adipisicing elit. Maiores officiis quod quo id inventore quis.
                </p>
            </li>
            <li>
                <div className='flex gap-5'>
                        <FaFacebook aria-label='Facebook' className='cursor-pointer hover:text-pink-500 text-white text-3xl' />
                        <FaTwitter aria-label='Twitter' className='cursor-pointer text-white text-3xl hover:text-pink-500' />
                        <FaLinkedin aria-label='Linkedin' className='cursor-pointer text-white text-3xl hover:text-pink-500' />
                </div>
            </li>
        </ul>
        <ul className='my-16 md:my-5'>
            <li className='text-white text-2xl'>Quick links</li>
            <ListItem footer name={'Post New Job'} />
            <ListItem footer name='Job List' />
            <ListItem footer name='Candidate List' />
            <ListItem footer name='Employer List' />
            <ListItem footer name='Browser Categories' />
        </ul>
        <ul>
            <li className='text-white text-2xl'>Trending Jobs</li>
            <ListItem footer name={'React.Js Developer'} />
            <ListItem footer name='Svelte.Js Developer' />
            <ListItem footer name='Designer' />
            <ListItem footer name='Systems Engineer' />
            <ListItem footer name='Browser Others' />
        </ul>
        <ul className='md:w-4/12'>
            <li className='text-white text-2xl'>Newsletter</li>
            <p className='text-zinc-500 text-sm w-10/12'>
                Subscrie to Jobspace to get latest job, resume,
                company listing and blg post to stay upto date
            </p>
            <div className='outline outline-zinc-600 outline-1 flex items-center w-10/12 mr-auto'>
                <input type="text" placeholder='Enter your email' className='px-2 border-none text-white text-lg bg-zinc-600 h-10 w-full placeholder:text-white placeholder:text-lg focus:outline-none' />
                <button className='w-2/12 h-10 bg-zinc-600 cursor-pointer hover:bg-zinc-400 transition-colors duration-500'> <FaEnvelope  className='text-2xl' color='white'/> </button>
            </div>
        </ul>
       </div>
    </footer>    
)
}
export default Footer
