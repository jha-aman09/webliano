"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Play, Pause, SkipBack, SkipForward, Scissors, Volume2, Image, Film, Plus, Layers } from "lucide-react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export function VideoEditingMockup() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(60) // 60 seconds total duration
  const timelineRef = useRef<HTMLDivElement>(null)
  const playheadRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const isMobile = useMobile()
  const isSmallScreen = typeof window !== "undefined" ? window.innerWidth < 640 : false

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle playback animation
  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  // Animation function for playback
  const animate = () => {
    if (currentTime < duration) {
      setCurrentTime((prev) => {
        const newTime = prev + 0.1
        return newTime > duration ? duration : newTime
      })
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setIsPlaying(false)
    }
  }

  // Handle timeline click
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const percentage = offsetX / rect.width
      const newTime = percentage * duration
      setCurrentTime(newTime)
    }
  }

  // Format time display (MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  // Colors based on theme
  const bgColor = isDark ? "#1e293b" : "#f8fafc"
  const panelBg = isDark ? "#0f172a" : "#ffffff"
  const borderColor = isDark ? "#334155" : "#e2e8f0"
  const textColor = isDark ? "#94a3b8" : "#64748b"
  const accentColor = "#a855f7" // Purple for both themes
  const timelineColor = isDark ? "#334155" : "#e2e8f0"
  const clipBg1 = isDark ? "#7e22ce30" : "#a855f720"
  const clipBg2 = isDark ? "#2563eb30" : "#3b82f620"
  const clipBg3 = isDark ? "#be123c30" : "#e11d4820"

  // Generate clip positions
  const clips = [
    { start: 0, end: 15, track: 0, color: clipBg1, type: "video" },
    { start: 15, end: 35, track: 0, color: clipBg2, type: "video" },
    { start: 35, end: 55, track: 0, color: clipBg1, type: "video" },
    { start: 5, end: 25, track: 1, color: clipBg3, type: "audio" },
    { start: 30, end: 50, track: 1, color: clipBg3, type: "audio" },
    { start: 10, end: 20, track: 2, color: clipBg2, type: "text" },
    { start: 40, end: 55, track: 2, color: clipBg2, type: "text" },
  ]

  // Mobile simplified version
  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col" style={{ backgroundColor: bgColor }}>
        {/* Top toolbar - simplified for mobile */}
        <div className="flex items-center p-2 border-b" style={{ borderColor }}>
          <div className="flex space-x-1">
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Scissors className="h-3 w-3" style={{ color: textColor }} />
            </button>
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Plus className="h-3 w-3" style={{ color: textColor }} />
            </button>
          </div>
          <div className="ml-auto text-[8px]" style={{ color: textColor }}>
            <span>Product_Demo.mp4</span>
          </div>
        </div>

        {/* Preview area */}
        <div className="flex-1 p-2 flex flex-col">
          <div
            className="flex-1 rounded-md flex items-center justify-center overflow-hidden relative"
            style={{ backgroundColor: panelBg }}
          >
            {/* Video preview */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-5/6 h-5/6 bg-black/20 dark:bg-white/5 rounded-md flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Film className="h-10 w-10 text-purple-500/30" />
                </div>
                <div className="absolute bottom-2 right-2 bg-purple-600 text-white text-[8px] px-1.5 py-0.5 rounded">
                  Preview
                </div>
              </div>
            </div>
          </div>

          {/* Playback controls - simplified */}
          <div className="h-8 mt-1 flex items-center justify-center space-x-2">
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setCurrentTime(0)}>
              <SkipBack className="h-3 w-3" style={{ color: textColor }} />
            </button>
            <button
              className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              ) : (
                <Play className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              )}
            </button>
            <button
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCurrentTime(duration)}
            >
              <SkipForward className="h-3 w-3" style={{ color: textColor }} />
            </button>
            <div className="text-[8px]" style={{ color: textColor }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>

        {/* Simplified timeline for mobile */}
        <div className="h-16 border-t p-1" style={{ borderColor }}>
          <div ref={timelineRef} className="relative h-full cursor-pointer" onClick={handleTimelineClick}>
            {/* Track background */}
            <div
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: isDark ? "#1e293b50" : "#f1f5f950" }}
            ></div>

            {/* Simplified clips - just show video track */}
            {clips
              .filter((clip) => clip.track === 0)
              .map((clip, index) => {
                const startPercent = (clip.start / duration) * 100
                const widthPercent = ((clip.end - clip.start) / duration) * 100

                return (
                  <div
                    key={index}
                    className="absolute h-8 top-1/2 -mt-4 rounded-sm border border-purple-300 dark:border-purple-700"
                    style={{
                      left: `${startPercent}%`,
                      width: `${widthPercent}%`,
                      backgroundColor: clip.color,
                    }}
                  >
                    <div className="text-[6px] truncate px-1 flex items-center h-full">Clip {index + 1}</div>
                  </div>
                )
              })}

            {/* Playhead */}
            <div
              ref={playheadRef}
              className="absolute top-0 bottom-0 w-px bg-purple-600 z-10"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            >
              <div className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-purple-600"></div>
            </div>

            {/* Time markers - simplified */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
              <span className="text-[6px]" style={{ color: textColor }}>
                00:00
              </span>
              <span className="text-[6px]" style={{ color: textColor }}>
                01:00
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop version
  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Top toolbar */}
      <div className="flex items-center p-2 border-b" style={{ borderColor }}>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <Scissors className="h-4 w-4" style={{ color: textColor }} />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <Plus className="h-4 w-4" style={{ color: textColor }} />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <Layers className="h-4 w-4" style={{ color: textColor }} />
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-1 text-xs" style={{ color: textColor }}>
          <span>Project: Product_Demo_v2.mp4</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Preview */}
        <div className="w-2/3 p-2 flex flex-col">
          <div
            className="flex-1 rounded-md flex items-center justify-center overflow-hidden relative"
            style={{ backgroundColor: panelBg }}
          >
            {/* Video preview */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-5/6 h-5/6 bg-black/20 dark:bg-white/5 rounded-md flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Film className="h-12 w-12 text-purple-500/30" />
                </div>
                <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  Preview
                </div>
              </div>
            </div>
          </div>

          {/* Playback controls */}
          <div className="h-10 mt-2 flex items-center space-x-2">
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setCurrentTime(0)}>
              <SkipBack className="h-4 w-4" style={{ color: textColor }} />
            </button>
            <button
              className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              )}
            </button>
            <button
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCurrentTime(duration)}
            >
              <SkipForward className="h-4 w-4" style={{ color: textColor }} />
            </button>
            <div className="text-xs ml-2" style={{ color: textColor }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <div className="ml-auto flex items-center space-x-1">
              <Volume2 className="h-4 w-4" style={{ color: textColor }} />
              <div className="w-16 h-1 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full w-3/4 rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Media browser */}
        <div className="w-1/3 border-l p-2 flex flex-col" style={{ borderColor }}>
          <div className="text-xs font-medium mb-2" style={{ color: textColor }}>
            Media Browser
          </div>
          <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-video rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: item % 2 === 0 ? clipBg1 : clipBg2 }}
              >
                {item % 3 === 0 ? (
                  <Image className="h-6 w-6 text-purple-500/70" />
                ) : (
                  <Film className="h-6 w-6 text-purple-500/70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-32 border-t p-2" style={{ borderColor }}>
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs font-medium" style={{ color: textColor }}>
            Timeline
          </div>
          <div className="text-xs" style={{ color: textColor }}>
            Zoom: 100%
          </div>
        </div>

        {/* Time markers */}
        <div className="h-4 flex">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div className="text-[8px]" style={{ color: textColor }}>
                {formatTime(i * 10)}
              </div>
              <div className="flex-1 flex items-center">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 h-1 mx-px"
                    style={{ backgroundColor: j === 0 ? borderColor : "transparent" }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline tracks */}
        <div className="flex-1 relative">
          {/* Track labels */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 flex flex-col border-r z-10"
            style={{ borderColor, backgroundColor: bgColor }}
          >
            <div className="h-6 text-[9px] flex items-center px-1" style={{ color: textColor }}>
              Video
            </div>
            <div className="h-6 text-[9px] flex items-center px-1" style={{ color: textColor }}>
              Audio
            </div>
            <div className="h-6 text-[9px] flex items-center px-1" style={{ color: textColor }}>
              Text
            </div>
          </div>

          {/* Timeline content */}
          <div className="absolute left-16 right-0 top-0 bottom-0">
            {/* Track backgrounds */}
            <div className="absolute inset-0 flex flex-col">
              <div
                className="h-6 border-b"
                style={{ borderColor, backgroundColor: isDark ? "#1e293b50" : "#f1f5f950" }}
              ></div>
              <div
                className="h-6 border-b"
                style={{ borderColor, backgroundColor: isDark ? "#0f172a50" : "#ffffff50" }}
              ></div>
              <div
                className="h-6 border-b"
                style={{ borderColor, backgroundColor: isDark ? "#1e293b50" : "#f1f5f950" }}
              ></div>
            </div>

            {/* Timeline with clips */}
            <div ref={timelineRef} className="absolute inset-0 cursor-pointer" onClick={handleTimelineClick}>
              {/* Clips */}
              {clips.map((clip, index) => {
                const startPercent = (clip.start / duration) * 100
                const widthPercent = ((clip.end - clip.start) / duration) * 100

                return (
                  <div
                    key={index}
                    className="absolute h-5 rounded-sm border border-purple-300 dark:border-purple-700"
                    style={{
                      left: `${startPercent}%`,
                      width: `${widthPercent}%`,
                      top: `${clip.track * 24 + 1}px`,
                      backgroundColor: clip.color,
                    }}
                  >
                    <div className="text-[8px] truncate px-1 flex items-center h-full">
                      {clip.type === "video" ? "Video Clip" : clip.type === "audio" ? "Audio Track" : "Text Overlay"}
                    </div>
                  </div>
                )
              })}

              {/* Playhead */}
              <div
                ref={playheadRef}
                className="absolute top-0 bottom-0 w-px bg-purple-600 z-10"
                style={{ left: `${(currentTime / duration) * 100}%` }}
              >
                <div className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-purple-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

