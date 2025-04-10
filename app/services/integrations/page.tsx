import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Database,
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart,
  Settings,
  Layers,
  Globe,
  Server,
  Plug,
  Workflow,
  Code,
  Lock,
} from "lucide-react"
import { SiZapier, SiShopify, SiStripe, SiGooglecloud } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"
import { IntegrationsMockup } from "@/components/integrations-mockup"

// Custom AWS Logo SVG
const AWSLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-.1277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
  </svg>
)

// Custom Azure Logo SVG
const AzureLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.05 4.24L6.56 18.05L2 18l5.09-8.76l5.96-5m.7 15.76h5.79l-10.9-14.65l5.11 14.65" />
  </svg>
)

export default function IntegrationsServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-green-50 dark:bg-green-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-green-100 dark:bg-green-800/40 text-green-600 dark:text-green-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    System Integration
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    Custom Integration Services
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Seamlessly connect your business systems and tools to create a unified, efficient ecosystem that
                    drives growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto transition-all duration-300 hover:scale-105"
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
                    <IntegrationsMockup />
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                    <div className="bg-green-100 dark:bg-green-800/40 rounded-full p-2 sm:p-3 md:p-4">
                      <Plug className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-600 dark:text-green-400" />
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Comprehensive Integration Solutions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Our custom integration services connect your essential business tools and platforms, creating a
                  seamless flow of data and functionality.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-800/40 h-full">
                  <div className="bg-green-500 text-white rounded-full p-3 w-fit mb-6">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
                    Payment Gateway Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Seamlessly connect your e-commerce platform with popular payment processors for secure, reliable
                    transactions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Stripe, PayPal, Square integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Secure checkout process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Subscription & recurring billing</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="bg-purple-500 text-white rounded-full p-3 w-fit mb-6">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    E-Commerce Platform Connectivity
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Connect your website with leading e-commerce platforms to manage products, inventory, and orders
                    efficiently.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Shopify, WooCommerce, Magento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Inventory synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Order management automation</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800/40 h-full">
                  <div className="bg-indigo-500 text-white rounded-full p-3 w-fit mb-6">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
                    Shipping & Logistics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Integrate with shipping providers to automate label generation, tracking, and delivery
                    notifications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">FedEx, UPS, USPS integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Automated shipping label generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Real-time tracking updates</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                  <div className="bg-cyan-500 text-white rounded-full p-3 w-fit mb-6">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">
                    CRM & Marketing Automation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Connect your customer relationship management and marketing tools to streamline customer
                    communications and campaigns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Salesforce, HubSpot, Mailchimp integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Automated customer data synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Campaign performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Customer journey automation</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-sky-200 dark:border-sky-800/40 h-full">
                  <div className="bg-sky-500 text-white rounded-full p-3 w-fit mb-6">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-sky-300">Analytics & Reporting</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Integrate analytics platforms to gain comprehensive insights into your business performance across
                    all channels.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Google Analytics, Mixpanel, Amplitude integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Custom dashboard creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Cross-platform data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 dark:text-sky-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Automated reporting workflows</span>
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
                    icon: <CreditCard className="h-5 w-5 text-blue-600" />,
                    title: "Payment Gateway Integration",
                    description:
                      "Seamlessly connect your e-commerce platform with popular payment processors for secure, reliable transactions.",
                    link: "/services/integrations#features",
                    bgClass: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30",
                    textClass: "text-blue-700 dark:text-blue-300",
                    borderClass: "border border-blue-200 dark:border-blue-800/40",
                    iconBgClass: "bg-blue-100 dark:bg-blue-800/40",
                  },
                  {
                    icon: <ShoppingCart className="h-5 w-5 text-purple-600" />,
                    title: "E-Commerce Platform Connectivity",
                    description:
                      "Connect your website with leading e-commerce platforms to manage products, inventory, and orders efficiently.",
                    link: "/services/integrations#features",
                    bgClass:
                      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30",
                    textClass: "text-purple-700 dark:text-purple-300",
                    borderClass: "border border-purple-200 dark:border-purple-800/40",
                    iconBgClass: "bg-purple-100 dark:bg-purple-800/40",
                  },
                  {
                    icon: <Truck className="h-5 w-5 text-indigo-600" />,
                    title: "Shipping & Logistics",
                    description:
                      "Integrate with shipping providers to automate label generation, tracking, and delivery notifications.",
                    link: "/services/integrations#features",
                    bgClass:
                      "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30",
                    textClass: "text-indigo-700 dark:text-indigo-300",
                    borderClass: "border border-indigo-200 dark:border-indigo-800/40",
                    iconBgClass: "bg-indigo-100 dark:bg-indigo-800/40",
                  },
                  {
                    icon: <Database className="h-5 w-5 text-cyan-600" />,
                    title: "CRM & Marketing Automation",
                    description:
                      "Connect your customer relationship management and marketing tools to streamline customer communications and campaigns.",
                    link: "/services/integrations#features",
                    bgClass: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30",
                    textClass: "text-cyan-700 dark:text-cyan-300",
                    borderClass: "border border-cyan-200 dark:border-cyan-800/40",
                    iconBgClass: "bg-cyan-100 dark:bg-cyan-800/40",
                  },
                  {
                    icon: <BarChart className="h-5 w-5 text-sky-600" />,
                    title: "Analytics & Reporting",
                    description:
                      "Integrate analytics platforms to gain comprehensive insights into your business performance across all channels.",
                    link: "/services/integrations#features",
                    bgClass: "bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/30",
                    textClass: "text-sky-700 dark:text-sky-300",
                    borderClass: "border border-sky-200 dark:border-sky-800/40",
                    iconBgClass: "bg-sky-100 dark:bg-sky-800/40",
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Integration Technologies We Master</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-standard technologies and platforms to create reliable, scalable integration
                  solutions.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              <FadeIn delay={100}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiZapier className="h-8 w-8 text-[#FF4A00]" />
                    </div>
                    <CardTitle>Zapier</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Automate workflows between apps without writing code
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiShopify className="h-8 w-8 text-[#7AB55C]" />
                    </div>
                    <CardTitle>Shopify API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Build custom e-commerce integrations and applications
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiStripe className="h-8 w-8 text-[#635BFF]" />
                    </div>
                    <CardTitle>Stripe Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Integrate secure payment processing and financial services
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Code className="h-8 w-8 text-cyan-600" />
                    </div>
                    <CardTitle>RESTful APIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Build standardized, scalable API integrations between systems
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
              <FadeIn delay={300}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <AWSLogo className="h-8 w-8 text-[#FF9900]" />
                    </div>
                    <CardTitle>AWS Lambda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Serverless computing for event-driven integrations
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Workflow className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle>Webhooks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Real-time event notifications between applications
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiGooglecloud className="h-8 w-8 text-[#4285F4]" />
                    </div>
                    <CardTitle>Google Cloud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Cloud-based integration services and data processing
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={450}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <AzureLogo className="h-8 w-8 text-[#0078D4]" />
                    </div>
                    <CardTitle>Azure Logic Apps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Visual workflow automation for complex integrations
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
                    icon: <SiZapier className="h-5 w-5 text-[#FF4A00]" />,
                    title: "Zapier",
                    description: "Automate workflows between apps without writing code",
                    link: "/services/integrations#tools",
                  },
                  {
                    icon: <SiShopify className="h-5 w-5 text-[#7AB55C]" />,
                    title: "Shopify API",
                    description: "Build custom e-commerce integrations and applications",
                    link: "/services/integrations#tools",
                  },
                  {
                    icon: <SiStripe className="h-5 w-5 text-[#635BFF]" />,
                    title: "Stripe Connect",
                    description: "Integrate secure payment processing and financial services",
                    link: "/services/integrations#tools",
                  },
                  {
                    icon: <Code className="h-5 w-5 text-cyan-600" />,
                    title: "RESTful APIs",
                    description: "Build standardized, scalable API integrations between systems",
                    link: "/services/integrations#tools",
                  },
                  {
                    icon: <AWSLogo className="h-5 w-5 text-[#FF9900]" />,
                    title: "AWS Lambda",
                    description: "Serverless computing for event-driven integrations",
                    link: "/services/integrations#tools",
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
                  We provide tailored integration solutions for businesses across various industries.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>E-Commerce & Retail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Seamless connections between your online store, inventory management, shipping, and payment
                      systems.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>SaaS & Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      API integrations and data synchronization between your software platform and third-party services.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Server className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <CardTitle>Financial Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Secure integrations between banking systems, payment processors, and financial reporting tools.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Layers className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle>Manufacturing & Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Integrated supply chain management, inventory control, and order fulfillment systems.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>Professional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Connected CRM, project management, time tracking, and billing systems for service-based
                      businesses.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Healthcare & Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      HIPAA-compliant integrations between patient management, billing, and telehealth systems.
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
                    icon: <ShoppingCart className="h-5 w-5 text-blue-600" />,
                    title: "E-Commerce & Retail",
                    description:
                      "Seamless connections between your online store, inventory management, shipping, and payment systems.",
                    link: "/services/integrations#industries",
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-purple-600" />,
                    title: "SaaS & Technology",
                    description:
                      "API integrations and data synchronization between your software platform and third-party services.",
                    link: "/services/integrations#industries",
                  },
                  {
                    icon: <Server className="h-5 w-5 text-indigo-600" />,
                    title: "Financial Services",
                    description:
                      "Secure integrations between banking systems, payment processors, and financial reporting tools.",
                    link: "/services/integrations#industries",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-cyan-600" />,
                    title: "Manufacturing & Distribution",
                    description:
                      "Integrated supply chain management, inventory control, and order fulfillment systems.",
                    link: "/services/integrations#industries",
                  },
                  {
                    icon: <Settings className="h-5 w-5 text-blue-600" />,
                    title: "Professional Services",
                    description:
                      "Connected CRM, project management, time tracking, and billing systems for service-based businesses.",
                    link: "/services/integrations#industries",
                  },
                  {
                    icon: <Lock className="h-5 w-5 text-purple-600" />,
                    title: "Healthcare & Wellness",
                    description:
                      "HIPAA-compliant integrations between patient management, billing, and telehealth systems.",
                    link: "/services/integrations#industries",
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Our Integration Approach</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We follow a systematic, collaborative process to create reliable, efficient integrations that solve
                  your business challenges.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-green-600 to-green-400 rounded-full"></div>

              {/* Step 1 */}
              <FadeIn delay={100}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                          Discovery & Analysis
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We begin by understanding your business processes, existing systems, and integration goals.
                          This phase includes identifying data flows, system requirements, and potential challenges.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-green-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                      <div className="bg-indigo-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                          Solution Architecture
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We design a comprehensive integration architecture that maps data flows, defines
                          transformation rules, and establishes connection methods between your systems.
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
                          Development & Configuration
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          Our expert team implements the integration solution using appropriate technologies and
                          platforms. This includes API development, data mapping, and workflow configuration.
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
                      <div className="bg-cyan-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                          Testing & Validation
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We rigorously test the integration to ensure data flows correctly, error handling works
                          properly, and all business requirements are met before deployment.
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
                        <h3 className="text-xl font-semibold mb-2 text-sky-600 dark:text-sky-400">
                          Deployment & Monitoring
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We deploy the integration to production and implement monitoring tools to track performance,
                          detect issues, and ensure ongoing reliability of your connected systems.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-sky-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">The Webliano Integration Advantage</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  What sets our integration services apart from the competition
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                      E-Commerce Ecosystem Expertise
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We have deep knowledge of the e-commerce technology ecosystem, understanding how different platforms
                    and tools work together to create a seamless business operation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                      Custom Integration Solutions
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We don't rely on one-size-fits-all solutions. Instead, we develop custom integrations tailored to
                    your specific business needs, ensuring optimal functionality and efficiency.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">Seamless Data Flow</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We ensure smooth data flow between all your systems, eliminating data silos and providing a unified
                    view of your business operations and customer interactions.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-sky-200 dark:border-sky-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-300">Future-Proof Architecture</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We build integrations with scalability and flexibility in mind, ensuring your systems can adapt to
                    new technologies and business growth without requiring complete overhauls.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    title: "E-Commerce Ecosystem Expertise",
                    description:
                      "We have deep knowledge of the e-commerce technology ecosystem, understanding how different platforms and tools work together to create a seamless business operation.",
                    link: "/services/integrations#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-indigo-600" />,
                    title: "Custom Integration Solutions",
                    description:
                      "We don't rely on one-size-fits-all solutions. Instead, we develop custom integrations tailored to your specific business needs, ensuring optimal functionality and efficiency.",
                    link: "/services/integrations#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-cyan-600" />,
                    title: "Seamless Data Flow",
                    description:
                      "We ensure smooth data flow between all your systems, eliminating data silos and providing a unified view of your business operations and customer interactions.",
                    link: "/services/integrations#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-sky-600" />,
                    title: "Future-Proof Architecture",
                    description:
                      "We build integrations with scalability and flexibility in mind, ensuring your systems can adapt to new technologies and business growth without requiring complete overhauls.",
                    link: "/services/integrations#advantages",
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
                  Get answers to common questions about our integration services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-green-100/50 dark:bg-green-800/20 text-green-800 dark:text-green-200 font-medium">
                        <span className="text-left">How long does it typically take to implement an integration?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Integration timelines vary based on complexity and the systems involved. Simple integrations
                          between common platforms can be completed in 2-4 weeks, while more complex enterprise
                          integrations might take 2-3 months. During our initial consultation, we'll provide a detailed
                          timeline based on your specific requirements.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-green-100/50 dark:bg-green-800/20 text-green-800 dark:text-green-200 font-medium">
                        <span className="text-left">Can you integrate with legacy systems?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Yes, we have extensive experience integrating modern platforms with legacy systems. We use
                          various approaches including custom API development, middleware solutions, and data
                          transformation services to bridge the gap between older systems and newer technologies. We'll
                          assess your legacy system and recommend the most efficient integration approach.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-green-100/50 dark:bg-green-800/20 text-green-800 dark:text-green-200 font-medium">
                        <span className="text-left">How do you ensure data security during integration?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Data security is our top priority. We implement industry-standard security measures including
                          encrypted data transmission (SSL/TLS), secure authentication methods (OAuth, API keys), data
                          masking for sensitive information, and regular security audits. We also ensure compliance with
                          relevant regulations like GDPR, HIPAA, or PCI DSS depending on your industry and data types.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-green-100/50 dark:bg-green-800/20 text-green-800 dark:text-green-200 font-medium">
                        <span className="text-left">What happens if an integration fails or has errors?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We build robust error handling and monitoring into all our integrations. This includes
                          automated error detection, detailed logging, retry mechanisms for transient failures, and
                          alert notifications for critical issues. We also offer ongoing support and maintenance plans
                          to quickly address any integration issues that may arise, ensuring minimal disruption to your
                          business operations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl shadow-sm border border-green-200 dark:border-green-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-green-100/50 dark:bg-green-800/20 text-green-800 dark:text-green-200 font-medium">
                        <span className="text-left">Do you provide documentation and training for our team?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Yes, comprehensive documentation and training are included with all our integration projects.
                          We provide detailed technical documentation, user guides, and system architecture diagrams. We
                          also conduct training sessions for your team to ensure they understand how the integration
                          works, how to monitor it, and basic troubleshooting steps. Our goal is to empower your team to
                          manage the integration confidently.
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
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-green-100 dark:border-green-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Ready to Streamline Your Business Systems?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our integration services can help connect your tools and platforms for maximum
                    efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Contact us today
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-105"
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
