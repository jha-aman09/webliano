"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  ImageIcon,
  Layers,
  Search,
  Code,
  Bell,
  CheckCircle,
  Clock,
  Award,
  Zap,
  MousePointer,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { cn } from "@/lib/utils"
import { motion, useInView, AnimatePresence } from "framer-motion"

// Service data
const services = [
  {
    id: "webdev",
    icon: Code,
    title: "Web Development",
    description: "Custom websites that captivate and convert, built with cutting-edge technologies.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-800/30",
    hoverBorderColor: "group-hover:border-blue-300 dark:group-hover:border-blue-700",
    iconBgColor: "bg-blue-100 dark:bg-blue-800/40",
    link: "/services/websites",
    features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance"],
    benefits: ["Increased Conversions", "Better User Experience", "Faster Load Times"],
    tags: ["Responsive Design", "E-commerce", "Performance"],
    tagBgColor: "bg-blue-100 dark:bg-blue-800/30",
    tagTextColor: "text-blue-700 dark:text-blue-300",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that power strategic business decisions.",
    color: "bg-teal-600",
    lightColor: "bg-teal-50 dark:bg-teal-900/20",
    textColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-teal-100 dark:border-teal-800/30",
    hoverBorderColor: "group-hover:border-teal-300 dark:group-hover:border-teal-700",
    iconBgColor: "bg-teal-100 dark:bg-teal-800/40",
    link: "/services/data-analytics",
    features: ["Business Intelligence", "Custom Dashboards", "Predictive Analytics", "Data Visualization"],
    benefits: ["Data-Driven Decisions", "Identify Opportunities", "Optimize Processes"],
    tags: ["Business Intelligence", "Reporting", "Visualization"],
    tagBgColor: "bg-teal-100 dark:bg-teal-800/30",
    tagTextColor: "text-teal-700 dark:text-teal-300",
  },
  {
    id: "media",
    icon: ImageIcon,
    title: "Media Editing",
    description: "Professional media editing that brings your brand's visual narrative to life.",
    color: "bg-purple-600",
    lightColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-100 dark:border-purple-800/30",
    hoverBorderColor: "group-hover:border-purple-300 dark:group-hover:border-purple-700",
    iconBgColor: "bg-purple-100 dark:bg-purple-800/40",
    link: "/services/media-editing",
    features: ["Photo Editing", "Video Production", "Animation", "Content Creation"],
    benefits: ["Enhanced Brand Image", "Engaging Content", "Professional Appearance"],
    tags: ["Photo Editing", "Video Production", "Animation"],
    tagBgColor: "bg-purple-100 dark:bg-purple-800/30",
    tagTextColor: "text-purple-700 dark:text-purple-300",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven strategies to boost your visibility and drive organic traffic.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-100 dark:border-amber-800/30",
    hoverBorderColor: "group-hover:border-amber-300 dark:group-hover:border-amber-700",
    iconBgColor: "bg-amber-100 dark:bg-amber-800/40",
    link: "/services/seo",
    features: ["Keyword Research", "On-page SEO", "Link Building", "Performance Tracking"],
    benefits: ["Higher Rankings", "Increased Traffic", "Better ROI"],
    tags: ["Keyword Research", "On-page SEO", "Link Building"],
    tagBgColor: "bg-amber-100 dark:bg-amber-800/30",
    tagTextColor: "text-amber-700 dark:text-amber-300",
  },
  {
    id: "uiux",
    icon: Bell,
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that keep customers coming back.",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50 dark:bg-indigo-900/20",
    textColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "border-indigo-100 dark:border-indigo-800/30",
    hoverBorderColor: "group-hover:border-indigo-300 dark:group-hover:border-indigo-700",
    iconBgColor: "bg-indigo-100 dark:bg-indigo-800/40",
    link: "/services/ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    benefits: ["Improved Satisfaction", "Reduced Bounce Rates", "Higher Conversions"],
    tags: ["User Research", "Wireframing", "Prototyping"],
    tagBgColor: "bg-indigo-100 dark:bg-indigo-800/30",
    tagTextColor: "text-indigo-700 dark:text-indigo-300",
  },
  {
    id: "integrations",
    icon: Layers,
    title: "Custom Integrations",
    description: "Connect your digital ecosystem with seamless integrations that enhance functionality.",
    color: "bg-green-600",
    lightColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-100 dark:border-green-800/30",
    hoverBorderColor: "group-hover:border-green-300 dark:group-hover:border-green-700",
    iconBgColor: "bg-green-100 dark:bg-green-800/40",
    link: "/services/integrations",
    features: ["API Development", "Payment Systems", "CRM Integration", "Automation"],
    benefits: ["Streamlined Workflows", "Reduced Manual Tasks", "Enhanced Functionality"],
    tags: ["API Development", "Payment Systems", "CRM Integration"],
    tagBgColor: "bg-green-100 dark:bg-green-800/30",
    tagTextColor: "text-green-700 dark:text-green-300",
  },
]

