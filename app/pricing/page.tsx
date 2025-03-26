import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Flexible plans designed to scale with your e-commerce business.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Choose the plan that fits your needs or contact us for a custom solution.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-background rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-medium mb-1">Starter</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Perfect for small businesses</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$999</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Basic website design (5 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Basic SEO setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Monthly performance report</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">10 product photo edits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Email support</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Get started
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Growth Plan */}
              <div className="bg-background rounded-xl border-2 border-primary shadow-sm overflow-hidden flex flex-col relative">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
                <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-medium mb-1">Growth</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Ideal for growing businesses</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$2,499</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Advanced website design (10 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Comprehensive SEO strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Bi-weekly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Data analysis dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">25 product photo edits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">2 product videos per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Priority email & phone support</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/contact">
                    <Button className="w-full">Get started</Button>
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-background rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-medium mb-1">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">For established businesses</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Fully custom website development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Enterprise-level SEO & content strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Advanced data analysis & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Unlimited media editing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">24/7 premium support</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 dark:bg-muted/10 py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Have questions? We're here to help.</p>
            </div>
            <div className="grid gap-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I customize these plans to my specific needs?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While our standard plans cover most needs, we understand that every business is unique. Contact us to
                  discuss your specific requirements, and we'll create a tailored solution for you.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Is there a contract or commitment period?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our standard plans are month-to-month with no long-term commitment required. However, we offer
                  discounts for annual commitments. Enterprise plans typically include custom terms based on project
                  scope.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How quickly will I see results?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While some improvements like website design and media editing have immediate visual impact, other
                  services like SEO typically show meaningful results within 3-6 months. We provide regular performance
                  reports so you can track progress throughout our partnership.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Do you offer any guarantees?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to delivering high-quality work and measurable results. While specific outcomes can
                  vary based on factors like industry competition and market conditions, we set clear expectations and
                  work transparently toward defined goals. If you're not satisfied, we'll work with you to make it
                  right.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can change your plan at any time to accommodate your business needs. Simply contact your
                  account manager, and we'll help you transition to a plan that better fits your current requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 border border-primary/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our team is ready to help you find the perfect solution for your e-commerce business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Contact us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn more about us
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

