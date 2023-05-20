import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { jobsLoader, jobLoader, profileLoader } from './utils/loaders'
import { signupAction, postJobAction} from './utils/actions'
import { retrieveJobs } from './data/jobs'
import { retrieveUsers } from './data/users'
import Root from './layouts/Root'
import Jobs from './routes/Jobs'
import Home from './routes/Home'
import Job from './routes/Job'
import About from './routes/About'
import PostJob from './routes/PostJob'
import Profile from './routes/Profile'

retrieveJobs()
retrieveUsers()

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
          path: 'jobs/:jobId',
          element: <Job />,
          loader: jobLoader
        },
        {
          path: 'post-job',
          element: <PostJob />,
          action: postJobAction
        },
        {
          path: 'signup',
          action: signupAction
        },
        {
          path: 'profile',
          element: <Profile />,
          loader: profileLoader
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