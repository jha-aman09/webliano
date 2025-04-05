import Link from "next/link"
import {
  ArrowRight,
  ImageIcon,
  CheckCircle,
  Scissors,
  Film,
  Camera,
  Layers,
  PenTool,
  Briefcase,
  ShoppingBag,
  Palette,
  Smartphone,
} from "lucide-react"
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects, SiCanva, SiFigma, SiBlender } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicePageSwiper } from "@/components/service-page-swiper"
import { VideoEditingMockup } from "@/components/video-editing-mockup"

export default function MediaEditingServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-purple-50 dark:bg-purple-900/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="bg-purple-100 dark:bg-purple-800/40 text-purple-600 dark:text-purple-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    Media Production
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                    Professional Media Editing Services
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Elevate your visual content with expert photo and video editing that showcases your products in the
                    best possible light.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto transition-all duration-300 hover:scale-105"
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
                    <VideoEditingMockup />
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
                    <div className="bg-purple-100 dark:bg-purple-800/40 rounded-full p-2 sm:p-3 md:p-4">
                      <Film className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-600 dark:text-purple-400" />
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Comprehensive Media Editing Solutions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Our professional editing services enhance your visual content to captivate your audience and drive
                  engagement across all platforms.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="bg-purple-500 text-white rounded-full p-3 w-fit mb-6">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    Product Photography
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Professional editing to make your product images stand out with perfect lighting, color correction,
                    and background removal.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Background removal & replacement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Color correction & enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Retouching & refinement</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="bg-blue-500 text-white rounded-full p-3 w-fit mb-6">
                    <Film className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Video Production</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Compelling video content that showcases your products in action with professional editing and
                    effects.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Product demonstration videos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Motion graphics & animations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Color grading & effects</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-pink-800/40 h-full">
                  <div className="bg-pink-500 text-white rounded-full p-3 w-fit mb-6">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Social Media Content</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Platform-optimized visual content that drives engagement and conversions across all social channels.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Platform-specific formats</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Carousel & story content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Engagement-focused design</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-8">
              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="bg-amber-500 text-white rounded-full p-3 w-fit mb-6">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">
                    Graphic Design & Branding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Cohesive visual assets that strengthen your brand identity and create a consistent look across all
                    platforms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Product packaging design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Marketing materials & banners</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Logo & brand asset creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Visual identity development</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-800/40 h-full">
                  <div className="bg-green-500 text-white rounded-full p-3 w-fit mb-6">
                    <Scissors className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
                    Advanced Editing & Compositing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Complex visual transformations that create stunning, attention-grabbing content for your most
                    important campaigns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Photo compositing & manipulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Special effects & CGI integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">3D product visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">Advanced retouching techniques</span>
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
                    icon: <ImageIcon className="h-5 w-5 text-purple-600" />,
                    title: "Product Photography",
                    description:
                      "Professional editing to make your product images stand out with perfect lighting, color correction, and background removal.",
                    link: "/services/media-editing#features",
                  },
                  {
                    icon: <Film className="h-5 w-5 text-blue-600" />,
                    title: "Video Production",
                    description:
                      "Compelling video content that showcases your products in action with professional editing and effects.",
                    link: "/services/media-editing#features",
                  },
                  {
                    icon: <Smartphone className="h-5 w-5 text-pink-600" />,
                    title: "Social Media Content",
                    description:
                      "Platform-optimized visual content that drives engagement and conversions across all social channels.",
                    link: "/services/media-editing#features",
                  },
                  {
                    icon: <Palette className="h-5 w-5 text-amber-600" />,
                    title: "Graphic Design & Branding",
                    description:
                      "Cohesive visual assets that strengthen your brand identity and create a consistent look across all platforms.",
                    link: "/services/media-editing#features",
                  },
                  {
                    icon: <Scissors className="h-5 w-5 text-green-600" />,
                    title: "Advanced Editing & Compositing",
                    description:
                      "Complex visual transformations that create stunning, attention-grabbing content for your most important campaigns.",
                    link: "/services/media-editing#features",
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Professional Tools We Master</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We leverage industry-standard software and technologies to deliver exceptional visual content for your
                  business.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              <FadeIn delay={100}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiAdobephotoshop className="h-8 w-8 text-[#31A8FF]" />
                    </div>
                    <CardTitle>Adobe Photoshop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Professional photo editing, retouching, and compositing for stunning product imagery
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={150}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiAdobepremierepro className="h-8 w-8 text-[#9999FF]" />
                    </div>
                    <CardTitle>Adobe Premiere Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Professional video editing and production for compelling product demonstrations
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-orange-200 dark:border-orange-800/40 hover:shadow-md transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiAdobeaftereffects className="h-8 w-8 text-[#9999FF]" />
                    </div>
                    <CardTitle>After Effects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Motion graphics, visual effects, and animations that bring your products to life
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiCanva className="h-8 w-8 text-[#00C4CC]" />
                    </div>
                    <CardTitle>Canva</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Quick, effective designs for social media and marketing materials
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
                      <SiFigma className="h-8 w-8 text-[#F24E1E]" />
                    </div>
                    <CardTitle>Figma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Collaborative design for web assets, UI elements, and marketing materials
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-blue-200 dark:border-blue-800/40 hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <SiBlender className="h-8 w-8 text-[#F5792A]" />
                    </div>
                    <CardTitle>Blender</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      3D modeling and rendering for product visualization and animations
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
                    icon: <SiAdobephotoshop className="h-5 w-5 text-[#31A8FF]" />,
                    title: "Adobe Photoshop",
                    description: "Professional photo editing, retouching, and compositing for stunning product imagery",
                    link: "/services/media-editing#tools",
                  },
                  {
                    icon: <SiAdobepremierepro className="h-5 w-5 text-[#9999FF]" />,
                    title: "Adobe Premiere Pro",
                    description: "Professional video editing and production for compelling product demonstrations",
                    link: "/services/media-editing#tools",
                  },
                  {
                    icon: <SiAdobeaftereffects className="h-5 w-5 text-[#9999FF]" />,
                    title: "After Effects",
                    description: "Motion graphics, visual effects, and animations that bring your products to life",
                    link: "/services/media-editing#tools",
                  },
                  {
                    icon: <SiCanva className="h-5 w-5 text-[#00C4CC]" />,
                    title: "Canva",
                    description: "Quick, effective designs for social media and marketing materials",
                    link: "/services/media-editing#tools",
                  },
                  {
                    icon: <SiFigma className="h-5 w-5 text-[#F24E1E]" />,
                    title: "Figma",
                    description: "Collaborative design for web assets, UI elements, and marketing materials",
                    link: "/services/media-editing#tools",
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
                  We provide tailored media editing solutions for businesses across various industries.
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-purple-200 dark:border-purple-800/40 hover:shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <ShoppingBag className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Fashion & Apparel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      High-quality product photography, lookbook creation, and lifestyle imagery for fashion brands.
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
                    <CardTitle>Beauty & Cosmetics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Stunning product imagery, before-and-after transformations, and ingredient visualization for
                      beauty brands.
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
                      Lifestyle photography, product staging, and interior visualization for home goods and decor
                      brands.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={250}>
                <Card className="border-amber-200 dark:border-amber-800/40 hover:shadow-md transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Camera className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle>Food & Beverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Mouth-watering food photography, packaging design, and promotional content for culinary brands.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-green-200 dark:border-green-800/40 hover:shadow-md transition-all duration-300 hover:border-green-300 dark:hover:border-green-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <PenTool className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle>Technology & Electronics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Clean, professional product imagery, feature demonstrations, and technical visualizations for tech
                      products.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={350}>
                <Card className="border-pink-200 dark:border-pink-800/40 hover:shadow-md transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-700/60 h-full">
                  <CardHeader className="pb-2">
                    <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                      <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <CardTitle>Arts & Crafts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Detailed product photography, process videos, and tutorial content for handmade and craft
                      businesses.
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
                    icon: <ShoppingBag className="h-5 w-5 text-purple-600" />,
                    title: "Fashion & Apparel",
                    description:
                      "High-quality product photography, lookbook creation, and lifestyle imagery for fashion brands.",
                    link: "/services/media-editing#industries",
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
                    title: "Beauty & Cosmetics",
                    description:
                      "Stunning product imagery, before-and-after transformations, and ingredient visualization for beauty brands.",
                    link: "/services/media-editing#industries",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-purple-600" />,
                    title: "Home & Lifestyle",
                    description:
                      "Lifestyle photography, product staging, and interior visualization for home goods and decor brands.",
                    link: "/services/media-editing#industries",
                  },
                  {
                    icon: <Camera className="h-5 w-5 text-amber-600" />,
                    title: "Food & Beverage",
                    description:
                      "Mouth-watering food photography, packaging design, and promotional content for culinary brands.",
                    link: "/services/media-editing#industries",
                  },
                  {
                    icon: <PenTool className="h-5 w-5 text-green-600" />,
                    title: "Technology & Electronics",
                    description:
                      "Clean, professional product imagery, feature demonstrations, and technical visualizations for tech products.",
                    link: "/services/media-editing#industries",
                  },
                  {
                    icon: <Palette className="h-5 w-5 text-pink-600" />,
                    title: "Arts & Crafts",
                    description:
                      "Detailed product photography, process videos, and tutorial content for handmade and craft businesses.",
                    link: "/services/media-editing#industries",
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Our Media Production Approach</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  We follow a systematic, collaborative process to transform your visual content into compelling assets
                  that drive engagement and sales.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400 rounded-full"></div>

              {/* Step 1 */}
              <FadeIn delay={100}>
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0 flex justify-end">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 md:max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                          Creative Consultation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We begin by understanding your brand, target audience, and visual goals. This phase includes
                          reviewing your existing assets, discussing your vision, and defining the project scope.
                        </p>
                      </div>
                    </div>
                    <div className="md:mx-auto flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-purple-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-lg">
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
                          Concept Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We create detailed concepts and storyboards for your approval. This ensures alignment on the
                          creative direction before production begins, saving time and resources.
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
                          Production & Editing
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Our expert team executes the creative vision using professional tools and techniques. This
                          includes photo retouching, video editing, animation, and graphic design as needed.
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
                          Review & Refinement
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We present drafts for your feedback and make revisions as needed. Our collaborative approach
                          ensures the final product meets your expectations and achieves your goals.
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
                          Delivery & Implementation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We deliver final assets in all required formats and provide guidance on implementation. Our
                          support continues as you deploy your new visual content across channels.
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
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">The Webliano Media Advantage</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  What sets our media editing services apart from the competition
                </p>
              </div>
            </FadeIn>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">E-Commerce Expertise</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We specialize in visual content specifically for e-commerce, understanding what drives engagement
                    and conversions in online shopping environments.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Brand-Focused Approach</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We create visual content that strengthens your brand identity, ensuring consistency and recognition
                    across all customer touchpoints.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-pink-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                      Multi-Channel Optimization
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We optimize your visual content for multiple platforms and devices, ensuring your products look
                    great whether viewed on your website, social media, or marketplace listings.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800/40 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 text-white rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300">
                      Conversion-Focused Design
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-16">
                    We create visual content with conversion in mind, highlighting product features and benefits in ways
                    that drive purchasing decisions.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Swiper (visible on mobile only) */}
            <div className="md:hidden">
              <ServicePageSwiper
                services={[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-purple-600" />,
                    title: "E-Commerce Expertise",
                    description:
                      "We specialize in visual content specifically for e-commerce, understanding what drives engagement and conversions in online shopping environments.",
                    link: "/services/media-editing#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
                    title: "Brand-Focused Approach",
                    description:
                      "We create visual content that strengthens your brand identity, ensuring consistency and recognition across all customer touchpoints.",
                    link: "/services/media-editing#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-pink-600" />,
                    title: "Multi-Channel Optimization",
                    description:
                      "We optimize your visual content for multiple platforms and devices, ensuring your products look great whether viewed on your website, social media, or marketplace listings.",
                    link: "/services/media-editing#advantages",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-amber-600" />,
                    title: "Conversion-Focused Design",
                    description:
                      "We create visual content with conversion in mind, highlighting product features and benefits in ways that drive purchasing decisions.",
                    link: "/services/media-editing#advantages",
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
                  Get answers to common questions about our media editing services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <FadeIn delay={100}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl shadow-sm border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-purple-100/50 dark:bg-purple-800/20 text-purple-800 dark:text-purple-200 font-medium">
                        <span className="text-left">What file formats do you work with?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          We work with all standard image formats (JPG, PNG, TIFF, PSD, etc.) and video formats (MP4,
                          MOV, AVI, etc.). We can also handle raw camera files, vector graphics, and 3D model files. If
                          you have a specific format requirement, just let us know, and we'll accommodate it.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl shadow-sm border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-purple-100/50 dark:bg-purple-800/20 text-purple-800 dark:text-purple-200 font-medium">
                        <span className="text-left">How quickly can you deliver edited content?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Our turnaround times vary based on the complexity and volume of the project. Simple photo
                          edits can be completed in 24-48 hours, while more complex video projects might take 3-7 days.
                          For large-scale projects, we'll provide a detailed timeline during our initial consultation.
                          We also offer rush services for time-sensitive needs.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl shadow-sm border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-purple-100/50 dark:bg-purple-800/20 text-purple-800 dark:text-purple-200 font-medium">
                        <span className="text-left">Do I need to provide high-quality original content?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          While higher quality source material yields better results, we can work with a wide range of
                          content quality. Our experts can enhance and improve even lower-quality images and videos to a
                          certain extent. For best results, we recommend providing the highest quality originals
                          available. We can also arrange professional photography or videography services if needed.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl shadow-sm border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-purple-100/50 dark:bg-purple-800/20 text-purple-800 dark:text-purple-200 font-medium">
                        <span className="text-left">How many revisions are included?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Our standard packages include two rounds of revisions to ensure your complete satisfaction.
                          Additional revision rounds can be arranged at a nominal fee. We work closely with you
                          throughout the process to minimize the need for extensive revisions by understanding your
                          requirements clearly from the start.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl shadow-sm border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline bg-purple-100/50 dark:bg-purple-800/20 text-purple-800 dark:text-purple-200 font-medium">
                        <span className="text-left">Do you offer bulk pricing for large projects?</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Yes, we offer volume discounts for larger projects. Whether you need hundreds of product
                          photos edited or multiple videos produced, we can create a custom package that offers both
                          quality and value. Contact us with your project details for a tailored quote.
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
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-purple-100 dark:border-purple-800/40">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-6">Ready to Transform Your Visual Content?</h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Let's discuss how our media editing services can help showcase your products in the best possible
                    light and drive more sales.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Schedule a consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
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

