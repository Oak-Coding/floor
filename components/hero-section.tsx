"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, experience: 0 })

  useEffect(() => {
    setIsVisible(true)

    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const projectsTarget = 1250
      const satisfactionTarget = 98
      const experienceTarget = 15

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          projects: Math.floor(projectsTarget * progress),
          satisfaction: Math.floor(satisfactionTarget * progress),
          experience: Math.floor(experienceTarget * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters({
            projects: projectsTarget,
            satisfaction: satisfactionTarget,
            experience: experienceTarget,
          })
        }
      }, duration / steps)
    }

    const timeout = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          poster="/modern-architectural-interior.png"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/modern-architectural-interior.png"
            alt="Modern interior design"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 animate-fade-in"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Innovative Architectural
          <span
            className={`block text-accent transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {" "}
            Design Solutions
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Transform your vision into reality with Tahura Architects. Expert floor plans, architectural designs, and
          comprehensive building solutions serving clients across the globe.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Animated Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-accent">{counters.projects}+</div>
            <div className="text-gray-300 mt-2">Projects Completed</div>
          </div>
          <div className="hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-accent">{counters.satisfaction}%</div>
            <div className="text-gray-300 mt-2">Client Satisfaction</div>
          </div>
          <div className="hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-accent">{counters.experience}+</div>
            <div className="text-gray-300 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
