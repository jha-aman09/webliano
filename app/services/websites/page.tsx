import Link from "next/link"
import {
    ArrowRight,
    CheckCircle,
    Code,
    Smartphone,
    Zap,
    Layers,
    PenTool,
    Store,
    Briefcase,
    GraduationCap,
    ShoppingBag,
    HeartPulse,
    Utensils,
} from "lucide-react"
import { FaReact, FaNodeJs, FaWordpress, FaWix, FaShopify, FaStripe, FaPaypal, FaAmazon } from "react-icons/fa"
import {
    SiNextdotjs,
    SiTailwindcss,
    SiShopify,
    SiWoocommerce,
    SiMagento,
    SiBigcommerce,
    SiSquarespace,
    SiShopware,
} from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WebsiteMockup } from "@/components/website-mockup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"

export default function WebsitesServicePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-blue-50 dark:bg-blue-900/20">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <FadeIn>
                                <div>
                                    <div className="bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                                        Web Development
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                                        Personalized Website Development
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                        Custom-designed websites that reflect your brand identity and optimize conversions for your
                                        e-commerce business.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/contact">
                                            <Button
                                                size="lg"
                                                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
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
                                        <WebsiteMockup />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                                        <div className="bg-blue-100 dark:bg-blue-800/40 rounded-full p-2 sm:p-3 md:p-4">
                                            <Code className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Website Features</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Our websites are built with the latest technologies and best practices to ensure optimal performance,
                                    security, and user experience.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Desktop Grid (hidden on mobile) */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8">
                            <FadeIn delay={100}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                                    <div className="bg-blue-500 text-white rounded-full p-3 w-fit mb-6">
                                        <Code className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Custom Development</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Tailored solutions built specifically for your business needs, not generic templates that limit your
                                        potential.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Unique brand-aligned design</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Custom functionality</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Scalable architecture</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                                    <div className="bg-purple-500 text-white rounded-full p-3 w-fit mb-6">
                                        <Smartphone className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Responsive Design</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Websites that look and function perfectly on all devices, from desktops to smartphones.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Mobile-first approach</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Adaptive layouts</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Touch-friendly interfaces</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                                    <div className="bg-cyan-500 text-white rounded-full p-3 w-fit mb-6">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">Performance Optimized</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Lightning-fast websites that load quickly and provide a smooth user experience.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Optimized code and assets</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Fast loading times</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">CDN integration</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
                            <FadeIn delay={400}>
                                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-pink-800/40 h-full">
                                    <div className="bg-pink-500 text-white rounded-full p-3 w-fit mb-6">
                                        <Layers className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-pink-700 dark:text-pink-300">
                                        E-Commerce Optimization
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Specialized features designed to maximize conversions and sales for your online store.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Optimized product showcases</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Streamlined checkout process</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Upsell and cross-sell features</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Customer account management</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={500}>
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                                    <div className="bg-amber-500 text-white rounded-full p-3 w-fit mb-6">
                                        <PenTool className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
                                        SEO-Ready Architecture
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Built with search engines in mind to help your business rank higher and attract more organic
                                        traffic.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Semantic HTML structure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Schema markup integration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Optimized page speed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">Mobile-friendly design</span>
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
                                        icon: <Code className="h-5 w-5 text-blue-600" />,
                                        title: "Custom Development",
                                        description:
                                            "Tailored solutions built specifically for your business needs, not generic templates that limit your potential.",
                                        link: "/services/websites#features",
                                    },
                                    {
                                        icon: <Smartphone className="h-5 w-5 text-purple-600" />,
                                        title: "Responsive Design",
                                        description:
                                            "Websites that look and function perfectly on all devices, from desktops to smartphones.",
                                        link: "/services/websites#features",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5 text-cyan-600" />,
                                        title: "Performance Optimized",
                                        description: "Lightning-fast websites that load quickly and provide a smooth user experience.",
                                        link: "/services/websites#features",
                                    },
                                    {
                                        icon: <Layers className="h-5 w-5 text-pink-600" />,
                                        title: "E-Commerce Optimization",
                                        description:
                                            "Specialized features designed to maximize conversions and sales for your online store.",
                                        link: "/services/websites#features",
                                    },
                                    {
                                        icon: <PenTool className="h-5 w-5 text-amber-600" />,
                                        title: "SEO-Ready Architecture",
                                        description:
                                            "Built with search engines in mind to help your business rank higher and attract more organic traffic.",
                                        link: "/services/websites#features",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* E-commerce Platforms Section */}
                <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">E-commerce Platforms We Work With</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    We have expertise in developing and customizing websites on all major e-commerce platforms.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Desktop Grid (hidden on mobile) */}
                        <div className="hidden md:grid md:grid-cols-4 gap-8">
                            <FadeIn delay={100}>
                                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <FaShopify className="h-8 w-8 text-[#7AB55C]" />
                                        </div>
                                        <CardTitle>Shopify</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Custom Shopify stores with unique themes and functionality
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={150}>
                                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiWoocommerce className="h-8 w-8 text-[#96588A]" />
                                        </div>
                                        <CardTitle>WooCommerce</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            WordPress-based stores with unlimited customization options
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <Card className="border-orange-200 dark:border-orange-800/40 hover:shadow-md transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiMagento className="h-8 w-8 text-[#F26322]" />
                                        </div>
                                        <CardTitle>Magento</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Enterprise-level solutions for large-scale e-commerce businesses
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={250}>
                                <Card className="border-teal-200 dark:border-teal-800/40 hover:shadow-md transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiBigcommerce className="h-8 w-8 text-[#12EBB9]" />
                                        </div>
                                        <CardTitle>BigCommerce</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Scalable SaaS platform with robust features for growing businesses
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        </div>

                        <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
                            <FadeIn delay={300}>
                                <Card className="border-red-200 dark:border-red-800/40 hover:shadow-md transition-all duration-300 hover:border-red-300 dark:hover:border-red-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <FaWix className="h-8 w-8 text-[#000000]" />
                                        </div>
                                        <CardTitle>Wix</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            User-friendly platform with drag-and-drop website builder
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={350}>
                                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <FaStripe className="h-8 w-8 text-[#635BFF]" />
                                        </div>
                                        <CardTitle>Stripe</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Custom checkout experiences with Stripe payment integration
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={400}>
                                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <FaPaypal className="h-8 w-8 text-[#00457C]" />
                                        </div>
                                        <CardTitle>PayPal</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Seamless PayPal integration for global payment processing
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={450}>
                                <Card className="border-yellow-200 dark:border-yellow-800/40 hover:shadow-md transition-all duration-300 hover:border-yellow-300 dark:hover:border-yellow-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <FaAmazon className="h-8 w-8 text-[#FF9900]" />
                                        </div>
                                        <CardTitle>Amazon</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Amazon marketplace integration and synchronization
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        </div>

                        <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
                            <FadeIn delay={500}>
                                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiSquarespace className="h-8 w-8 text-[#000000]" />
                                        </div>
                                        <CardTitle>Squarespace</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Beautiful templates with integrated e-commerce capabilities
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={550}>
                                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiShopify className="h-8 w-8 text-[#5E8E3E]" />
                                        </div>
                                        <CardTitle>Shopify Plus</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Enterprise-grade solutions for high-volume merchants
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={600}>
                                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                                            <SiShopware className="h-8 w-8 text-[#189EFF]" />
                                        </div>
                                        <CardTitle>Shopware</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Flexible open-source platform with advanced features
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
                                        icon: <FaShopify className="h-5 w-5 text-[#7AB55C]" />,
                                        title: "Shopify",
                                        description: "Custom Shopify stores with unique themes and functionality",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiWoocommerce className="h-5 w-5 text-[#96588A]" />,
                                        title: "WooCommerce",
                                        description: "WordPress-based stores with unlimited customization options",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiMagento className="h-5 w-5 text-[#F26322]" />,
                                        title: "Magento",
                                        description: "Enterprise-level solutions for large-scale e-commerce businesses",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiBigcommerce className="h-5 w-5 text-[#12EBB9]" />,
                                        title: "BigCommerce",
                                        description: "Scalable SaaS platform with robust features for growing businesses",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <FaWix className="h-5 w-5 text-[#000000]" />,
                                        title: "Wix",
                                        description: "User-friendly platform with drag-and-drop website builder",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <FaStripe className="h-5 w-5 text-[#635BFF]" />,
                                        title: "Stripe",
                                        description: "Custom checkout experiences with Stripe payment integration",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <FaPaypal className="h-5 w-5 text-[#00457C]" />,
                                        title: "PayPal",
                                        description: "Seamless PayPal integration for global payment processing",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <FaAmazon className="h-5 w-5 text-[#FF9900]" />,
                                        title: "Amazon",
                                        description: "Amazon marketplace integration and synchronization",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiSquarespace className="h-5 w-5 text-[#000000]" />,
                                        title: "Squarespace",
                                        description: "Beautiful templates with integrated e-commerce capabilities",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiShopify className="h-5 w-5 text-[#5E8E3E]" />,
                                        title: "Shopify Plus",
                                        description: "Enterprise-grade solutions for high-volume merchants",
                                        link: "/services/websites#platforms",
                                    },
                                    {
                                        icon: <SiShopware className="h-5 w-5 text-[#189EFF]" />,
                                        title: "Shopware",
                                        description: "Flexible open-source platform with advanced features",
                                        link: "/services/websites#platforms",
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
                                    We create tailored e-commerce solutions for businesses across various industries.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Desktop Grid (hidden on mobile) */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8">
                            <FadeIn delay={100}>
                                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                                            <Store className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <CardTitle>Retail & Fashion</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Online stores for clothing, accessories, and specialty retail products with visual-focused designs
                                            and inventory management.
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={150}>
                                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                                            <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <CardTitle>B2B & Wholesale</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Custom B2B portals with bulk ordering, customer-specific pricing, and account management features.
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
                                        <CardTitle>Education & eLearning</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Digital course platforms, membership sites, and educational resource marketplaces with content
                                            delivery systems.
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={250}>
                                <Card className="border-pink-200 dark:border-pink-800/40 hover:shadow-md transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                                            <ShoppingBag className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                                        </div>
                                        <CardTitle>Beauty & Cosmetics</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Elegant, visually-rich websites for beauty brands with product showcases, tutorials, and
                                            subscription options.
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                                            <HeartPulse className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <CardTitle>Health & Wellness</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Wellness product stores with subscription services, educational content, and community features.
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={350}>
                                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                                    <CardHeader className="pb-2">
                                        <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                                            <Utensils className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                                        </div>
                                        <CardTitle>Food & Beverage</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Specialty food shops, meal delivery services, and beverage companies with order management and
                                            delivery integration.
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
                                        icon: <Store className="h-5 w-5 text-blue-600" />,
                                        title: "Retail & Fashion",
                                        description:
                                            "Online stores for clothing, accessories, and specialty retail products with visual-focused designs and inventory management.",
                                        link: "/services/websites#industries",
                                    },
                                    {
                                        icon: <Briefcase className="h-5 w-5 text-green-600" />,
                                        title: "B2B & Wholesale",
                                        description:
                                            "Custom B2B portals with bulk ordering, customer-specific pricing, and account management features.",
                                        link: "/services/websites#industries",
                                    },
                                    {
                                        icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
                                        title: "Education & eLearning",
                                        description:
                                            "Digital course platforms, membership sites, and educational resource marketplaces with content delivery systems.",
                                        link: "/services/websites#industries",
                                    },
                                    {
                                        icon: <ShoppingBag className="h-5 w-5 text-pink-600" />,
                                        title: "Beauty & Cosmetics",
                                        description:
                                            "Elegant, visually-rich websites for beauty brands with product showcases, tutorials, and subscription options.",
                                        link: "/services/websites#industries",
                                    },
                                    {
                                        icon: <HeartPulse className="h-5 w-5 text-cyan-600" />,
                                        title: "Health & Wellness",
                                        description:
                                            "Wellness product stores with subscription services, educational content, and community features.",
                                        link: "/services/websites#industries",
                                    },
                                    {
                                        icon: <Utensils className="h-5 w-5 text-amber-600" />,
                                        title: "Food & Beverage",
                                        description:
                                            "Specialty food shops, meal delivery services, and beverage companies with order management and delivery integration.",
                                        link: "/services/websites#industries",
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Approach</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    We follow a structured, collaborative process to ensure your website meets your business goals and
                                    exceeds your expectations.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 rounded-full"></div>

                            {/* Step 1 */}
                            <FadeIn delay={100}>
                                <div className="relative mb-12">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                                                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                                                    Discovery & Planning
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    We begin with a thorough understanding of your business, target audience, and goals. This
                                                    phase includes competitor analysis, user research, and defining the project scope.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                                            <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                                            <div className="bg-purple-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                                                2
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                                                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                                                    Design & Prototyping
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    We create wireframes and visual designs that align with your brand identity. Interactive
                                                    prototypes allow you to experience the user flow before development begins.
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
                                                <h3 className="text-xl font-semibold mb-2 text-cyan-600 dark:text-cyan-400">Development</h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    Our developers bring the designs to life using modern technologies and best practices. We
                                                    focus on creating clean, efficient code that's easy to maintain and scale.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                                            <div className="bg-cyan-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                                            <div className="bg-pink-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                                                4
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                                                <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                                                    Testing & Quality Assurance
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    Rigorous testing across devices and browsers ensures your website functions flawlessly. We
                                                    check for performance, accessibility, and security issues.
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
                                                <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">
                                                    Launch & Ongoing Support
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    We handle the deployment process and provide training on how to manage your website. Our
                                                    ongoing support ensures your site continues to perform optimally.
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
                <section className="py-16 md:py-24" id="advantages">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Webliano Advantage</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    What sets our website development services apart from the competition
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
                                            Conversion-Focused Design
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 pl-16">
                                        We don't just create beautiful websites; we design experiences that convert visitors into customers.
                                        Every element is strategically placed to guide users toward your business goals.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-500 text-white rounded-full p-3 mr-4">
                                            <CheckCircle className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                                            Future-Proof Technology
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 pl-16">
                                        We build with scalability in mind, using modern frameworks and technologies that can grow with your
                                        business. Our websites are designed to adapt to changing market needs and technological
                                        advancements.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-teal-200 dark:border-teal-800/40 h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-teal-500 text-white rounded-full p-3 mr-4">
                                            <CheckCircle className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300">
                                            Integrated Marketing Approach
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 pl-16">
                                        Our websites are built with marketing in mind, incorporating SEO best practices, analytics tracking,
                                        and conversion optimization from the ground up, not as afterthoughts.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={400}>
                                <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-rose-200 dark:border-rose-800/40 h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-rose-500 text-white rounded-full p-3 mr-4">
                                            <CheckCircle className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300">Dedicated Support Team</h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 pl-16">
                                        Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to
                                        ensure your website continues to perform at its best and evolve with your business.
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
                                        title: "Conversion-Focused Design",
                                        description:
                                            "We don't just create beautiful websites; we design experiences that convert visitors into customers. Every element is strategically placed to guide users toward your business goals.",
                                        link: "/services/websites#advantages",
                                    },
                                    {
                                        icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
                                        title: "Future-Proof Technology",
                                        description:
                                            "We build with scalability in mind, using modern frameworks and technologies that can grow with your business. Our websites are designed to adapt to changing market needs and technological advancements.",
                                        link: "/services/websites#advantages",
                                    },
                                    {
                                        icon: <CheckCircle className="h-5 w-5 text-teal-600" />,
                                        title: "Integrated Marketing Approach",
                                        description:
                                            "Our websites are built with marketing in mind, incorporating SEO best practices, analytics tracking, and conversion optimization from the ground up, not as afterthoughts.",
                                        link: "/services/websites#advantages",
                                    },
                                    {
                                        icon: <CheckCircle className="h-5 w-5 text-rose-600" />,
                                        title: "Dedicated Support Team",
                                        description:
                                            "Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to ensure your website continues to perform at its best and evolve with your business.",
                                        link: "/services/websites#advantages",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50" id="technologies">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    We leverage the latest technologies to build fast, secure, and scalable websites that meet your
                                    business needs.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                            <FadeIn delay={100}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <FaReact className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">React</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={150}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <SiNextdotjs className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">Next.js</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <SiTailwindcss className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">Tailwind CSS</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={250}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <FaNodeJs className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">Node.js</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <SiShopify className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">Shopify</h3>
                                </div>
                            </FadeIn>

                            <FadeIn delay={350}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/40 rounded-full flex items-center justify-center mb-3">
                                        <FaWordpress className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold">WordPress</h3>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-24" id="faq">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Get answers to common questions about our website development services
                                </p>
                            </div>
                        </FadeIn>

                        <div className="max-w-3xl mx-auto space-y-6">
                            <FadeIn delay={100}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/40 overflow-hidden">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1" className="border-none">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-blue-100/50 dark:bg-blue-800/20 text-blue-800 dark:text-blue-200 font-medium">
                                                <span className="text-left">How long does it take to build a website?</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    The timeline for website development varies based on complexity and scope. A basic e-commerce
                                                    site typically takes 4-6 weeks, while more complex projects with custom functionality may take
                                                    8-12 weeks. During our initial consultation, we'll provide a detailed timeline based on your
                                                    specific requirements.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </FadeIn>

                            <FadeIn delay={150}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/40 overflow-hidden">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-2" className="border-none">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-blue-100/50 dark:bg-blue-800/20 text-blue-800 dark:text-blue-200 font-medium">
                                                <span className="text-left">How much input do I have in the design process?</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    We believe in a collaborative approach. You'll have significant input throughout the design
                                                    process, from initial concepts to final implementation. We'll present design options, gather
                                                    your feedback, and make revisions until you're completely satisfied with the result.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/40 overflow-hidden">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-3" className="border-none">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-blue-100/50 dark:bg-blue-800/20 text-blue-800 dark:text-blue-200 font-medium">
                                                <span className="text-left">Will my website be mobile-friendly?</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    All our websites are built with a mobile-first approach, ensuring they look and function
                                                    perfectly on all devices, from smartphones to desktops. We rigorously test on multiple screen
                                                    sizes and devices to guarantee a seamless experience for all users.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </FadeIn>

                            <FadeIn delay={250}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/40 overflow-hidden">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-4" className="border-none">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-blue-100/50 dark:bg-blue-800/20 text-blue-800 dark:text-blue-200 font-medium">
                                                <span className="text-left">Can I update the website myself after it's built?</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    Yes, we design our websites with user-friendly content management systems that allow you to
                                                    easily update content, add products, and manage your site. We provide comprehensive training
                                                    and documentation so you can confidently make changes as needed. For more complex updates, our
                                                    support team is always available to assist.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/40 overflow-hidden">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-5" className="border-none">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-blue-100/50 dark:bg-blue-800/20 text-blue-800 dark:text-blue-200 font-medium">
                                                <span className="text-left">What ongoing support do you provide?</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    We offer various support packages to meet your needs, including regular maintenance, security
                                                    updates, performance optimization, and content updates. Our dedicated support team is
                                                    available to address any issues that arise and ensure your website continues to perform
                                                    optimally.
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
                <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <FadeIn>
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-blue-100 dark:border-blue-800/40">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                        Let's discuss how our website development services can help elevate your e-commerce business to new
                                        heights.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/contact">
                                            <Button
                                                size="lg"
                                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                                            >
                                                Schedule a consultation
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="/services">
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
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

