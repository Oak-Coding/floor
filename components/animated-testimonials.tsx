"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "California, USA",
    rating: 5,
    text: "Tahura Architects transformed our vision into reality. The floor plan was exactly what we needed, and the 3D renderings helped us visualize everything perfectly. Highly recommended!",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    location: "New York, USA",
    rating: 5,
    text: "Outstanding work on our restaurant layout. They understood our workflow needs and created an efficient design that maximized our seating capacity while maintaining excellent customer flow.",
    avatar: "/professional-man.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Real Estate Developer",
    location: "Texas, USA",
    rating: 5,
    text: "Professional, fast, and incredibly detailed. We've used their services for multiple projects and they consistently deliver high-quality architectural designs on time.",
    avatar: "/professional-woman-architect.png",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Office Manager",
    location: "Florida, USA",
    rating: 5,
    text: "The office redesign exceeded our expectations. The team created a modern, functional workspace that improved our productivity and employee satisfaction significantly.",
    avatar: "/professional-man-office.jpg",
  },
]

export function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <Card className="glass hover-glow smooth-transition min-h-[300px] flex items-center">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6 animate-bounce-in" />

                <div className="mb-8">
                  <p className="text-lg md:text-xl text-card-foreground leading-relaxed mb-6 animate-fade-in">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex justify-center mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div
                  className="flex items-center justify-center gap-4 animate-fade-in"
                  style={{ animationDelay: "400ms" }}
                >
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarImage src={testimonials[currentIndex].avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h4 className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover-glow"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover-glow"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 scroll-reveal">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-counter" data-target="500">
              0+
            </div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-counter" data-target="98">
              0%
            </div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-counter" data-target="1000">
              0+
            </div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  )
}