// Process steps
const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep to understand your vision, goals, and challenges to create a tailored strategy.",
    icon: MousePointer,
  },
  {
    id: "02",
    title: "Planning",
    description: "We develop a comprehensive roadmap with clear milestones and deliverables.",
    icon: Layers,
  },
  {
    id: "03",
    title: "Execution",
    description: "Our team brings your vision to life with precision and attention to detail.",
    icon: Zap,
  },
  {
    id: "04",
    title: "Refinement",
    description: "We continuously optimize and improve to ensure exceptional results and long-term success.",
    icon: Clock,
  },
]

const advantages = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Quality Assurance",
    description:
      "Every project undergoes rigorous testing and quality checks to ensure flawless performance and user experience.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Timely Delivery",
    description:
      "We pride ourselves on meeting deadlines without compromising on quality, ensuring your project launches on schedule.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Industry Expertise",
    description:
      "Our team brings years of specialized experience across various industries, providing insights that drive results.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve, implementing the latest technologies and best practices in all our solutions.",
  },
]

// Why Choose Us features
const whyChooseUsFeatures = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work efficiently to deliver your projects on time, every time.",
    color: "bg-amber-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing ensures your solutions are robust and reliable.",
    color: "bg-blue-500",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, adapting to changing needs.",
    color: "bg-emerald-500",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "We provide continuous support to ensure long-term success.",
    color: "bg-purple-500",
  },
]

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative z-10 h-full overflow-hidden rounded-2xl border bg-background p-6 transition-all duration-300",
          "hover:shadow-lg hover:border-primary/50",
          "flex flex-col justify-between",
        )}
      >
        <div>
          <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl", service.color)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
          <p className="mb-6 text-muted-foreground">{service.description}</p>

          <div className="mb-6 space-y-2">
            {service.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle className={cn("h-4 w-4", service.textColor)} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={service.link}
          className={cn("group inline-flex items-center gap-1 font-medium transition-all", service.textColor)}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Decorative background element */}
      <div
        className={cn(
          "absolute -bottom-2 -right-2 h-24 w-24 rounded-br-2xl opacity-10 transition-all duration-300",
          service.color,
          isHovered ? "scale-110" : "scale-100",
        )}
      />
    </motion.div>
  )
}

