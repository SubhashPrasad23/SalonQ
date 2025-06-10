import { useState } from "react"
import { Clock, XCircle, CheckCircle, AlertCircle, Calendar } from "lucide-react"

const Availability = () => {
    const [shopStatus, setShopStatus] = useState("open")
    const [closedUntil, setClosedUntil] = useState("")
    const [workingHours, setWorkingHours] = useState({
        monday: { day: "Monday", open: "09:00", close: "18:00" },
        tuesday: { day: "Tuesday", open: "09:00", close: "18:00" },
        wednesday: { day: "Wednesday", open: "09:00", close: "18:00" },
        thursday: { day: "Thursday", open: "09:00", close: "18:00" },
        friday: { day: "Friday", open: "09:00", close: "19:00" },
        saturday: { day: "Saturday", open: "10:00", close: "17:00" },
        sunday: { day: "Sunday", open: "10:00", close: "16:00" },
    })

    const handleStatusChange = (status) => {
        setShopStatus(status)
        if (status !== "closed") {
            setClosedUntil("")
        }
    }

    const handleHoursChange = (day, field, value) => {
        setWorkingHours((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [field]: value,
            },
        }))
    }

    const getStatusConfig = (status) => {
        switch (status) {
            case "open":
                return {
                    color: "bg-green-500",
                    textColor: "text-green-700",
                    bgColor: "bg-green-50",
                    borderColor: "border-green-500",
                    icon: <CheckCircle className="w-5 h-5" />,
                    label: "Open",
                    description: "Accepting new bookings",
                }
            case "full":
                return {
                    color: "bg-yellow-500",
                    textColor: "text-yellow-700",
                    bgColor: "bg-yellow-50",
                    borderColor: "border-yellow-500",
                    icon: <AlertCircle className="w-5 h-5" />,
                    label: "Full",
                    description: "Not accepting new bookings",
                }
            case "closed":
                return {
                    color: "bg-red-500",
                    textColor: "text-red-700",
                    bgColor: "bg-red-50",
                    borderColor: "border-red-500",
                    icon: <XCircle className="w-5 h-5" />,
                    label: "Closed",
                    description: "Shop is closed",
                }
        }
    }

    const currentStatus = getStatusConfig(shopStatus)

    const handleSave = () => {
        console.log("Saving availability settings:", { shopStatus, closedUntil, workingHours })
    }


    const CustomToggle = ({ checked, onChange, className = "" }) => {
        return (
            <button
                onClick={() => onChange(!checked)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${checked ? "bg-green-500 focus:ring-green-500" : "bg-gray-300 focus:ring-gray-500"
                    } ${className}`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
        )
    }

    return (
        <div className="h-screen flex flex-col ">
            <div className="backdrop-blur-md p-6 z-10 bg-transparent">
                <h1 className="text-3xl font-serif font-bold text-[#323232] mb-2">
                    Availability Management
                </h1>
                <p className="text-gray-600">
                    Manage your shop's availability and working hours
                </p>
            </div>
            
            <div className="w-full flex-1 overflow-y-auto p-6 hide-scrollbar">
                <div className="w-4/6 mx-auto ">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8 border border-white/50">
                        <h2 className="text-xl font-semibold text-[#323232] mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Shop Status Controls
                        </h2>

                        <div className="space-y-6">

                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`p-2 rounded-full ${shopStatus === "closed" ? "bg-red-500" : "bg-green-500"} text-white`}
                                    >
                                        {shopStatus === "closed" ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">
                                            {shopStatus === "closed" ? "Shop Closed" : "Shop Open"}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {shopStatus === "closed" ? "Toggle to open the shop" : "Toggle to close the shop"}
                                        </div>
                                    </div>
                                </div>
                                <CustomToggle
                                    checked={shopStatus !== "closed"}
                                    onChange={(checked) => {
                                        if (checked) {
                                            handleStatusChange("open")
                                        } else {
                                            handleStatusChange("closed")
                                        }
                                    }}
                                />
                            </div>

                            {shopStatus !== "closed" && (
                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`p-2 rounded-full ${shopStatus === "full" ? "bg-yellow-500" : "bg-green-500"} text-white`}
                                        >
                                            {shopStatus === "full" ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">
                                                {shopStatus === "full" ? "Queue Full" : "Accepting Bookings"}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {shopStatus === "full" ? "Not accepting new bookings" : "Toggle when queue is full"}
                                            </div>
                                        </div>
                                    </div>
                                    <CustomToggle
                                        checked={shopStatus === "full"}
                                        onChange={(checked) => {
                                            if (checked) {
                                                handleStatusChange("full")
                                            } else {
                                                handleStatusChange("open")
                                            }
                                        }}
                                        className={shopStatus === "full" ? "bg-yellow-500 focus:ring-yellow-500" : ""}
                                    />
                                </div>
                            )}

                            {shopStatus === "closed" && (
                                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar className="w-4 h-4 text-red-600" />
                                        <label className="text-sm font-semibold text-red-700">Closed Until (Optional)</label>
                                    </div>
                                    <input
                                        type="date"
                                        value={closedUntil}
                                        onChange={(e) => setClosedUntil(e.target.value)}
                                        className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                                        placeholder="Select reopening date"
                                    />
                                    <p className="text-xs text-red-600 mt-2">Leave empty if closure duration is unknown</p>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                        <h2 className="text-xl font-semibold text-[#323232] mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Working Hours
                        </h2>

                        <div className="space-y-4">
                            {Object.entries(workingHours).map(([dayKey, hours]) => (
                                <div key={dayKey} className="group">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-gradient-to-r from-[#f8f5f1] to-[#f5f0ea] rounded-xl border border-[#DDD0C8]/30 hover:shadow-md transition-all duration-200">

                                        <div className="min-w-0 sm:min-w-[140px]">
                                            <input
                                                type="text"
                                                value={hours.day}
                                                onChange={(e) => handleHoursChange(dayKey, "day", e.target.value)}
                                                className="w-full font-semibold text-[#323232] text-lg bg-transparent border-none focus:outline-none focus:bg-white focus:border focus:border-gray-300 focus:rounded px-2 py-1"
                                            />
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 flex-1">
                                            <div className="flex items-center gap-2">
                                                <label className="text-sm font-medium text-gray-600 min-w-[40px]">From:</label>
                                                <input
                                                    type="time"
                                                    value={hours.open}
                                                    onChange={(e) => handleHoursChange(dayKey, "open", e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-[#323232] bg-white"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="text-sm font-medium text-gray-600 min-w-[25px]">To:</label>
                                                <input
                                                    type="time"
                                                    value={hours.close}
                                                    onChange={(e) => handleHoursChange(dayKey, "close", e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232] focus:border-[#323232] bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleSave}
                                className="bg-gradient-to-r from-[#323232] to-[#454545] text-white px-8 py-3 rounded-xl hover:from-[#454545] hover:to-[#5a5a5a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-[#323232] focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Availability
