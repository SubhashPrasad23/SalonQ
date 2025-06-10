import { useState } from "react";
import {
    DollarSign,
    Users,
    Star,
 
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

const Dashboard = () => {
    const currentYear = new Date().getFullYear();
    const [selectedPeriod, setSelectedPeriod] = useState("today");
    const [selectedMonth, setSelectedMonth] = useState("May");
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const stats = {
        today: {
            revenue: 450,
            totalClients: 12,
            rating: 4.8,
            newClients: 3,
        },
        thisMonth: {
            revenue: 12500,
            totalClients: 340,
            rating: 4.7,
            newClients: 85,
        },
        lastMonth: {
            revenue: 11200,
            totalClients: 320,
            rating: 4.6,
            newClients: 78,
        },
    };

    const weeklyNewClientsByMonth = {
        April: [
            { week: "Week 1", newClients: 18, date: "Apr 1-7" },
            { week: "Week 2", newClients: 22, date: "Apr 8-14" },
            { week: "Week 3", newClients: 19, date: "Apr 15-21" },
            { week: "Week 4", newClients: 25, date: "Apr 22-28" },
        ],
        May: [
            { week: "Week 1", newClients: 21, date: "May 1-7" },
            { week: "Week 2", newClients: 28, date: "May 8-14" },
            { week: "Week 3", newClients: 24, date: "May 15-21" },
            { week: "Week 4", newClients: 15, date: "May 22-26" },
        ],
    };

    const revenueData = {
        2023: [
            { month: "Jan", revenue: 8500 },
            { month: "Feb", revenue: 8700 },
            { month: "Mar", revenue: 8900 },
            { month: "Apr", revenue: 9100 },
            { month: "May", revenue: 9300 },
            { month: "Jun", revenue: 9500 },
            { month: "Jul", revenue: 9700 },
            { month: "Aug", revenue: 9900 },
            { month: "Sep", revenue: 10100 },
            { month: "Oct", revenue: 10300 },
            { month: "Nov", revenue: 10500 },
            { month: "Dec", revenue: 10700 },
        ],
        2024: [
            { month: "Jan", revenue: 9000 },
            { month: "Feb", revenue: 9500 },
            { month: "Mar", revenue: 10000 },
            { month: "Apr", revenue: 10500 },
            { month: "May", revenue: 11000 },
            { month: "Jun", revenue: 11500 },
            { month: "Jul", revenue: 12000 },
            { month: "Aug", revenue: 12500 },
            { month: "Sep", revenue: 13000 },
            { month: "Oct", revenue: 13500 },
            { month: "Nov", revenue: 14000 },
            { month: "Dec", revenue: 14500 },
        ],
        2025: [
            { month: "Jan", revenue: 9800 },
            { month: "Feb", revenue: 10200 },
            { month: "Mar", revenue: 11500 },
            { month: "Apr", revenue: 11200 },
            { month: "May", revenue: 12500 },
            { month: "Jun", revenue: 13000 },
            { month: "Jul", revenue: 13500 },
            { month: "Aug", revenue: 14000 },
            { month: "Sep", revenue: 14500 },
            { month: "Oct", revenue: 15000 },
            { month: "Nov", revenue: 15500 },
            { month: "Dec", revenue: 16000 },
        ],
    };

    const currentStats = stats[selectedPeriod];

    const calculateGrowth = (current, previous) => {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    };

    const getGrowthColor = (growth) => {
        return growth >= 0 ? "text-green-600" : "text-red-600";
    };

    return (
        <div className="h-screen flex flex-col w-full">


            <div className="backdrop-blur-md p-6 z-10 bg-transparent">
                <h1 className="text-3xl font-serif font-bold text-[#323232] mb-2">
                    Dashboard
                </h1>
                <p className="text-gray-600">
                    Track your key metrics and client growth
                </p>
            </div>



            <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">

                <div className="mb-6 flex gap-2">
                    {[
                        { key: "today", label: "Today" },
                        { key: "thisMonth", label: "This Month" },
                        { key: "lastMonth", label: "Last Month" },
                    ].map((period) => (
                        <button
                            key={period.key}
                            onClick={() => setSelectedPeriod(period.key)}
                            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${selectedPeriod === period.key
                                ? "bg-[#323232] text-white"
                                : "bg-white text-[#323232] hover:bg-[#f5f0ea]"
                                }`}
                        >
                            {period.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Revenue */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-100 rounded-full">
                                <DollarSign className="w-8 h-8 text-green-600" />
                            </div>
                            {selectedPeriod === "thisMonth" && (
                                <span
                                    className={`text-sm font-medium ${getGrowthColor(
                                        calculateGrowth(
                                            stats.thisMonth.revenue,
                                            stats.lastMonth.revenue
                                        )
                                    )}`}
                                >
                                    {calculateGrowth(
                                        stats.thisMonth.revenue,
                                        stats.lastMonth.revenue
                                    ) >= 0
                                        ? "↗"
                                        : "↘"}
                                    {Math.abs(
                                        calculateGrowth(
                                            stats.thisMonth.revenue,
                                            stats.lastMonth.revenue
                                        )
                                    ).toFixed(1)}
                                    %
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                        <p className="text-3xl font-bold text-[#323232]">
                            ₹{currentStats.revenue.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            {selectedPeriod === "today"
                                ? "Today's earnings"
                                : selectedPeriod === "thisMonth"
                                    ? "Month to date"
                                    : "Previous month"}
                        </p>
                    </div>

                    {/* Clients */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            {selectedPeriod === "thisMonth" && (
                                <span
                                    className={`text-sm font-medium ${getGrowthColor(
                                        calculateGrowth(
                                            stats.thisMonth.totalClients,
                                            stats.lastMonth.totalClients
                                        )
                                    )}`}
                                >
                                    {calculateGrowth(
                                        stats.thisMonth.totalClients,
                                        stats.lastMonth.totalClients
                                    ) >= 0
                                        ? "↗"
                                        : "↘"}
                                    {Math.abs(
                                        calculateGrowth(
                                            stats.thisMonth.totalClients,
                                            stats.lastMonth.totalClients
                                        )
                                    ).toFixed(1)}
                                    %
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Total Clients</p>
                        <p className="text-3xl font-bold text-[#323232]">
                            {currentStats.totalClients}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <span className="font-medium text-blue-600">
                                +{currentStats.newClients}
                            </span>{" "}
                            new clients
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-yellow-100 rounded-full">
                                <Star className="w-8 h-8 text-yellow-600" />
                            </div>
                            {selectedPeriod === "thisMonth" && (
                                <span
                                    className={`text-sm font-medium ${getGrowthColor(
                                        calculateGrowth(
                                            stats.thisMonth.rating,
                                            stats.lastMonth.rating
                                        )
                                    )}`}
                                >
                                    {calculateGrowth(
                                        stats.thisMonth.rating,
                                        stats.lastMonth.rating
                                    ) >= 0
                                        ? "↗"
                                        : "↘"}
                                    {Math.abs(
                                        calculateGrowth(
                                            stats.thisMonth.rating,
                                            stats.lastMonth.rating
                                        )
                                    ).toFixed(1)}
                                    %
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Average Rating</p>
                        <p className="text-3xl font-bold text-[#323232]">
                            {currentStats.rating}
                        </p>
                    </div>
                </div>


                <div className="space-y-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-[#323232]">
                                New Clients - Weekly
                            </h2>
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="border border-gray-300 rounded px-3 py-1 text-sm"
                            >
                                {Object.keys(weeklyNewClientsByMonth).map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={weeklyNewClientsByMonth[selectedMonth]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="newClients"
                                    stroke="#3B82F6"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-[#323232]">
                                Revenue - {selectedYear}
                            </h2>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(Number(e.target.value))}
                                className="border border-gray-300 rounded px-3 py-1 text-sm"
                            >
                                {Object.keys(revenueData)
                                    .sort((a, b) => b - a)
                                    .map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={revenueData[selectedYear]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis
                                    tickFormatter={(value) => `₹${value / 1000}k`}
                                    domain={[0, "dataMax + 2000"]}
                                />
                                <Tooltip
                                    formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
                                />
                                <Bar dataKey="revenue" fill="#10B981" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
