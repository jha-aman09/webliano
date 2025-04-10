import Link from "next/link"
import { ArrowRight, BarChart3, ImageIcon, Layers, Search, Code, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { WebsiteMockup } from "@/components/website-mockup"
import { AnalyticsDashboardMockup } from "@/components/analytics-dashboard-mockup"
import { VideoEditingMockup } from "@/components/video-editing-mockup"
import { SeoRankingMockup } from "@/components/seo-ranking-mockup"
import { UIDesignMockup } from "@/components/ui-design-mockup"
import { IntegrationsMockup } from "@/components/integrations-mockup"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Web Development",
      description: "Custom-designed websites that reflect your brand identity and optimize conversions.",
      link: "/services/websites",
      mockup: <WebsiteMockup />,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-100 dark:border-blue-800/30",
      iconBgColor: "bg-blue-100 dark:bg-blue-800/30",
      textColor: "text-blue-600 dark:text-blue-400",
      titleColor: "text-blue-700 dark:text-blue-400",
      tagBgColor: "bg-blue-100 dark:bg-blue-900/30",
      tagTextColor: "text-blue-700 dark:text-blue-400",
      tags: ["Responsive Design", "E-commerce", "Performance"],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Data Analytics",
      description: "Comprehensive analytics to uncover insights and guide strategic decisions.",
      link: "/services/data-analytics",
      mockup: <AnalyticsDashboardMockup />,
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-100 dark:border-teal-800/30",
      iconBgColor: "bg-teal-100 dark:bg-teal-800/30",
      textColor: "text-teal-600 dark:text-teal-400",
      titleColor: "text-teal-700 dark:text-teal-400",
      tagBgColor: "bg-teal-100 dark:bg-teal-900/30",
      tagTextColor: "text-teal-700 dark:text-teal-400",
      tags: ["Business Intelligence", "Reporting", "Visualization"],
    },
    {
      icon: <ImageIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Media Editing",
      description: "Professional media editing to showcase your products in the best possible light.",
      link: "/services/media-editing",
      mockup: <VideoEditingMockup />,
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-100 dark:border-purple-800/30",
      iconBgColor: "bg-purple-100 dark:bg-purple-800/30",
      textColor: "text-purple-600 dark:text-purple-400",
      titleColor: "text-purple-700 dark:text-purple-400",
      tagBgColor: "bg-purple-100 dark:bg-purple-900/30",
      tagTextColor: "text-purple-700 dark:text-purple-400",
      tags: ["Photo Editing", "Video Production", "Animation"],
    },
    {
      icon: <Search className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: "SEO Optimization",
      description: "Data-driven search engine optimization to boost visibility and organic traffic.",
      link: "/services/seo",
      mockup: <SeoRankingMockup />,
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-100 dark:border-amber-800/30",
      iconBgColor: "bg-amber-100 dark:bg-amber-800/30",
      textColor: "text-amber-600 dark:text-amber-400",
      titleColor: "text-amber-700 dark:text-amber-400",
      tagBgColor: "bg-amber-100 dark:bg-amber-900/30",
      tagTextColor: "text-amber-700 dark:text-amber-400",
      tags: ["Keyword Research", "On-page SEO", "Link Building"],
    },
    {
      icon: <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that delight your customers.",
      link: "/services/ui-ux-design",
      mockup: <UIDesignMockup />,
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-100 dark:border-indigo-800/30",
      iconBgColor: "bg-indigo-100 dark:bg-indigo-800/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
      titleColor: "text-indigo-700 dark:text-indigo-400",
      tagBgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      tagTextColor: "text-indigo-700 dark:text-indigo-400",
      tags: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: <Layers className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Custom Integrations",
      description: "Seamless integration of third-party services and tools to enhance your platform.",
      link: "/services/integrations",
      mockup: <IntegrationsMockup />,
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-100 dark:border-green-800/30",
      iconBgColor: "bg-green-100 dark:bg-green-800/30",
      textColor: "text-green-600 dark:text-green-400",
      titleColor: "text-green-700 dark:text-green-400",
      tagBgColor: "bg-green-100 dark:bg-green-900/30",
      tagTextColor: "text-green-700 dark:text-green-400",
      tags: ["API Development", "Payment Systems", "CRM Integration"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                  Our Digital{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Services
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Comprehensive solutions to elevate every aspect of your online business presence and drive growth.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105">
                    Schedule a consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Comprehensive Services for Digital Growth</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Each service is meticulously crafted to elevate your business to new heights.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={100 * (index + 1)}>
                  <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                    <div className={`${service.iconBgColor} rounded-full p-3 w-fit mb-4`}>{service.icon}</div>
                    <h3 className={`text-xl font-semibold mb-2 ${service.titleColor}`}>{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

                    <div className="mt-auto">
                      <div className="h-[180px] mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        {service.mockup}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${service.tagBgColor} ${service.tagTextColor}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href={service.link} className={`${service.textColor} font-medium flex items-center group`}>
                        Learn more{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
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
                            We develop a comprehensive strategy tailored to your specific requirements.
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
                            Our team of experts brings your vision to life with precision and attention to detail.
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
                            We deploy your solution and provide ongoing support and refinement.
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

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
