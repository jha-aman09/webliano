"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  fullWidth?: boolean
  className?: string
}

export function FadeIn({ children, direction = "up", delay = 0, fullWidth = false, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const directions = {
    up: "translate-y-10",
    down: "translate-y-[-10px]",
    left: "translate-x-10",
    right: "translate-x-[-10px]",
  }

  const baseClasses = "transition-all duration-700 opacity-0"
  const widthClass = fullWidth ? "w-full" : ""

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.remove("opacity-0")
      ref.current.classList.remove(directions[direction])
    }
  }, [isInView, direction, directions])

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${directions[direction]} ${widthClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

