import { useState } from "react"
import { Calendar, Clock, Phone, CheckCircle, XCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Booking = () => {
    const [activeTab, setActiveTab] = useState("upcoming")
    const [showQueueModal, setShowQueueModal] = useState(false)
    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedQueueNumber, setSelectedQueueNumber] = useState(null)
    const [newBooking, setNewBooking] = useState({
        customerName: "",
        phone: "",
        service: "",
    })

    const queueNumbers = Array.from({ length: 20 }, (_, i) => i + 101)
    const bookedNumbers = [101, 102, 103, 105, 107]

    const bookings = {
        upcoming: [
            {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            },
            {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            }, {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            }, {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            }, {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            }, {
                id: 1,
                queueNumber: 101,
                customerName: "John Doe",
                phone: "+91 98765 43210",
                service: "Haircut + Beard Trim",
                time: "10:30 AM",
                amount: 45,
                status: "confirmed",
            },
            {
                id: 2,
                queueNumber: 102,
                customerName: "Mike Smith",
                phone: "+91 98765 43211",
                service: "Hair Wash",
                time: "11:15 AM",
                amount: 25,
                status: "confirmed",
            },
            {
                id: 3,
                queueNumber: 103,
                customerName: "David Wilson",
                phone: "+91 98765 43212",
                service: "Facial",
                time: "12:00 PM",
                amount: 60,
                status: "confirmed",
            },
        ],
        completed: [
            {
                id: 4,
                queueNumber: 98,
                customerName: "Tom Brown",
                phone: "+91 98765 43213",
                service: "Haircut",
                completedAt: "9:45 AM",
                amount: 30,
                status: "completed",
            },
            {
                id: 5,
                queueNumber: 99,
                customerName: "Alex Johnson",
                phone: "+91 98765 43214",
                service: "Beard Trim",
                completedAt: "10:00 AM",
                amount: 20,
                status: "completed",
            },
        ],
        cancelled: [
            {
                id: 6,
                queueNumber: 100,
                customerName: "Robert Davis",
                phone: "+91 98765 43215",
                service: "Hair Color",
                cancelledAt: "9:30 AM",
                amount: 80,
                status: "cancelled",
                reason: "Customer emergency",
            },
        ],
    }

    const handleCompleteBooking = (bookingId) => {
        console.log("Completing booking:", bookingId)

    }

    const handleCancelBooking = (bookingId) => {
        console.log("Cancelling booking:", bookingId)

    }

    const handleQueueNumberClick = (number) => {
        if (!bookedNumbers.includes(number)) {
            setSelectedQueueNumber(number)
            setShowBookingModal(true)
        }
    }

    const handleCreateBooking = () => {
        if (newBooking.customerName && newBooking.phone && newBooking.service) {
            console.log("Creating booking:", {
                queueNumber: selectedQueueNumber,
                ...newBooking,
            })
            setShowBookingModal(false)
            setNewBooking({ customerName: "", phone: "", service: "" })
            setSelectedQueueNumber(null)
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "confirmed":
                return "bg-blue-100 text-blue-800"
            case "completed":
                return "bg-green-100 text-green-800"
            case "cancelled":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="h-screen flex flex-col p-6">
            <div className="backdrop-blur-md z-10 bg-transparent">
                <h1 className="text-3xl font-serif font-bold text-[#323232] mb-2">
                    Bookings Management
                </h1>
                <p className="text-gray-600">
                    Manage your appointments and queue
                </p>
            </div>



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-md mb-8"
            >
                <h2 className="text-xl font-semibold text-[#323232] mb-4">Current Queue</h2>
                <div className="flex flex-wrap gap-2">
                    {queueNumbers.map((number) => {
                        const isBooked = bookedNumbers.includes(number)
                        return (
                            <button
                                key={number}
                                onClick={() => handleQueueNumberClick(number)}
                                className={`w-12 h-12 rounded-lg text-sm font-medium transition-all ${isBooked
                                    ? "bg-[#323232] text-white cursor-default"
                                    : "bg-[#f5f0ea] text-[#323232] border border-[#C2BEB5] hover:border-[#323232] cursor-pointer"
                                    }`}
                                disabled={isBooked}
                            >
                                {number}
                            </button>
                        )
                    })}
                </div>
                <p className="text-sm text-gray-600 mt-2">Click on available numbers to create manual bookings</p>
            </motion.div>


            <div className="bg-white rounded-lg shadow-md mb-6">
                <div className="flex border-b">
                    {[
                        { key: "upcoming", label: "Upcoming", count: bookings.upcoming.length },
                        { key: "completed", label: "Completed", count: bookings.completed.length },
                        { key: "cancelled", label: "Cancelled", count: bookings.cancelled.length },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === tab.key
                                ? "text-[#323232] border-b-2 border-[#323232] bg-[#f5f0ea] "
                                : "text-gray-600 hover:text-[#323232]"
                                }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="w-full flex-1 overflow-y-auto py-5 hide-scrollbar">
                <div className="space-y-4">
                    {bookings[activeTab].map((booking) => (
                        <motion.div
                            key={booking.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg p-6 shadow-md"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#323232] rounded-full flex items-center justify-center text-white font-semibold">
                                            {booking.queueNumber}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#323232]">{booking.customerName}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Phone size={14} />
                                                    <span>{booking.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    <span>{booking.time || booking.completedAt || booking.cancelledAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Service: </span>
                                            <span className="font-medium">{booking.service}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-600">Amount: </span>
                                            <span className="font-medium text-green-600">₹{booking.amount}</span>
                                        </div>
                                    </div>

                                    {booking.reason && (
                                        <div className="mt-2">
                                            <span className="text-sm text-gray-600">Reason: </span>
                                            <span className="text-sm">{booking.reason}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 lg:w-48">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium text-center ${getStatusColor(booking.status)}`}
                                    >
                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </span>

                                    {activeTab === "upcoming" && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleCompleteBooking(booking.id)}
                                                className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                                            >
                                                <CheckCircle size={16} />
                                                Done
                                            </button>
                                            <button
                                                onClick={() => handleCancelBooking(booking.id)}
                                                className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
                                            >
                                                <XCircle size={16} />
                                                Cancel
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {bookings[activeTab].length === 0 && (
                        <div className="bg-white rounded-lg p-8 text-center shadow-md">
                            <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No {activeTab} bookings</h3>
                            <p className="text-gray-600">
                                {activeTab === "upcoming" && "No upcoming appointments scheduled."}
                                {activeTab === "completed" && "No completed appointments today."}
                                {activeTab === "cancelled" && "No cancelled appointments today."}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {showQueueModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setShowQueueModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#323232]">Select Queue Number</h3>
                                <button onClick={() => setShowQueueModal(false)} className="text-gray-500 hover:text-gray-700">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="grid grid-cols-5 gap-2 mb-4">
                                {queueNumbers.slice(0, 15).map((number) => {
                                    const isBooked = bookedNumbers.includes(number)
                                    return (
                                        <button
                                            key={number}
                                            onClick={() => {
                                                if (!isBooked) {
                                                    setSelectedQueueNumber(number)
                                                    setShowQueueModal(false)
                                                    setShowBookingModal(true)
                                                }
                                            }}
                                            className={`w-12 h-12 rounded-lg text-sm font-medium transition-all ${isBooked
                                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                : "bg-[#f5f0ea] text-[#323232] border border-[#C2BEB5] hover:border-[#323232]"
                                                }`}
                                            disabled={isBooked}
                                        >
                                            {number}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showBookingModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setShowBookingModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-[#323232]">Book Queue #{selectedQueueNumber}</h3>
                                <button onClick={() => setShowBookingModal(false)} className="text-gray-500 hover:text-gray-700">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name *</label>
                                    <input
                                        type="text"
                                        value={newBooking.customerName}
                                        onChange={(e) => setNewBooking({ ...newBooking, customerName: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                        placeholder="Enter customer name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        value={newBooking.phone}
                                        onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                        placeholder="Enter phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                                    <select
                                        value={newBooking.service}
                                        onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Haircut">Haircut - ₹30</option>
                                        <option value="Beard Trim">Beard Trim - ₹20</option>
                                        <option value="Haircut + Beard Trim">Haircut + Beard Trim - ₹45</option>
                                        <option value="Hair Wash">Hair Wash - ₹25</option>
                                        <option value="Facial">Facial - ₹60</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => setShowBookingModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateBooking}
                                    disabled={!newBooking.customerName || !newBooking.phone || !newBooking.service}
                                    className="flex-1 px-4 py-2 bg-[#323232] text-white rounded-lg hover:bg-[#5a5a5a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Create Booking
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

    )
}



export default Booking