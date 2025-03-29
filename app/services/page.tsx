import Link from "next/link"
import { ArrowRight, BarChart3, Globe, ImageIcon, MessageSquare, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-32">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                  Comprehensive E-Commerce Services
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Tailored solutions to elevate every aspect of your online business presence.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105">
                    Schedule a consultation
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Service 1 */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Personalized Websites</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Custom-designed websites that reflect your brand identity and optimize conversions. We focus on
                  creating user-friendly, responsive, and visually stunning sites that engage visitors and drive sales.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Custom e-commerce website design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Responsive and mobile-friendly layouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Shopping cart and checkout optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Product showcase and catalog design</span>
                  </li>
                </ul>
                <Link href="/services/websites" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Strategic SEO</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Data-driven search engine optimization to boost visibility and organic traffic. Our comprehensive SEO
                  strategies help your e-commerce business rank higher in search results and attract qualified leads.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Keyword research and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">On-page and technical SEO</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Content strategy for search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Competitor analysis and performance tracking
                    </span>
                  </li>
                </ul>
                <Link href="/services/seo" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Comprehensive analytics to uncover insights and guide strategic decisions. We transform raw data into
                  actionable intelligence that helps optimize your operations, marketing, and product offerings.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Customer behavior analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Sales and conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Marketing campaign performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Custom reporting and dashboards</span>
                  </li>
                </ul>
                <Link
                  href="/services/data-analysis"
                  className="text-primary font-medium flex items-center mt-auto group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Photo & Video Editing</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Professional media editing to showcase your products in the best possible light. High-quality visuals
                  are critical for e-commerce success, and our expert editing services help your products stand out.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Product photography enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Background removal and retouching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Product demonstration videos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Social media-ready visual content</span>
                  </li>
                </ul>
                <Link
                  href="/services/media-editing"
                  className="text-primary font-medium flex items-center mt-auto group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Service 5 */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Content Strategy</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Engaging content plans that resonate with your audience and drive engagement. Our strategic content
                  services help tell your brand story, educate customers, and convert visitors into loyal customers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Product descriptions and copywriting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Blog and article creation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Email marketing content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Social media content planning</span>
                  </li>
                </ul>
                <Link href="/services/content" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Custom Integration */}
              <div className="flex flex-col">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Custom Integrations</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Seamless integration of third-party services and tools to enhance your e-commerce platform's
                  capabilities. We connect your systems to create a cohesive and efficient business ecosystem.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Payment gateway integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Shipping and inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">CRM and marketing automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Analytics and reporting tools</span>
                  </li>
                </ul>
                <Link
                  href="/services/integrations"
                  className="text-primary font-medium flex items-center mt-auto group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your E-Commerce Business?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our team of experts is ready to help you transform your digital presence and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Schedule a consultation
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
          </div>
        </section>
      </main>
    </div>
  )
}

