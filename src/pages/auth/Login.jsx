import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/dashboard-barber")
    }

    return (
        <div className="h-screen w-full bg-[#DDD0C8] text-[#323232] flex flex-col items-center justify-center  px-4 py-5">
            <motion.div
                className="w-full max-w-md bg-[#323232] rounded-3xl shadow-sm border border-gray-100 p-8"
                initial={{ opacity: 0, z: 30 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="relative text-3xl font-serif text-[#DDD0C8] text-center py-1 tracking-widest mb-5">
                    Salon<span className="font-semibold ">Q</span>
                </h2>

                <motion.button onClick={navigateHandler}
                    className="w-full py-3 px-4 bg-[#DDD0C8]  rounded-lg cursor-pointer flex items-center justify-center gap-3 text-gray-700 hover:bg-white/80 transition-colors mb-6"
                    whileTap={{ scale: 0.98 }}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.88-1.6 2.44v2.03h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-1.03-.15-1.61Z"></path>
                        <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.03c-.71.48-1.63.77-2.7.77-2.08 0-3.85-1.4-4.5-3.3H1.87v2.09A7.97 7.97 0 0 0 8.98 17Z"></path>
                        <path fill="#FBBC05" d="M4.48 10.5c-.16-.48-.25-1-.25-1.52 0-.53.09-1.04.25-1.52V5.36H1.87A7.96 7.96 0 0 0 1 8.98c0 1.26.3 2.47.87 3.52l2.61-2Z"></path>
                        <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 8.98 1 7.97 7.97 0 0 0 1.87 5.36l2.61 2.03c.65-1.9 2.42-3.2 4.5-3.2Z"></path>
                    </svg>
                    <span className="font-medium">Continue with Google</span>
                </motion.button>

                <div className="w-10 mx-auto my-6 bg-white/80 text-center rounded-full place-content-center p-2">
                    <span className="text-sm font-medium text-gray-500">OR</span>
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <motion.button
                    className="w-full py-3 px-4 bg-[#DDD0C8]  rounded-lg cursor-pointer flex items-center justify-center gap-3 text-gray-700 hover:bg-white/80 transition-colors "
                    whileTap={{ scale: 0.98 }}
                >
                    Continue with email
                </motion.button>
            </motion.div>


        </div>
    );
}


export default Login