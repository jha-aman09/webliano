import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, Clock, Calendar, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Webliano",
  description: "Join our team at Webliano and help shape the future of web development",
}

export default function CareersPage() {
  return (
    <main className="container mx-auto py-32 md:py-28 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Careers at Webliano
        </h1>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-xl blur-xl opacity-70"></div>
          <div className="relative bg-background border border-border rounded-xl p-8 md:p-12 shadow-lg">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're preparing to launch our careers page with exciting opportunities to join our growing team. Check
              back soon for job openings!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Clock className="w-5 h-5 text-primary" />
                <span>Launching Soon</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Stay Tuned</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-muted">
                <Mail className="w-5 h-5 text-primary" />
                <span>Get Notified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">


          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold mb-3">Open Application</h3>
            <p className="text-muted-foreground mb-4">
              Don't see a position that matches your skills? Send us your resume anyway!
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
