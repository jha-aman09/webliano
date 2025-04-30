import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Shield, Cookie, RotateCcw } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal Information | Webliano",
  description: "Legal information, policies and terms for Webliano services",
}

export default function LegalPage() {
  return (
    <main className="container mx-auto py-32 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-6 text-center">Legal Information</h1>
        <p className="text-base text-muted-foreground text-center mb-12">
          Our commitment to transparency and compliance with applicable laws and regulations.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/legal/terms-of-service" className="group">
            <div className="h-full p-6 rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Terms of Service</h2>
              </div>
              <p className="text-muted-foreground mb-4">The rules and guidelines for using our website and services.</p>
              <div className="flex items-center text-primary font-medium">
                Read Terms
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/legal/privacy-policy" className="group">
            <div className="h-full p-6 rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Privacy Policy</h2>
              </div>
              <p className="text-muted-foreground mb-4">How we collect, use, and protect your personal information.</p>
              <div className="flex items-center text-primary font-medium">
                Read Policy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/legal/cookie-policy" className="group">
            <div className="h-full p-6 rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Cookie className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Cookie Policy</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Information about how we use cookies and similar technologies.
              </p>
              <div className="flex items-center text-primary font-medium">
                Read Policy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/legal/refund-policy" className="group">
            <div className="h-full p-6 rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-md hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Refund Policy</h2>
              </div>
              <p className="text-muted-foreground mb-4">Our policies regarding refunds and cancellations.</p>
              <div className="flex items-center text-primary font-medium">
                Read Policy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 rounded-lg border border-border bg-muted/50">
          <h2 className="text-xl font-semibold mb-4">Need Legal Assistance?</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about our legal policies, please don't hesitate to contact our legal
            team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
