import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Newspaper, Download, Calendar, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Press | Webliano",
  description: "Press releases, media resources, and company news from Webliano",
}

export default function PressPage() {
  return (
    <main className="container mx-auto py-32 md:py-28 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
          Webliano Press
        </h1>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-600/20 rounded-xl blur-xl opacity-70"></div>
          <div className="relative bg-background border border-border rounded-xl p-8 md:p-12 shadow-lg">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our press center is under development. Soon you'll find the latest news, press releases, media kits, and
              resources about Webliano here.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Download className="w-5 h-5 text-primary" />
                <span>Media Kit</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Press Releases</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Globe className="w-5 h-5 text-primary" />
                <span>In The News</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold mb-3">Media Inquiries</h3>
            <p className="text-muted-foreground mb-4">
              For press inquiries, interview requests, or more information about Webliano, please contact our media
              relations team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Media Relations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold mb-3">About Webliano</h3>
            <p className="text-muted-foreground mb-4">
              Webliano is a leading web development and digital services company based in India, specializing in
              creating innovative digital solutions for businesses of all sizes.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
