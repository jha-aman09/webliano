"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, TrendingUp, Users, Globe, Smartphone, Laptop, Clock } from "lucide-react"

export const AnalyticsDashboardMockup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const barChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const pieChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const lineChartCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Draw bar chart
      if (barChartCanvasRef.current) {
        const ctx = barChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const barWidth = 20
          const spacing = 15
          const barHeights = [40, 65, 50, 80, 60]
          const colors = ["#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#fbbf24"]

          ctx.clearRect(0, 0, barChartCanvasRef.current.width, barChartCanvasRef.current.height)

          barHeights.forEach((height, index) => {
            const x = 30 + index * (barWidth + spacing)
            const y = barChartCanvasRef.current!.height - height - 20

            // Draw bar
            ctx.fillStyle = colors[index]
            ctx.fillRect(x, y, barWidth, height)

            // Draw label
            ctx.fillStyle = "#6b7280"
            ctx.font = "10px Inter, sans-serif"
            ctx.textAlign = "center"
            ctx.fillText(`Day ${index + 1}`, x + barWidth / 2, barChartCanvasRef.current!.height - 5)
          })

          // Draw y-axis
          ctx.strokeStyle = "#d1d5db"
          ctx.beginPath()
          ctx.moveTo(20, 10)
          ctx.lineTo(20, barChartCanvasRef.current.height - 20)
          ctx.lineTo(barChartCanvasRef.current.width - 20, barChartCanvasRef.current.height - 20)
          ctx.stroke()
        }
      }

      // Draw pie chart
      if (pieChartCanvasRef.current) {
        const ctx = pieChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const centerX = pieChartCanvasRef.current.width / 2
          const centerY = pieChartCanvasRef.current.height / 2
          const radius = Math.min(centerX, centerY) - 20

          const data = [35, 25, 20, 15, 5]
          const colors = ["#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#fbbf24"]

          let startAngle = 0

          ctx.clearRect(0, 0, pieChartCanvasRef.current.width, pieChartCanvasRef.current.height)

          data.forEach((value, index) => {
            const sliceAngle = (value / 100) * 2 * Math.PI

            ctx.fillStyle = colors[index]
            ctx.beginPath()
            ctx.moveTo(centerX, centerY)
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
            ctx.closePath()
            ctx.fill()

            startAngle += sliceAngle
          })

          // Draw center circle for donut effect
          ctx.fillStyle = "#ffffff"
          ctx.beginPath()
          ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI)
          ctx.fill()
        }
      }

      // Draw line chart
      if (lineChartCanvasRef.current) {
        const ctx = lineChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const width = lineChartCanvasRef.current.width
          const height = lineChartCanvasRef.current.height
          const padding = 20

          const dataPoints = [25, 40, 30, 60, 50, 75, 65]
          const maxValue = Math.max(...dataPoints)

          ctx.clearRect(0, 0, width, height)

          // Draw axes
          ctx.strokeStyle = "#d1d5db"
          ctx.beginPath()
          ctx.moveTo(padding, padding)
          ctx.lineTo(padding, height - padding)
          ctx.lineTo(width - padding, height - padding)
          ctx.stroke()

          // Draw line
          const pointWidth = (width - 2 * padding) / (dataPoints.length - 1)

          ctx.strokeStyle = "#0ea5e9"
          ctx.lineWidth = 2
          ctx.beginPath()

          dataPoints.forEach((point, index) => {
            const x = padding + index * pointWidth
            const y = height - padding - (point / maxValue) * (height - 2 * padding)

            if (index === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          })

          ctx.stroke()

          // Draw points
          dataPoints.forEach((point, index) => {
            const x = padding + index * pointWidth
            const y = height - padding - (point / maxValue) * (height - 2 * padding)

            ctx.fillStyle = "#0ea5e9"
            ctx.beginPath()
            ctx.arc(x, y, 4, 0, 2 * Math.PI)
            ctx.fill()
          })
        }
      }
    }
  }, [isVisible])

  return (
    <div ref={dashboardRef} className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="font-semibold text-gray-800 dark:text-gray-200">Analytics Dashboard</div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="p-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div
            className={`bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg border border-teal-200 dark:border-teal-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center mb-2">
              <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Visitors</span>
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">12,543</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+12.5%</span>
            </div>
          </div>

          <div
            className={`bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center mb-2">
              <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Conversions</span>
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">854</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+8.2%</span>
            </div>
          </div>

          <div
            className={`bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Avg. Time</span>
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">3:24</div>
            <div className="flex items-center text-xs text-red-600 dark:text-red-400">
              <TrendingUp className="w-3 h-3 mr-1 transform rotate-180" />
              <span>-1.3%</span>
            </div>
          </div>

          <div
            className={`bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center mb-2">
              <Globe className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Bounce Rate</span>
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100">42.3%</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-3 h-3 mr-1 transform rotate-180" />
              <span>-3.8%</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Visitors Overview</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Last 7 days</div>
            </div>
            <canvas ref={barChartCanvasRef} width="300" height="150" className="w-full"></canvas>
          </div>

          <div
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Traffic Sources</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Current month</div>
            </div>
            <div className="flex justify-center">
              <canvas ref={pieChartCanvasRef} width="150" height="150"></canvas>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-1"></div>
                <span className="text-gray-600 dark:text-gray-300">Organic</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-gray-600 dark:text-gray-300">Social</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                <span className="text-gray-600 dark:text-gray-300">Direct</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-6">
          <div
            className={`col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"}`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Conversion Rate</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Last 7 days</div>
            </div>
            <canvas ref={lineChartCanvasRef} width="400" height="120" className="w-full"></canvas>
          </div>

          <div
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Device Breakdown</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Current month</div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                    <Smartphone className="w-3 h-3 mr-1" />
                    <span>Mobile</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">58%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: "58%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                    <Laptop className="w-3 h-3 mr-1" />
                    <span>Desktop</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">32%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                    <Laptop className="w-3 h-3 mr-1" />
                    <span>Tablet</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">10%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

