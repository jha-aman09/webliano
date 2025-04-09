import Link from "next/link"
import { ArrowRight, CheckCircle, Layers, Palette, PenTool, Users, Smartphone, Briefcase, ShoppingBag, Compass, Zap, LineChart, Layout } from 'lucide-react'
import { SiAdobexd, SiSketch, SiFigma, SiInvision, SiMiro, SiFramer } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"
import { UIDesignMockup } from "@/components/ui-design-mockup"

export default function UIUXDesignServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-indigo-50 dark:bg-indigo-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-indigo-100 dark:bg-indigo-800/40 text-indigo-600 dark:text-indigo-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    User Interface / User Experience
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    UI/UX Design Services for E-Commerce
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Create intuitive, engaging, and conversion-focused digital experiences that delight your customers
                    and drive business growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto transition-all duration-300 hover:scale-105"
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
                    <div className="w-full h-full overflow-hidden">
                      <UIDesignMockup />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                    <div className="bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2 sm:p-3 md:p-4">
                      <Layout className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-indigo-600 dark:text-indigo-400" />
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Comprehensive UI/UX Design Solutions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Our expert design team creates intuitive, engaging, and conversion-focused digital experiences that
                  delight your customers and drive business growth.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800/40 h-full">
                  <div className="bg-indigo-500 text-white rounded-full p-3 w-fit mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
                    User Research & Strategy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Deep understanding of your users' needs, behaviors, and pain points to create targeted design
                    solutions that drive engagement and conversions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">User interviews & surveys</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Persona development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Customer journey mapping</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="bg-blue-500 text-white rounded-full p-3 w-fit mb-6">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                    Wireframing & Prototyping
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Iterative design process that allows for rapid testing and refinement before development, saving
                    time and resources.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Low & high-fidelity wireframes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Interactive prototypes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">User flow optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                  <div className="bg-cyan-500 text-white rounded-full p-3 w-fit mb-6">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300">Visual Design</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Stunning, on-brand visual designs that create emotional connections with users while maintaining
                    usability and accessibility.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">UI design systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Brand-aligned aesthetics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Responsive design</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-200 dark:border-emerald-800/40 h-full">
                  <div className="bg-emerald-500 text-white rounded-full p-3 w-fit mb-6">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">
                    Usability Testing & Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Data-driven design decisions based on real user feedback and behavior analysis to continuously
                    improve user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">A/B testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Heatmap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">User testing sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Conversion rate optimization</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800/40 h-full">
                  <div className="bg-indigo-500 text-white rounded-full p-3 w-fit mb-6">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
                    E-Commerce Specific Design
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Specialized design solutions for e-commerce that focus on product discovery, cart optimization, and
                    checkout conversion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Product page optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Checkout flow design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Search & filtering systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Mobile shopping experiences</span>
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
                    icon: <Users className="h-5 w-5 text-indigo-600" />,
                    title: "User Research & Strategy",
                    description:
                      "Deep understanding of your users' needs, behaviors, and pain points to create targeted design solutions.",
                    link: "/services/ui-ux-design#features",
                    bgClass: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30",
                    textClass: "text-indigo-700 dark:text-indigo-300",
                    borderClass: "border border-indigo-200 dark:border-indigo-800/40",
                    iconBgClass: "bg-indigo-100 dark:bg-indigo-800/40",
                  },
                  {
                    icon: <PenTool className="h-5 w-5 text-blue-600" />,
                    title: "Wireframing & Prototyping",
                    description:
                      "Iterative design process that allows for rapid testing and refinement before development.",
                    link: "/services/ui-ux-design#features",
                    bgClass: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30",
                    textClass: "text-blue-700 dark:text-blue-300",
                    borderClass: "border border-blue-200 dark:border-blue-800/40",
                    iconBgClass: "bg-blue-100 dark:bg-blue-800/40",
                  },
                  {
                    icon: <Palette className="h-5 w-5 text-cyan-600" />,
                    title: "Visual Design",
                    description:
                      "Stunning, on-brand visual designs that create emotional connections with users while maintaining usability.",
                    link: "/services/ui-ux-design#features",
                    bgClass: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30",
                    textClass: "text-cyan-700 dark:text-cyan-300",
                    borderClass: "border border-cyan-200 dark:border-cyan-800/40",
                    iconBgClass: "bg-cyan-100 dark:bg-cyan-800/40",
                  },
                  {
                    icon: <LineChart className="h-5 w-5 text-emerald-600" />,
                    title: "Usability Testing & Optimization",
                    description: "Data-driven design decisions based on real user feedback and behavior analysis.",
                    link: "/services/ui-ux-design#features",
                    bgClass:
                      "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30",
                    textClass: "text-emerald-700 dark:text-emerald-300",
                    borderClass: "border border-emerald-200 dark:border-emerald-800/40",
                    iconBgClass: "bg-emerald-100 dark:bg-emerald-800/40",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-indigo-600" />,
                    title: "E-Commerce Specific Design",
                    description:
                      "Specialized design solutions for e-commerce that focus on product discovery and checkout conversion.",
                    link: "/services/ui-ux-design#features",
                    bgClass:
                      "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30",
                    textClass: "text-indigo-700 dark:text-indigo-300",
                    borderClass: "border border-indigo-200 dark:border-indigo-800/40",
                    iconBgClass: "bg-indigo-100 dark:bg-indigo-800/40",
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Professional Design Tools We Master</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-leading design software and technologies to create exceptional digital
                  experiences for your business.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              <FadeIn delay={100}>
                <Card className="border-teal-200 dark:border-teal-800/40 hover:shadow-md transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiFigma className="h-8 w-8 text-[#F24E1E]" />
                    </div>
                    <CardTitle>Figma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Collaborative interface design tool for creating interactive prototypes and design systems
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiSketch className="h-8 w-8 text-[#F7B500]" />
                    </div>
                    <CardTitle>Sketch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Vector-based design tool for creating detailed user interfaces and digital experiences
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiAdobexd className="h-8 w-8 text-[#FF61F6]" />
                    </div>
                    <CardTitle>Adobe XD</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Comprehensive design tool for creating wireframes, prototypes, and interactive experiences
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiInvision className="h-8 w-8 text-[#FF3366]" />
                    </div>
                    <CardTitle>InVision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Digital product design platform for creating interactive prototypes and gathering feedback
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-8 mt-8">
              <FadeIn delay={300}>
                <Card className="border-emerald-200 dark:border-emerald-800/40 hover:shadow-md transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiMiro className="h-8 w-8 text-[#FFD02F]" />
                    </div>
                    <CardTitle>Miro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Collaborative whiteboard platform for user journey mapping and design thinking workshops
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiFramer className="h-8 w-8 text-[#0055FF]" />
                    </div>
                    <CardTitle>Framer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Interactive design and prototyping tool for creating advanced animations and interactions
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
                    icon: <SiFigma className="h-5 w-5 text-[#F24E1E]" />,
                    title: "Figma",
                    description:
                      "Collaborative interface design tool for creating interactive prototypes and design systems",
                    link: "/services/ui-ux-design#tools",
                  },
                  {
                    icon: <SiSketch className="h-5 w-5 text-[#F7B500]" />,
                    title: "Sketch",
                    description:
                      "Vector-based design tool for creating detailed user interfaces and digital experiences",
                    link: "/services/ui-ux-design#tools",
                  },
                  {
                    icon: <SiAdobexd className="h-5 w-5 text-[#FF61F6]" />,
                    title: "Adobe XD",
                    description:
                      "Comprehensive design tool for creating wireframes, prototypes, and interactive experiences",
                    link: "/services/ui-ux-design#tools",
                  },
                  {
                    icon: <SiInvision className="h-5 w-5 text-[#FF3366]" />,
                    title: "InVision",
                    description:
                      "Digital product design platform for creating interactive prototypes and gathering feedback",
                    link: "/services/ui-ux-design#tools",
                  },
                  {
                    icon: <SiMiro className="h-5 w-5 text-[#FFD02F]" />,
                    title: "Miro",
                    description:
                      "Collaborative whiteboard platform for user journey mapping and design thinking workshops",
                    link: "/services/ui-ux-design#tools",
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Industries We Serve</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We provide tailored UI/UX design solutions for businesses across various industries.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-teal-200 dark:border-teal-800/40 hover:shadow-md transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <ShoppingBag className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle>Fashion & Apparel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Visually stunning and conversion-focused e-commerce experiences for fashion and apparel brands.
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
                    <CardTitle>B2B & SaaS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Intuitive interfaces and dashboards for complex business applications and software platforms.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Home & Lifestyle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Immersive shopping experiences that showcase home goods and lifestyle products in context.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-emerald-200 dark:border-emerald-800/40 hover:shadow-md transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Compass className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <CardTitle>Health & Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      User-centered designs for health and wellness products that build trust and encourage engagement.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-cyan-200 dark:border-cyan-800/40 hover:shadow-md transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <PenTool className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle>Technology & Electronics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Feature-focused interfaces that highlight technical specifications and product capabilities.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-indigo-200 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <CardTitle>Mobile Commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Mobile-first shopping experiences optimized for on-the-go browsing and purchasing.
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
                    icon: <ShoppingBag className="h-5 w-5 text-teal-600" />,
                    title: "Fashion & Apparel",
                    description:
                      "Visually stunning and conversion-focused e-commerce experiences for fashion and apparel brands.",
                    link: "/services/ui-ux-design#industries",
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
                    title: "B2B & SaaS",
                    description:
                      "Intuitive interfaces and dashboards for complex business applications and software platforms.",
                    link: "/services/ui-ux-design#industries",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-purple-600" />,
                    title: "Home & Lifestyle",
                    description:
                      "Immersive shopping experiences that showcase home goods and lifestyle products in context.",
                    link: "/services/ui-ux-design#industries",
                  },
                  {
                    icon: <Compass className="h-5 w-5 text-emerald-600" />,
                    title: "Health & Wellness",
                    description:
                      "User-centered designs for health and wellness products that build trust and encourage engagement.",
                    link: "/services/ui-ux-design#industries",
                  },
                  {
                    icon: <PenTool className="h-5 w-5 text-cyan-600" />,
                    title: "Technology & Electronics",
                    description:
                      "Feature-focused interfaces that highlight technical specifications and product capabilities.",
                    link: "/services/ui-ux-design#industries",
                  },
                  {
                    icon: <Smartphone className="h-5 w-5 text-indigo-600" />,
                    title: "Mobile Commerce",
                    description: "Mobile-first shopping experiences optimized for on-the-go browsing and purchasing.",
                    link: "/services/ui-ux-design#industries",
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Our UI/UX Design Approach</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We follow a systematic, user-centered process to create digital experiences that delight your
                  customers and drive business results.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-400 rounded-full"></div>

              {/* Step 1 */}
              <FadeIn delay={100}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                          Discovery & Research
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We begin by understanding your business goals, target audience, and competitive landscape.
                          This phase includes user interviews, market research, and defining key performance indicators.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-indigo-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                      <div className="bg-pink-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                          Strategy & Planning
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We develop a comprehensive design strategy based on research insights. This includes creating
                          user personas, journey maps, and information architecture to guide the design process.
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
                        <h3 className="text-xl font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
                          Wireframing & Prototyping
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We create low and high-fidelity wireframes to visualize the user interface structure.
                          Interactive prototypes allow for early testing and validation of user flows and interactions.
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
                      <div className="bg-emerald-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 order-3 md:order-3 mt-4 md:mt-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
                          Visual Design
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We create polished visual designs that align with your brand identity. This includes
                          developing UI components, color schemes, typography, and imagery that enhance the user
                          experience.
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
                        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                          Testing & Iteration
                        </h3>
                        <p className="tracking-tight text-gray-600 dark:text-gray-300">
                          We conduct usability testing to validate design decisions and identify areas for improvement.
                          Iterative refinements ensure the final product meets user needs and business objectives.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">The Webliano UI/UX Advantage</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  What sets our UI/UX design services apart from the competition
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
                    <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300">E-Commerce Expertise</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We specialize in e-commerce UX/UI design, understanding the unique challenges and opportunities in
                    online retail and what drives purchasing decisions.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Data-Driven Design</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We base design decisions on user research, analytics, and testing rather than assumptions, ensuring
                    solutions that address real user needs and business goals.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-200 dark:border-cyan-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
                      Conversion-Focused Design
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We design with conversion in mind, creating interfaces that guide users through the purchase journey
                    and minimize friction points that lead to abandonment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-200 dark:border-emerald-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
                      Accessibility-First Approach
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We design inclusive experiences that work for all users, including those with disabilities, ensuring
                    your digital products reach the widest possible audience.
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
                    title: "E-Commerce Expertise",
                    description:
                      "We specialize in e-commerce UX/UI design, understanding the unique challenges and opportunities in online retail and what drives purchasing decisions.",
                    link: "/services/ui-ux-design#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    title: "Data-Driven Design",
                    description:
                      "We base design decisions on user research, analytics, and testing rather than assumptions, ensuring solutions that address real user needs and business goals.",
                    link: "/services/ui-ux-design#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-cyan-600" />,
                    title: "Conversion-Focused Design",
                    description:
                      "We design with conversion in mind, creating interfaces that guide users through the purchase journey and minimize friction points that lead to abandonment.",
                    link: "/services/ui-ux-design#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
                    title: "Accessibility-First Approach",
                    description:
                      "We design inclusive experiences that work for all users, including those with disabilities, ensuring your digital products reach the widest possible audience.",
                    link: "/services/ui-ux-design#advantages",
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Get answers to common questions about our UI/UX design services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-indigo-100/50 dark:bg-indigo-800/20 text-indigo-800 dark:text-indigo-200 font-medium">
                        <span className="text-left">What's the difference between UI and UX design?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          UI (User Interface) design focuses on the visual elements users interact with—buttons, icons,
                          spacing, typography, color schemes, and responsive design. UX (User Experience) design is
                          broader, encompassing the entire user journey and how users interact with a product, including
                          research, testing, and information architecture. While UI is about how the product looks, UX
                          is about how it works. Our approach integrates both disciplines for cohesive, effective
                          digital experiences.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-indigo-100/50 dark:bg-indigo-800/20 text-indigo-800 dark:text-indigo-200 font-medium">
                        <span className="text-left">How long does a typical UI/UX design project take?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Project timelines vary based on scope and complexity. A simple website redesign might take 4-6
                          weeks, while a comprehensive e-commerce platform could take 8-12 weeks or more. Our process
                          includes research, wireframing, visual design, prototyping, and testing phases. We provide
                          detailed timelines during our initial consultation and keep you informed throughout the
                          project with regular milestones and deliverables.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-indigo-100/50 dark:bg-indigo-800/20 text-indigo-800 dark:text-indigo-200 font-medium">
                        <span className="text-left">How do you measure the success of a UI/UX design project?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We measure success through both quantitative and qualitative metrics. Quantitative metrics
                          include conversion rates, bounce rates, time on page, task completion rates, and revenue
                          impact. Qualitative measures include user satisfaction scores, feedback from usability
                          testing, and customer testimonials. We establish key performance indicators (KPIs) at the
                          beginning of each project and track them post-launch to demonstrate ROI and identify
                          opportunities for ongoing optimization.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-indigo-100/50 dark:bg-indigo-800/20 text-indigo-800 dark:text-indigo-200 font-medium">
                        <span className="text-left">Do you provide design systems for developers?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Yes, we create comprehensive design systems that bridge the gap between design and
                          development. Our design systems include component libraries, style guides, interaction
                          patterns, and documentation that help developers implement designs accurately and efficiently.
                          We use tools like Figma and Zeplin to facilitate smooth handoffs and can work directly with
                          your development team to ensure proper implementation of design elements and interactions.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-indigo-100/50 dark:bg-indigo-800/20 text-indigo-800 dark:text-indigo-200 font-medium">
                        <span className="text-left">How do you approach mobile-responsive design?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We take a mobile-first approach to responsive design, starting with the mobile experience and
                          then expanding to larger screens. This ensures optimal usability across all devices. Our
                          process includes creating responsive wireframes and prototypes, designing flexible grid
                          systems, using relative units for sizing, and testing on multiple devices and screen sizes. We
                          also consider touch interactions, loading times, and content prioritization for different
                          viewport sizes to deliver seamless experiences regardless of device.
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
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-indigo-100 dark:border-indigo-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Ready to Transform Your Digital Experience?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our UI/UX design services can help create intuitive, engaging experiences that
                    convert visitors into customers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Schedule a consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:scale-105"
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
