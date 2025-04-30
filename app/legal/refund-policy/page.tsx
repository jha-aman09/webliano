import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy | Webliano",
  description: "Refund and cancellation policy for Webliano services",
}

export default function RefundPolicyPage() {
  return (
    <main className="container max-w-5xl mx-auto py-32 md:py-28 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-8 text-center">Refund Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last Updated: April 30, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Refund Policy outlines the terms and conditions for refunds and cancellations of Webliano services. We
            strive to ensure complete satisfaction with our services, but we understand that there may be instances
            where a refund is appropriate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility for Refunds</h2>
          <p>Refunds may be issued under the following circumstances:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Service not provided as described</li>
            <li>Technical issues preventing service delivery</li>
            <li>Cancellation of service before work has begun</li>
            <li>Duplicate charges or billing errors</li>
          </ul>
          <p className="mt-4">
            Refund eligibility varies based on the type of service and the time elapsed since purchase:
          </p>
          <h3 className="text-xl font-medium mt-4 mb-2">Website Development Services</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>Full refund if cancelled before project initiation (within 48 hours of payment)</li>
            <li>Partial refund (up to 50%) if cancelled during the planning phase</li>
            <li>No refund once development has begun, unless service is not delivered as agreed</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">Digital Marketing and SEO Services</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>Pro-rated refund for unused service period for subscription-based services</li>
            <li>No refund for one-time services once work has begun</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">UI/UX Design Services</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>Full refund if cancelled before design work begins</li>
            <li>Partial refund based on work completed if cancelled during the design process</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
          <p>To request a refund, please follow these steps:</p>
          <ol className="list-decimal pl-6 mt-2">
            <li>
              Contact our customer support team at refunds@webliano.com with your order details and reason for the
              refund request
            </li>
            <li>Include your order number, date of purchase, and any relevant documentation</li>
            <li>Our team will review your request within 3-5 business days</li>
            <li>If approved, refunds will be processed to the original payment method</li>
          </ol>
          <p className="mt-4">Refund processing times vary depending on your payment method:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Credit/debit cards: 5-10 business days</li>
            <li>Bank transfers: 7-14 business days</li>
            <li>Digital wallets: 3-5 business days</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Non-Refundable Items</h2>
          <p>The following are generally not eligible for refunds:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Services that have been fully delivered and accepted</li>
            <li>Custom development work that has been completed</li>
            <li>Third-party costs (domain registration, hosting fees, plugin licenses) that have been incurred</li>
            <li>Services cancelled after the refund eligibility period</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cancellation Policy</h2>
          <p>For subscription-based services, you may cancel your subscription at any time:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Cancellations made before the next billing cycle will not be charged for the upcoming period</li>
            <li>No partial refunds will be issued for the current billing period</li>
            <li>You will continue to have access to the service until the end of the current billing period</li>
          </ul>
          <p className="mt-4">
            To cancel a subscription, please contact our customer support team at support@webliano.com or through your
            account dashboard.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Dispute Resolution</h2>
          <p>
            If you are not satisfied with our refund decision, we encourage you to contact our customer support team to
            discuss your concerns. We are committed to resolving disputes fairly and amicably.
          </p>
          <p className="mt-4">
            If we cannot reach a resolution through our customer support channels, you may have the right to pursue
            alternative dispute resolution methods as outlined in our Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
            posting on our website. We encourage you to review this policy periodically for any updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Refund Policy, please contact us at:</p>
          <p className="mt-2">
            Email: refunds@webliano.com
            <br />
            Phone: +91 1234567890
            <br />
            Address: Webliano Headquarters, 123 Tech Park, Bangalore, India
          </p>
        </section>
      </div>
    </main>
  )
}
