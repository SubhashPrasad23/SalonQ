import { Clock, MapPin, Star } from 'lucide-react'
import React from 'react'

const BarberCard = ({ barber }) => {
    return (
        <div className="p-6 text-gray-200">
            <div className="flex items-start">
                <img
                    src={barber?.image || "/placeholder.svg"}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold ">{barber?.name}||Barber name</h3>
                        open
                    </div>
                    <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4  mr-1" />
                        <span className="text-sm ">{barber?.location}||location</span>
                    </div>
                    <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm ">
                            {barber?.rating} ({barber?.reviews})
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {barber?.priceRange}||40 rs
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{barber?.distance}||4</span>
                    </div>
                </div>
            </div>


            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                           
                        </span>
                    </div>
                    {false && (
                        <div className="flex items-center">
                            <span className="text-sm font-medium text-rose-600 dark:text-rose-400">View Profile</span>
                            <ChevronRight className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BarberCard