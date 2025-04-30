import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Webliano",
  description: "Cookie usage policy for Webliano website and services",
}

export default function CookiePolicyPage() {
  return (
    <main className="container max-w-5xl mx-auto py-32 md:py-28 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-8 text-center">Cookie Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last Updated: April 30, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how Webliano ("we", "us", or "our") uses cookies and similar technologies on our
            website. This policy is designed to help you understand what cookies are, how we use them, and the choices
            you have regarding their use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used
            to make websites work more efficiently and provide information to the website owners. Cookies can be
            "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while
            session cookies are deleted as soon as you close your web browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <p>We use different types of cookies for various purposes:</p>

          <h3 className="text-xl font-medium mt-4 mb-2">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as
            security, network management, and account access. You cannot opt out of these cookies.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">Performance Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. They help us improve the functionality of our website.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">Functionality Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization. They may be set by
            us or by third-party providers whose services we have added to our pages.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">Targeting/Advertising Cookies</h3>
          <p>
            These cookies are used to build a profile of your interests and show you relevant advertisements on other
            sites. They do not directly store personal information but are based on uniquely identifying your browser
            and internet device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
            deliver advertisements, and so on. These cookies may include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Analytics cookies (e.g., Google Analytics)</li>
            <li>Social media cookies (e.g., Facebook, Twitter, LinkedIn)</li>
            <li>Advertising cookies (e.g., Google AdSense)</li>
            <li>Functionality cookies (e.g., embedded services)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. How to Control Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
            ability of websites to set cookies, you may worsen your overall user experience and/or lose access to
            certain functions.
          </p>
          <p className="mt-4">
            To opt out of being tracked by Google Analytics across all websites, visit:{" "}
            <a href="http://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">
              http://tools.google.com/dlpage/gaoptout
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookie Consent</h2>
          <p>
            When you first visit our website, you will be shown a cookie banner requesting your consent to set
            non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie
            Settings" link in the footer of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
            business practices. Any changes will become effective when we post the revised policy on our website. We
            encourage you to periodically review this page for the latest information on our cookie practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
          <p className="mt-2">
            Email: privacy@webliano.com
            <br />
            Address: Webliano Headquarters, 123 Tech Park, Bangalore, India
          </p>
        </section>
      </div>
    </main>
  )
}
