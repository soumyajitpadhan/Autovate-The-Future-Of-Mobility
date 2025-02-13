import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Technology from './Components/Technology/Technology'
import About from './Components/About/About'
import Careers from './Components/Careers/Careers'
import AOS from 'aos'
import 'aos/dist/aos.css'
import JobDetails from './Components/Careers/JobDetails'
import ApplicationForm from './Components/Careers/ApplicationForm'

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const routeData = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/technology',
      element: <Technology />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/careers',
      element: <Careers />
    },
    {
      path: '/job/:id',
      element: <JobDetails />
    },
    {
      path: '/job-application/:jobId',
      element: <ApplicationForm />
    }
  ]

  return (
    <div>
      <Routes>
        {
          routeData.map((route) => {
            return (
              <Route path={route.path} element={route.element} />
            )
          })
        }
      </Routes>
    </div>
  )
}

export default App
