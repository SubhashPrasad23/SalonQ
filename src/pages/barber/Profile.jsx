import { useState } from "react"
import { MapPin, Plus, Edit2, Save, X, Trash2, } from "lucide-react"
import { motion } from "framer-motion"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [showAddService, setShowAddService] = useState(false)
  const [profileData, setProfileData] = useState({
    salonName: "Classic Cuts Salon",
    ownerName: "hello world",
    email: "john@salon.com",
    phone: "+91 98765 43210",
    address: "123 Main St, Downtown, Bongaigaon",
    description: "Professional hair salon with 10+ years of experience",
  })

  const [services, setServices] = useState([
    { id: 1, name: "Haircut", price: 30, },
    { id: 2, name: "Beard Trim", price: 20, },
    { id: 3, name: "Hair Wash", price: 25, },
    { id: 4, name: "Facial", price: 60, },
  ])

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    duration: "",
  })

  const [tempData, setTempData] = useState({ ...profileData })

  const handleEdit = () => {
    setIsEditing(true)
    setTempData({ ...profileData })
  }

  const handleSave = () => {
    setProfileData({ ...tempData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempData({ ...profileData })
    setIsEditing(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddService = () => {
    if (newService.name && newService.price && newService.duration) {
      const service = {
        id: Date.now(),
        name: newService.name,
        price: Number.parseInt(newService.price),
        duration: Number.parseInt(newService.duration),
      }
      setServices([...services, service])
      setNewService({ name: "", price: "", duration: "" })
      setShowAddService(false)
    }
  }

  const handleDeleteService = (serviceId) => {
    setServices(services.filter((service) => service.id !== serviceId))
  }



  return (
    <div className=" bg-[#DDD0C8] p-6">
      <div className="max-w-5xl mx-auto">
     
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#323232] mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your salon information and services</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#323232]">Salon Information</h2>
            <div className="flex gap-2">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-[#323232] text-white px-4 py-2 rounded-lg hover:bg-[#5a5a5a] transition-colors"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save size={16} />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salon Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="salonName"
                  value={tempData.salonName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.salonName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="ownerName"
                  value={tempData.ownerName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.ownerName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={tempData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={tempData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.phone}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Salon Address
              </label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={tempData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.address}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              {isEditing ? (
                <textarea
                  name="description"
                  value={tempData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                />
              ) : (
                <p className="text-gray-900">{profileData.description}</p>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#323232]">Services & Pricing</h2>
            <button
              onClick={() => setShowAddService(true)}
              className="flex items-center gap-2 bg-[#323232] text-white px-4 py-2 rounded-lg hover:bg-[#5a5a5a] transition-colors"
            >
              <Plus size={16} />
              Add Service
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.id} className="p-4 bg-[#f5f0ea] rounded-lg border border-[#C2BEB5]">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#323232]">{service.name}</h3>
                    <p className="text-lg font-bold text-[#323232]">₹{service.price}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showAddService && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#323232]">Add New Service</h3>
                  <button onClick={() => setShowAddService(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                    <input
                      type="text"
                      value={newService.name}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                      placeholder="e.g., Haircut"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                    <input
                      type="number"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                      placeholder="e.g., 30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                    <input
                      type="number"
                      value={newService.duration}
                      onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                      placeholder="e.g., 30"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowAddService(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddService}
                    disabled={!newService.name || !newService.price || !newService.duration}
                    className="flex-1 px-4 py-2 bg-[#323232] text-white rounded-lg hover:bg-[#5a5a5a] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  )
}


export default Profile