import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/user/Home.jsx'
import Booking from './pages/user/Booking.jsx'
import SalonDetailPage from './pages/user/SalonDetailsPage.jsx'
import BecomePartner from './pages/user/BecomePartner.jsx'
import Dashboard from './pages/barber/Dashboard.jsx'
import Profile from './pages/user/Profile.jsx'
import BarberProfile from './pages/barber/Profile.jsx'
import Availibility from './pages/barber/Availibility.jsx'
import BarberBooking from './pages/barber/Booking.jsx'
import Login from './pages/auth/Login.jsx'
import BarberLayout from './mainLayouts/BarberLayout.jsx'


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
  }, {
    path: "/dashboard-barber",
    element: <BarberLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "availability",
        element: <Availibility />
      },
      {
        path: "booking",
        element: <BarberBooking />
      }, {
        path: "profile",
        element: <BarberProfile />
      },
    ]
  }
  ,
  {
    path: "/login",
    element: <Login />,
  },
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
