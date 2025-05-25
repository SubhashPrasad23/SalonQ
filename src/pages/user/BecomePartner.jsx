import { useState } from "react"
import { Users, TrendingUp, Clock, Star, Upload, Check } from "lucide-react"

export default function Partner() {
    const [formData, setFormData] = useState({
        salonName: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        services: [],
        workingHours: {
            open: "",
            close: "",
        },
        description: "",
    })

    const [currentStep, setCurrentStep] = useState(1)

    const services = [
        "Haircut",
        "Hair Wash",
        "Beard Trim",
        "Hair Color",
        "Facial",
        "Massage",
        "Manicure",
        "Pedicure",
        "Hair Styling",
        "Eyebrow Threading",
    ]

    const benefits = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Increase Customer Flow",
            description: "Attract more customers through our digital platform and reduce walk-away rates",
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Boost Revenue",
            description: "Optimize your schedule and serve more customers with efficient queue management",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Save Time",
            description: "Reduce waiting time complaints and improve customer satisfaction",
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Build Reputation",
            description: "Get reviews and ratings to build trust and attract new customers",
        },
    ]



    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1)
    }

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
            <div className="bg-[#323232] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif mb-4">
                        Become a <span className="text-[#DDD0C8]">Partner</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Join SalonQ and transform your salon with digital queue management
                    </p>
                    <button
                        onClick={() => document.getElementById("registration").scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#DDD0C8] text-[#323232] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition-colors"
                    >
                        Register Your Salon
                    </button>
                </div>
            </div>
            <div id="registration" className="max-w-4xl mx-auto py-16">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-serif text-[#323232] mb-8 text-center">Register Your Salon</h2>

                    <div className="flex items-center justify-center mb-8">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step ? "bg-[#323232] text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {currentStep > step ? <Check size={20} /> : step}
                                </div>
                                {step < 3 && <div className={`w-16 h-1 ${currentStep > step ? "bg-[#323232]" : "bg-gray-200"}`}></div>}
                            </div>
                        ))}
                    </div>

                    <form >
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-[#323232] mb-4">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Salon Name *</label>
                                        <input
                                            type="text"
                                            name="salonName"
                                       
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name *</label>
                                        <input
                                            type="text"
                                            name="ownerName"
                                         
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                        
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                        
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                                    <textarea
                                        name="address"
                                     
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                        required
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                       
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                          
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-[#323232] mb-4">Services & Working Hours</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Services Offered *</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {services.map((service) => (
                                            <label key={service} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                 
                                                    className="rounded border-gray-300 text-[#323232] focus:ring-[#323232]"
                                                />
                                                <span className="text-sm">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                             
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                    <textarea
                                        name="description"
                                    
                                        rows="4"
                                        placeholder="Tell us about your salon, specialties, experience..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                    ></textarea>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-[#323232] mb-4">Documents & Verification</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business License/Registration
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Salon Photos</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-600">Upload salon interior/exterior photos</p>
                                            <p className="text-xs text-gray-500">JPG, PNG up to 5MB each</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#f5f0ea] rounded-lg p-4">
                                    <h4 className="font-semibold text-[#323232] mb-2">What happens next?</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Our team will review your application within 24-48 hours</li>
                                        <li>• We'll contact you for verification and onboarding</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={prevStep}
                                className={`px-6 py-2 rounded-lg ${currentStep === 1
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                                    }`}
                                disabled={currentStep === 1}
                            >
                                Previous
                            </button>
                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-[#323232] text-white rounded-lg hover:bg-[#5a5a5a] transition-colors"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-[#323232] text-white rounded-lg hover:bg-[#5a5a5a] transition-colors"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <div className=" py-5">
                <h2 className="text-3xl font-serif text-[#323232] mb-12 text-center">Why Partner With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="text-[#323232] mb-4 flex justify-center">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-[#323232] mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
         
        </div>
    )
}
