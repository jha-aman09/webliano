"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, TrendingUp, TrendingDown, Users, Globe, Smartphone, Laptop, Clock } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

export const AnalyticsDashboardMockup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const barChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const pieChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const lineChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

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
      // Draw charts when visible and after component has mounted
      drawCharts()
    }
  }, [isVisible, isMobile])

  const drawCharts = () => {
    // Draw bar chart
    if (barChartCanvasRef.current) {
      const ctx = barChartCanvasRef.current.getContext("2d")
      if (ctx) {
        const width = barChartCanvasRef.current.width
        const height = barChartCanvasRef.current.height
        const barWidth = isMobile ? 15 : 20
        const spacing = isMobile ? 10 : 15
        const barHeights = [40, 65, 50, 80, 60]
        const colors = ["#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#fbbf24"]

        ctx.clearRect(0, 0, width, height)

        barHeights.forEach((height, index) => {
          const scaledHeight = isMobile ? height * 0.7 : height
          const x = (isMobile ? 20 : 30) + index * (barWidth + spacing)
          const y = height - scaledHeight - (isMobile ? 10 : 20)

          // Draw bar
          ctx.fillStyle = colors[index]
          ctx.fillRect(x, y, barWidth, scaledHeight)

          // Draw label
          ctx.fillStyle = "#6b7280"
          ctx.font = isMobile ? "8px Inter, sans-serif" : "10px Inter, sans-serif"
          ctx.textAlign = "center"
          ctx.fillText(`Day ${index + 1}`, x + barWidth / 2, height - (isMobile ? 2 : 5))
        })

        // Draw y-axis
        ctx.strokeStyle = "#d1d5db"
        ctx.beginPath()
        ctx.moveTo(isMobile ? 15 : 20, isMobile ? 5 : 10)
        ctx.lineTo(isMobile ? 15 : 20, height - (isMobile ? 15 : 20))
        ctx.lineTo(width - (isMobile ? 15 : 20), height - (isMobile ? 15 : 20))
        ctx.stroke()
      }
    }

    // Draw pie chart
    if (pieChartCanvasRef.current) {
      const ctx = pieChartCanvasRef.current.getContext("2d")
      if (ctx) {
        const width = pieChartCanvasRef.current.width
        const height = pieChartCanvasRef.current.height
        const centerX = width / 2
        const centerY = height / 2
        const radius = Math.min(centerX, centerY) - (isMobile ? 15 : 20)

        const data = [35, 25, 20, 15, 5]
        const colors = ["#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#fbbf24"]

        let startAngle = 0

        ctx.clearRect(0, 0, width, height)

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
        const padding = isMobile ? 15 : 20

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
        ctx.lineWidth = isMobile ? 1.5 : 2
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
          ctx.arc(x, y, isMobile ? 3 : 4, 0, 2 * Math.PI)
          ctx.fill()
        })
      }
    }
  }

  // Render mobile or desktop dashboard based on screen size
  const renderMobileDashboard = () => {
    return (
      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Mobile Header */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Analytics Dashboard</div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Mobile KPI Cards */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {/* Visitors */}
            <div
              className={`bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center mb-1">
                <Users className="w-3 h-3 text-teal-600 dark:text-teal-400 mr-1" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Visitors</span>
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">12,543</div>
              <div className="flex items-center text-[10px] text-green-600 dark:text-green-400">
                <TrendingUp className="w-2 h-2 mr-0.5" />
                <span>+12.5%</span>
              </div>
            </div>

            {/* Conversions */}
            <div
              className={`bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 transition-opacity duration-500 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center mb-1">
                <BarChart3 className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-1" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Conversions</span>
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">854</div>
              <div className="flex items-center text-[10px] text-green-600 dark:text-green-400">
                <TrendingUp className="w-2 h-2 mr-0.5" />
                <span>+8.2%</span>
              </div>
            </div>

            {/* Avg Time */}
            <div
              className={`bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 transition-opacity duration-500 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center mb-1">
                <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-1" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Avg. Time</span>
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">3:24</div>
              <div className="flex items-center text-[10px] text-red-600 dark:text-red-400">
                <TrendingDown className="w-2 h-2 mr-0.5" />
                <span>-1.3%</span>
              </div>
            </div>

            {/* Bounce Rate */}
            <div
              className={`bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 transition-opacity duration-500 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center mb-1">
                <Globe className="w-3 h-3 text-amber-600 dark:text-amber-400 mr-1" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Bounce Rate</span>
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">42.3%</div>
              <div className="flex items-center text-[10px] text-red-600 dark:text-red-400">
                <TrendingDown className="w-2 h-2 mr-0.5" />
                <span>-3.8%</span>
              </div>
            </div>
          </div>

          {/* Mobile Chart */}
          <div
            className={`bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-10"}`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-medium text-gray-700 dark:text-gray-300">Visitors Overview</h3>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">Last 7 days</div>
            </div>
            <canvas ref={barChartCanvasRef} width="240" height="100" className="w-full"></canvas>
          </div>
        </div>
      </div>
    )
  }

  const renderDesktopDashboard = () => {
    return (
      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
                <TrendingDown className="w-3 h-3 mr-1" />
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
              <div className="flex items-center text-xs text-red-600 dark:text-red-400">
                <TrendingDown className="w-3 h-3 mr-1" />
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

  return (
    <div ref={dashboardRef} className="w-full h-full">
      {isMobile ? renderMobileDashboard() : renderDesktopDashboard()}
    </div>
  )
}

