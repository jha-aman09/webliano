"use client"

import { useState, useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"
import {
  ArrowRight,
  Database,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart,
  Settings,
  X,
  RefreshCw,
  Zap,
  Globe,
  Server,
  Layers,
  ChevronRight,
  Search,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export function IntegrationsMockup() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>("payment")
  const [isConfiguring, setIsConfiguring] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle animation demo
  useEffect(() => {
    if (isAnimating) {
      animationRef.current = setTimeout(() => {
        setIsAnimating(false)
      }, 3000)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [isAnimating])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  // Colors based on theme
  const bgColor = isDark ? "#1e293b" : "#f8fafc"
  const panelBg = isDark ? "#0f172a" : "#ffffff"
  const borderColor = isDark ? "#334155" : "#e2e8f0"
  const textColor = isDark ? "#94a3b8" : "#64748b"
  const textColorDarker = isDark ? "#cbd5e1" : "#334155"
  const accentColor = "#10b981" // Green for both themes
  const accentColorLight = isDark ? "#10b98120" : "#10b98110"
  const successColor = "#10b981"
  const warningColor = "#f59e0b"
  const errorColor = "#ef4444"

  // Integration types with their icons and status
  const integrations = [
    { id: "payment", name: "Payment Gateway", icon: <CreditCard />, status: "connected", color: "#3b82f6" },
    { id: "ecommerce", name: "E-Commerce Platform", icon: <ShoppingCart />, status: "connected", color: "#8b5cf6" },
    { id: "shipping", name: "Shipping Provider", icon: <Truck />, status: "warning", color: "#f59e0b" },
    { id: "analytics", name: "Analytics", icon: <BarChart />, status: "connected", color: "#10b981" },
    { id: "database", name: "Database", icon: <Database />, status: "error", color: "#ef4444" },
    { id: "api", name: "External API", icon: <Globe />, status: "pending", color: "#6b7280" },
  ]

  // Data flow animation points for the flow diagram
  const getDataPoints = () => {
    if (isAnimating) {
      return [
        { left: "20%", top: "30%", delay: "0s", color: "#3b82f6" },
        { left: "40%", top: "20%", delay: "0.5s", color: "#8b5cf6" },
        { left: "60%", top: "40%", delay: "1s", color: "#10b981" },
        { left: "80%", top: "30%", delay: "1.5s", color: "#f59e0b" },
        { left: "50%", top: "60%", delay: "2s", color: "#ef4444" },
        { left: "30%", top: "70%", delay: "2.5s", color: "#6b7280" },
      ]
    }
    return []
  }

  // Mobile simplified version
  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden" style={{ backgroundColor: bgColor }}>
        {/* Top toolbar - simplified for mobile */}
        <div className="flex items-center p-2 border-b" style={{ borderColor }}>
          <div className="flex space-x-1">
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Settings className="h-3 w-3" style={{ color: textColor }} />
            </button>
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <RefreshCw className="h-3 w-3" style={{ color: textColor }} />
            </button>
          </div>
          <div className="ml-auto text-[8px]" style={{ color: textColor }}>
            <span>Integration Hub</span>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-2 flex flex-col">
          <div className="flex mb-2 border-b pb-1" style={{ borderColor }}>
            <button
              className={`text-[8px] px-2 py-1 rounded-t ${activeTab === "dashboard" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : ""
                }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`text-[8px] px-2 py-1 rounded-t ${activeTab === "integrations" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
                }`}
              onClick={() => setActiveTab("integrations")}
            >
              Integrations
            </button>
            <button
              className={`text-[8px] px-2 py-1 rounded-t ${activeTab === "logs" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
                }`}
              onClick={() => setActiveTab("logs")}
            >
              Logs
            </button>
          </div>

          {activeTab === "dashboard" && (
            <div className="flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-1 mb-2">
                <div
                  className="p-1 rounded border text-[8px] flex flex-col items-center"
                  style={{ borderColor, backgroundColor: panelBg }}
                >
                  <div className="font-medium" style={{ color: textColorDarker }}>
                    Active
                  </div>
                  <div className="text-blue-500 font-bold">4</div>
                </div>
                <div
                  className="p-1 rounded border text-[8px] flex flex-col items-center"
                  style={{ borderColor, backgroundColor: panelBg }}
                >
                  <div className="font-medium" style={{ color: textColorDarker }}>
                    Issues
                  </div>
                  <div className="text-orange-500 font-bold">2</div>
                </div>
              </div>

              <div className="flex-1 rounded border p-1 mb-2" style={{ borderColor, backgroundColor: panelBg }}>
                <div className="text-[8px] font-medium mb-1" style={{ color: textColorDarker }}>
                  Data Flow
                </div>
                <div className="relative h-20 w-full">
                  {/* Simplified flow diagram for mobile */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[8px] px-2 py-1 rounded"
                      onClick={() => setIsAnimating(true)}
                    >
                      Simulate Flow
                    </button>
                  </div>
                  {getDataPoints().map((point, index) => (
                    <div
                      key={index}
                      className="absolute h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{
                        left: point.left,
                        top: point.top,
                        backgroundColor: point.color,
                        animationDelay: point.delay,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="rounded border p-1" style={{ borderColor, backgroundColor: panelBg }}>
                <div className="text-[8px] font-medium mb-1" style={{ color: textColorDarker }}>
                  Recent Activity
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-[7px]" style={{ color: textColor }}>
                    <Clock className="h-1.5 w-1.5 mr-0.5" />
                    <span>Payment sync completed</span>
                    <span className="ml-auto">2m ago</span>
                  </div>
                  <div className="flex items-center text-[7px]" style={{ color: textColor }}>
                    <AlertCircle className="h-1.5 w-1.5 mr-0.5 text-orange-500" />
                    <span>Shipping API warning</span>
                    <span className="ml-auto">15m ago</span>
                  </div>
                  <div className="flex items-center text-[7px]" style={{ color: textColor }}>
                    <X className="h-1.5 w-1.5 mr-0.5 text-red-500" />
                    <span>Database connection failed</span>
                    <span className="ml-auto">1h ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="flex-1 flex flex-col">
              <div className="mb-1 flex">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 h-2 w-2"
                    style={{ color: textColor }}
                  />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    className="w-full text-[7px] pl-4 pr-1 py-0.5 rounded border"
                    style={{ borderColor, backgroundColor: panelBg, color: textColor }}
                  />
                </div>
                <button className="ml-1 text-[7px] px-1 py-0.5 rounded bg-blue-500 text-white flex items-center">
                  <Plus className="h-1.5 w-1.5 mr-0.5" />
                  Add
                </button>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto max-h-[60vh]">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className={`p-1 rounded border flex items-center cursor-pointer ${selectedIntegration === integration.id ? "border-green-500 bg-green-50 dark:bg-green-900/20" : ""
                      }`}
                    style={{
                      borderColor: selectedIntegration === integration.id ? "#10b981" : borderColor,
                      backgroundColor: panelBg,
                    }}
                    onClick={() => setSelectedIntegration(integration.id)}
                  >
                    <div
                      className="h-3 w-3 rounded-full flex items-center justify-center mr-1 flex-shrink-0"
                      style={{ backgroundColor: integration.color + "20" }}
                    >
                      <div className="h-2 w-2" style={{ color: integration.color }}>
                        {integration.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[7px] font-medium truncate" style={{ color: textColorDarker }}>
                        {integration.name}
                      </div>
                      <div className="flex items-center">
                        {integration.status === "connected" && (
                          <div className="flex items-center text-[6px] text-green-500">
                            <CheckCircle className="h-1 w-1 mr-0.5 flex-shrink-0" />
                            <span className="truncate">Connected</span>
                          </div>
                        )}
                        {integration.status === "warning" && (
                          <div className="flex items-center text-[6px] text-orange-500">
                            <AlertCircle className="h-1 w-1 mr-0.5 flex-shrink-0" />
                            <span className="truncate">Warning</span>
                          </div>
                        )}
                        {integration.status === "error" && (
                          <div className="flex items-center text-[6px] text-red-500">
                            <X className="h-1 w-1 mr-0.5 flex-shrink-0" />
                            <span className="truncate">Error</span>
                          </div>
                        )}
                        {integration.status === "pending" && (
                          <div className="flex items-center text-[6px] text-gray-500">
                            <Clock className="h-1 w-1 mr-0.5 flex-shrink-0" />
                            <span className="truncate">Pending</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-2 w-2 flex-shrink-0" style={{ color: textColor }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "logs" && (
            <div className="flex-1 flex flex-col">
              <div
                className="rounded border p-1 flex-1 overflow-y-auto"
                style={{ borderColor, backgroundColor: panelBg }}
              >
                <div className="space-y-1">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="text-[7px] border-b pb-0.5 mb-0.5"
                      style={{ borderColor, color: textColor }}
                    >
                      <div className="flex items-center">
                        <span className="font-mono">{new Date().toLocaleTimeString()}</span>
                        <span
                          className={`ml-1 px-0.5 rounded text-white text-[6px] ${index % 3 === 0 ? "bg-green-500" : index % 3 === 1 ? "bg-orange-500" : "bg-red-500"
                            }`}
                        >
                          {index % 3 === 0 ? "INFO" : index % 3 === 1 ? "WARN" : "ERROR"}
                        </span>
                      </div>
                      <div>
                        {index % 3 === 0
                          ? "Data sync completed successfully"
                          : index % 3 === 1
                            ? "API rate limit warning"
                            : "Connection timeout error"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Desktop version
  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Top toolbar */}
      <div className="flex items-center p-3 border-b" style={{ borderColor }}>
        <div className="flex items-center">
          <div className="mr-3 bg-green-500 text-white rounded p-1">
            <Layers className="h-5 w-5" />
          </div>
          <span className="font-medium text-sm" style={{ color: textColorDarker }}>
            Integration Hub
          </span>
        </div>
        <div className="flex space-x-2 ml-6">
          <button
            className={`px-3 py-1 text-xs rounded-md ${activeTab === "dashboard" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : ""
              }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`px-3 py-1 text-xs rounded-md ${activeTab === "integrations" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
              }`}
            onClick={() => setActiveTab("integrations")}
          >
            Integrations
          </button>
          <button
            className={`px-3 py-1 text-xs rounded-md ${activeTab === "logs" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
              }`}
            onClick={() => setActiveTab("logs")}
          >
            Logs
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <Settings className="h-4 w-4" style={{ color: textColor }} />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <RefreshCw className="h-4 w-4" style={{ color: textColor }} />
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar - only shown in integrations tab */}
        {activeTab === "integrations" && (
          <div
            className="w-64 border-r p-3 flex flex-col"
            style={{ borderColor, backgroundColor: isDark ? "#111827" : "#f9fafb" }}
          >
            <div className="mb-3 flex">
              <div className="relative flex-1">
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5"
                  style={{ color: textColor }}
                />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  className="w-full text-xs pl-8 pr-2 py-1.5 rounded-md border"
                  style={{ borderColor, backgroundColor: panelBg, color: textColor }}
                />
              </div>
              <button className="ml-2 text-xs px-2 py-1.5 rounded-md bg-blue-500 text-white flex items-center">
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add
              </button>
            </div>

            <div className="text-xs font-medium mb-2" style={{ color: textColorDarker }}>
              Available Integrations
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className={`p-2 rounded-md border flex items-center cursor-pointer hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 ${selectedIntegration === integration.id ? "border-green-500 bg-green-50 dark:bg-green-900/20" : ""
                    }`}
                  style={{
                    borderColor: selectedIntegration === integration.id ? accentColor : borderColor,
                    backgroundColor: panelBg,
                  }}
                  onClick={() => {
                    setSelectedIntegration(integration.id)
                    setIsConfiguring(false)
                  }}
                >
                  <div
                    className="h-8 w-8 rounded-md flex items-center justify-center mr-2 flex-shrink-0"
                    style={{ backgroundColor: integration.color + "20" }}
                  >
                    <div className="h-4 w-4" style={{ color: integration.color }}>
                      {integration.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate" style={{ color: textColorDarker }}>
                      {integration.name}
                    </div>
                    <div className="flex items-center">
                      {integration.status === "connected" && (
                        <div className="flex items-center text-xs text-green-500">
                          <CheckCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Connected</span>
                        </div>
                      )}
                      {integration.status === "warning" && (
                        <div className="flex items-center text-xs text-orange-500">
                          <AlertCircle className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Warning</span>
                        </div>
                      )}
                      {integration.status === "error" && (
                        <div className="flex items-center text-xs text-red-500">
                          <X className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Error</span>
                        </div>
                      )}
                      {integration.status === "pending" && (
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Pending</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 flex-shrink-0" style={{ color: textColor }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 p-4 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="h-full flex flex-col">
              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="p-4 rounded-lg border flex flex-col" style={{ borderColor, backgroundColor: panelBg }}>
                  <div className="text-sm font-medium mb-1" style={{ color: textColor }}>
                    Total Integrations
                  </div>
                  <div className="text-2xl font-bold" style={{ color: textColorDarker }}>
                    6
                  </div>
                  <div className="mt-auto pt-2 text-xs text-green-500 flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" />
                    <span>View all</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border flex flex-col" style={{ borderColor, backgroundColor: panelBg }}>
                  <div className="text-sm font-medium mb-1" style={{ color: textColor }}>
                    Active
                  </div>
                  <div className="text-2xl font-bold text-blue-500">4</div>
                  <div className="mt-auto pt-2 text-xs" style={{ color: textColor }}>
                    66% of total
                  </div>
                </div>
                <div className="p-4 rounded-lg border flex flex-col" style={{ borderColor, backgroundColor: panelBg }}>
                  <div className="text-sm font-medium mb-1" style={{ color: textColor }}>
                    Warnings
                  </div>
                  <div className="text-2xl font-bold text-orange-500">1</div>
                  <div className="mt-auto pt-2 text-xs text-orange-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>Needs attention</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border flex flex-col" style={{ borderColor, backgroundColor: panelBg }}>
                  <div className="text-sm font-medium mb-1" style={{ color: textColor }}>
                    Errors
                  </div>
                  <div className="text-2xl font-bold text-red-500">1</div>
                  <div className="mt-auto pt-2 text-xs text-red-500 flex items-center">
                    <X className="h-3 w-3 mr-1" />
                    <span>Needs resolution</span>
                  </div>
                </div>
              </div>

              {/* Data flow visualization */}
              <div className="flex-1 rounded-lg border p-4 mb-4" style={{ borderColor, backgroundColor: panelBg }}>
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div className="text-sm font-medium mb-2 sm:mb-0" style={{ color: textColorDarker }}>
                    Data Flow Visualization
                  </div>
                  <button
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-md flex items-center"
                    onClick={() => setIsAnimating(true)}
                  >
                    <Zap className="h-3.5 w-3.5 mr-1" />
                    Simulate Data Flow
                  </button>
                </div>
                <div className="relative h-64 border rounded-md overflow-hidden" style={{ borderColor }}>
                  {/* Integration nodes */}
                  {integrations.map((integration, index) => {
                    // Calculate position based on index
                    const angle = (index / integrations.length) * 2 * Math.PI
                    const radius = 40
                    const centerX = 50
                    const centerY = 50
                    const x = centerX + radius * Math.cos(angle)
                    const y = centerY + radius * Math.sin(angle)

                    return (
                      <div
                        key={integration.id}
                        className="absolute flex flex-col items-center"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${isAnimating ? "animate-pulse" : ""
                            }`}
                          style={{ backgroundColor: integration.color + "30" }}
                        >
                          <div className="h-5 w-5" style={{ color: integration.color }}>
                            {integration.icon}
                          </div>
                        </div>
                        <div className="text-xs mt-1 font-medium" style={{ color: textColorDarker }}>
                          {integration.name.split(" ")[0]}
                        </div>
                      </div>
                    )
                  })}

                  {/* Center hub */}
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: accentColorLight, border: `2px solid ${accentColor}` }}
                  >
                    <div className="h-8 w-8" style={{ color: accentColor }}>
                      <Server />
                    </div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    {integrations.map((integration, index) => {
                      // Calculate position based on index
                      const angle = (index / integrations.length) * 2 * Math.PI
                      const radius = 40
                      const centerX = 50
                      const centerY = 50
                      const x = centerX + radius * Math.cos(angle)
                      const y = centerY + radius * Math.sin(angle)

                      return (
                        <line
                          key={integration.id}
                          x1={`${centerX}%`}
                          y1={`${centerY}%`}
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke={integration.color}
                          strokeWidth="1.5"
                          strokeDasharray={integration.status !== "connected" ? "4" : "0"}
                          opacity="0.6"
                        />
                      )
                    })}
                  </svg>

                  {/* Data flow animation */}
                  {getDataPoints().map((point, index) => (
                    <div
                      key={index}
                      className="absolute h-3 w-3 rounded-full animate-pulse"
                      style={{
                        left: point.left,
                        top: point.top,
                        backgroundColor: point.color,
                        animationDelay: point.delay,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="rounded-lg border p-4" style={{ borderColor, backgroundColor: panelBg }}>
                <div className="text-sm font-medium mb-3" style={{ color: textColorDarker }}>
                  Recent Activity
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm" style={{ color: textColor }}>
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4  w-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div style={{ color: textColorDarker }}>Payment Gateway sync completed</div>
                      <div className="text-xs">All transactions processed successfully</div>
                    </div>
                    <div className="text-xs">2 minutes ago</div>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: textColor }}>
                    <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div style={{ color: textColorDarker }}>Shipping API warning</div>
                      <div className="text-xs">Rate limit approaching threshold</div>
                    </div>
                    <div className="text-xs">15 minutes ago</div>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: textColor }}>
                    <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div style={{ color: textColorDarker }}>Database connection failed</div>
                      <div className="text-xs">Connection timeout after 30 seconds</div>
                    </div>
                    <div className="text-xs">1 hour ago</div>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: textColor }}>
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <RefreshCw className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div style={{ color: textColorDarker }}>E-Commerce Platform sync</div>
                      <div className="text-xs">124 products updated, 3 new products added</div>
                    </div>
                    <div className="text-xs">3 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="h-full">
              {selectedIntegration && (
                <div className="h-full flex flex-col">
                  {/* Integration header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {integrations.find((i) => i.id === selectedIntegration)?.icon && (
                        <div
                          className="h-10 w-10 rounded-md flex items-center justify-center mr-3"
                          style={{
                            backgroundColor: integrations.find((i) => i.id === selectedIntegration)?.color + "20",
                          }}
                        >
                          <div
                            className="h-5 w-5"
                            style={{
                              color: integrations.find((i) => i.id === selectedIntegration)?.color,
                            }}
                          >
                            {integrations.find((i) => i.id === selectedIntegration)?.icon}
                          </div>
                        </div>
                      )}
                      <div>
                        <h2 className="text-lg font-medium" style={{ color: textColorDarker }}>
                          {integrations.find((i) => i.id === selectedIntegration)?.name}
                        </h2>
                        <div className="flex items-center">
                          {integrations.find((i) => i.id === selectedIntegration)?.status === "connected" && (
                            <div className="flex items-center text-sm text-green-500">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Connected and working properly
                            </div>
                          )}
                          {integrations.find((i) => i.id === selectedIntegration)?.status === "warning" && (
                            <div className="flex items-center text-sm text-orange-500">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              Connected with warnings
                            </div>
                          )}
                          {integrations.find((i) => i.id === selectedIntegration)?.status === "error" && (
                            <div className="flex items-center text-sm text-red-500">
                              <X className="h-4 w-4 mr-1" />
                              Connection error
                            </div>
                          )}
                          {integrations.find((i) => i.id === selectedIntegration)?.status === "pending" && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              Setup pending
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className={`px-3 py-1.5 text-sm rounded-md ${!isConfiguring ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
                          }`}
                        onClick={() => setIsConfiguring(false)}
                      >
                        Overview
                      </button>
                      <button
                        className={`px-3 py-1.5 text-sm rounded-md ${isConfiguring ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""
                          }`}
                        onClick={() => setIsConfiguring(true)}
                      >
                        Configure
                      </button>
                    </div>
                  </div>

                  {!isConfiguring ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                      {/* Status and metrics */}
                      <div className="rounded-lg border p-4" style={{ borderColor, backgroundColor: panelBg }}>
                        <div className="text-sm font-medium mb-3" style={{ color: textColorDarker }}>
                          Status & Metrics
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs mb-1" style={{ color: textColor }}>
                              Connection Status
                            </div>
                            <div className="flex items-center">
                              {integrations.find((i) => i.id === selectedIntegration)?.status === "connected" && (
                                <div className="flex items-center text-green-500">
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                  <span className="font-medium">Connected</span>
                                </div>
                              )}
                              {integrations.find((i) => i.id === selectedIntegration)?.status === "warning" && (
                                <div className="flex items-center text-orange-500">
                                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div>
                                  <span className="font-medium">Warning</span>
                                </div>
                              )}
                              {integrations.find((i) => i.id === selectedIntegration)?.status === "error" && (
                                <div className="flex items-center text-red-500">
                                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                  <span className="font-medium">Error</span>
                                </div>
                              )}
                              {integrations.find((i) => i.id === selectedIntegration)?.status === "pending" && (
                                <div className="flex items-center text-gray-500">
                                  <div className="h-2.5 w-2.5 rounded-full bg-gray-500 mr-2"></div>
                                  <span className="font-medium">Pending</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs mb-1" style={{ color: textColor }}>
                              Last Sync
                            </div>
                            <div className="font-medium" style={{ color: textColorDarker }}>
                              {selectedIntegration === "payment"
                                ? "2 minutes ago"
                                : selectedIntegration === "ecommerce"
                                  ? "15 minutes ago"
                                  : selectedIntegration === "shipping"
                                    ? "1 hour ago"
                                    : selectedIntegration === "analytics"
                                      ? "3 hours ago"
                                      : selectedIntegration === "database"
                                        ? "Failed"
                                        : "Never"}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs mb-1" style={{ color: textColor }}>
                              API Usage (Today)
                            </div>
                            <div className="font-medium" style={{ color: textColorDarker }}>
                              {selectedIntegration === "payment"
                                ? "243 requests"
                                : selectedIntegration === "ecommerce"
                                  ? "512 requests"
                                  : selectedIntegration === "shipping"
                                    ? "89 requests"
                                    : selectedIntegration === "analytics"
                                      ? "1,024 requests"
                                      : selectedIntegration === "database"
                                        ? "0 requests"
                                        : "0 requests"}
                            </div>
                            {selectedIntegration === "shipping" && (
                              <div className="text-xs text-orange-500 mt-1">85% of daily limit</div>
                            )}
                          </div>
                          <div>
                            <div className="text-xs mb-1" style={{ color: textColor }}>
                              Data Transferred
                            </div>
                            <div className="font-medium" style={{ color: textColorDarker }}>
                              {selectedIntegration === "payment"
                                ? "1.2 MB"
                                : selectedIntegration === "ecommerce"
                                  ? "8.5 MB"
                                  : selectedIntegration === "shipping"
                                    ? "0.4 MB"
                                    : selectedIntegration === "analytics"
                                      ? "15.7 MB"
                                      : selectedIntegration === "database"
                                        ? "0 MB"
                                        : "0 MB"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent activity */}
                      <div className="rounded-lg border p-4" style={{ borderColor, backgroundColor: panelBg }}>
                        <div className="text-sm font-medium mb-3" style={{ color: textColorDarker }}>
                          Recent Activity
                        </div>
                        <div className="space-y-3">
                          {selectedIntegration === "payment" && (
                            <>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Sync completed</div>
                                  <div className="text-xs">15 transactions processed</div>
                                </div>
                                <div className="text-xs">2 min ago</div>
                              </div>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                  <RefreshCw className="h-3.5 w-3.5 text-blue-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Webhook received</div>
                                  <div className="text-xs">New payment notification</div>
                                </div>
                                <div className="text-xs">15 min ago</div>
                              </div>
                            </>
                          )}
                          {selectedIntegration === "shipping" && (
                            <>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-2">
                                  <AlertCircle className="h-3.5 w-3.5 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>API rate limit warning</div>
                                  <div className="text-xs">85% of daily limit reached</div>
                                </div>
                                <div className="text-xs">15 min ago</div>
                              </div>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Shipping labels generated</div>
                                  <div className="text-xs">5 labels created successfully</div>
                                </div>
                                <div className="text-xs">1 hour ago</div>
                              </div>
                            </>
                          )}
                          {selectedIntegration === "database" && (
                            <>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-2">
                                  <X className="h-3.5 w-3.5 text-red-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Connection failed</div>
                                  <div className="text-xs">Timeout after 30 seconds</div>
                                </div>
                                <div className="text-xs">1 hour ago</div>
                              </div>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-2">
                                  <X className="h-3.5 w-3.5 text-red-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Authentication error</div>
                                  <div className="text-xs">Invalid credentials</div>
                                </div>
                                <div className="text-xs">1 hour ago</div>
                              </div>
                            </>
                          )}
                          {selectedIntegration === "ecommerce" && (
                            <>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                  <RefreshCw className="h-3.5 w-3.5 text-blue-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Product sync</div>
                                  <div className="text-xs">124 products updated</div>
                                </div>
                                <div className="text-xs">15 min ago</div>
                              </div>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Order sync</div>
                                  <div className="text-xs">8 new orders processed</div>
                                </div>
                                <div className="text-xs">30 min ago</div>
                              </div>
                            </>
                          )}
                          {selectedIntegration === "analytics" && (
                            <>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Data export completed</div>
                                  <div className="text-xs">Daily analytics report</div>
                                </div>
                                <div className="text-xs">3 hours ago</div>
                              </div>
                              <div className="flex items-center text-sm" style={{ color: textColor }}>
                                <div className="h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                  <RefreshCw className="h-3.5 w-3.5 text-blue-500" />
                                </div>
                                <div className="flex-1">
                                  <div style={{ color: textColorDarker }}>Event tracking</div>
                                  <div className="text-xs">512 events processed</div>
                                </div>
                                <div className="text-xs">5 hours ago</div>
                              </div>
                            </>
                          )}
                          {selectedIntegration === "api" && (
                            <div className="flex items-center justify-center h-20 text-sm" style={{ color: textColor }}>
                              <Clock className="h-5 w-5 mr-2" />
                              <span>No activity yet - setup pending</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Data mapping */}
                      <div
                        className="rounded-lg border p-4 col-span-2"
                        style={{ borderColor, backgroundColor: panelBg }}
                      >
                        <div className="text-sm font-medium mb-3" style={{ color: textColorDarker }}>
                          Data Mapping
                        </div>
                        <div className="border rounded-md" style={{ borderColor }}>
                          <div className="flex border-b text-xs font-medium" style={{ borderColor }}>
                            <div className="w-1/3 p-2" style={{ color: textColorDarker }}>
                              Source Field
                            </div>
                            <div className="w-1/3 p-2 border-x" style={{ borderColor, color: textColorDarker }}>
                              Destination Field
                            </div>
                            <div className="w-1/3 p-2" style={{ color: textColorDarker }}>
                              Transformation
                            </div>
                          </div>
                          <div className="flex border-b text-xs" style={{ borderColor, color: textColor }}>
                            <div className="w-1/3 p-2">customer_id</div>
                            <div className="w-1/3 p-2 border-x" style={{ borderColor }}>
                              user_id
                            </div>
                            <div className="w-1/3 p-2">None</div>
                          </div>
                          <div className="flex border-b text-xs" style={{ borderColor, color: textColor }}>
                            <div className="w-1/3 p-2">product_sku</div>
                            <div className="w-1/3 p-2 border-x" style={{ borderColor }}>
                              item_code
                            </div>
                            <div className="w-1/3 p-2">Prefix with "SKU-"</div>
                          </div>
                          <div className="flex border-b text-xs" style={{ borderColor, color: textColor }}>
                            <div className="w-1/3 p-2">price</div>
                            <div className="w-1/3 p-2 border-x" style={{ borderColor }}>
                              amount
                            </div>
                            <div className="w-1/3 p-2">Convert to cents</div>
                          </div>
                          <div className="flex text-xs" style={{ color: textColor }}>
                            <div className="w-1/3 p-2">created_at</div>
                            <div className="w-1/3 p-2 border-x" style={{ borderColor }}>
                              timestamp
                            </div>
                            <div className="w-1/3 p-2">Format as ISO 8601</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                      {/* Configuration form */}
                      <div
                        className="lg:col-span-2 rounded-lg border p-4"
                        style={{ borderColor, backgroundColor: panelBg }}
                      >
                        <div className="text-sm font-medium mb-4" style={{ color: textColorDarker }}>
                          Configuration Settings
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              API Key
                            </label>
                            <input
                              type="text"
                              value="••••••••••••••••••••••••••••••"
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              API Endpoint URL
                            </label>
                            <input
                              type="text"
                              value={
                                selectedIntegration === "payment"
                                  ? "https://api.payment-gateway.com/v2"
                                  : selectedIntegration === "ecommerce"
                                    ? "https://api.ecommerce-platform.com/v1"
                                    : selectedIntegration === "shipping"
                                      ? "https://api.shipping-provider.com/v3"
                                      : selectedIntegration === "analytics"
                                        ? "https://api.analytics-service.com/v2"
                                        : selectedIntegration === "database"
                                          ? "postgres://user:pass@db.example.com:5432/db"
                                          : "https://api.example.com/v1"
                              }
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Sync Frequency
                            </label>
                            <select
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            >
                              <option>Real-time (webhook)</option>
                              <option>Every 5 minutes</option>
                              <option>Every 15 minutes</option>
                              <option>Every hour</option>
                              <option>Every day</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Webhook URL
                            </label>
                            <input
                              type="text"
                              value="https://your-app.com/api/webhooks/integration-callback"
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            />
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="enableLogging"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <label htmlFor="enableLogging" className="ml-2 text-sm" style={{ color: textColorDarker }}>
                              Enable detailed logging
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="enableNotifications"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <label
                              htmlFor="enableNotifications"
                              className="ml-2 text-sm"
                              style={{ color: textColorDarker }}
                            >
                              Send error notifications
                            </label>
                          </div>
                          <div className="pt-4 flex space-x-2">
                            <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-md">
                              Save Changes
                            </button>
                            <button
                              className="px-4 py-2 border text-sm rounded-md"
                              style={{ borderColor, color: textColor }}
                            >
                              Test Connection
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Advanced settings */}
                      <div className="rounded-lg border p-4" style={{ borderColor, backgroundColor: panelBg }}>
                        <div className="text-sm font-medium mb-4" style={{ color: textColorDarker }}>
                          Advanced Settings
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Timeout (seconds)
                            </label>
                            <input
                              type="number"
                              defaultValue="30"
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Retry Attempts
                            </label>
                            <input
                              type="number"
                              defaultValue="3"
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Retry Delay (seconds)
                            </label>
                            <input
                              type="number"
                              defaultValue="5"
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1" style={{ color: textColorDarker }}>
                              Data Format
                            </label>
                            <select
                              className="w-full text-sm p-2 rounded-md border"
                              style={{ borderColor, backgroundColor: isDark ? "#1e293b" : "#f8fafc", color: textColor }}
                            >
                              <option>JSON</option>
                              <option>XML</option>
                              <option>CSV</option>
                            </select>
                          </div>
                          <div className="pt-4">
                            <button className="w-full px-4 py-2 text-sm text-red-500 border border-red-300 dark:border-red-700 rounded-md">
                              Reset Integration
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === "logs" && (
            <div className="h-full flex flex-col">
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <div className="text-sm font-medium" style={{ color: textColorDarker }}>
                  Integration Logs
                </div>
                <div className="flex flex-wrap gap-2">
                  <select
                    className="text-xs p-1.5 rounded-md border"
                    style={{ borderColor, backgroundColor: panelBg, color: textColor }}
                  >
                    <option>All Integrations</option>
                    <option>Payment Gateway</option>
                    <option>E-Commerce Platform</option>
                    <option>Shipping Provider</option>
                    <option>Analytics</option>
                    <option>Database</option>
                  </select>
                  <select
                    className="text-xs p-1.5 rounded-md border"
                    style={{ borderColor, backgroundColor: panelBg, color: textColor }}
                  >
                    <option>All Levels</option>
                    <option>Info</option>
                    <option>Warning</option>
                    <option>Error</option>
                  </select>
                  <button
                    className="text-xs p-1.5 rounded-md border flex items-center"
                    style={{ borderColor, color: textColor }}
                  >
                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                    Refresh
                  </button>
                </div>
              </div>

              <div
                className="flex-1 rounded-lg border overflow-hidden"
                style={{ borderColor, backgroundColor: panelBg }}
              >
                <div className="flex border-b text-xs font-medium" style={{ borderColor }}>
                  <div className="w-32 p-2" style={{ color: textColorDarker }}>
                    Timestamp
                  </div>
                  <div className="w-24 p-2 border-x" style={{ borderColor, color: textColorDarker }}>
                    Level
                  </div>
                  <div className="w-40 p-2 border-r" style={{ borderColor, color: textColorDarker }}>
                    Integration
                  </div>
                  <div className="flex-1 p-2" style={{ color: textColorDarker }}>
                    Message
                  </div>
                </div>
                <div className="overflow-y-auto h-[calc(100%-28px)]">
                  {[...Array(20)].map((_, index) => (
                    <div key={index} className="flex border-b text-xs" style={{ borderColor, color: textColor }}>
                      <div className="w-32 p-2 font-mono">
                        {new Date(Date.now() - index * 1000 * 60 * ((index % 5) + 1)).toLocaleTimeString()}
                      </div>
                      <div
                        className={`w-24 p-2 border-x flex items-center ${index % 4 === 0 ? "text-red-500" : index % 4 === 1 ? "text-orange-500" : "text-green-500"
                          }`}
                        style={{ borderColor }}
                      >
                        {index % 4 === 0 ? (
                          <>
                            <X className="h-3.5 w-3.5 mr-1" />
                            ERROR
                          </>
                        ) : index % 4 === 1 ? (
                          <>
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            WARN
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-3.5 w-3.5 mr-1" />
                            INFO
                          </>
                        )}
                      </div>
                      <div className="w-40 p-2 border-r" style={{ borderColor }}>
                        {index % 6 === 0
                          ? "Payment Gateway"
                          : index % 6 === 1
                            ? "E-Commerce Platform"
                            : index % 6 === 2
                              ? "Shipping Provider"
                              : index % 6 === 3
                                ? "Analytics"
                                : index % 6 === 4
                                  ? "Database"
                                  : "External API"}
                      </div>
                      <div className="flex-1 p-2">
                        {index % 4 === 0
                          ? "Connection failed: timeout after 30 seconds"
                          : index % 4 === 1
                            ? "API rate limit warning: 85% of daily limit reached"
                            : index % 4 === 2
                              ? "Data sync completed successfully"
                              : "Webhook received and processed"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