// Process Step Component
const ProcessStep = ({ step, index, isActive, onClick }) => {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "cursor-pointer rounded-xl border-2 p-6 transition-all duration-300",
        isActive ? "border-primary bg-primary text-white" : "border-muted bg-background hover:border-primary/50",
      )}
      onClick={onClick}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              isActive ? "bg-white/20" : "bg-primary/10",
            )}
          >
            <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-primary")} />
          </div>
          <span className={cn("text-2xl font-bold", isActive ? "text-white" : "text-primary")}>{step.id}</span>
        </div>

        {isActive && (
          <div className="rounded-full bg-white/20 p-1">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>
      <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
      <p className={cn(isActive ? "text-white/90" : "text-muted-foreground")}>{step.description}</p>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [activeProcess, setActiveProcess] = useState("01")
  const [activeTab, setActiveTab] = useState("all")

  // Filter services based on active tab
  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.id === activeTab)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-3xl"></div>
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute -bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-24 relative z-10">
            <FadeIn>
              <div className="text-center max-w-5xl mx-auto">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Comprehensive Digital Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                  Elevate Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Digital Presence
                  </span>
                </h1>
                <p className="text-base md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                  From stunning websites to data-driven strategies, we provide end-to-end solutions that help your
                  business thrive in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto transition-all duration-300 hover:scale-105 px-8">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                      View All Services
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-background rounded-xl p-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            Innovation-First
                          </div>
                          <div className="text-sm text-muted-foreground">Cutting-edge solutions</div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Approach
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-background rounded-xl p-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/10 rounded-lg p-2 group-hover:bg-blue-500/20 transition-colors duration-300">
                          <Award className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground group-hover:text-purple-500 transition-colors duration-300">
                            Client-Centered
                          </div>
                          <div className="text-sm text-muted-foreground">Your success is our priority</div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Focus
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-background rounded-xl p-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-amber-500/10 rounded-lg p-2 group-hover:bg-amber-500/20 transition-colors duration-300">
                          <MousePointer className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors duration-300">
                            Fresh Ideas
                          </div>
                          <div className="text-sm text-muted-foreground">Modern digital solutions</div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Perspective
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-background rounded-xl p-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-emerald-500/10 rounded-lg p-2 group-hover:bg-emerald-500/20 transition-colors duration-300">
                          <Clock className="h-5 w-5 text-emerald-500" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground group-hover:text-emerald-500 transition-colors duration-300">
                            Rapid Response
                          </div>
                          <div className="text-sm text-muted-foreground">Always available when you need us</div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Support
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services section with tabs and cards */}
        <section id="services" className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Offerings
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Comprehensive Services for Digital Growth</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Each service is meticulously crafted to elevate your business to new heights.
                </p>
              </div>
            </FadeIn>

            {/* Service category tabs */}
            <FadeIn delay={100}>
              <div className="mb-8 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setActiveTab("all")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    activeTab === "all"
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80",
                  )}
                >
                  All Services
                </button>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-all",
                      activeTab === service.id
                        ? service.color + " text-white"
                        : "bg-secondary text-foreground hover:bg-secondary/80",
                    )}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Why Choose Us section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 text-center">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Why Choose Webliano
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Why Choose Us</h2>
                <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We combine technical expertise with creative innovation to deliver exceptional results.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  description: "We work efficiently to deliver your projects on time, every time.",
                  color: "bg-amber-500",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "Rigorous testing ensures your solutions are robust and reliable.",
                  color: "bg-blue-500",
                },
                {
                  icon: Layers,
                  title: "Scalable Solutions",
                  description: "Our solutions grow with your business, adapting to changing needs.",
                  color: "bg-emerald-500",
                },
                {
                  icon: Clock,
                  title: "Ongoing Support",
                  description: "We provide continuous support to ensure long-term success.",
                  color: "bg-purple-500",
                },
              ].map((feature, index) => {
                const Icon = feature.icon

                return (
                  <FadeIn key={index} delay={index * 100}>
                    <div className="rounded-xl border bg-background p-6 h-full hover:shadow-md transition-all duration-300">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>

            {/* Testimonial */}
            <FadeIn delay={500}>
              <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-10 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white dark:border-gray-800 shadow-lg">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
                      "Working with Webliano transformed our online presence completely. Their team delivered a website
                      that not only looks stunning but also performs exceptionally well. The increase in conversions has
                      been remarkable."
                    </p>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">CEO, TechInnovate</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process section with interactive steps */}
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  How We Work
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Our Refined Process</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  A seamless journey from initial consultation to ongoing support.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeProcess === step.id}
                  onClick={() => setActiveProcess(step.id)}
                />
              ))}
            </div>

            {/* Process visualization */}
            <FadeIn delay={300}>
              <div className="mt-12 rounded-xl bg-muted/50 p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">
                      {processSteps.find((step) => step.id === activeProcess)?.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      {processSteps.find((step) => step.id === activeProcess)?.description}
                    </p>

                    <div className="space-y-4">
                      {["Collaborative approach", "Regular updates", "Transparent communication"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="relative h-48 w-48 rounded-full border-4 border-primary flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"></div>
                      <div className="text-3xl font-bold text-primary">{activeProcess}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Schedule a consultation with our experts to discuss your specific needs and how we can help elevate
                    your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto">
                        Book a consultation
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View pricing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}
