"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to complete a floor plan?",
    answer:
      "Typically, a basic floor plan takes 3-5 business days, while complex architectural designs can take 1-2 weeks. Rush delivery options are available for urgent projects.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "We need your space dimensions, any existing plans or sketches, specific requirements, preferred style, and budget range. The more details you provide, the better we can serve you.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes! All our packages include revisions. Basic plans include 2 revisions, Standard includes 3, and Premium includes unlimited revisions until you're satisfied.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "We work with clients worldwide. We're experienced in various building codes and can adapt our designs to meet local requirements.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "We provide files in multiple formats including PDF, DWG (AutoCAD), and high-resolution images. 3D renderings are available in JPG and PNG formats.",
  },
  {
    question: "Do you offer 3D visualization?",
    answer:
      "Yes! Our Premium packages include 3D renderings and virtual walkthroughs. We can also provide VR-compatible files for immersive experiences.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our architectural design services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 transform transition-transform duration-300">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-muted-foreground leading-relaxed animate-fade-in">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
