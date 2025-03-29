"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

export function WebsiteMockup() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")

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
      <div
        className="w-full px-2 sm:px-4 py-2 sm:py-3 flex items-center border-b"
        style={{ borderColor: browserBorder }}
      >
        {/* Window Controls */}
        <div className="flex space-x-1.5 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>

        {/* URL Bar */}
        <div
          className="mx-4 flex items-center px-2 sm:px-4 py-1 rounded-md max-w-md w-full"
          style={{ backgroundColor: urlBarBg }}
        >
          <span className="text-xs sm:text-sm font-medium truncate" style={{ color: urlText }}>
            <a href="https://webliano.com">webliano.com</a>
          </span>
        </div>

        {/* Spacer to balance the window controls */}
        <div className="w-8 sm:w-12"></div>
      </div>

      {/* Website Content */}
      <div className="p-3 sm:p-6" style={{ backgroundColor: contentBg }}>
        {/* Hero Section - Simplified for mobile */}
        <div className="mb-4 sm:mb-8">
          {isMobile ? (
            // Mobile layout - Simplified
            <>
              <div
                className="w-24 sm:w-40 h-6 sm:h-10 rounded-md mb-3 sm:mb-4"
                style={{ backgroundColor: primaryButtonBg }}
              ></div>
              <div className="w-full h-4 sm:h-6 rounded-md mb-2 sm:mb-3" style={{ backgroundColor: textBlockBg }}></div>
              <div className="w-3/4 h-4 sm:h-6 rounded-md mb-4 sm:mb-6" style={{ backgroundColor: textBlockBg }}></div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="w-20 sm:w-32 h-6 sm:h-10 rounded-md" style={{ backgroundColor: primaryButtonBg }}></div>
                <div
                  className="w-20 sm:w-32 h-6 sm:h-10 rounded-md"
                  style={{ backgroundColor: secondaryButtonBg }}
                ></div>
              </div>
            </>
          ) : (
            // Desktop layout
            <>
              <div className="w-40 h-10 rounded-md mb-4" style={{ backgroundColor: primaryButtonBg }}></div>
              <div className="w-full h-6 rounded-md mb-3" style={{ backgroundColor: textBlockBg }}></div>
              <div className="w-3/4 h-6 rounded-md mb-6" style={{ backgroundColor: textBlockBg }}></div>
              <div className="flex space-x-4">
                <div className="w-32 h-10 rounded-md" style={{ backgroundColor: primaryButtonBg }}></div>
                <div className="w-32 h-10 rounded-md" style={{ backgroundColor: secondaryButtonBg }}></div>
              </div>
            </>
          )}
        </div>

        {/* Content Grid - Responsive */}
        {isMobile ? (
          // Mobile: Single column grid
          <div className="space-y-3">
            <div className="h-20 sm:h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
            <div className="h-20 sm:h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
            <div className="h-20 sm:h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
          </div>
        ) : (
          // Desktop: Two column grid
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
            <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
            <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
            <div className="h-32 rounded-md" style={{ backgroundColor: textBlockBg }}></div>
          </div>
        )}
      </div>
    </div>
  )
}

