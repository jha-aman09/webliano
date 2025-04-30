import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Webliano",
  description: "Terms and conditions for using Webliano services",
}

export default function TermsOfServicePage() {
  return (
    <main className="container max-w-5xl mx-auto py-32 md:py-28 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl tracking-tight font-bold mb-8 text-center">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last Updated: April 30, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Webliano. These Terms of Service ("Terms") govern your access to and use of Webliano's website,
            products, and services. By accessing or using our services, you agree to be bound by these Terms and our
            Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Using Our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as
            permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms
            or policies or if we are investigating suspected misconduct.
          </p>
          <p className="mt-4">
            Using our Services does not give you ownership of any intellectual property rights in our Services or the
            content you access. You may not use content from our Services unless you obtain permission from its owner or
            are otherwise permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Your Content</h2>
          <p>
            Our Services allow you to upload, submit, store, send or receive content. You retain ownership of any
            intellectual property rights that you hold in that content.
          </p>
          <p className="mt-4">
            When you upload, submit, store, send or receive content to or through our Services, you give Webliano a
            worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish,
            publicly perform, publicly display and distribute such content. The rights you grant in this license are for
            the limited purpose of operating, promoting, and improving our Services, and to develop new ones.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Service Modifications</h2>
          <p>
            Webliano is constantly changing and improving our Services. We may add or remove functionalities or
            features, and we may suspend or stop a Service altogether.
          </p>
          <p className="mt-4">
            You can stop using our Services at any time, although we'll be sorry to see you go. Webliano may also stop
            providing Services to you, or add or create new limits to our Services at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Warranties and Disclaimers</h2>
          <p>
            We provide our Services using a commercially reasonable level of skill and care and we hope that you will
            enjoy using them. But there are certain things that we don't promise about our Services.
          </p>
          <p className="mt-4">
            OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER WEBLIANO NOR ITS SUPPLIERS OR
            DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON'T MAKE ANY COMMITMENTS ABOUT
            THE CONTENT WITHIN THE SERVICES, THE SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY, AVAILABILITY,
            OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE SERVICES "AS IS".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liability for our Services</h2>
          <p>
            WHEN PERMITTED BY LAW, WEBLIANO, AND WEBLIANO'S SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST
            PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
            DAMAGES.
          </p>
          <p className="mt-4">
            TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF WEBLIANO, AND ITS SUPPLIERS AND DISTRIBUTORS, FOR ANY
            CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE
            THE SERVICES.
          </p>
          <p className="mt-4">
            IN ALL CASES, WEBLIANO, AND ITS SUPPLIERS AND DISTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE THAT
            IS NOT REASONABLY FORESEEABLE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
          <p>
            We may modify these Terms or any additional terms that apply to a Service to, for example, reflect changes
            to the law or changes to our Services. You should look at the Terms regularly. We'll post notice of
            modifications to these Terms on this page.
          </p>
          <p className="mt-4">
            If you do not agree to the modified Terms for a Service, you should discontinue your use of that Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            Email: legal@webliano.com
            <br />
            Address: Webliano Headquarters, 123 Tech Park, Bangalore, India
          </p>
        </section>
      </div>
    </main>
  )
}
