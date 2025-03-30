import Link from "next/link"
import { ArrowRight, BarChart3, Globe, ImageIcon, Search, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { ServiceCardSwiper } from "@/components/service-card-swiper"
import { WebsiteMockup } from "@/components/website-mockup"
import { TestimonialSwiper } from "@/components/testimonial-swiper"

export default function Home() {
  const serviceCards = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Personalized Websites",
      description: "Custom-designed websites that reflect your brand identity and optimize conversions.",
      link: "/services/websites",
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Strategic SEO",
      description: "Data-driven search engine optimization to boost visibility and organic traffic.",
      link: "/services/seo",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data Analysis",
      description: "Comprehensive analytics to uncover insights and guide strategic decisions.",
      link: "/services/data-analysis",
    },
    {
      icon: <ImageIcon className="h-6 w-6 text-primary" />,
      title: "Photo & Video Editing",
      description: "Professional media editing to showcase your products in the best possible light.",
      link: "/services/media-editing",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Content Strategy",
      description: "Engaging content plans that resonate with your audience and drive engagement.",
      link: "/services/content",
    },
    {
      type: "cta",
      title: "Discover All Services",
      description: "Explore our complete range of e-commerce enhancement solutions.",
      link: "/services",
    },
  ]

  const testimonials = [
    {
      content:
        "Webliano's performance optimization service took our website from loading in 6 seconds to under 2 seconds. The impact was immediate - our bounce rate dropped by 30% and user engagement metrics improved across the board.",
      author: "David Park",
      role: "CTO",
      company: "FastTrack",
      rating: 5,
      image: "/placeholder.svg?height=128&width=128",
      tag: "SaaS",
    },
    {
      content:
        "The data analysis services provided by Webliano have been game-changing for our business strategy. We've been able to identify key growth opportunities and optimize our product offerings based on real customer insights.",
      author: "Michael Chen",
      role: "Founder",
      company: "TechGadgets",
      rating: 5,
      image: "/placeholder.svg?height=128&width=128",
      tag: "E-commerce",
    },
    {
      content:
        "Working with Webliano has been a breath of fresh air. Their SEO strategies helped us rank on the first page for our key products, and their content team created compelling product descriptions that truly showcase our offerings.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Eco Essentials",
      rating: 4,
      image: "/placeholder.svg?height=128&width=128",
      tag: "Retail",
    },
    {
      content:
        "The photo editing services from Webliano elevated our product imagery to a professional level. We've seen a significant increase in engagement and time spent on our product pages since implementing their visual improvements.",
      author: "David Kim",
      role: "E-commerce Manager",
      company: "Luxury Home Goods",
      rating: 5,
      image: "/placeholder.svg?height=128&width=128",
      tag: "Luxury",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
              {/* Wireframe Mockup - Now first in DOM order for mobile */}
              <FadeIn delay={300} direction="left" className="lg:order-last mb-6 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-full relative">
                    <div className="aspect-[16/9] bg-muted/30 dark:bg-muted/10 rounded-xl p-2 md:p-4 transition-all duration-300 hover:shadow-xl">
                      <WebsiteMockup />
                    </div>
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-background rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                      <div className="bg-primary/10 rounded-full p-2 sm:p-3 md:p-4">
                        <Globe className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Text content - Now second in DOM order for mobile */}
              <FadeIn className="lg:order-first">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    Elevate your e-commerce presence with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                      tailored solutions
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Webliano transforms your digital footprint with personalized websites, strategic SEO, actionable
                    data analysis, and professional media editing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                        Start your journey
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                      >
                        Explore services
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Comprehensive Services for Digital Growth</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Each service is meticulously crafted to elevate your e-commerce business to new heights.
                </p>
              </div>
            </FadeIn>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServiceCardSwiper services={serviceCards} />
            </div>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <FadeIn delay={100}>
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Personalized Websites</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Custom-designed websites that reflect your brand identity and optimize conversions.
                  </p>
                  <Link href="/services/websites" className="text-primary font-medium flex items-center group">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              {/* Service Card 2 */}
              <FadeIn delay={200}>
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Strategic SEO</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Data-driven search engine optimization to boost visibility and organic traffic.
                  </p>
                  <Link href="/services/seo" className="text-primary font-medium flex items-center group">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              {/* Service Card 3 */}
              <FadeIn delay={300}>
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Comprehensive analytics to uncover insights and guide strategic decisions.
                  </p>
                  <Link href="/services/data-analysis" className="text-primary font-medium flex items-center group">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              {/* Service Card 4 */}
              <FadeIn delay={400}>
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <ImageIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Photo & Video Editing</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Professional media editing to showcase your products in the best possible light.
                  </p>
                  <Link href="/services/media-editing" className="text-primary font-medium flex items-center group">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              {/* Service Card 5 */}
              <FadeIn delay={500}>
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full">
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Engaging content plans that resonate with your audience and drive engagement.
                  </p>
                  <Link href="/services/content" className="text-primary font-medium flex items-center group">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              {/* View All Services Card */}
              <FadeIn delay={600}>
                <div className="bg-primary/5 rounded-xl p-8 flex flex-col justify-center items-center text-center border border-dashed border-primary/20 transition-all duration-300 hover:scale-105 h-full">
                  <h3 className="text-xl font-semibold mb-3">Discover All Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Explore our complete range of e-commerce enhancement solutions.
                  </p>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View all services
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 relative bg-grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Refined Process</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  A seamless journey from initial consultation to ongoing support.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 via-primary to-primary/80 rounded-full"></div>

                {/* Step 1 - Left side (odd) */}
                <FadeIn delay={100}>
                  <div className="relative mb-4 md:mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                        <div className="bg-background rounded-xl p-5 shadow-md border border-muted md:max-w-sm">
                          <h3 className="text-xl font-semibold mb-2">Discovery & Consultation</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            We begin with an in-depth discussion to understand your business, goals, and challenges.
                            This phase helps us identify your unique needs and opportunities.
                          </p>
                        </div>
                      </div>
                      <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                        <div className="bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                          1
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
                    </div>
                  </div>
                </FadeIn>

                {/* Step 2 - Right side (even) */}
                <FadeIn delay={200}>
                  <div className="relative mb-4 md:mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 order-2 md:order-1 hidden md:block"></div>
                      <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                        <div className="bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                          2
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                        <div className="bg-background rounded-xl p-5 shadow-md border border-muted md:max-w-sm">
                          <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Based on our findings, we develop a comprehensive strategy tailored to your specific
                            requirements, outlining clear objectives, timelines, and deliverables.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Step 3 - Left side (odd) */}
                <FadeIn delay={300}>
                  <div className="relative mb-4 md:mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                        <div className="bg-background rounded-xl p-5 shadow-md border border-muted md:max-w-sm">
                          <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Our team of experts brings your vision to life, creating solutions with precision and
                            attention to detail while keeping you involved throughout the process.
                          </p>
                        </div>
                      </div>
                      <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                        <div className="bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                          3
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
                    </div>
                  </div>
                </FadeIn>

                {/* Step 4 - Right side (even) */}
                <FadeIn delay={400}>
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-8 order-2 md:order-1 hidden md:block"></div>
                      <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                        <div className="bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                          4
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                        <div className="bg-background rounded-xl p-5 shadow-md border border-muted md:max-w-sm">
                          <h3 className="text-xl font-semibold mb-2">Implementation & Support</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            We deploy your solution and provide ongoing support, monitoring, and refinement to ensure
                            continued success and adaptation to changing needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-background/50 dark:bg-background/30 z-0"></div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Brands</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  See how our solutions have transformed businesses like yours.
                </p>
              </div>
            </FadeIn>

            {/* Testimonial Swiper */}
            <FadeIn delay={100}>
              <div className="max-w-5xl mx-auto">
                <TestimonialSwiper testimonials={testimonials} />
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your E-Commerce Presence?</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Schedule a consultation with our experts to discuss your specific needs and how we can help elevate
                    your online business.
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

