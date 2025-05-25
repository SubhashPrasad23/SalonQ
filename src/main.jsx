import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/user/Home.jsx'
import Booking from './pages/user/Booking.jsx'
import SalonDetailPage from './pages/user/SalonDetailsPage.jsx'
import Profile from './pages/user/Profile.jsx'
import BecomePartner from './pages/user/BecomePartner.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/salon-page",
        element: <SalonDetailPage />
      },
      {
        path: "/mybooking",
        element: <Booking />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
       {
        path: "/become-a-partner",
        element: <BecomePartner />,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
