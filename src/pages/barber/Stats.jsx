import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function StatCard({ icon, value, change, label, color = "blue" }) {
    const isPositive = change && change.startsWith("+")

    const getColorClasses = (color) => {
        switch (color) {
            case "blue":
                return "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            case "green":
                return "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
            case "red":
                return "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
            case "yellow":
                return "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
            case "purple":
                return "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
            case "indigo":
                return "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
            case "rose":
                return "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
            case "emerald":
                return "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
            default:
                return "bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400"
        }
    }

    return (
        <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${getColorClasses(color)}`}>{icon}</div>
                <div>
                    <div className="flex items-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
                        {change && (
                            <div
                                className={`flex items-center ml-2 ${isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                            >
                                {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{change}</span>
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                </div>
            </div>
        </motion.div>
    )
}
