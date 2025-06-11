import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import EventHighlights from './EventHighlights'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import AllCourses from "./pages/AllCourses";
import Business from "./pages/Business";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import InstructorsSection from './InstructorsSection'
import UpcomingEventSection from './UpcomingEventSection'
import Logos from './Logos'
import Footer from './Footer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <AllCourses /> },
      { path: "business", element: <Business /> },
      { path: "design", element: <Design /> },
      { path: "development", element: <Development /> },
      { path: "marketing", element: <Marketing /> },
    ],
  },
]);

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <EventHighlights/>
    <RouterProvider router={router} />
    <InstructorsSection/>
    <UpcomingEventSection/>
    <Logos/>

    <Footer/>
    </>
  )
}

export default App