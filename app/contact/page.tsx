"use client"

import { Label } from "@/components/ui/label"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  CheckCircle,
  Loader2,
  ArrowRight,
  MessageSquare,
  Clock,
  Calendar,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FadeIn } from "@/components/animations"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { sendContactEmail } from "../actions/send-email"

const formSchema = z.object({
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

export default function ContactPageComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedTab, setSelectedTab] = useState("message")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Create FormData object to pass to server action
      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })

      // Call the server action to send email
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormSubmitted(true)
        form.reset()
      } else {
        setErrorMessage(result.error || "Failed to send your message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark" />
          </div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-28 md:py-32 relative z-10">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                <div>
                  <Badge className="bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-300 rounded-full px-4 py-2 w-fit mb-6 font-medium text-sm">
                    Let's Connect
                  </Badge>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-8">
                    Let's bring your <span className="text-primary">vision</span> to life
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                    Whether you have a specific project in mind or just want to explore possibilities, we're here to
                    help transform your ideas into reality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={scrollToForm} className="group">
                      Start a Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/services">View Services</Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full relative">
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                  <div className="w-full relative" />
                  <div className="aspect-[16/9] relative bg-background border border-border rounded-2xl shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500" />
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base md:text-lg">Quick Response</h3>
                          <p className="text-xs md:text-xs text-muted-foreground">
                            We typically respond within 24 hours
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">W</span>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                            <p className="text-xs md:text-sm">Hi there! How can we help with your project?</p>
                            <span className="text-xs text-muted-foreground mt-1 block">Webliano Team • 10:30 AM</span>
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                            <p className="text-xs md:text-sm">
                              I need a custom website for my business with e-commerce functionality.
                            </p>
                            <span className="text-xs text-muted-foreground mt-1 block">You • 10:32 AM</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                            <span className="text-gray-600 text-sm font-medium">Y</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">W</span>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                            <p className="text-xs md:text-sm">
                              Great! We'd love to help. Let's schedule a consultation to discuss your requirements.
                            </p>
                            <span className="text-xs text-muted-foreground mt-1 block">Webliano Team • 10:35 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Contact Options Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">How Can We Help You?</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Choose the option that works best for you. We're available through multiple channels.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out our contact form and we'll get back to you quickly</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedTab("message")
                        scrollToForm()
                      }}
                    >
                      Contact Us
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Schedule a Call</CardTitle>
                    <CardDescription>Book a consultation call with one of our experts</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedTab("schedule")
                        scrollToForm()
                      }}
                    >
                      Book a Call
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Email Us Directly</CardTitle>
                    <CardDescription>Send us an email and we'll respond within 24 hours</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="mailto:info@webliano.com">Email Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10" ref={formRef}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <FadeIn direction="right" className="lg:col-span-2">
                <div className="sticky top-24">
                  <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-8">Let's Talk</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          <Link href="mailto:info@webliano.com" className="hover:text-primary transition-colors">
                            info@webliano.com
                          </Link>
                          <br />
                          <Link href="mailto:support@webliano.com" className="hover:text-primary transition-colors">
                            support@webliano.com
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          <Link href="tel:+15551234567" className="hover:text-primary transition-colors">
                            +1 (555) 123-4567
                          </Link>
                          <br />
                          <span className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-6 mb-8 shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Response Time</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex justify-between items-center">
                        <span>Email Response</span>
                        <Badge variant="outline">Within 24 hours</Badge>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Project Quote</span>
                        <Badge variant="outline">1-3 business days</Badge>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Support Tickets</span>
                        <Badge variant="outline">Same day</Badge>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg tracking-tight mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="w-10 h-10 bg-background hover:bg-muted rounded-full flex items-center justify-center border border-border transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-background hover:bg-muted rounded-full flex items-center justify-center border border-border transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-background hover:bg-muted rounded-full flex items-center justify-center border border-border transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-background hover:bg-muted rounded-full flex items-center justify-center border border-border transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-background hover:bg-muted rounded-full flex items-center justify-center border border-border transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn direction="left" delay={200} className="lg:col-span-3">
                {formSubmitted ? (
                  <Card className="border-primary/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl text-primary">
                        <CheckCircle className="mr-2 h-6 w-6" /> Message Sent Successfully
                      </CardTitle>
                      <CardDescription>Thank you for reaching out to us!</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        We've received your message and will get back to you as soon as possible, usually within 24-48
                        business hours.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        In the meantime, feel free to explore our services or check out our resources for more
                        information.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        className="w-full transition-all duration-300 hover:scale-105"
                      >
                        Send Another Message
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card className="border-primary/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">Get in Touch</CardTitle>
                      <CardDescription>
                        Tell us about your project and we'll get back to you with a custom solution.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {errorMessage && (
                        <Alert variant="destructive" className="mb-6">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      )}

                      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="message">Send a Message</TabsTrigger>
                          <TabsTrigger value="schedule">Schedule a Call</TabsTrigger>
                        </TabsList>
                        <TabsContent value="message">
                          <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Name</FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Your name"
                                          {...field}
                                          className="transition-all duration-300 focus:border-primary"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Your email address"
                                          {...field}
                                          className="transition-all duration-300 focus:border-primary"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                  control={form.control}
                                  name="service"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Service of Interest</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger className="transition-all duration-300 focus:border-primary">
                                            <SelectValue placeholder="Select a service" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="websites">Personalized Websites</SelectItem>
                                          <SelectItem value="seo">Strategic SEO</SelectItem>
                                          <SelectItem value="data-analysis">Data Analysis</SelectItem>
                                          <SelectItem value="media-editing">Photo & Video Editing</SelectItem>
                                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                          <SelectItem value="integrations">Custom Integrations</SelectItem>
                                          <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="budget"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Budget Range (Optional)</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger className="transition-all duration-300 focus:border-primary">
                                            <SelectValue placeholder="Select budget range" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                                          <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                                          <SelectItem value="over-50k">Over ₹50,000</SelectItem>
                                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                      <Textarea
                                        placeholder="Tell us about your project or inquiry"
                                        className="min-h-[120px] transition-all duration-300 focus:border-primary"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="submit"
                                className="w-full transition-all duration-300 hover:scale-105"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                  </>
                                ) : (
                                  "Send Message"
                                )}
                              </Button>
                            </form>
                          </Form>
                        </TabsContent>
                        <TabsContent value="schedule">
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="schedule-name">Name</Label>
                                <Input id="schedule-name" placeholder="Your name" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="schedule-email">Email</Label>
                                <Input id="schedule-email" placeholder="Your email address" />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="schedule-service">Service of Interest</Label>
                                <Select>
                                  <SelectTrigger id="schedule-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="websites">Personalized Websites</SelectItem>
                                    <SelectItem value="seo">Strategic SEO</SelectItem>
                                    <SelectItem value="data-analysis">Data Analysis</SelectItem>
                                    <SelectItem value="media-editing">Photo & Video Editing</SelectItem>
                                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                    <SelectItem value="integrations">Custom Integrations</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="schedule-date">Preferred Date</Label>
                                <Input id="schedule-date" type="date" />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="schedule-time">Preferred Time</Label>
                                <Select>
                                  <SelectTrigger id="schedule-time">
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="morning">Morning (9AM - 12PM PST)</SelectItem>
                                    <SelectItem value="afternoon">Afternoon (12PM - 3PM PST)</SelectItem>
                                    <SelectItem value="evening">Evening (3PM - 6PM PST)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="schedule-timezone">Your Timezone</Label>
                                <Select>
                                  <SelectTrigger id="schedule-timezone">
                                    <SelectValue placeholder="Select your timezone" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pst">Pacific Time (PST/PDT)</SelectItem>
                                    <SelectItem value="mst">Mountain Time (MST/MDT)</SelectItem>
                                    <SelectItem value="cst">Central Time (CST/CDT)</SelectItem>
                                    <SelectItem value="est">Eastern Time (EST/EDT)</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="schedule-notes">Additional Notes</Label>
                              <Textarea
                                id="schedule-notes"
                                placeholder="Tell us a bit about what you'd like to discuss"
                                className="min-h-[120px]"
                              />
                            </div>
                            <Button className="w-full transition-all duration-300 hover:scale-105">
                              Schedule Call
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                )}
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl tracking-tight font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-200">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">How long does a typical project take?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        Project timelines vary based on scope and complexity. A basic website might take 4-6 weeks,
                        while a complex web application could take 3-6 months. We'll provide a detailed timeline during
                        our initial consultation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          </svg>
                        </div>
                        <CardTitle className="text-xl">Do you offer maintenance services?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        Yes, we offer ongoing maintenance and support packages to keep your website secure, up-to-date,
                        and performing optimally. Our maintenance plans can be customized to fit your specific needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4l3 3" />
                          </svg>
                        </div>
                        <CardTitle className="text-xl">How do you determine project pricing?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        Our pricing is based on project scope, complexity, timeline, and resource requirements. We
                        provide detailed quotes after understanding your specific needs during our initial consultation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <CardTitle className="text-xl">What is your payment structure?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        We typically require a 50% deposit to begin work, with the remaining balance due upon project
                        completion. For larger projects, we may establish milestone-based payments. We accept credit
                        cards, bank transfers, and PayPal.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" x2="22" y1="12" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                        <CardTitle className="text-xl">Do you work with clients internationally?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        Yes, we work with clients worldwide. Our team is experienced in collaborating remotely, and we
                        use various tools to ensure smooth communication regardless of time zones or geographical
                        locations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-r from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <CardTitle className="text-xl">What happens after my project is completed?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        After project completion, we provide training on how to use your new website or application. We
                        also offer ongoing support and maintenance services to ensure your digital assets continue to
                        perform optimally.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">Still have questions? We're here to help!</p>
                <Button size="lg" onClick={scrollToForm} className="group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}
