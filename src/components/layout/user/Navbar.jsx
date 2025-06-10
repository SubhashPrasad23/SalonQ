import React, { useState } from 'react';
import { MapPin, Home, User, Briefcase,  LogOut, Calendar, } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate();
    const [accountPopup, setAccountPopup] = useState(false);

    const toggleAccountPopup = (e) => {
        e.preventDefault();
        setAccountPopup(!accountPopup);
    };
   const logOutHandler=()=>{
navigate("/login")
   }
    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#DDD0C8]  p-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
                    <div className="hidden md:flex items-center gap-1 relative group">
                        <div className="relative flex items-center gap-1 text-[#323232] hover:text-[#5a5a5a] transition-colors">
                            <MapPin size={18} className="stroke-[#323232]" />
                            <p className="font-medium">Bongaigaon, Assam</p>
                        </div>
                    </div>
                    <h2 className="relative text-3xl font-serif text-[#323232] px-4 py-1 tracking-widest">
                        Salon<span className="font-semibold text-[#323232]">Q</span>
                    </h2>
                    <div className="hidden md:block">
                        <ul className="flex space-x-5 text-xl tracking-wider relative text-[#323232]">
                            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[#323232]" : "hover:text-[#5a5a5a] transition-colors"}>
                                <li className="py-1">Home</li>
                            </NavLink>
                            
                            <NavLink to="/become-a-partner" className={({ isActive }) => isActive ? "border-b-2 border-[#323232]" : "hover:text-[#5a5a5a] transition-colors"}>
                                <li className="py-1">Become a Partner</li>
                            </NavLink>
                            <li className="py-1 cursor-pointer relative hover:text-[#5a5a5a] transition-colors" onClick={(e) => toggleAccountPopup(e)}>
                                Account
                                <AnimatePresence>
                                    {accountPopup && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#f5f0ea] border border-[#C2BEB5] overflow-hidden z-50"
                                        >
                                            <div className="py-1">
                                                <NavLink to="/profile" className="block px-4 py-2 text-sm text-[#323232] hover:bg-[#e5dfd7] transition-colors">
                                                    <User size={16} className="inline mr-2" />
                                                    Profile
                                                </NavLink>
                                                <NavLink to="/mybooking" className="block px-4 py-2 text-sm text-[#323232] hover:bg-[#e5dfd7] transition-colors">
                                                    <Calendar size={16} className="inline mr-2" />
                                                    Booking
                                                </NavLink>
                                               
                                                <div className="border-t border-[#C2BEB5]"></div>
                                                <button onClick={logOutHandler} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-[#e5dfd7] transition-colors">
                                                    <LogOut size={16} className="inline mr-2" />
                                                    Sign out
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="md:hidden bg-[#DDD0C8] fixed bottom-0 left-0 right-0 shadow-lg border-t border-[#C2BEB5] z-50">
                <div className="flex justify-around py-2">
                    <NavLink to="/" className={({ isActive }) =>
                        `flex flex-col items-center p-2 transition-colors ${isActive ? 'text-[#323232]' : 'text-gray-500 hover:text-[#323232]'}`
                    }>
                        <div className="relative">
                            <Home size={20} />
                            <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#323232] rounded-full"></span>
                        </div>
                        <span className="text-xs mt-1">Home</span>
                    </NavLink>
                    <NavLink to="/partner" className={({ isActive }) =>
                        `flex flex-col items-center p-2 transition-colors ${isActive ? 'text-[#323232]' : 'text-gray-500 hover:text-[#323232]'}`
                    }>
                        <Briefcase size={20} />
                        <span className="text-xs mt-1">Partner</span>
                    </NavLink>
                    <NavLink to="/profile" className={({ isActive }) =>
                        `flex flex-col items-center p-2 transition-colors ${isActive ? 'text-[#323232]' : 'text-gray-500 hover:text-[#323232]'}`
                    }>
                        <User size={20} />
                        <span className="text-xs mt-1">Account</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;
