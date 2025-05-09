"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const getAccentColor = () => {
    if (pathname.includes("/services/data-analytics")) {
      return {
        bg: "bg-teal-600 hover:bg-teal-700",
        text: "text-teal-600",
      }
    } else if (pathname.includes("/services/seo")) {
      return {
        bg: "bg-amber-600 hover:bg-amber-700",
        text: "text-amber-600",
      }
    } else if (pathname.includes("/services/media-editing")) {
      return {
        bg: "bg-purple-600 hover:bg-purple-700",
        text: "text-purple-600",
      }
    } else if (pathname.includes("/services/websites")) {
      return {
        bg: "bg-blue-600 hover:bg-blue-700",
        text: "text-blue-600",
      }
    } else if (pathname.includes("/services/integrations")) {
      return {
        bg: "bg-green-600 hover:bg-green-700",
        text: "text-green-600",
      }
    } else if (pathname.includes("/services/ui-ux-design")) {
      return {
        bg: "bg-indigo-600 hover:bg-indigo-700",
        text: "text-indigo-600",
      }
    } else {
      return {
        bg: "bg-primary hover:bg-primary/90",
        text: "text-primary",
      }
    }
  }

  const accentColor = getAccentColor()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex items-center justify-between">
        <Link href="/" className={`font-bold text-2xl ${accentColor.text}`}>
          Webliano
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-all duration-200",
                    pathname === "/" ? "text-primary" : "text-foreground",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Web Development */}
                    <Link href="/services/websites" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            Web Development
                          </h4>
                          <p className="text-xs text-muted-foreground">Custom-built websites tailored to your brand</p>
                        </div>
                      </div>
                    </Link>

                    {/* Data Analytics */}
                    <Link href="/services/data-analytics" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-600"
                            >
                              <path d="M21 21H4.6c-.6 0-1-.4-1-1V3"></path>
                              <path d="M5 16l4-4 4 4 8-8"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            Data Analytics
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Transform your raw data into actionable insights
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Media Production */}
                    <Link href="/services/media-editing" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-purple-600"
                            >
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                              <circle cx="9" cy="9" r="2"></circle>
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            Media Editing
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Professional editing services for your visual content
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* SEO Optimization */}
                    <Link href="/services/seo" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-amber-600"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <path d="m21 21-4.3-4.3"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            SEO Optimization
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Boost your online visibility and drive organic traffic
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* UI/UX Design */}
                    <Link href="/services/ui-ux-design" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-indigo-600"
                            >
                              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            UI/UX Design
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Create intuitive and engaging user experiences
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Custom Integrations */}
                    <Link href="/services/integrations" className="group">
                      <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-green-600"
                            >
                              <rect width="8" height="8" x="3" y="3" rx="2" />
                              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                              <rect width="8" height="8" x="13" y="13" rx="2" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            Custom Integrations
                          </h4>
                          <p className="text-xs text-muted-foreground">Seamlessly connect your systems and workflows</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* View All Services Link */}
                  <div className="mt-4 pt-3 border-t flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Comprehensive digital solutions for your business</p>
                    <Link href="/services" className="text-xs font-medium text-primary flex items-center group">
                      View all services
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-all duration-200",
                    pathname === "/about" ? "text-primary" : "text-foreground",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 transition-all duration-200",
                    pathname === "/contact" ? "text-primary" : "text-foreground",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className={accentColor.bg}>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <Link href="/" className="font-bold text-xl text-primary">
                    Webliano
                  </Link>
                </div>
              </div>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col p-4">
                <div className="mb-4">
                  <div className="text-sm font-medium text-muted-foreground mb-3">Services</div>
                  <div className="space-y-3">
                    <Link
                      href="/services/websites"
                      className="flex items-center py-2 text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      </div>
                      Web Development
                    </Link>
                    <Link
                      href="/services/data-analytics"
                      className="flex items-center py-2 text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-teal-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M21 21H4.6c-.6 0-1-.4-1-1V3"></path>
                          <path d="M5 16l4-4 4 4 8-8"></path>
                        </svg>
                      </div>
                      Data Analytics
                    </Link>
                    <Link
                      href="/services/media-editing"
                      className="flex items-center py-2 text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                      </div>
                      Media Editing
                    </Link>
                    <Link
                      href="/services/seo"
                      className="flex items-center py-2 text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </div>
                      SEO Optimization
                    </Link>
                    <Link
                      href="/services/integrations"
                      className="flex items-center py-2 text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M2 3h20v5H2V3z"></path>
                          <path d="M2 16h20v5H2v-5z"></path>
                          <path d="M7 8v8"></path>
                          <path d="M17 8v8"></path>
                          <path d="M2 11h5"></path>
                          <path d="M17 11h5"></path>
                        </svg>
                      </div>
                      Custom Integrations
                    </Link>

                    {/* All Services Link */}
                    <Link
                      href="/services"
                      className="flex items-center py-2 text-sm font-medium text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      All Services
                    </Link>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Link
                    href="/about"
                    className="flex items-center py-2 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="flex items-center py-2 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"></path>
                        <path d="M2 13h10"></path>
                        <path d="M5 16l-3-3 3-3"></path>
                      </svg>
                    </div>
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center py-2 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    Contact
                  </Link>
                </div>
              </nav>
              <div className="mt-auto p-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className={`w-full ${accentColor.bg}`}>Get Started</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
