"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type TestimonialProps = {
  content: string
  author: string
  role: string
  company: string
  rating: number
  image?: string
  tag?: string
}

export function TestimonialSwiper({ testimonials }: { testimonials: TestimonialProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Reset autoplay timer when index changes
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex, isPaused])

  // Handle manual navigation
  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }

    if (isRightSwipe) {
      goToPrev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isAnimating])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main container with consistent rounded corners */}
      <div className="rounded-t-3xl overflow-hidden shadow-md">
        <div className="relative w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "w-full transition-all duration-500 ease-in-out",
                index === currentIndex
                  ? "opacity-100 z-10 transform translate-x-0"
                  : "opacity-0 absolute top-0 left-0 z-0 transform",
                index !== currentIndex && direction === "right"
                  ? index === (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : "",
                index !== currentIndex && direction === "left"
                  ? index === (currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
                    ? "translate-x-full"
                    : "-translate-x-full"
                  : "",
              )}
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 relative overflow-hidden h-[400px] md:h-[350px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left column - Profile */}
                  <div className="md:col-span-4 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/80 shadow-md mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=128&width=128"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-1">
                      {testimonial.author}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{testimonial.company}</p>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "w-5 h-5",
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300",
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {testimonial.tag && (
                      <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                        {testimonial.tag}
                      </span>
                    )}
                  </div>

                  {/* Right column - Quote */}
                  <div className="md:col-span-8 relative h-full flex flex-col justify-center">
                    {/* Large quote mark at the top */}
                    <div className="absolute top-0 left-0 text-blue-200 dark:text-blue-700 text-6xl leading-none opacity-50">
                      "
                    </div>

                    <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed pl-6 md:pl-8 relative z-10 mb-4 overflow-y-auto max-h-[250px] pr-2">
                      {testimonial.content}
                    </p>

                    {/* Large quote mark at the bottom */}
                    <div className="absolute bottom-0 right-0 text-blue-200 dark:text-blue-700 text-6xl leading-none opacity-50 transform rotate-180">
                      "
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with title and navigation - now separate from the content for smooth transitions */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white py-4 px-6 rounded-b-3xl flex justify-between items-center">
        <h3 className="text-xl font-semibold">Success Stories</h3>
        <div className="flex items-center space-x-4">
          {/* Pagination dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 w-2",
                  index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-2">
            <button
              onClick={goToPrev}
              className="bg-blue-700 dark:bg-blue-800 rounded-full p-2 hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-blue-700 dark:bg-blue-800 rounded-full p-2 hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

