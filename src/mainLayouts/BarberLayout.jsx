import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/barber/Sidebar"

const BarberLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className="w-full min-h-screen bg-[#DDD0C8] text-[#323232]">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`flex-1  transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-72'
                }`}>
                <Outlet />
            </div>
        </div>)
}

export default BarberLayout




