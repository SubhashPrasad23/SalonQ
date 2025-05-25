import { useState } from "react"
import { Camera } from "lucide-react"

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const [profileData, setProfileData] = useState({
        name: "hello world",
        email: "hellow@email.com",
        gender: "Male",

    })

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="h-full w-full px-4 sm:px-6 lg:px-8  place-content-center">
            <div className=" max-w-4xl mx-auto px-4  pb-20 md:pb-5">
                <div className="bg-[#323232] backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl">
                    <div className="flex justify-end gap-4 mb-8 pb-8 border-b border-white/30">
                        {!isEditing ? (
                            <button
                                onClick={handleEdit}
                                className="bg-white/80 px-4 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >

                                Edit
                            </button>
                        ) : (
                            <div className="flex gap-4">
                                <button
                                    onClick={handleCancel}
                                    className=" bg-white/80  px-4 py-2 rounded-xl font-semibold  backdrop-blur-sm  transition-all duration-300 hover:scale-105"
                                    style={{ color: '#323232' }}
                                >

                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className=" bg-white/80 px-4 py-2  rounded-xl font-semibold text-lg  transition-all duration-300 hover:scale-105"

                                >

                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="space-y-5  w-full place-content-center">
                        <div className="flex flex-col items-center ">
                            <div className="relative group">
                                <div
                                    className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                                >

                                </div>
                                <button
                                    className="absolute -bottom-3 -right-3 bg-white/80 backdrop-blur-sm border-2 border-white rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg"
                                    style={{ color: '#323232' }}
                                >
                                    <Camera size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="grid gap-8">
                                <div className="grid md:grid-cols-2 gap-6">

                                    <div className="space-y-3">
                                        <label className="block text-white text-sm font-bold tracking-wide uppercase">
                                            Full Name
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="name"
                                                value={profileData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-white/60 rounded-xl transition-all duration-300 focus:outline-none focus:border-opacity-100 focus:bg-white/90 focus:shadow-lg"

                                                placeholder="Enter your full name"
                                            />
                                        ) : (
                                            <div className="px-4 py-4 bg-white/40 border border-white/30 rounded-xl font-medium" style={{ color: '#323232' }}>
                                                {profileData.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-bold tracking-wide uppercase text-white">
                                            Email Address
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={profileData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-white/60 rounded-xl transition-all duration-300 focus:outline-none focus:border-opacity-100 focus:bg-white/90 focus:shadow-lg"
                                                style={{ color: '#323232' }}
                                                placeholder="Enter your email"
                                            />
                                        ) : (
                                            <div className="px-4 py-4 bg-white/40 border border-white/30 rounded-xl font-medium" style={{ color: '#323232' }}>
                                                {profileData.email}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-bold tracking-wide uppercase text-white">
                                        Gender
                                    </label>
                                    {isEditing ? (
                                        <select
                                            name="gender"
                                            value={profileData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-white/60 rounded-xl transition-all duration-300 focus:outline-none focus:border-opacity-100 focus:bg-white/90 focus:shadow-lg"
                                            style={{ color: '#323232' }}
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : (
                                        <div className="px-4 py-4 bg-white/40 border border-white/30 rounded-xl font-medium" style={{ color: '#323232' }}>
                                            {profileData.gender}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}