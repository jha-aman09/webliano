import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Webliano",
  description: "Privacy policy and data handling practices for Webliano services",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container max-w-5xl mx-auto py-32 md:py-28 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last Updated: April 30, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At Webliano, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services.
          </p>
          <p className="mt-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the site or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, information we obtain automatically when you use our
            services, and information from third-party sources.
          </p>
          <h3 className="text-xl font-medium mt-4 mb-2">Personal Data</h3>
          <p>When you use our services, we may collect the following types of personal data:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Contact information (name, email address, phone number, etc.)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Communication data (inquiries, feedback)</li>
            <li>Usage data (how you interact with our services)</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">Automatically Collected Information</h3>
          <p>
            When you access our website or use our services, we automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage details (pages visited, time spent on pages)</li>
            <li>Location data (based on IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing transactions and sending related information</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Sending technical notices, updates, security alerts, and support messages</li>
            <li>Monitoring and analyzing trends, usage, and activities</li>
            <li>Personalizing and improving your experience</li>
            <li>Marketing and promotional purposes (with your consent)</li>
            <li>Detecting, preventing, and addressing fraud and security issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>With service providers who perform services on our behalf</li>
            <li>With business partners with your consent</li>
            <li>In connection with a business transaction (merger, acquisition, sale)</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate or incomplete data</li>
            <li>Right to erasure (right to be forgotten)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data
            from children. If we become aware that we have collected personal data from a child without verification of
            parental consent, we will take steps to remove that information from our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about how we
            are protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
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
