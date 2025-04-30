import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Bell, Bookmark, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Webliano",
  description: "Insights, tips, and news from the Webliano team",
}

export default function BlogPage() {
  return (
    <main className="container mx-auto py-32 md:py-28 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Webliano Blog
        </h1>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl blur-xl opacity-70"></div>
          <div className="relative bg-background border border-border rounded-xl p-8 md:p-12 shadow-lg">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're working on creating valuable content to help you succeed in the digital world. Our blog will feature
              insights, tutorials, case studies, and industry trends.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Bell className="w-5 h-5 text-primary" />
                <span>Subscribe for Updates</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Bookmark className="w-5 h-5 text-primary" />
                <span>Bookmark This Page</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Share2 className="w-5 h-5 text-primary" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold mb-3">Topics We'll Cover</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="p-2 rounded bg-muted text-sm">Web Development</div>
              <div className="p-2 rounded bg-muted text-sm">UI/UX Design</div>
              <div className="p-2 rounded bg-muted text-sm">SEO Strategies</div>
              <div className="p-2 rounded bg-muted text-sm">Digital Marketing</div>
              <div className="p-2 rounded bg-muted text-sm">E-commerce</div>
              <div className="p-2 rounded bg-muted text-sm">Analytics</div>
              <div className="p-2 rounded bg-muted text-sm">Case Studies</div>
              <div className="p-2 rounded bg-muted text-sm">Industry News</div>
            </div>
          </div>


          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold mb-3">Have a Topic Suggestion?</h3>
            <p className="text-muted-foreground mb-4">
              We'd love to hear what you want to learn about. Share your ideas with us!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
