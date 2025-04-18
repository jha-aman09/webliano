"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Zap, Shield, Users, Target, Lightbulb, Heart, Github, Twitter, Linkedin, ExternalLink, Dribbble, Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import TeamMemberSwiper from "@/components/team-member-swiper"

// Company values data
const companyValues = [
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "We place our clients at the center of everything we do. Your success is our success.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Excellence",
    description: "We believe in making decisions based on solid data and analytics for measurable results.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description:
      "The digital landscape is constantly evolving, and so are we, staying at the forefront of industry trends.",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
]

// Update the teamMembers data to include more information
const teamMembers = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With a passion for digital innovation and user experience design, Sarah founded Webliano with a vision to transform how businesses approach their online presence. Her background in both design and business strategy gives her a unique perspective on creating solutions that are both beautiful and effective.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Strategic Planning", "UX Design", "Business Development", "Team Leadership", "Client Relations"],
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    projects: [
      {
        name: "Company Vision & Strategy",
        status: "Ongoing",
        description: "Defining and evolving the company's strategic direction and growth initiatives.",
      },
      {
        name: "Enterprise Client Partnerships",
        status: "Active",
        description: "Developing relationships with key enterprise clients in the e-commerce sector.",
      },
    ],
    education: "MBA, Stanford University",
    experience: "12+ years in digital strategy and business development",
    department: "Leadership",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    quote: "Great design is not just about aesthetics, it's about solving real business problems.",
    achievements: [
      "Led company growth from 3 to 25 employees in 3 years",
      "Secured $2.5M in seed funding",
      "Established partnerships with 5 Fortune 500 companies",
    ],
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for creating memorable brand experiences. Michael brings over a decade of experience working with global brands to create distinctive visual identities. His approach combines aesthetic excellence with strategic thinking to deliver designs that drive business results.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Brand Design", "UI/UX", "Motion Graphics", "Design Systems", "Creative Strategy"],
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
    projects: [
      {
        name: "E-commerce Redesign",
        status: "Completed",
        description: "Complete visual overhaul for a major retail client, resulting in 40% increase in conversions.",
      },
      {
        name: "Brand Identity System",
        status: "In Progress",
        description: "Developing a comprehensive brand system for an emerging fintech company.",
      },
    ],
    education: "BFA in Graphic Design, Rhode Island School of Design",
    experience: "10+ years in creative direction and brand design",
    department: "Design",
    location: "New York, NY",
    joinDate: "March 2020",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    achievements: [
      "Winner of 3 Webby Awards for Excellence in Design",
      "Featured in Communication Arts Annual",
      "Speaker at Adobe MAX Design Conference",
    ],
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "SEO Specialist",
    bio: "Data-driven SEO expert with a track record of boosting organic traffic for e-commerce businesses. Elena combines technical SEO knowledge with content strategy to create comprehensive approaches that improve search visibility and drive qualified traffic. Her analytical mindset helps clients understand the ROI of their SEO investments.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["Technical SEO", "Content Strategy", "Analytics", "Keyword Research", "Link Building"],
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      medium: "https://medium.com",
    },
    projects: [
      {
        name: "E-commerce SEO Audit",
        status: "Completed",
        description: "Comprehensive SEO audit and implementation that increased organic traffic by 85%.",
      },
      {
        name: "Content Strategy Development",
        status: "Active",
        description: "Ongoing content strategy for a B2B SaaS platform targeting enterprise clients.",
      },
    ],
    education: "BS in Marketing, University of Texas",
    experience: "8+ years in SEO and digital marketing",
    department: "Marketing",
    location: "Austin, TX",
    joinDate: "June 2021",
    quote: "The best SEO doesn't feel like SEO at all—it feels like providing value to your audience.",
    achievements: [
      "Increased client organic traffic by average of 65%",
      "Published in Search Engine Journal",
      "Google Analytics and Search Console certified",
    ],
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in creating seamless e-commerce experiences. David's technical knowledge spans front-end and back-end technologies, with a particular focus on creating high-performance, scalable solutions. He's passionate about clean code and creating systems that are both powerful and maintainable.",
    image: "/placeholder.svg?height=300&width=300",
    skills: [
      "Full-Stack Development",
      "E-commerce Solutions",
      "System Architecture",
      "Performance Optimization",
      "API Development",
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    projects: [
      {
        name: "Custom E-commerce Platform",
        status: "Completed",
        description: "Built a scalable, custom e-commerce solution handling 10,000+ daily transactions.",
      },
      {
        name: "Headless CMS Integration",
        status: "In Progress",
        description: "Implementing a headless CMS solution for a multi-brand retail client.",
      },
    ],
    education: "MS in Computer Science, UC Berkeley",
    experience: "9+ years in web development and e-commerce solutions",
    department: "Development",
    location: "Seattle, WA",
    joinDate: "April 2020",
    quote: "Code is like humor. When you have to explain it, it's bad.",
    achievements: [
      "Architected platform serving 1M+ monthly users",
      "Reduced page load times by 65%",
      "Open source contributor to React and Next.js",
    ],
  },
]

