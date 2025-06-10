import { BarChart3, Calendar, User, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {

    const navItems = [
        {
            name: "Dashboard",
            to: "",
            icon: <BarChart3 size={20} />,
        },
        {
            name: "Availability",
            to: "availability",
            icon: <Settings size={20} />,
        },
        {
            name: "Bookings",
            to: "booking",
            icon: <Calendar size={20} />,
        },
        {
            name: "Profile",
            to: "profile",
            icon: <User size={20} />,
        },
    ]


    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`fixed  h-full bg-[#323232] text-[#DDD0C8] shadow-2xl border-r border-[#DDD0C8]/20 transition-all duration-300 z-40 ${isCollapsed ? 'w-16' : 'w-72'
            }`}>

            <div className="flex items-center justify-between p-4 border-b border-[#DDD0C8]/20">
                <h1 className={`${isCollapsed ? "hidden" : "block"} text-xl font-serif tracking-widest text-[#DDD0C8] hover:text-[#E8DDD4] transition-colors cursor-pointer`}>
                    Salon<span className="font-semibold">Q</span>
                </h1>

                <button
                    onClick={toggleSidebar}
                    className=" p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            <nav className="flex-1 px-3 py-6">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            end={item.to === ""}
                            className={({ isActive }) =>
                                `cursor-pointer w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${isActive
                                    ? "bg-gradient-to-r from-[#DDD0C8] to-[#C5B8B0] text-[#323232] shadow-lg"
                                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                                }`
                            }
                        >
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            {!isCollapsed && (
                                <span className="truncate">{item.name}</span>
                            )}
                        </NavLink>
                    ))}

                </ul>
            </nav>

            <div className="border-t border-[#DDD0C8]/20 p-3">
                <button
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-200 transform hover:scale-105 ${isCollapsed ? 'justify-center' : ''
                        }`}
                    title={isCollapsed ? 'Logout' : ''}
                >
                    <LogOut size={20} />
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
        </div>
    )
}

export default Sidebar