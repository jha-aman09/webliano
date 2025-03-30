import Link from "next/link"
import { ArrowRight, Search, CheckCircle, BarChart3, LineChart, TrendingUp, Target, Award } from "lucide-react"
import { SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAhrefs, SiMoz } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SeoServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-amber-50 dark:bg-amber-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-amber-100 dark:bg-amber-800/40 text-amber-600 dark:text-amber-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    Search Engine Optimization
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    Strategic SEO Services
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Data-driven search engine optimization to boost visibility, increase organic traffic, and drive
                    qualified leads to your e-commerce business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Get a quote
                      </Button>
                    </Link>
                    <Link href="#features">
                      <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                        Explore features
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <div className="w-full h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mr-4">
                          <Search className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1 h-10 bg-gray-100 dark:bg-gray-700 rounded-full px-4 flex items-center">
                          <span className="text-gray-500 dark:text-gray-400 text-sm">your-business-keywords</span>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-1 gap-4">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="h-3 w-3/4 bg-amber-200 dark:bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="h-3 w-2/3 bg-amber-200 dark:bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-3/5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="h-3 w-5/6 bg-amber-200 dark:bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <div className="h-8 w-8 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div className="h-8 w-8 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center">
                            <BarChart3 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div className="h-8 w-8 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center">
                            <Target className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                        </div>
                        <div className="h-8 w-24 bg-amber-500 dark:bg-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">Page 1 Rank</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                    <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-2 sm:p-3 md:p-4">
                      <Search className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive SEO Features</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our SEO services are designed to improve your online visibility, drive targeted traffic, and increase
                  conversions for your e-commerce business.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-3 w-fit mb-6">
                    <Search className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Keyword Research & Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Discover the most valuable and relevant keywords for your industry and target audience. We identify
                    terms with high search volume and commercial intent.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Competitor keyword analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Long-tail keyword opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Search intent optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-3 w-fit mb-6">
                    <LineChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">On-Page SEO Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Optimize your website's content and structure to improve search engine rankings and user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Title & meta description optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Content optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">URL structure improvements</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-3 w-fit mb-6">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ensure your website's technical foundation is optimized for search engines to crawl, index, and rank
                    your pages effectively.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Site speed optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Mobile-friendly improvements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Schema markup implementation</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-3 w-fit mb-6">
                    <Target className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Link Building & Authority</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Build your website's authority through strategic link building and digital PR to improve search
                    rankings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Quality backlink acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Content outreach campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Competitor backlink analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Internal linking optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="bg-amber-100 dark:bg-amber-800/40 rounded-full p-3 w-fit mb-6">
                    <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Track your SEO performance with comprehensive analytics and regular reporting to measure ROI.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Keyword ranking reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Traffic and conversion analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Competitor performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Monthly performance reports</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our SEO Approach</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We follow a data-driven, systematic approach to improve your search engine rankings and drive
                  qualified traffic to your e-commerce site.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-amber-600 to-amber-400 rounded-full"></div>

              {/* Step 1 */}
              <FadeIn delay={100}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Comprehensive Audit</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We begin with a thorough analysis of your website's current SEO performance, identifying
                          strengths, weaknesses, and opportunities for improvement.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 2 */}
              <FadeIn delay={200}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 hidden md:block"></div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Based on our findings, we create a customized SEO strategy tailored to your business goals,
                          target audience, and competitive landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 3 */}
              <FadeIn delay={300}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">On-Page & Technical Optimization</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We implement on-page and technical SEO improvements to enhance your website's search engine
                          visibility and user experience.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 4 */}
              <FadeIn delay={400}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 hidden md:block"></div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Content & Link Building</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We develop high-quality content and implement strategic link building campaigns to increase
                          your website's authority and relevance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 5 */}
              <FadeIn delay={500}>
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Monitoring & Refinement</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We continuously monitor your SEO performance, analyze results, and refine our strategies to
                          ensure ongoing improvement and maximum ROI.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-amber-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        5
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Webliano SEO Advantage</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  What sets our SEO services apart from the competition
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300">
                      E-Commerce Specialization
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We specialize in e-commerce SEO, understanding the unique challenges and opportunities of online
                    retail. Our strategies are tailored specifically for product-based businesses.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">Data-Driven Approach</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We make decisions based on comprehensive data analysis, not guesswork. Our strategies are backed by
                    analytics, ensuring measurable results and continuous improvement.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200 dark:border-orange-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">
                      Conversion-Focused Strategy
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We don't just focus on rankings; we prioritize driving qualified traffic that converts. Our SEO
                    strategies are designed to attract customers who are ready to buy.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                      Transparent Reporting
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We provide clear, comprehensive reports that show exactly what we're doing and the results we're
                    achieving. You'll always know the ROI of your SEO investment.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools We Use</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-leading tools and technologies to deliver exceptional SEO results for your
                  e-commerce business.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <FadeIn delay={100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mb-4">
                    <SiGoogleanalytics className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Google Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive website traffic analysis</p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mb-4">
                    <SiGooglesearchconsole className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Search Console</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Monitor search performance and issues</p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mb-4">
                    <SiSemrush className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2">SEMrush</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Competitive analysis and keyword research</p>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mb-4">
                    <SiAhrefs className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Ahrefs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Backlink analysis and content research</p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/40 rounded-full flex items-center justify-center mb-4">
                    <SiMoz className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Moz Pro</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Site audits and rank tracking</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Get answers to common questions about our SEO services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FadeIn delay={100}>
                  <AccordionItem
                    value="item-1"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">How long does it take to see results from SEO?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        SEO is a long-term strategy that typically takes 3-6 months to show significant results.
                        However, you may start seeing improvements in rankings and traffic within the first few months.
                        The timeline depends on factors like your website's current state, competition in your industry,
                        and the aggressiveness of your SEO strategy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>

                <FadeIn delay={150}>
                  <AccordionItem
                    value="item-2"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">Can you guarantee #1 rankings on Google?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        No reputable SEO agency can guarantee #1 rankings on Google. Search engines use complex
                        algorithms with hundreds of ranking factors that are constantly changing. While we can't
                        guarantee specific positions, we do guarantee that we'll use industry best practices and proven
                        strategies to improve your rankings and increase organic traffic to your website.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>

                <FadeIn delay={200}>
                  <AccordionItem
                    value="item-3"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">How is SEO different for e-commerce websites?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        E-commerce SEO focuses on product-specific optimization, including product descriptions,
                        category pages, and schema markup for products. It also emphasizes conversion optimization, user
                        experience, and technical aspects like site speed and mobile-friendliness. Our e-commerce SEO
                        strategies are tailored to address these unique challenges and opportunities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>

                <FadeIn delay={250}>
                  <AccordionItem
                    value="item-4"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">What reporting do you provide?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        We provide comprehensive monthly reports that include keyword rankings, organic traffic,
                        conversion data, and completed optimizations. Our reports are easy to understand and focus on
                        the metrics that matter most to your business. We also offer regular strategy calls to discuss
                        results and next steps.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>

                <FadeIn delay={300}>
                  <AccordionItem
                    value="item-5"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold">Do you follow white-hat SEO practices?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Yes, we exclusively use white-hat SEO techniques that comply with search engine guidelines. We
                        focus on creating valuable content, improving user experience, and building genuine
                        relationships for link building. We never use black-hat tactics that could put your website at
                        risk of penalties.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-amber-100 dark:border-amber-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our SEO strategies can help your e-commerce business attract more qualified
                    traffic and increase conversions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Schedule a consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20 transition-all duration-300 hover:scale-105"
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

