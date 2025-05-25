import { Bell, Scissors } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
        <header className="sticky top-0 bg-gray-500 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="">
                        
                        <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                            SalonQ
                        </h1>
                    </div>
                    <div className="h-10 w-10 bg-white rounded-full">
                      
                      
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar