"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DraftingCompass as Drafting, Home, Building2, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Drafting,
    title: "Floor Plan Drawing",
    description:
      "Professional 2D floor plans with precise measurements and detailed layouts for residential and commercial spaces.",
    price: "Starting at $299",
    rating: 4.9,
    reviews: 234,
    features: ["2D Floor Plans", "Precise Measurements", "Multiple Revisions", "Fast Delivery"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Floor Plan Redrawing",
    description:
      "Transform existing sketches or outdated plans into modern, accurate digital floor plans with enhanced details.",
    price: "Starting at $199",
    rating: 4.8,
    reviews: 189,
    features: ["Digital Conversion", "Enhanced Details", "Format Updates", "Quality Assurance"],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Complete architectural solutions including 3D renderings, elevations, and comprehensive building design packages.",
    price: "Starting at $599",
    rating: 5.0,
    reviews: 156,
    features: ["3D Renderings", "Complete Packages", "Professional Design", "Consultation Included"],
    gradient: "from-orange-500 to-red-500",
  },
]

export function EnhancedServicesPreview() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transform your architectural vision into reality with our comprehensive design services. From basic floor
            plans to complete architectural solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`transform transition-all duration-700 ${
                  visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full hover-lift hover-glow smooth-transition group relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 smooth-transition`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary smooth-transition">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-semibold">{service.rating}</span>
                      </div>
                      <span>({service.reviews} reviews)</span>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-4 leading-relaxed">{service.description}</CardDescription>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/options/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="w-full btn-interactive group-hover:shadow-lg smooth-transition">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="outline" className="btn-interactive hover-glow bg-transparent">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
