import React, { useState } from 'react';
import { MapPin, Home, User, Briefcase, Menu, X, LogOut, Calendar, Settings } from 'lucide-react';

const Navbar = () => {
 



    return (
        <>
            <nav className="sticky top-0 z-50  p-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
                    <div className="hidden md:flex items-center gap-1 relative group">
                        <div className="relative flex items-center gap-1 ">
                            <MapPin size={18} className="" />
                            <p className="group-hover:text-white transition-colors">Bongaigaon, Assam</p>
                        </div>
                    </div>

                    <div className="">
                        <p className="relative text-3xl font-serif text-gray-900  px-4 py-1 tracking-widest">
                            Salon<span className="font-semibold ">Q</span>
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <ul className="space-y-2 text-xl  tracking-wider relative">
                            <li className="relative overflow-hidden cursor-pointer group">
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                                <div className="flex items-center gap-2">
                                    <Home size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>Home</span>
                                </div>
                            </li>
                            <li className="relative overflow-hidden cursor-pointer group">
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                                <div className="flex items-center gap-2">
                                    <Briefcase size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>Become a Partner</span>
                                </div>
                            </li>
                            <li className="relative overflow-hidden cursor-pointer group" onClick={(e) => toggleAccountPopup(e)}>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>Account</span>
                                </div>
                                
                               
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden"></div>
                </div>
            </nav>

            <div className="md:hidden bg-[#DDD0C8] fixed bottom-0 left-0 right-0  shadow-lg border-t border-gray-200 z-50">
                <div className="flex justify-around py-2">
                    <button className="flex flex-col items-center p-2 text-gray-700 hover:text-purple-600 transition-colors">
                        <div className="relative">
                            <Home size={20} />
                            <span className="absolute -top-1 -right-1 h-2 w-2 bg-pink-500 rounded-full"></span>
                        </div>
                        <span className="text-xs mt-1">Home</span>
                    </button>
                    <button className="flex flex-col items-center p-2 text-gray-700 hover:text-purple-600 transition-colors">
                        <Briefcase size={20} />
                        <span className="text-xs mt-1">Partner</span>
                    </button>
                    <div className="relative">
                        <button 
                            className="flex flex-col items-center p-2 text-gray-700 hover:text-purple-600 transition-colors"
                        >
                            <User size={20} />
                            <span className="text-xs mt-1">Account</span>
                        </button>
                        
                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;