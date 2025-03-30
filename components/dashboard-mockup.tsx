"use client"

import { useState, useEffect } from "react"
import { Activity, TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function DashboardMockup() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col">
      {/* Dashboard Header */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Analytics Dashboard</div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
            <span className="text-[8px] text-teal-600 dark:text-teal-300">?</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-[8px] text-gray-600 dark:text-gray-300">⋯</span>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        {["overview", "sales", "customers", "products", "marketing"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-xs capitalize whitespace-nowrap ${activeTab === tab
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400"
                : "text-gray-500 dark:text-gray-400"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-3 overflow-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            {
              title: "Revenue",
              icon: <DollarSign className="h-3 w-3" />,
              value: "$24,582",
              change: "+12.5%",
              up: true,
            },
            { title: "Orders", icon: <ShoppingCart className="h-3 w-3" />, value: "1,243", change: "+8.3%", up: true },
            { title: "Customers", icon: <Users className="h-3 w-3" />, value: "3,582", change: "+5.7%", up: true },
            { title: "Conversion", icon: <Activity className="h-3 w-3" />, value: "3.24%", change: "-0.5%", up: false },
          ].map((kpi, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-3 rounded-lg border ${isLoaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 delay-${index * 100} shadow-sm border-gray-200 dark:border-gray-700`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">{kpi.title}</span>
                <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-800/40 flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400">{kpi.icon}</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{kpi.value}</span>
                <span
                  className={`text-[10px] flex items-center ${kpi.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                >
                  {kpi.up ? <TrendingUp className="h-2 w-2 mr-1" /> : <TrendingDown className="h-2 w-2 mr-1" />}
                  {kpi.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {/* Revenue Chart */}
          <div
            className={`md:col-span-2 bg-white dark:bg-gray-800 p-3 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 delay-500`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Revenue Trend</span>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-gray-500 dark:text-gray-400">Last 30 days</span>
                <div className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-[8px] text-gray-600 dark:text-gray-300">⋯</span>
                </div>
              </div>
            </div>
            <div className="h-32 flex items-end space-x-1">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = Math.floor(Math.random() * 70) + 10
                return (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-full bg-teal-500/20 dark:bg-teal-500/40 rounded-t transition-all duration-1000 ${isLoaded ? `h-[${height}%]` : "h-0"
                        }`}
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[8px] text-gray-500 dark:text-gray-400">Apr 1</span>
              <span className="text-[8px] text-gray-500 dark:text-gray-400">Apr 30</span>
            </div>
          </div>

          {/* Pie Chart */}
          <div
            className={`bg-white dark:bg-gray-800 p-3 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 delay-600`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Sales by Category</span>
              <div className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-[8px] text-gray-600 dark:text-gray-300">⋯</span>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 relative">
              <div className="w-24 h-24 rounded-full border-[12px] border-teal-500/70 dark:border-teal-500/80"></div>
              <div className="absolute w-24 h-24 rounded-full border-[12px] border-transparent border-t-blue-500/70 dark:border-t-blue-500/80 transform -rotate-[60deg]"></div>
              <div className="absolute w-24 h-24 rounded-full border-[12px] border-transparent border-t-purple-500/70 dark:border-t-purple-500/80 transform rotate-[60deg]"></div>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-1"></div>
                <span className="text-[8px] text-gray-600 dark:text-gray-300">Electronics (45%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-[8px] text-gray-600 dark:text-gray-300">Clothing (30%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                <span className="text-[8px] text-gray-600 dark:text-gray-300">Other (25%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Top Products Table */}
          <div
            className={`bg-white dark:bg-gray-800 p-3 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 delay-700`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Top Products</span>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-gray-500 dark:text-gray-400">View All</span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { name: "Wireless Headphones", sales: 245, revenue: "$12,450" },
                { name: "Smart Watch", sales: 187, revenue: "$9,350" },
                { name: "Bluetooth Speaker", sales: 134, revenue: "$6,700" },
                { name: "Laptop Sleeve", sales: 96, revenue: "$2,880" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <span className="text-[10px] text-gray-800 dark:text-gray-200">{product.name}</span>
                  <div className="flex space-x-4">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{product.sales} units</span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400">{product.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Acquisition */}
          <div
            className={`bg-white dark:bg-gray-800 p-3 rounded-lg border shadow-sm border-gray-200 dark:border-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 delay-800`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Customer Acquisition</span>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-gray-500 dark:text-gray-400">This Month</span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { source: "Organic Search", percentage: 38, color: "bg-green-500" },
                { source: "Direct", percentage: 25, color: "bg-blue-500" },
                { source: "Social Media", percentage: 22, color: "bg-purple-500" },
                { source: "Referral", percentage: 15, color: "bg-yellow-500" },
              ].map((source, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-700 dark:text-gray-300">{source.source}</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{source.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${source.color} transition-all duration-1000 ${isLoaded ? `w-[${source.percentage}%]` : "w-0"
                        }`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

