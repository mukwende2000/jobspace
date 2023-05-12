import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root'
import Jobs, { loader as jobsLoader } from './routes/Jobs'
import Home from './routes/Home'
import Job, { loader as jobLoader} from './routes/Job'
import About from './routes/About'
import PostJob, { action as PostJobAction} from './routes/PostJob'
import SignUp, { action as signupAction} from './routes/SignUp'
import Profile, { loader as profileLoader} from './routes/Profile'

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
          action: PostJobAction
        },
        {
          path: 'signup',
          element: <SignUp />,
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
