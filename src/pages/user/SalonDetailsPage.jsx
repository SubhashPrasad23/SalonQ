"use client"

import { useState, useEffect } from "react"
import { MapPin, Star, Clock, ChevronLeft, Heart, Share, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Mock data for salons
const mockBarbers = [
    {
        id: 1,
        name: "Classic Cuts Salon",
        location: "123 Main St, Downtown",
        distance: "0.8 miles away",
        rating: 4.8,
        reviews: 124,
        queueLength: 3,
        queueStatus: "OPEN",
        waitTime: "35 min",
        priceRange: "$$",
        popular: true,
        services: [
            { id: 1, name: "Haircut", price: 25, duration: "30 min" },
            { id: 2, name: "Beard Trim", price: 15, duration: "15 min" },
            { id: 4, name: "Facial", price: 40, duration: "30 min" },
        ],
        image: "/placeholder.svg?height=80&width=80",
        queueNumbers: [
            101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
            124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
            147, 148, 149, 150,
        ],
        bookedNumbers: [101, 102, 103, 104],
        currentQueueNumber: 101,
        phone: "+1 (555) 123-4567",
        email: "info@classiccuts.com",
        website: "www.classiccuts.com",
        hours: {
            monday: "9:00 AM - 6:00 PM",
            tuesday: "9:00 AM - 6:00 PM",
            wednesday: "9:00 AM - 6:00 PM",
            thursday: "9:00 AM - 6:00 PM",
            friday: "9:00 AM - 7:00 PM",
            saturday: "10:00 AM - 5:00 PM",
            sunday: "Closed",
        },
        photos: [
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
        ],
    },
]

export default function SalonDetailPage() {
    // For demo purposes, we'll use a fixed ID since we don't have router params
    const id = 1
    const [salon, setSalon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [selectedQueueNumber, setSelectedQueueNumber] = useState(null)
    const [selectedServices, setSelectedServices] = useState([])
    const [showBookingModal, setShowBookingModal] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        // Simulate API call
        const salonData = mockBarbers.find((b) => b.id === Number(id))
        setSalon(salonData)
        setLoading(false)
    }, [id])

    const handleQueueNumberSelect = (number) => {
        setSelectedQueueNumber(number)
        setSelectedServices([])
        setShowBookingModal(true)
    }

    const handleServiceToggle = (service) => {
        if (selectedServices.some((s) => s.id === service.id)) {
            setSelectedServices(selectedServices.filter((s) => s.id !== service.id))
        } else {
            setSelectedServices([...selectedServices, service])
        }
    }

    const calculateTotal = () => {
        return selectedServices.reduce((total, service) => total + service.price, 0)
    }

    const handleConfirmBooking = () => {
        if (selectedServices.length === 0) return

        // In a real app, this would make an API call to book the service
        setShowBookingModal(false)

        // Show success message
        alert(
            `Booking confirmed for queue #${selectedQueueNumber}:\n${selectedServices
                .map((s) => s.name)
                .join(", ")}\nTotal: $${calculateTotal()}`,
        )

        // Reset selections
        setSelectedQueueNumber(null)
        setSelectedServices([])
    }

    const renderQueueNumbers = () => {
        if (!salon || !salon.queueNumbers || salon.queueNumbers.length === 0) {
            return (
                <div className="text-center py-4">
                    <p className="text-[#474545]">No queue numbers available</p>
                </div>
            )
        }

        return (
            <div className="flex flex-wrap gap-2 mt-4">
                {salon.queueNumbers.slice(0, 50).map((number) => {
                    const isBooked = salon.bookedNumbers.includes(number)
                    const isCurrent = number === salon.currentQueueNumber

                    return (
                        <motion.div
                            key={number}
                            whileHover={!isBooked ? { scale: 1.05 } : {}}
                            whileTap={!isBooked ? { scale: 0.95 } : {}}
                            onClick={() => !isBooked && handleQueueNumberSelect(number)}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${isBooked
                                    ? "bg-[#323232] text-[#DDD0C8]  cursor-not-allowed"
                                    : "bg-[#f5f0ea] text-[#323232] border border-[#C2BEB5] hover:border-[#323232]"
                                } ${isCurrent ? "ring-2 ring-[#323232]" : ""}`}
                        >
                            {number}
                        </motion.div>
                    )
                })}
            </div>
        )
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-[#C2BEB5] rounded w-1/3 mb-6"></div>
                        <div className="h-64 bg-[#C2BEB5] rounded-xl mb-6"></div>
                        <div className="h-8 bg-[#C2BEB5] rounded w-1/4 mb-4"></div>
                        <div className="h-4 bg-[#C2BEB5] rounded w-full mb-2"></div>
                        <div className="h-4 bg-[#C2BEB5] rounded w-5/6 mb-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-40 bg-[#C2BEB5] rounded-xl"></div>
                            <div className="h-40 bg-[#C2BEB5] rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (!salon) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#323232] mb-4">Salon Not Found</h1>
                    <p className="text-[#474545] mb-6">The salon you're looking for doesn't exist or has been removed.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-[#323232] text-[#DDD0C8] rounded-lg hover:bg-[#474545] transition-colors"
                    >
                        Go Back
                    </motion.button>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="max-w-4xl mx-auto">
              

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-[#323232] rounded-xl shadow-sm overflow-hidden mb-6"
                >
                    <div className="relative h-64 bg-gradient-to-r from-[#474545] to-[#323232]">
                        <img src="/placeholder.svg" alt={salon.name} className="w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`p-2 rounded-full backdrop-blur-sm ${isFavorite ? "bg-[#DDD0C8] text-[#323232]" : "bg-white/20 text-white hover:bg-white/30"
                                    } transition-colors`}
                            >
                                <Heart className={`w-5 h-5 ${isFavorite ? "fill-[#323232]" : ""}`} />
                            </motion.button>
                         
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2 text-[#DDD0C8]">{salon.name}</h1>
                                    <div className="flex items-center mb-2">
                                        <MapPin className="w-4 h-4 mr-1 text-[#DDD0C8]" />
                                        <span className="text-sm text-[#DDD0C8]">{salon.location}</span>
                                        <span className="mx-2 text-[#C2BEB5]">•</span>
                                        <span className="text-sm text-[#DDD0C8]">{salon.distance}</span>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <Star className="w-4 h-4 text-amber-400 mr-1" />
                                        <span className="text-sm text-[#DDD0C8]">
                                            {salon.rating} ({salon.reviews} reviews)
                                        </span>
                                        <span className="mx-2 text-[#C2BEB5]">•</span>
                                        <span className="text-sm text-[#DDD0C8]">{salon.priceRange}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {salon.services.map((service) => (
                                            <span
                                                key={service.id}
                                                className="px-2 py-1 bg-[#DDD0C8]/20 backdrop-blur-sm rounded-full text-xs font-medium text-[#DDD0C8]"
                                            >
                                                {service.name} - ${service.price}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${salon.queueStatus === "OPEN" ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
                                        }`}
                                >
                                    {salon.queueStatus}
                                </div>
                                {salon.queueStatus === "OPEN" && (
                                    <>
                                        <span className="mx-2 text-[#C2BEB5]">•</span>
                                        <div className="flex items-center text-[#C2BEB5]">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span className="text-sm">Wait: {salon.waitTime}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="text-sm text-[#C2BEB5]">
                                Current: #{salon.currentQueueNumber} • Queue: {salon.queueLength} people
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className=""
                >
                    {salon.queueStatus === "OPEN" && (
                        <div className="">
                            <h2 className="text-xl font-bold text-[#323232] mb-4">Select Queue</h2>
                            {renderQueueNumbers()}
                        </div>
                    )}
                </motion.div>
            </div>

            <AnimatePresence>
                {showBookingModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setShowBookingModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#f5f0ea] text-[#323232] rounded-xl shadow-xl max-w-md w-full max-h-[85vh] overflow-hidden transform transition-all duration-300 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Fixed Header */}
                            <div className="flex justify-between items-center p-6 border-b border-[#C2BEB5]">
                                <h3 className="text-xl font-bold text-[#323232]">Select Services</h3>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShowBookingModal(false)}
                                    className="text-[#323232] hover:text-[#5a5a5a] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="flex items-center mb-4 p-3 bg-[#DDD0C8]/50 rounded-lg">
                                    <img
                                        src={salon.image || "/placeholder.svg"}
                                        alt={salon.name}
                                        className="w-10 h-10 rounded-full object-cover mr-3 border border-[#C2BEB5]"
                                    />
                                    <div>
                                        <h4 className="font-medium text-[#323232] text-sm">{salon.name}</h4>
                                        <p className="text-xs text-[#474545]">Queue #{selectedQueueNumber}</p>
                                    </div>
                                </div>

                                {/* Services List */}
                                <div className="mb-4">
                                    <p className="font-medium text-[#323232] mb-3 text-sm">Available Services:</p>
                                    <div className="space-y-2 max-h-48 overflow-y-auto">
                                        {salon.services.map((service) => (
                                            <motion.div
                                                key={service.id}
                                                
                                                className={`flex items-center justify-between p-2.5 border rounded-lg cursor-pointer transition-all ${selectedServices.some((s) => s.id === service.id)
                                                        ? "border-[#323232] bg-[#DDD0C8]"
                                                        : "border-[#C2BEB5] hover:bg-[#DDD0C8]/50"
                                                    }`}
                                                onClick={() => handleServiceToggle(service)}
                                            >
                                                <div className="flex items-center flex-1 min-w-0">
                                                    <div
                                                        className={`w-3.5 h-3.5 rounded-full border mr-2.5 flex items-center justify-center flex-shrink-0 ${selectedServices.some((s) => s.id === service.id)
                                                                ? "bg-[#323232] border-[#323232]"
                                                                : "border-[#C2BEB5]"
                                                            }`}
                                                    >
                                                        {selectedServices.some((s) => s.id === service.id) && (
                                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <span className="font-medium text-[#323232] text-sm block truncate">{service.name}</span>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-[#323232] text-sm ml-2">Rs{service.price}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {selectedServices.length > 0 && (
                                    <div className="bg-[#DDD0C8]/30 rounded-lg p-3 mb-4 border border-[#C2BEB5]">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-medium text-[#323232] text-sm">Selected ({selectedServices.length}):</p>
                                        </div>
                                        <div className="space-y-1 max-h-20 overflow-y-auto">
                                            {selectedServices.map((service) => (
                                                <div key={service.id} className="flex justify-between items-center text-xs">
                                                    <span className="text-[#323232] truncate">{service.name}</span>
                                                    <span className="text-[#323232] ml-2">Rs{service.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t border-[#C2BEB5] pt-2 mt-2">
                                            <div className="flex justify-between items-center">
                                                <p className="font-medium text-[#323232] text-sm">Total:</p>
                                                <p className="text-base font-bold text-[#323232]">Rs{calculateTotal()}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 border-t border-[#C2BEB5]">
                                <div className="flex space-x-3">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setShowBookingModal(false)}
                                        className="flex-1 px-4 py-3 bg-[#C2BEB5] rounded-lg text-[#323232] hover:bg-[#b5b1a8] transition-colors text-sm font-medium"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={selectedServices.length > 0 ? { scale: 1.03 } : {}}
                                        whileTap={selectedServices.length > 0 ? { scale: 0.97 } : {}}
                                        onClick={handleConfirmBooking}
                                        disabled={selectedServices.length === 0}
                                        className={`flex-1 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${selectedServices.length > 0
                                                ? "bg-[#323232] text-[#DDD0C8] hover:bg-[#474545]"
                                                : "bg-[#C2BEB5]/50 text-[#323232]/50 cursor-not-allowed"
                                            }`}
                                    >
                                        {selectedServices.length > 0
                                            ? `Book ${selectedServices.length} Service${selectedServices.length > 1 ? "s" : ""}`
                                            : "Select Services"}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
