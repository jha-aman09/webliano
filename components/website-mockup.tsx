"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function WebsiteMockup() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  // Colors based on theme
  const browserBg = isDark ? "#1e293b" : "#f8fafc"
  const browserBorder = isDark ? "#334155" : "#e2e8f0"
  const urlBarBg = isDark ? "#334155" : "#e2e8f0"
  const urlText = isDark ? "#94a3b8" : "#64748b"
  const contentBg = isDark ? "#0f172a" : "#ffffff"
  const primaryButtonBg = isDark ? "#3b82f6" : "#3b82f6"
  const secondaryButtonBg = isDark ? "#334155" : "#e2e8f0"
  const textBlockBg = isDark ? "#1e293b" : "#f1f5f9"

  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
      style={{ backgroundColor: browserBg }}
    >
      {/* Browser Chrome */}
      <div className="w-full px-4 py-3 flex items-center border-b" style={{ borderColor: browserBorder }}>
        {/* Window Controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* URL Bar */}
        <div
          className="mx-4 flex items-center px-4 py-1 rounded-md max-w-md w-full"
          style={{ backgroundColor: urlBarBg }}
        >
          <span className="text-sm font-medium" style={{ color: urlText }}>
            <a href="https://webliano.com">webliano.com</a>
          </span>
        </div>

        {/* Spacer to balance the window controls */}
        <div className="w-12"></div>
      </div>

      {/* Website Content */}
      <div className="p-6" style={{ backgroundColor: contentBg }}>
        {/* Hero Section */}
        <div className="mb-8">
          <div className="w-40 h-10 rounded-md mb-4" style={{ backgroundColor: primaryButtonBg }}></div>
          <div className="w-full h-6 rounded-md mb-3" style={{ backgroundColor: textBlockBg }}></div>
          <div className="w-3/4 h-6 rounded-md mb-6" style={{ backgroundColor: textBlockBg }}></div>
          <div className="flex space-x-4">
            <div className="w-32 h-10 rounded-md" style={{ backgroundColor: primaryButtonBg }}></div>
            <div className="w-32 h-10 rounded-md" style={{ backgroundColor: secondaryButtonBg }}></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
          <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
          <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
          <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
        </div>
      </div>
    </div>
  )
}

