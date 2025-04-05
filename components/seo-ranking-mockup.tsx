"use client"

import { useEffect, useRef, useState } from "react"
import { Search, ArrowUp, Globe, BarChart3, TrendingUp, Clock, Award, ExternalLink } from "lucide-react"

export const SeoRankingMockup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const mockupRef = useRef<HTMLDivElement>(null)
  const keywordChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const trafficChartCanvasRef = useRef<HTMLCanvasElement>(null)
  const competitorChartCanvasRef = useRef<HTMLCanvasElement>(null)

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

    if (mockupRef.current) {
      observer.observe(mockupRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Draw keyword ranking chart
      if (keywordChartCanvasRef.current) {
        const ctx = keywordChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const width = keywordChartCanvasRef.current.width
          const height = keywordChartCanvasRef.current.height
          const padding = 20

          // Sample data - keyword rankings over time (lower is better)
          const dataPoints = [18, 15, 12, 10, 8, 6, 4, 3, 2, 1]
          const maxValue = 20

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

          ctx.strokeStyle = "#d97706"
          ctx.lineWidth = 2
          ctx.beginPath()

          dataPoints.forEach((point, index) => {
            const x = padding + index * pointWidth
            const y = padding + (point / maxValue) * (height - 2 * padding)

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
            const y = padding + (point / maxValue) * (height - 2 * padding)

            ctx.fillStyle = "#d97706"
            ctx.beginPath()
            ctx.arc(x, y, 4, 0, 2 * Math.PI)
            ctx.fill()
          })

          // Add ranking labels
          dataPoints.forEach((point, index) => {
            const x = padding + index * pointWidth
            const y = padding + (point / maxValue) * (height - 2 * padding)

            ctx.fillStyle = "#6b7280"
            ctx.font = "10px Inter, sans-serif"
            ctx.textAlign = "center"
            ctx.fillText(`#${point}`, x, y - 10)
          })
        }
      }

      // Draw traffic chart
      if (trafficChartCanvasRef.current) {
        const ctx = trafficChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const barWidth = 20
          const spacing = 15
          const barHeights = [30, 45, 60, 75, 90, 105]
          const colors = ["#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"]

          ctx.clearRect(0, 0, trafficChartCanvasRef.current.width, trafficChartCanvasRef.current.height)

          barHeights.forEach((height, index) => {
            const x = 30 + index * (barWidth + spacing)
            const y = trafficChartCanvasRef.current!.height - height - 20

            // Draw bar
            ctx.fillStyle = colors[index]
            ctx.fillRect(x, y, barWidth, height)

            // Draw label
            ctx.fillStyle = "#6b7280"
            ctx.font = "10px Inter, sans-serif"
            ctx.textAlign = "center"
            ctx.fillText(`M${index + 1}`, x + barWidth / 2, trafficChartCanvasRef.current!.height - 5)
          })

          // Draw y-axis
          ctx.strokeStyle = "#d1d5db"
          ctx.beginPath()
          ctx.moveTo(20, 10)
          ctx.lineTo(20, trafficChartCanvasRef.current.height - 20)
          ctx.lineTo(trafficChartCanvasRef.current.width - 20, trafficChartCanvasRef.current.height - 20)
          ctx.stroke()
        }
      }

      // Draw competitor comparison chart
      if (competitorChartCanvasRef.current) {
        const ctx = competitorChartCanvasRef.current.getContext("2d")
        if (ctx) {
          const width = competitorChartCanvasRef.current.width
          const height = competitorChartCanvasRef.current.height
          const barHeight = 20
          const spacing = 15
          const maxBarWidth = width - 120

          // Sample data - competitor comparison (percentage of keywords ranking)
          const competitors = [
            { name: "You", value: 85, color: "#d97706" },
            { name: "Comp A", value: 65, color: "#9ca3af" },
            { name: "Comp B", value: 45, color: "#9ca3af" },
            { name: "Comp C", value: 30, color: "#9ca3af" },
          ]

          ctx.clearRect(0, 0, width, height)

          competitors.forEach((competitor, index) => {
            const y = 30 + index * (barHeight + spacing)
            const barWidth = (competitor.value / 100) * maxBarWidth

            // Draw bar
            ctx.fillStyle = competitor.color
            ctx.fillRect(80, y, barWidth, barHeight)

            // Draw label
            ctx.fillStyle = "#6b7280"
            ctx.font = "12px Inter, sans-serif"
            ctx.textAlign = "right"
            ctx.fillText(competitor.name, 70, y + barHeight / 2 + 4)

            // Draw value
            ctx.fillStyle = "#6b7280"
            ctx.font = "12px Inter, sans-serif"
            ctx.textAlign = "left"
            ctx.fillText(`${competitor.value}%`, barWidth + 90, y + barHeight / 2 + 4)
          })
        }
      }
    }
  }, [isVisible])

  // Handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (isVisible) {
        // Redraw charts on resize
        if (keywordChartCanvasRef.current && keywordChartCanvasRef.current.getContext) {
          const ctx = keywordChartCanvasRef.current.getContext("2d")
          if (ctx) {
            // Adjust canvas dimensions
            const container = keywordChartCanvasRef.current.parentElement
            if (container) {
              keywordChartCanvasRef.current.width = container.clientWidth * 0.9
              keywordChartCanvasRef.current.height = Math.min(150, container.clientHeight * 0.8)
            }

            // Redraw chart (simplified version)
            const width = keywordChartCanvasRef.current.width
            const height = keywordChartCanvasRef.current.height
            const padding = 20
            const dataPoints = [18, 15, 12, 10, 8, 6, 4, 3, 2, 1]
            const maxValue = 20
            const pointWidth = (width - 2 * padding) / (dataPoints.length - 1)

            ctx.clearRect(0, 0, width, height)

            // Draw axes
            ctx.strokeStyle = "#d1d5db"
            ctx.beginPath()
            ctx.moveTo(padding, padding)
            ctx.lineTo(padding, height - padding)
            ctx.lineTo(width - padding, height - padding)
            ctx.stroke()

            // Draw line
            ctx.strokeStyle = "#d97706"
            ctx.lineWidth = 2
            ctx.beginPath()

            dataPoints.forEach((point, index) => {
              const x = padding + index * pointWidth
              const y = padding + (point / maxValue) * (height - 2 * padding)

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
              const y = padding + (point / maxValue) * (height - 2 * padding)

              ctx.fillStyle = "#d97706"
              ctx.beginPath()
              ctx.arc(x, y, 4, 0, 2 * Math.PI)
              ctx.fill()
            })
          }
        }

        // Similar adjustments for other charts
        if (trafficChartCanvasRef.current && trafficChartCanvasRef.current.getContext) {
          const container = trafficChartCanvasRef.current.parentElement
          if (container) {
            trafficChartCanvasRef.current.width = container.clientWidth * 0.9
            trafficChartCanvasRef.current.height = Math.min(150, container.clientHeight * 0.8)
          }
          // Redraw traffic chart...
        }

        if (competitorChartCanvasRef.current && competitorChartCanvasRef.current.getContext) {
          const container = competitorChartCanvasRef.current.parentElement
          if (container) {
            competitorChartCanvasRef.current.width = container.clientWidth * 0.9
            competitorChartCanvasRef.current.height = Math.min(150, container.clientHeight * 0.8)
          }
          // Redraw competitor chart...
        }
      }
    }

    window.addEventListener("resize", handleResize)
    // Initial call to set sizes
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isVisible])

  return (
    <div ref={mockupRef} className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="font-semibold text-gray-800 dark:text-gray-200">SEO Ranking Dashboard</div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="p-4">
        {/* Search Bar */}
        <div className="mb-6 flex items-center">
          <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-l-lg p-2 flex items-center">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">yourdomain.com</span>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg text-sm transition-colors">
            Analyze
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
          <div
            className={`bg-amber-50 dark:bg-amber-900/20 p-2 sm:p-3 rounded-lg border border-amber-200 dark:border-amber-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center mb-1 sm:mb-2">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 mr-1 sm:mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Domain Rating</span>
            </div>
            <div className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100">68/100</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              <span>+5.2%</span>
            </div>
          </div>

          <div
            className={`bg-amber-50 dark:bg-amber-900/20 p-2 sm:p-3 rounded-lg border border-amber-200 dark:border-amber-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center mb-1 sm:mb-2">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 mr-1 sm:mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Keywords</span>
            </div>
            <div className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100">1,254</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              <span>+12.8%</span>
            </div>
          </div>

          <div
            className={`bg-amber-50 dark:bg-amber-900/20 p-2 sm:p-3 rounded-lg border border-amber-200 dark:border-amber-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center mb-1 sm:mb-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 mr-1 sm:mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Backlinks</span>
            </div>
            <div className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100">3,872</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              <span>+7.3%</span>
            </div>
          </div>

          <div
            className={`bg-amber-50 dark:bg-amber-900/20 p-2 sm:p-3 rounded-lg border border-amber-200 dark:border-amber-800/40 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center mb-1 sm:mb-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 mr-1 sm:mr-2" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Top Position</span>
            </div>
            <div className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100">#1</div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <ArrowUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              <span>+2 spots</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div
            className={`bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Keyword Ranking Progress
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Last 10 weeks</div>
            </div>
            <canvas ref={keywordChartCanvasRef} width="300" height="150" className="w-full"></canvas>
          </div>

          <div
            className={`bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Organic Traffic Growth
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Last 6 months</div>
            </div>
            <canvas ref={trafficChartCanvasRef} width="300" height="150" className="w-full"></canvas>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div
            className={`sm:col-span-2 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Competitor Comparison</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Keywords in top 10</div>
            </div>
            <canvas ref={competitorChartCanvasRef} width="400" height="150" className="w-full"></canvas>
          </div>

          <div
            className={`bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Top Keywords</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">Current position</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mr-1 sm:mr-2">
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">1</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">web design services</span>
                </div>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                  <span>#1</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mr-1 sm:mr-2">
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">2</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">seo optimization</span>
                </div>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                  <span>#2</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mr-1 sm:mr-2">
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">3</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">content marketing</span>
                </div>
                <div className="flex items-center text-xs text-amber-600 dark:text-amber-400">
                  <span>#4</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mr-1 sm:mr-2">
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">4</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">local seo services</span>
                </div>
                <div className="flex items-center text-xs text-amber-600 dark:text-amber-400">
                  <span>#5</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

