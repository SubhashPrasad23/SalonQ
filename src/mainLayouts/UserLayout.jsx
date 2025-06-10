import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/user/Navbar"

const UserLayout = () => {
  return (
      <div className="flex flex-col h-screen bg-[#DDD0C8] text-[#323232]">
          <Navbar />
          <div className="flex-1 overflow-auto">
              <Outlet />
          </div>
      </div>
  )
}

export default UserLayout