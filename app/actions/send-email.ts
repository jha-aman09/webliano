"use server"

import { Resend } from "resend"
import { z } from "zod"

// Create a schema for email validation
const emailFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      budget: (formData.get("budget") as string) || "Not specified",
      timeline: (formData.get("timeline") as string) || "Not specified",
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = emailFormSchema.parse(rawFormData)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain in production
      to: ["info@webliano.com"], // Replace with your email
      subject: `New Contact Form Submission: ${validatedData.service}`,
      reply_to: validatedData.email,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Service: ${validatedData.service}
        Budget: ${validatedData.budget}
        Timeline: ${validatedData.timeline}
        
        Message:
        ${validatedData.message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email. Please try again." }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data. Please check your inputs." }
    }
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
