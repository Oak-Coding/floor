"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EnhancedServicesPreview } from "@/components/enhanced-services-preview"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { AnimatedTestimonials } from "@/components/animated-testimonials"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EnhancedServicesPreview />
      <ProcessSection />
      <WhyChooseUsSection />
      <AnimatedTestimonials />
      <FAQSection />
      <CTASection />
      <Footer />

      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setShowForm(true)}
          className="group bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-2xl border border-slate-600 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="font-medium">Start Project</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </main>
  )
}
