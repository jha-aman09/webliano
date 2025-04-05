import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Search,
  BarChart3,
  Target,
  Award,
  Globe,
  FileText,
  LinkIcon,
  Zap,
  Briefcase,
  ShoppingCart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"
import { SeoRankingMockup } from "@/components/seo-ranking-mockup"
import { GoogleAnalyticsIcon, SearchConsoleIcon, SemrushIcon, AhrefsIcon, MozIcon } from "@/components/seo-tool-icons"

export default function SeoServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-amber-50 dark:bg-amber-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-amber-100 dark:bg-amber-800/40 text-amber-600 dark:text-amber-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    Search Engine Optimization
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    Strategic SEO Services
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Data-driven search engine optimization to boost visibility, increase organic traffic, and drive
                    qualified leads to your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto transition-all duration-300 hover:scale-105"
                      >
                        Get a quote
                      </Button>
                    </Link>
                    <Link href="#features">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                        Explore features
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="relative">
                  <div className="aspect-[16/9] bg-white dark:bg-gray-800 rounded-xl p-2 md:p-4 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <SeoRankingMockup />
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Comprehensive SEO Solutions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Our SEO services help you improve your search engine rankings, drive targeted traffic, and increase
                  conversions for sustainable business growth.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="bg-amber-500 text-white rounded-full p-3 w-fit mb-6">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
                    Keyword Research & Strategy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Discover the most valuable and relevant keywords for your industry and target audience to drive
                    qualified traffic to your website.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Competitor keyword analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Long-tail keyword opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Search intent optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="bg-blue-500 text-white rounded-full p-3 w-fit mb-6">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">On-Page SEO</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Optimize your website's content and structure to improve search engine rankings and enhance user
                    experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Title & meta description optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Content optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">URL structure improvements</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="bg-purple-500 text-white rounded-full p-3 w-fit mb-6">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Technical SEO</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ensure your website's technical foundation is optimized for search engines to crawl, index, and rank
                    your pages effectively.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Site speed optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Mobile-friendly improvements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Schema markup implementation</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="bg-amber-500 text-white rounded-full p-3 w-fit mb-6">
                    <LinkIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
                    Link Building & Authority
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Build your website's authority through strategic link building and digital PR to improve search
                    rankings and domain authority.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Quality backlink acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Content outreach campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Competitor backlink analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Internal linking optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-800/40 h-full">
                  <div className="bg-green-500 text-white rounded-full p-3 w-fit mb-6">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
                    Analytics & Reporting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Track your SEO performance with comprehensive analytics and regular reporting to measure ROI and
                    refine strategies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Keyword ranking reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Traffic and conversion analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Competitor performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Monthly performance reports</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <Search className="h-5 w-5 text-amber-600" />,
                    title: "Keyword Research & Strategy",
                    description:
                      "Discover the most valuable and relevant keywords for your industry and target audience to drive qualified traffic to your website.",
                    link: "/services/seo#features",
                    bgClass: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30",
                    textClass: "text-amber-700 dark:text-amber-300",
                    borderClass: "border border-amber-200 dark:border-amber-800/40",
                    iconBgClass: "bg-amber-100 dark:bg-amber-800/40",
                  },
                  {
                    icon: <FileText className="h-5 w-5 text-blue-600" />,
                    title: "On-Page SEO",
                    description:
                      "Optimize your website's content and structure to improve search engine rankings and enhance user experience.",
                    link: "/services/seo#features",
                    bgClass: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30",
                    textClass: "text-blue-700 dark:text-blue-300",
                    borderClass: "border border-blue-200 dark:border-blue-800/40",
                    iconBgClass: "bg-blue-100 dark:bg-blue-800/40",
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-purple-600" />,
                    title: "Technical SEO",
                    description:
                      "Ensure your website's technical foundation is optimized for search engines to crawl, index, and rank your pages effectively.",
                    link: "/services/seo#features",
                    bgClass:
                      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30",
                    textClass: "text-purple-700 dark:text-purple-300",
                    borderClass: "border border-purple-200 dark:border-purple-800/40",
                    iconBgClass: "bg-purple-100 dark:bg-purple-800/40",
                  },
                  {
                    icon: <LinkIcon className="h-5 w-5 text-amber-600" />,
                    title: "Link Building & Authority",
                    description:
                      "Build your website's authority through strategic link building and digital PR to improve search rankings and domain authority.",
                    link: "/services/seo#features",
                    bgClass: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30",
                    textClass: "text-amber-700 dark:text-amber-300",
                    borderClass: "border border-amber-200 dark:border-amber-800/40",
                    iconBgClass: "bg-amber-100 dark:bg-amber-800/40",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5 text-green-600" />,
                    title: "Analytics & Reporting",
                    description:
                      "Track your SEO performance with comprehensive analytics and regular reporting to measure ROI and refine strategies.",
                    link: "/services/seo#features",
                    bgClass: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30",
                    textClass: "text-green-700 dark:text-green-300",
                    borderClass: "border border-green-200 dark:border-green-800/40",
                    iconBgClass: "bg-green-100 dark:bg-green-800/40",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">SEO Tools We Master</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-leading tools and technologies to deliver comprehensive search engine
                  optimization for your business.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              <FadeIn delay={100}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <GoogleAnalyticsIcon className="h-8 w-8" />
                    </div>
                    <CardTitle>Google Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Track website traffic, user behavior, and conversion metrics
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SearchConsoleIcon className="h-8 w-8" />
                    </div>
                    <CardTitle>Search Console</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Monitor search performance and identify technical issues
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SemrushIcon className="h-8 w-8" />
                    </div>
                    <CardTitle>SEMrush</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Comprehensive SEO research and competitive analysis
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <AhrefsIcon className="h-8 w-8" />
                    </div>
                    <CardTitle>Ahrefs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Backlink analysis and content research tools
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
              <FadeIn delay={300}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <MozIcon className="h-8 w-8" />
                    </div>
                    <CardTitle>Moz Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Site audits, rank tracking, and link research
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <GoogleAnalyticsIcon className="h-5 w-5" />,
                    title: "Google Analytics",
                    description: "Track website traffic, user behavior, and conversion metrics",
                    link: "/services/seo#tools",
                  },
                  {
                    icon: <SearchConsoleIcon className="h-5 w-5" />,
                    title: "Search Console",
                    description: "Monitor search performance and identify technical issues",
                    link: "/services/seo#tools",
                  },
                  {
                    icon: <SemrushIcon className="h-5 w-5" />,
                    title: "SEMrush",
                    description: "Comprehensive SEO research and competitive analysis",
                    link: "/services/seo#tools",
                  },
                  {
                    icon: <AhrefsIcon className="h-5 w-5" />,
                    title: "Ahrefs",
                    description: "Backlink analysis and content research tools",
                    link: "/services/seo#tools",
                  },
                  {
                    icon: <MozIcon className="h-5 w-5" />,
                    title: "Moz Pro",
                    description: "Site audits, rank tracking, and link research",
                    link: "/services/seo#tools",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-16 md:py-24" id="industries">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Industries We Serve</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We provide tailored SEO solutions for businesses across various industries.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <ShoppingCart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle>E-commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Product optimization, category page SEO, and conversion-focused strategies for online stores.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>B2B Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Lead generation SEO, thought leadership content, and industry-specific keyword strategies.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Local Businesses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Local SEO, Google Business Profile optimization, and location-based keyword targeting.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle>SaaS & Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Feature-focused SEO, technical documentation optimization, and competitive keyword strategies.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-pink-200 dark:border-pink-800/40 hover:shadow-md transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <CardTitle>Professional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Authority-building SEO, expertise content development, and trust-focused optimization.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Target className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle>Media & Publishing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Content-focused SEO, news optimization, and audience development strategies.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <ShoppingCart className="h-5 w-5 text-amber-600" />,
                    title: "E-commerce",
                    description:
                      "Product optimization, category page SEO, and conversion-focused strategies for online stores.",
                    link: "/services/seo#industries",
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
                    title: "B2B Services",
                    description:
                      "Lead generation SEO, thought leadership content, and industry-specific keyword strategies.",
                    link: "/services/seo#industries",
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-purple-600" />,
                    title: "Local Businesses",
                    description:
                      "Local SEO, Google Business Profile optimization, and location-based keyword targeting.",
                    link: "/services/seo#industries",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-green-600" />,
                    title: "SaaS & Technology",
                    description:
                      "Feature-focused SEO, technical documentation optimization, and competitive keyword strategies.",
                    link: "/services/seo#industries",
                  },
                  {
                    icon: <Award className="h-5 w-5 text-pink-600" />,
                    title: "Professional Services",
                    description:
                      "Authority-building SEO, expertise content development, and trust-focused optimization.",
                    link: "/services/seo#industries",
                  },
                  {
                    icon: <Target className="h-5 w-5 text-cyan-600" />,
                    title: "Media & Publishing",
                    description: "Content-focused SEO, news optimization, and audience development strategies.",
                    link: "/services/seo#industries",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Our SEO Approach</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We follow a systematic, data-driven process to improve your search engine rankings and drive qualified
                  traffic to your website.
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
                        <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">
                          Comprehensive Audit
                        </h3>
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
                      <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                          Strategy Development
                        </h3>
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
                        <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                          On-Page & Technical Optimization
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We implement on-page and technical SEO improvements to enhance your website's search engine
                          visibility and user experience.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-pink-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                        <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">
                          Content & Link Building
                        </h3>
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
                        <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                          Monitoring & Refinement
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We continuously monitor your SEO performance, analyze results, and refine our strategies to
                          ensure ongoing improvement and maximum ROI.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-green-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
        <section className="py-16 md:py-24" id="advantages">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">The Webliano SEO Advantage</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  What sets our SEO services apart from the competition
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300">Data-Driven Approach</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We make decisions based on comprehensive data analysis, not guesswork. Our strategies are backed by
                    analytics, ensuring measurable results and continuous improvement.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                      Conversion-Focused Strategy
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We don't just focus on rankings; we prioritize driving qualified traffic that converts. Our SEO
                    strategies are designed to attract customers who are ready to engage with your business.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                      Comprehensive Expertise
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    Our team brings experience across all aspects of SEO - technical, on-page, content, and off-page -
                    allowing us to deliver holistic strategies that address all ranking factors.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Transparent Reporting</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We provide clear, comprehensive reports that show exactly what we're doing and the results we're
                    achieving. You'll always know the ROI of your SEO investment.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-amber-600" />,
                    title: "Data-Driven Approach",
                    description:
                      "We make decisions based on comprehensive data analysis, not guesswork. Our strategies are backed by analytics, ensuring measurable results and continuous improvement.",
                    link: "/services/seo#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    title: "Conversion-Focused Strategy",
                    description:
                      "We don't just focus on rankings; we prioritize driving qualified traffic that converts. Our SEO strategies are designed to attract customers who are ready to engage with your business.",
                    link: "/services/seo#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
                    title: "Comprehensive Expertise",
                    description:
                      "Our team brings experience across all aspects of SEO - technical, on-page, content, and off-page - allowing us to deliver holistic strategies that address all ranking factors.",
                    link: "/services/seo#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
                    title: "Transparent Reporting",
                    description:
                      "We provide clear, comprehensive reports that show exactly what we're doing and the results we're achieving. You'll always know the ROI of your SEO investment.",
                    link: "/services/seo#advantages",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50" id="faq">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Get answers to common questions about our SEO services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-amber-100/50 dark:bg-amber-800/20 text-amber-800 dark:text-amber-200 font-medium">
                        <span className="text-left">How long does it take to see results from SEO?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          SEO is a long-term strategy that typically takes 3-6 months to show significant results.
                          However, you may start seeing improvements in rankings and traffic within the first few
                          months. The timeline depends on factors like your website's current state, competition in your
                          industry, and the aggressiveness of your SEO strategy.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-amber-100/50 dark:bg-amber-800/20 text-amber-800 dark:text-amber-200 font-medium">
                        <span className="text-left">Can you guarantee #1 rankings on Google?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          No reputable SEO agency can guarantee #1 rankings on Google. Search engines use complex
                          algorithms with hundreds of ranking factors that are constantly changing. While we can't
                          guarantee specific positions, we do guarantee that we'll use industry best practices and
                          proven strategies to improve your rankings and increase organic traffic to your website.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-amber-100/50 dark:bg-amber-800/20 text-amber-800 dark:text-amber-200 font-medium">
                        <span className="text-left">What reporting do you provide?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We provide comprehensive monthly reports that include keyword rankings, organic traffic,
                          conversion data, and completed optimizations. Our reports are easy to understand and focus on
                          the metrics that matter most to your business. We also offer regular strategy calls to discuss
                          results and next steps.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-amber-100/50 dark:bg-amber-800/20 text-amber-800 dark:text-amber-200 font-medium">
                        <span className="text-left">Do you follow white-hat SEO practices?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Yes, we exclusively use white-hat SEO techniques that comply with search engine guidelines. We
                          focus on creating valuable content, improving user experience, and building genuine
                          relationships for link building. We never use black-hat tactics that could put your website at
                          risk of penalties.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-amber-100/50 dark:bg-amber-800/20 text-amber-800 dark:text-amber-200 font-medium">
                        <span className="text-left">How do you stay current with SEO changes?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Our team continuously monitors search engine algorithm updates, industry trends, and best
                          practices. We invest in ongoing education, attend conferences, participate in professional
                          communities, and conduct regular testing to ensure our strategies remain effective in the
                          ever-changing SEO landscape.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-amber-100 dark:border-amber-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our SEO strategies can help your business attract more qualified traffic and
                    increase conversions.
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

