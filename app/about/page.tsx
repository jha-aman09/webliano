import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                About Webliano
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                The story behind our mission to transform e-commerce experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Webliano was founded in 2020 with a clear vision: to help e-commerce businesses thrive in an
                  increasingly competitive digital landscape. What began as a small team of passionate web designers and
                  marketers has grown into a comprehensive service provider for online businesses.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our founders noticed a gap in the market – many e-commerce businesses were struggling with generic,
                  ineffective websites and disjointed marketing strategies. They set out to create a service that would
                  provide truly personalized, data-driven solutions that drive real business growth.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, Webliano serves clients across the globe, helping them transform their online presence and
                  achieve remarkable growth through our integrated suite of services.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="The Webliano team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg">
                  <p className="font-medium text-sm">Founded in 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="bg-muted/30 dark:bg-muted/10 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We're driven by a set of core principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We place our clients at the center of everything we do. Your success is our success, and we're
                  committed to understanding your unique needs and goals to deliver solutions that truly work for you.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Data-Driven Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in making decisions based on solid data and analytics. This approach ensures that our
                  strategies are effective, measurable, and continuously improving to deliver the best possible results.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Continuous Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The digital landscape is constantly evolving, and so are we. We're committed to staying at the
                  forefront of industry trends and technologies to provide cutting-edge solutions for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A diverse group of passionate experts dedicated to your success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Founder & CEO</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  With over 15 years of experience in digital marketing and e-commerce.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Michael Chen</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Creative Director</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Award-winning designer with a passion for creating memorable brand experiences.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Elena Rodriguez</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">SEO Specialist</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Data-driven SEO expert with a track record of boosting organic traffic and conversions.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">David Kim</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Lead Developer</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Full-stack developer with expertise in creating seamless e-commerce experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Webliano?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We bring a unique combination of expertise, personalization, and results-driven strategies to help
                  your e-commerce business thrive in today's competitive landscape.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Integrated solutions</span> – All your e-commerce needs under one
                      roof
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Personalized approach</span> – Tailored strategies based on your
                      unique business
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Data-driven methodology</span> – Decisions backed by analytics and
                      research
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Proven results</span> – Track record of driving growth for our
                      clients
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Ongoing support</span> – We're partners in your long-term success
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Webliano team working"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your E-Commerce Presence?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Let's discuss how Webliano can help elevate your online business to new heights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Contact us today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Explore our services
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

