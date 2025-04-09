"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Plus,
  Settings,
  ImageIcon,
  Layout,
  Sliders,
  Eye,
  Search,
  PanelLeft,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Minimize2,
  RotateCcw,
  Menu,
  ShoppingCart,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function UIDesignMockup() {
  const isMobile = useMobile()
  const [selectedLayer, setSelectedLayer] = useState("button")
  const [showLayers, setShowLayers] = useState(false)
  const [showProperties, setShowProperties] = useState(false)
  const [deviceView, setDeviceView] = useState("desktop")
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Toggle panels
  const toggleLayers = () => {
    setShowLayers(!showLayers)
    if (!showLayers) setShowProperties(false)
  }

  const toggleProperties = () => {
    setShowProperties(!showProperties)
    if (!showProperties) setShowLayers(false)
  }

  // Handle zoom in/out
  const handleZoomIn = () => {
    if (zoomLevel < 150) setZoomLevel(zoomLevel + 10)
  }

  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel(zoomLevel - 10)
  }

  // Reset zoom
  const handleResetZoom = () => {
    setZoomLevel(100)
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Responsive preview width based on device view
  const getPreviewWidth = () => {
    switch (deviceView) {
      case "mobile":
        return "w-[320px]"
      case "tablet":
        return "w-[640px]"
      default:
        return "w-full max-w-4xl"
    }
  }

  // Close panels when switching to mobile view
  useEffect(() => {
    if (isMobile) {
      setShowLayers(false)
      setShowProperties(false)
    }
  }, [isMobile])

  return (
    <div className="w-full h-[500px] md:h-[600px] bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative">
      {/* Minimal Header */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-3 py-2 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-300">
          <span className="hidden sm:inline">Responsive Design</span>
          <span className="sm:hidden">Design</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Minimal Toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-3 py-1 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center space-x-1">
          <button
            className={`p-1 rounded ${showLayers ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            onClick={toggleLayers}
            title="Toggle Layers"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
          <button
            className="p-1 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Design"
          >
            <Layout className="h-4 w-4" />
          </button>
        </div>

        {/* Device View Selector */}
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-md p-0.5">
          <button
            className={`p-1 rounded text-xs ${deviceView === "mobile" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-500 dark:text-gray-400"}`}
            onClick={() => setDeviceView("mobile")}
            title="Mobile view"
          >
            <Smartphone className="h-3 w-3" />
          </button>
          <button
            className={`p-1 rounded text-xs ${deviceView === "tablet" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-500 dark:text-gray-400"}`}
            onClick={() => setDeviceView("tablet")}
            title="Tablet view"
          >
            <Tablet className="h-3 w-3" />
          </button>
          <button
            className={`p-1 rounded text-xs ${deviceView === "desktop" ? "bg-white dark:bg-gray-600 shadow-sm" : "text-gray-500 dark:text-gray-400"}`}
            onClick={() => setDeviceView("desktop")}
            title="Desktop view"
          >
            <Monitor className="h-3 w-3" />
          </button>
        </div>

        <div className="flex items-center space-x-1">
          <button
            className={`p-1 rounded ${showProperties ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            onClick={toggleProperties}
            title="Toggle Properties"
          >
            <Sliders className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-72px)] overflow-hidden relative">
        {/* Layers Panel */}
        {showLayers && (
          <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0 overflow-y-auto">
            <div className="p-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">LAYERS</span>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="p-1">
              <div className="text-xs py-1 px-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                  <ChevronDown className="h-3 w-3 mr-1" />
                  <span>Product Page</span>
                </div>
                <Eye className="h-3 w-3" />
              </div>
              <div className="ml-3 space-y-1">
                <div
                  className={`text-xs py-1 px-2 rounded flex items-center justify-between ${selectedLayer === "header" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() => setSelectedLayer("header")}
                >
                  <span>Header</span>
                  <Eye className="h-3 w-3" />
                </div>
                <div
                  className={`text-xs py-1 px-2 rounded flex items-center justify-between ${selectedLayer === "product" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() => setSelectedLayer("product")}
                >
                  <span>Product</span>
                  <Eye className="h-3 w-3" />
                </div>
                <div
                  className={`text-xs py-1 px-2 rounded flex items-center justify-between ${selectedLayer === "input" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() => setSelectedLayer("input")}
                >
                  <span>Search</span>
                  <Eye className="h-3 w-3" />
                </div>
                <div
                  className={`text-xs py-1 px-2 rounded flex items-center justify-between ${selectedLayer === "button" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() => setSelectedLayer("button")}
                >
                  <span>Button</span>
                  <Eye className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Canvas */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-auto p-2 sm:p-4 flex items-center justify-center">
          <div className={`flex flex-col items-center`}>
            {/* Device type indicator */}
            <div className="mb-2 flex items-center space-x-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-sm border border-gray-200 dark:border-gray-700">
                {deviceView === "mobile" && <Smartphone className="h-3 w-3 inline mr-1" />}
                {deviceView === "tablet" && <Tablet className="h-3 w-3 inline mr-1" />}
                {deviceView === "desktop" && <Monitor className="h-3 w-3 inline mr-1" />}
                {deviceView.charAt(0).toUpperCase() + deviceView.slice(1)} View
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-1">
                <button
                  onClick={handleZoomOut}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  title="Zoom out"
                >
                  <Minimize2 className="h-3 w-3" />
                </button>
                <span className="w-8 text-center">{zoomLevel}%</span>
                <button
                  onClick={handleZoomIn}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  title="Zoom in"
                >
                  <Maximize2 className="h-3 w-3" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  title="Reset zoom"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Responsive preview container */}
            <div
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${getPreviewWidth()} transition-all duration-300`}
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center top" }}
            >
              {/* Minimal Product Page Design */}
              <div className="w-full">
                {/* Header */}
                <div
                  className={`p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between ${selectedLayer === "header" ? "ring-2 ring-indigo-500" : ""}`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="font-medium text-sm">Brand</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-500 dark:text-gray-400">
                      <Search className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400">
                      <Menu className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4">
                  <div
                    className={`flex flex-col ${deviceView !== "mobile" ? "sm:flex-row" : ""} gap-4 ${selectedLayer === "product" ? "ring-2 ring-indigo-500" : ""}`}
                  >
                    {/* Product Image */}
                    <div className={`${deviceView !== "mobile" ? "sm:w-1/2" : "w-full"}`}>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg aspect-square flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`${deviceView !== "mobile" ? "sm:w-1/2" : "w-full"}`}>
                      <h2 className="text-lg font-medium mb-2">Minimal UI Kit</h2>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} filled={i <= 4} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(24)</span>
                      </div>
                      <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">$89.00</div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Clean, minimal UI components for modern web applications.
                      </p>

                      {/* Search Input */}
                      <div className={`mb-4 ${selectedLayer === "input" ? "ring-2 ring-indigo-500" : ""}`}>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search components..."
                            className="w-full border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
                          />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <Search className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Options */}
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-2">Options:</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-md px-3 py-1 text-xs">
                            Standard
                          </div>
                          <div className="border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1 text-xs">
                            Premium
                          </div>
                          <div className="border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1 text-xs">
                            Enterprise
                          </div>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <div className={`${selectedLayer === "button" ? "ring-2 ring-indigo-500" : ""}`}>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        {showProperties && (
          <div className="w-48 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0 overflow-y-auto">
            <div className="p-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">PROPERTIES</span>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Settings className="h-3 w-3" />
                </button>
              </div>
            </div>

            {selectedLayer === "button" && (
              <div className="p-3 space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Text</label>
                  <input
                    type="text"
                    defaultValue="Add to Cart"
                    className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Color</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded bg-indigo-600 border border-gray-300 dark:border-gray-600"></div>
                    <input
                      type="text"
                      defaultValue="#4F46E5"
                      className="flex-1 text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Radius</label>
                  <input
                    type="text"
                    defaultValue="8px"
                    className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                  />
                </div>
              </div>
            )}

            {selectedLayer === "input" && (
              <div className="p-3 space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Placeholder</label>
                  <input
                    type="text"
                    defaultValue="Search components..."
                    className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Border</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"></div>
                    <input
                      type="text"
                      defaultValue="#E5E7EB"
                      className="flex-1 text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Radius</label>
                  <input
                    type="text"
                    defaultValue="8px"
                    className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                  />
                </div>
              </div>
            )}

            {selectedLayer === "header" && (
              <div className="p-3 space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Background</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"></div>
                    <input
                      type="text"
                      defaultValue="#FFFFFF"
                      className="flex-1 text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Border</label>
                  <select className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700">
                    <option>Bottom</option>
                    <option>All</option>
                    <option>None</option>
                  </select>
                </div>
              </div>
            )}

            {selectedLayer === "product" && (
              <div className="p-3 space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Layout</label>
                  <select className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700">
                    <option>Row</option>
                    <option>Column</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Gap</label>
                  <input
                    type="text"
                    defaultValue="16px"
                    className="w-full text-xs border border-gray-200 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Responsive</label>
                  <div className="flex items-center mt-1">
                    <input type="checkbox" id="responsive" className="mr-2" defaultChecked />
                    <label htmlFor="responsive" className="text-xs">
                      Stack on mobile
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-500"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
