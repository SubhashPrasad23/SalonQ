import React from 'react';
import { MapPin, Star, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const BarberCard = ({ barber }) => {
    return (
        <div className="p-4">
            <div className="flex items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#323232] border-2 border-[#C2BEB5] mr-3 flex-shrink-0">
                    <img
                        src={barber.image || "/placeholder.svg"}
                        alt={barber.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#f5f0ea] truncate">{barber.name}</h3>
                    <div className="flex items-center text-[#C2BEB5] text-sm mt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        <span className="truncate">{barber.location}</span>
                    </div>
                    <div className="flex items-center text-[#C2BEB5] text-sm mt-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 mr-1" />
                        <span>{barber.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{barber.reviews} reviews</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${barber.queueStatus === "OPEN"
                            ? "bg-green-900/30 text-green-400"
                            : "bg-red-900/30 text-red-400"
                        }`}>
                        {barber.queueStatus}
                    </div>
                    {barber.queueStatus === "OPEN" && (
                        <div className="flex items-center ml-2 text-[#C2BEB5] text-xs">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            <span>{barber.waitTime}</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center text-[#C2BEB5] text-xs">
                    <Users className="w-3.5 h-3.5 mr-1" />
                    <span>{barber.queueLength} in queue</span>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {barber.services.slice(0, 3).map((service) => (
                    <span
                        key={service.id}
                        className="px-2 py-1 text-[#323232] bg-[#DDD0C8] rounded-full text-xs font-semibold"
                    >
                        {service.name} - RS {service.price}
                    </span>
                ))}
             
            </div>

           
        </div>
    );
};

export default BarberCard;
