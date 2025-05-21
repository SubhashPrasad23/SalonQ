import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, DollarSign, Filter, Grid, Search, ShoppingCart, Star, TrendingUp } from 'lucide-react';
import BarberCard from '../../components/user/BarberCard';
import ProductCard from '../../components/user/ProductCard';

const Home = () => {
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
                { id: 3, name: "Haircut & Beard", price: 35, duration: "45 min" },
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
        },
        {
            id: 2,
            name: "Modern Styles Barbershop",
            location: "456 Oak Ave, Uptown",
            distance: "1.2 miles away",
            rating: 4.6,
            reviews: 98,
            queueLength: 10,
            queueStatus: "FULL",
            waitTime: "120 min",
            priceRange: "$$$",
            popular: true,
            services: [
                { id: 1, name: "Haircut", price: 30, duration: "30 min" },
                { id: 2, name: "Beard Trim", price: 20, duration: "15 min" },
                { id: 3, name: "Haircut & Beard", price: 45, duration: "45 min" },
                { id: 4, name: "Hair Coloring", price: 60, duration: "60 min" },
            ],
            image: "/placeholder.svg?height=80&width=80",
            queueNumbers: [
                201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223,
                224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246,
                247, 248, 249, 250,
            ],
            bookedNumbers: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
            currentQueueNumber: 201,
        },
        {
            id: 3,
            name: "Elite Hair Studio",
            location: "789 Pine Blvd, Midtown",
            distance: "2.5 miles away",
            rating: 4.9,
            reviews: 156,
            queueLength: 5,
            queueStatus: "OPEN",
            waitTime: "50 min",
            priceRange: "$$$",
            popular: true,
            services: [
                { id: 1, name: "Haircut", price: 35, duration: "30 min" },
                { id: 2, name: "Beard Trim", price: 20, duration: "15 min" },
                { id: 3, name: "Haircut & Beard", price: 50, duration: "45 min" },
                { id: 4, name: "Hair Styling", price: 25, duration: "20 min" },
                { id: 5, name: "Facial", price: 45, duration: "40 min" },
            ],
            image: "/placeholder.svg?height=80&width=80",
            queueNumbers: [
                301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323,
                324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346,
                347, 348, 349, 350,
            ],
            bookedNumbers: [301, 302, 303, 304, 305],
            currentQueueNumber: 301,
        },
        {
            id: 4,
            name: "Gentleman's Grooming",
            location: "321 Maple St, Downtown",
            distance: "0.5 miles away",
            rating: 4.7,
            reviews: 112,
            queueLength: 2,
            queueStatus: "OPEN",
            waitTime: "25 min",
            priceRange: "$$",
            popular: false,
            services: [
                { id: 1, name: "Haircut", price: 28, duration: "30 min" },
                { id: 2, name: "Beard Trim", price: 18, duration: "15 min" },
                { id: 3, name: "Haircut & Beard", price: 40, duration: "45 min" },
                { id: 4, name: "Hair Coloring", price: 55, duration: "60 min" },
            ],
            image: "/placeholder.svg?height=80&width=80",
            queueNumbers: [
                401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423,
                424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446,
                447, 448, 449, 450,
            ],
            bookedNumbers: [401, 402],
            currentQueueNumber: 401,
        },
        {
            id: 5,
            name: "Prestige Hair Salon",
            location: "567 Cedar Ln, Uptown",
            distance: "1.8 miles away",
            rating: 4.5,
            reviews: 87,
            queueLength: 0,
            queueStatus: "CLOSED",
            closedUntil: "25/05/2025",
            waitTime: "0 min",
            priceRange: "$$",
            popular: false,
            services: [
                { id: 1, name: "Haircut", price: 25, duration: "30 min" },
                { id: 2, name: "Beard Trim", price: 15, duration: "15 min" },
                { id: 3, name: "Haircut & Beard", price: 35, duration: "45 min" },
                { id: 4, name: "Facial", price: 40, duration: "30 min" },
            ],
            image: "/placeholder.svg?height=80&width=80",
            queueNumbers: [],
            bookedNumbers: [],
            currentQueueNumber: null,
        },
    ]



    // Hair style inspiration images
    const hairStyles = [
        {
            id: 1,
            name: "Modern Pompadour",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "Trending",
        },
        {
            id: 2,
            name: "Classic Fade",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "Popular",
        },
        {
            id: 3,
            name: "Textured Crop",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "New",
        },
        {
            id: 4,
            name: "Slick Back",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "Classic",
        },
        {
            id: 5,
            name: "Undercut",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "Trending",
        },
        {
            id: 6,
            name: "Buzz Cut",
            image: "/placeholder.svg?height=300&width=250",
            popularity: "Classic",
        },
    ]

    // Mock products data
    const mockProducts = [
        {
            id: 1,
            name: "Premium Hair Pomade",
            price: 24.99,
            rating: 4.7,
            reviews: 128,
            image: "/placeholder.svg?height=200&width=200",
            category: "Styling",
            bestseller: true,
        },
        {
            id: 2,
            name: "Beard Oil - Sandalwood",
            price: 19.99,
            rating: 4.8,
            reviews: 95,
            image: "/placeholder.svg?height=200&width=200",
            category: "Beard Care",
            bestseller: true,
        },
        {
            id: 3,
            name: "Professional Hair Scissors",
            price: 49.99,
            rating: 4.9,
            reviews: 64,
            image: "/placeholder.svg?height=200&width=200",
            category: "Tools",
            bestseller: false,
        },
        {
            id: 4,
            name: "Styling Clay - Matte Finish",
            price: 22.99,
            rating: 4.6,
            reviews: 112,
            image: "/placeholder.svg?height=200&width=200",
            category: "Styling",
            bestseller: false,
        },
        {
            id: 5,
            name: "Beard Brush & Comb Set",
            price: 29.99,
            rating: 4.8,
            reviews: 87,
            image: "/placeholder.svg?height=200&width=200",
            category: "Beard Care",
            bestseller: true,
        },
        {
            id: 6,
            name: "Aftershave Balm - Cooling",
            price: 18.99,
            rating: 4.5,
            reviews: 76,
            image: "/placeholder.svg?height=200&width=200",
            category: "Skincare",
            bestseller: false,
        },
    ]
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
            <div className="container mx-auto px-4 pt-6 pb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h3 className='font-bold text-3xl'>Explore Barbers Near You</h3>
                        <p className="">Welcome back, Hello</p>
                    </div>
                </div>

                <motion.div
                    className="relative overflow-hidden rounded-xl bg-[#323232] p-6 mb-6 text-white/80"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold mb-2">💈 Style Inspirations</h2>
                            <p className=" mb-4">Check out trending hairstyles for your next visit</p>
                            <button
                                className="px-4 py-2 bg-white text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
                            >
                            </button>
                        </div>
                        <div className="flex -space-x-4">
                            {hairStyles.slice(0, 3).map((style, index) => (
                                <div
                                    key={style.id}
                                    className="w-16 h-16 rounded-full border-2 border-white overflow-hidden"
                                    style={{ zIndex: 3 - index }}
                                >
                                    <img
                                        src={style.image || "/placeholder.svg"}
                                        alt={style.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hair Inspiration Gallery */}
                    <AnimatePresence>
                        {false && <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 overflow-hidden"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {hairStyles.map((style) => (
                                    <motion.div
                                        key={style.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden relative"
                                    >
                                        <img
                                            src={style.image || "/placeholder.svg"}
                                            alt={style.name}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-3">
                                            <h3 className="font-medium text-white">{style.name}</h3>
                                            <span className="inline-block px-2 py-1 mt-1 text-xs rounded-full bg-white/20">
                                                {style.popularity}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>}

                    </AnimatePresence>

                    <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
                    <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    className=" py-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search salons..."

                                className="w-full pl-10 pr-4 py-2 border-2  rounded-lg  text-[#323232] focus:outline-none "
                            />
                        </div>
                      

                        <div className=" flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                            <button
                                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap `}
                            >
                                <Grid className="w-4 h-4 inline-block mr-1" />
                                All
                            </button>
                            <button
                                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap `}
                            >
                                <TrendingUp className="w-4 h-4 inline-block mr-1" />
                                Popular
                            </button>
                            <button
                                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap `}
                            >
                                <DollarSign className="w-4 h-4 inline-block mr-1" />
                                Price: High to Low
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Barber List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
                    {mockBarbers.map((barber) => (
                        <motion.div
                            key={barber.id}
                            whileHover={{ y: -5 }}
                            className="bg-[#323232] text-amber-400 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
                        >
                            <BarberCard barber={barber} />
                        </motion.div>
                    ))}
                </div>

                {/* Products Section */}
                <motion.div
                    className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold ">Lifestyle Products</h2>
                        <button className="text-[#323232] text-sm font-medium flex items-center">
                            View All <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -5 }}
                                className="bg-[#323232] border-[#C2BEB5]  rounded-xl shadow-sm overflow-hidden"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>

        </div>
    )
}

export default Home