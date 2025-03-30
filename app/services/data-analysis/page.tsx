import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  FileSpreadsheet,
  Users,
  ShoppingCart,
  Zap,
  Brain,
  Layers,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import {
  SiTableau,
  SiGoogleanalytics,
  SiPython,
  SiR,
  SiMysql,
  SiMongodb,
} from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"
import { DashboardMockup } from "@/components/dashboard-mockup"

export default function DataAnalyticsServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-teal-50 dark:bg-teal-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-teal-100 dark:bg-teal-800/40 text-teal-600 dark:text-teal-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    Data Analytics
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    Transform Data Into Actionable Insights
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Comprehensive analytics solutions to uncover insights, guide strategic decisions, and drive growth
                    for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105"
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
                  <div className="aspect-[16/9] bg-white dark:bg-gray-800 rounded-xl p-2 md:p-4 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <DashboardMockup />
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                    <div className="bg-teal-100 dark:bg-teal-800/40 rounded-full p-2 sm:p-3 md:p-4">
                      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-teal-600 dark:text-teal-400" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Analytics Solutions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our data analytics services help you understand your customers, optimize your operations, and make
                  informed decisions that drive growth.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-teal-200 dark:border-teal-800/40 h-full">
                  <div className="bg-teal-500 text-white rounded-full p-3 w-fit mb-6">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Business Intelligence</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Transform your raw data into interactive dashboards and reports that provide clear insights into
                    your business performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Custom KPI dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Real-time data visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Automated reporting</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="bg-blue-500 text-white rounded-full p-3 w-fit mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Customer Analytics</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Understand your customers better through advanced segmentation, behavior analysis, and predictive
                    modeling.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Customer segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Lifetime value analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Churn prediction</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="bg-purple-500 text-white rounded-full p-3 w-fit mb-6">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    Marketing Analytics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Optimize your marketing efforts with data-driven insights into campaign performance, channel
                    effectiveness, and ROI.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Campaign attribution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Channel performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Conversion optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="bg-amber-500 text-white rounded-full p-3 w-fit mb-6">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
                    Sales & Revenue Analytics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Gain deeper insights into your sales performance, revenue streams, and growth opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Sales forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Revenue stream analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Pricing optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Product performance metrics</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-800/40 h-full">
                  <div className="bg-green-500 text-white rounded-full p-3 w-fit mb-6">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Use advanced machine learning algorithms to forecast trends, predict outcomes, and make proactive
                    business decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Demand forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Risk assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Trend analysis</span>
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
                    icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
                    title: "Business Intelligence",
                    description:
                      "Transform your raw data into interactive dashboards and reports that provide clear insights into your business performance.",
                    link: "/services/data-analytics#features",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-blue-600" />,
                    title: "Customer Analytics",
                    description:
                      "Understand your customers better through advanced segmentation, behavior analysis, and predictive modeling.",
                    link: "/services/data-analytics#features",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
                    title: "Marketing Analytics",
                    description:
                      "Optimize your marketing efforts with data-driven insights into campaign performance, channel effectiveness, and ROI.",
                    link: "/services/data-analytics#features",
                  },
                  {
                    icon: <ShoppingCart className="h-5 w-5 text-amber-600" />,
                    title: "Sales & Revenue Analytics",
                    description:
                      "Gain deeper insights into your sales performance, revenue streams, and growth opportunities.",
                    link: "/services/data-analytics#features",
                  },
                  {
                    icon: <Brain className="h-5 w-5 text-green-600" />,
                    title: "Predictive Analytics",
                    description:
                      "Use advanced machine learning algorithms to forecast trends, predict outcomes, and make proactive business decisions.",
                    link: "/services/data-analytics#features",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Analytics Tools We Master</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-leading tools and technologies to deliver comprehensive data analysis for your
                  business.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              <FadeIn delay={100}>
                <Card className="border-teal-200 dark:border-teal-800/40 hover:shadow-md transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiTableau className="h-8 w-8 text-[#E97627]" />
                    </div>
                    <CardTitle>Tableau</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Interactive data visualization for creating powerful dashboards and reports
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiPython className="h-8 w-8 text-[#F2C811]" />
                    </div>
                    <CardTitle>Power BI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Microsoft's business analytics solution for interactive visualizations
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-orange-200 dark:border-orange-800/40 hover:shadow-md transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiGoogleanalytics className="h-8 w-8 text-[#E37400]" />
                    </div>
                    <CardTitle>Google Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Web analytics for tracking website traffic and user behavior
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiPython className="h-8 w-8 text-[#217346]" />
                    </div>
                    <CardTitle>Excel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Advanced spreadsheet analysis with pivot tables and Power Query
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
              <FadeIn delay={300}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiPython className="h-8 w-8 text-[#3776AB]" />
                    </div>
                    <CardTitle>Python</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Data processing and machine learning with pandas, NumPy, and scikit-learn
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiR className="h-8 w-8 text-[#276DC3]" />
                    </div>
                    <CardTitle>R</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Statistical computing and graphics for complex data analysis
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiMysql className="h-8 w-8 text-[#4479A1]" />
                    </div>
                    <CardTitle>SQL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Database querying and analysis for structured data
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={450}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiMongodb className="h-8 w-8 text-[#47A248]" />
                    </div>
                    <CardTitle>NoSQL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Analysis of unstructured and semi-structured data
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
                    icon: <SiTableau className="h-5 w-5 text-[#E97627]" />,
                    title: "Tableau",
                    description: "Interactive data visualization for creating powerful dashboards and reports",
                    link: "/services/data-analytics#tools",
                  },
                  {
                    icon: <SiPython className="h-5 w-5 text-[#F2C811]" />,
                    title: "Power BI",
                    description: "Microsoft's business analytics solution for interactive visualizations",
                    link: "/services/data-analytics#tools",
                  },
                  {
                    icon: <SiGoogleanalytics className="h-5 w-5 text-[#E37400]" />,
                    title: "Google Analytics",
                    description: "Web analytics for tracking website traffic and user behavior",
                    link: "/services/data-analytics#tools",
                  },
                  {
                    icon: <SiPython className="h-5 w-5 text-[#217346]" />,
                    title: "Excel",
                    description: "Advanced spreadsheet analysis with pivot tables and Power Query",
                    link: "/services/data-analytics#tools",
                  },
                  {
                    icon: <SiPython className="h-5 w-5 text-[#3776AB]" />,
                    title: "Python",
                    description: "Data processing and machine learning with pandas, NumPy, and scikit-learn",
                    link: "/services/data-analytics#tools",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We provide tailored data analytics solutions for businesses across various industries.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-teal-200 dark:border-teal-800/40 hover:shadow-md transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <ShoppingCart className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle>E-commerce & Retail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Sales analysis, customer segmentation, inventory optimization, and pricing strategies for online
                      and physical stores.
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
                    <CardTitle>Finance & Banking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Risk assessment, fraud detection, customer profiling, and investment analysis for financial
                      institutions.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Healthcare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Patient outcome analysis, operational efficiency, resource allocation, and predictive healthcare
                      analytics.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Layers className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle>Manufacturing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Supply chain optimization, quality control, predictive maintenance, and production efficiency
                      analytics.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle>Technology & SaaS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      User behavior analysis, product usage metrics, churn prediction, and feature adoption analytics.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-pink-200 dark:border-pink-800/40 hover:shadow-md transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <FileSpreadsheet className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <CardTitle>Marketing & Advertising</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Campaign performance, audience targeting, media mix modeling, and ROI optimization analytics.
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
                    icon: <ShoppingCart className="h-5 w-5 text-teal-600" />,
                    title: "E-commerce & Retail",
                    description:
                      "Sales analysis, customer segmentation, inventory optimization, and pricing strategies for online and physical stores.",
                    link: "/services/data-analytics#industries",
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
                    title: "Finance & Banking",
                    description:
                      "Risk assessment, fraud detection, customer profiling, and investment analysis for financial institutions.",
                    link: "/services/data-analytics#industries",
                  },
                  {
                    icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
                    title: "Healthcare",
                    description:
                      "Patient outcome analysis, operational efficiency, resource allocation, and predictive healthcare analytics.",
                    link: "/services/data-analytics#industries",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-amber-600" />,
                    title: "Manufacturing",
                    description:
                      "Supply chain optimization, quality control, predictive maintenance, and production efficiency analytics.",
                    link: "/services/data-analytics#industries",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-green-600" />,
                    title: "Technology & SaaS",
                    description:
                      "User behavior analysis, product usage metrics, churn prediction, and feature adoption analytics.",
                    link: "/services/data-analytics#industries",
                  },
                  {
                    icon: <FileSpreadsheet className="h-5 w-5 text-pink-600" />,
                    title: "Marketing & Advertising",
                    description:
                      "Campaign performance, audience targeting, media mix modeling, and ROI optimization analytics.",
                    link: "/services/data-analytics#industries",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Data Analytics Approach</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We follow a systematic, collaborative process to transform your raw data into actionable insights that
                  drive business growth.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-teal-600 to-teal-400 rounded-full"></div>

              {/* Step 1 */}
              <FadeIn delay={100}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">
                          Discovery & Requirements
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We begin by understanding your business objectives, data sources, and key metrics. This phase
                          includes stakeholder interviews, data inventory, and defining success criteria.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-teal-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                          Data Collection & Preparation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We gather, clean, and structure your data from various sources. This includes data
                          integration, quality assessment, and transformation to ensure accuracy and consistency.
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
                        <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                          Analysis & Modeling
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We apply statistical methods, machine learning algorithms, and data mining techniques to
                          identify patterns, trends, and insights in your data that align with your business objectives.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-purple-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                          Visualization & Reporting
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We create intuitive dashboards, reports, and visualizations that communicate insights
                          effectively, making complex data easy to understand and act upon.
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
                          Implementation & Optimization
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We help you implement data-driven strategies based on our insights and continuously optimize
                          your analytics processes. This includes training, documentation, and ongoing support to ensure
                          long-term success.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Webliano Analytics Advantage</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  What sets our data analytics services apart from the competition
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-teal-200 dark:border-teal-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300">Business-First Approach</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We focus on your business objectives first, not just the data. Our analytics solutions are designed
                    to deliver tangible business outcomes and ROI, not just interesting insights.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Cross-Industry Expertise</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    Our team brings experience from diverse industries, allowing us to apply best practices and
                    innovative approaches from different sectors to your unique challenges.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">End-to-End Solutions</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We provide comprehensive services from data collection and integration to analysis, visualization,
                    and implementation, ensuring a seamless analytics experience.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300">Continuous Innovation</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We stay at the forefront of analytics technologies and methodologies, continuously incorporating new
                    tools and techniques to deliver the most effective solutions for your business.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-teal-600" />,
                    title: "Business-First Approach",
                    description:
                      "We focus on your business objectives first, not just the data. Our analytics solutions are designed to deliver tangible business outcomes and ROI, not just interesting insights.",
                    link: "/services/data-analytics#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    title: "Cross-Industry Expertise",
                    description:
                      "Our team brings experience from diverse industries, allowing us to apply best practices and innovative approaches from different sectors to your unique challenges.",
                    link: "/services/data-analytics#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
                    title: "End-to-End Solutions",
                    description:
                      "We provide comprehensive services from data collection and integration to analysis, visualization, and implementation, ensuring a seamless analytics experience.",
                    link: "/services/data-analytics#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-amber-600" />,
                    title: "Continuous Innovation",
                    description:
                      "We stay at the forefront of analytics technologies and methodologies, continuously incorporating new tools and techniques to deliver the most effective solutions for your business.",
                    link: "/services/data-analytics#advantages",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Get answers to common questions about our data analytics services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-teal-100/50 dark:bg-teal-800/20 text-teal-800 dark:text-teal-200 font-medium">
                        <span className="text-left">What types of data can you analyze?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We can analyze virtually any type of data, including structured data (databases,
                          spreadsheets), unstructured data (text, images, videos), and semi-structured data (JSON, XML).
                          Our expertise spans across customer data, sales data, marketing data, operational data,
                          financial data, and more.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-teal-100/50 dark:bg-teal-800/20 text-teal-800 dark:text-teal-200 font-medium">
                        <span className="text-left">How long does it take to implement a data analytics solution?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          The timeline varies based on the complexity of your data environment and requirements. Simple
                          dashboard implementations can be completed in 2-4 weeks, while more complex analytics
                          solutions involving multiple data sources and advanced modeling might take 2-3 months. We'll
                          provide a detailed timeline during our initial consultation.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-teal-100/50 dark:bg-teal-800/20 text-teal-800 dark:text-teal-200 font-medium">
                        <span className="text-left">Do I need to have clean, organized data to start?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          No, data preparation is part of our service. We'll help you collect, clean, and organize your
                          data as part of our end-to-end analytics solution. Our data engineers are experienced in
                          handling messy, disparate data sources and transforming them into a usable format for
                          analysis.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-teal-100/50 dark:bg-teal-800/20 text-teal-800 dark:text-teal-200 font-medium">
                        <span className="text-left">How do you ensure data security and privacy?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We take data security and privacy very seriously. We implement industry-standard security
                          measures including encryption, secure access controls, and regular security audits. We comply
                          with relevant data protection regulations like GDPR and CCPA. All client data is handled
                          confidentially and is never shared with third parties without explicit permission.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-teal-100/50 dark:bg-teal-800/20 text-teal-800 dark:text-teal-200 font-medium">
                        <span className="text-left">What ongoing support do you provide?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We offer various support packages to meet your needs, including dashboard maintenance, data
                          pipeline monitoring, regular reporting updates, and analytics training. Our team is available
                          to answer questions, troubleshoot issues, and help you get the most value from your analytics
                          solution. We also provide regular reviews to ensure your analytics continue to align with your
                          evolving business needs.
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
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-teal-100 dark:border-teal-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the Power of Your Data?</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our data analytics services can help you make better business decisions and drive
                    growth for your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Schedule a consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105"
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