// Timeline data
const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Webliano was established with a vision to transform e-commerce experiences.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Partnered with our first enterprise client, delivering exceptional results.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team of experts to better serve our growing client base.",
  },
  {
    year: "2023",
    title: "Service Expansion",
    description: "Added new service offerings to provide comprehensive digital solutions.",
  },
]

// Why choose us features
const whyChooseUsFeatures = [
  {
    icon: Heart,
    title: "Personalized Approach",
    description: "We take the time to understand your unique business needs and goals.",
    color: "bg-rose-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing ensures your solutions are robust and reliable.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A team of specialists committed to your project's success.",
    color: "bg-purple-500",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "We provide continuous support to ensure long-term success.",
    color: "bg-emerald-500",
  },
]

// Value Card Component
const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const Icon = value.icon

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
        )}
      >
        <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl", value.color)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
        <p className="text-muted-foreground">{value.description}</p>
      </div>

      {/* Decorative background element */}
      <div
        className={cn(
          "absolute -bottom-2 -right-2 h-24 w-24 rounded-br-2xl opacity-10 transition-all duration-300",
          value.color,
          isHovered ? "scale-110" : "scale-100",
        )}
      />
    </motion.div>
  )
}

// Timeline Item Component
const TimelineItem = ({ event, index, isLast }) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>

      <div className="pb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          {event.year}
        </div>
        <h3 className="text-lg font-bold mb-1">{event.title}</h3>
        <p className="text-muted-foreground">{event.description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  // State to track which department filter is active
  const [activeFilter, setActiveFilter] = useState("All")

  // Get unique departments for filter buttons
  const departments = ["All", ...new Set(teamMembers.map((member) => member.department))]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Abstract Background */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10 py-36 md:py-32">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block mb-8 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Story
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                  About{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Webliano
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-16 max-w-2xl mx-auto">
                  The story behind our mission to transform e-commerce experiences with innovative digital solutions.
                </p>
              </div>
            </FadeIn>

            {/* Stats Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-background rounded-xl p-5 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Vision-Driven
                      </div>
                      <div className="text-sm text-muted-foreground">Transforming digital experiences</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    Mission
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
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">
                        Passionate Team
                      </div>
                      <div className="text-sm text-muted-foreground">Experts in digital innovation</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    People
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section with Image */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeIn>
                <div>
                  <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Our Journey
                  </div>
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-5">The Webliano Story</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    Webliano was founded with a clear vision: to help e-commerce businesses thrive in an increasingly
                    competitive digital landscape. What began as a small team of passionate web designers and marketers
                    has grown into a comprehensive service provider for online businesses.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our founders noticed a gap in the market – many e-commerce businesses were struggling with generic,
                    ineffective websites and disjointed marketing strategies. They set out to create a service that
                    would provide truly personalized, data-driven solutions that drive real business growth.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      width={640}
                      height={360}
                      alt="The Webliano team"
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-background rounded-lg p-3 shadow-md border border-border/40">
                    <p className="font-medium text-sm">Founded in 2020</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our History
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">Our Journey So Far</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  From our founding to where we are today, we've been on an exciting path of growth and innovation.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.year}
                  event={event}
                  index={index}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Principles
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">Our Core Values</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We're driven by a set of core principles that guide everything we do.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <ValueCard key={value.title} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our People
                </div>
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">Meet Our Team</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  A diverse group of passionate experts dedicated to your success. Learn more about each team member
                  below.
                </p>
              </div>
            </FadeIn>

            {/* Department filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((department) => (
                <Button
                  key={department}
                  variant={activeFilter === department ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(department)}
                  className="rounded-full"
                >
                  {department}
                </Button>
              ))}
            </div>

            {/* Team Member Swiper */}
            <TeamMemberSwiper teamMembers={teamMembers} activeFilter={activeFilter} />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="rounded-xl border bg-background p-8 md:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Why Choose Us
                    </div>
                    <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-5">Why Choose Webliano?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We bring a unique combination of expertise, personalization, and results-driven strategies to help
                      your e-commerce business thrive in today's competitive landscape.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Integrated solutions</span> – All your e-commerce needs under
                          one roof
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Personalized approach</span> – Tailored strategies based on
                          your unique business
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Data-driven methodology</span> – Decisions backed by analytics
                          and research
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Proven results</span> – Track record of driving growth for our
                          clients
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Ongoing support</span> – We're partners in your long-term
                          success
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {whyChooseUsFeatures.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                          className="rounded-xl border bg-background p-5 hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                        >
                          <div
                            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${feature.color}`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 md:p-10 border border-primary/10 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">Ready to Transform Your E-Commerce Presence?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Let's discuss how Webliano can help elevate your online business to new heights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                        Contact us today
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Explore our services
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
