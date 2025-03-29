import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export default function DataAnalysisServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-32">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                  Data Analysis Services
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Comprehensive analytics to uncover insights and guide strategic decisions.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105">
                    Get a quote
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <div>
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Turn Data Into Actionable Insights</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    In today's data-rich environment, the ability to extract meaningful insights from your e-commerce
                    data is a competitive advantage. Our data analysis services transform raw data into actionable
                    intelligence.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We help you understand customer behavior, optimize your operations, and make informed decisions that
                    drive growth and profitability.
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
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={200}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Data analysis dashboard"
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the Power of Your Data?</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our data analysis services can help you make better business decisions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                        Contact us today
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                      >
                        Explore other services
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

