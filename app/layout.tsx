import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Webliano - Elevate Your E-Commerce Presence",
  description:
    "Webliano provides personalized websites, SEO, data analysis, and media editing services for e-commerce businesses.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-16 overflow-x-hidden">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'