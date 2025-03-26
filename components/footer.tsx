import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-2xl block mb-4">
              Webliano
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Elevating e-commerce businesses with personalized digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/websites"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Personalized Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Strategic SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-analysis"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services/media-editing"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Photo & Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Webliano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

