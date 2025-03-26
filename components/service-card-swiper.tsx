"use client"

import type React from "react"

import { useState, useEffect, useRef, type TouchEvent } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ServiceCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  link: string
  type?: "standard" | "cta"
}

export function ServiceCardSwiper({ services }: { services: ServiceCardProps[] }) {
  // Filter out the CTA card for mobile view
  const mobileServices = services.filter((service) => service.type !== "cta")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [previousIndex, setPreviousIndex] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Reset autoplay timer when index changes
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    autoPlayRef.current = setInterval(() => {
      goToNext()
    }, 4000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  // Handle manual navigation
  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("right")
    setPreviousIndex(currentIndex)
    setCurrentIndex((prevIndex) => (prevIndex === mobileServices.length - 1 ? 0 : prevIndex + 1))

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("left")
    setPreviousIndex(currentIndex)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mobileServices.length - 1 : prevIndex - 1))

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
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
    setPreviousIndex(currentIndex)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Get the appropriate animation class for a card
  const getAnimationClass = (index: number) => {
    if (index === currentIndex) {
      return "opacity-100 z-10 transform translate-x-0"
    }

    // For inactive cards
    if (direction === "right") {
      // Next slide animation
      if (index === previousIndex) {
        // Previous active card moves left
        return "opacity-0 absolute top-0 left-0 z-0 transform -translate-x-full"
      } else {
        // Other cards start from right
        return "opacity-0 absolute top-0 left-0 z-0 transform translate-x-full"
      }
    } else {
      // Previous slide animation
      if (index === previousIndex) {
        // Previous active card moves right
        return "opacity-0 absolute top-0 left-0 z-0 transform translate-x-full"
      } else {
        // Other cards start from left
        return "opacity-0 absolute top-0 left-0 z-0 transform -translate-x-full"
      }
    }
  }

  return (
    <div className="space-y-6 pb-6">
      {/* Custom carousel */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden rounded-xl">
          <div className="relative w-full">
            {mobileServices.map((service, index) => (
              <div key={index} className={`w-full transition-all duration-500 ease-in-out ${getAnimationClass(index)}`}>
                <div className="bg-background rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[320px] mx-2 transform transition-transform duration-500 md:hover:scale-[1.02]">
                  <div>
                    <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                  <div className="mt-4">
                    <Link href={service.link} className="text-primary font-medium flex items-center group">
                      Learn more{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md z-10 hidden md:block hover:bg-background transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md z-10 hidden md:block hover:bg-background transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {mobileServices.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Swipe instruction for mobile */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 md:hidden">
        <p>Swipe left or right to navigate</p>
      </div>

      {/* Separate "All Services" button below the carousel */}
      <div className="flex justify-center">
        <Link href="/services">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            View all services
          </Button>
        </Link>
      </div>
    </div>
  )
}

