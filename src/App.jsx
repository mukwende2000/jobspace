import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './layouts/Root'
import Jobs, { loader as jobsLoader } from './routes/Jobs'
import Home from './routes/Home'
import Job, { loader as jobLoader} from './routes/Job'
import About from './routes/About'
import People from './routes/People'
import PostJob from './routes/PostJob'
import SignUp from './routes/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'jobs',
          element: <Jobs />,
          loader: jobsLoader
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'people',
          element: <People />
        },
        {
          path: 'jobs/:jobId',
          element: <Job />,
          loader: jobLoader
        },
        {
          path: 'post-job',
          element: <PostJob />
        },
        {
          path: 'signup',
          element: <SignUp />
        }
      ]
    }
  ])

  return (
    <div className="bg-red">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
