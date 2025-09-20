"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    // Counter animation for statistics
    const animateCounters = () => {
      const counters = document.querySelectorAll(".animate-counter")

      counters.forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-target") || "0")
        const increment = target / 100
        let current = 0

        const updateCounter = () => {
          if (current < target) {
            current += increment
            if (counter.textContent?.includes("%")) {
              counter.textContent = Math.ceil(current) + "%"
            } else if (counter.textContent?.includes("+")) {
              counter.textContent = Math.ceil(current) + "+"
            } else {
              counter.textContent = Math.ceil(current).toString()
            }
            requestAnimationFrame(updateCounter)
          } else {
            if (counter.textContent?.includes("%")) {
              counter.textContent = target + "%"
            } else if (counter.textContent?.includes("+")) {
              counter.textContent = target + "+"
            } else {
              counter.textContent = target.toString()
            }
          }
        }

        updateCounter()
      })
    }

    // Scroll reveal animation
    const revealElements = () => {
      const elements = document.querySelectorAll(".scroll-reveal")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })
    }

    // Parallax effect
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(".parallax")
      const scrolled = window.pageYOffset

      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5
        element.style.transform = `translateY(${rate}px)`
      })
    }

    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains("animate-counter")) {
          animateCounters()
        }
      })
    })

    document.querySelectorAll(".animate-counter").forEach((counter) => {
      observer.observe(counter)
    })

    // Event listeners
    window.addEventListener("scroll", revealElements)
    window.addEventListener("scroll", handleParallax)

    // Initial check
    revealElements()

    return () => {
      window.removeEventListener("scroll", revealElements)
      window.removeEventListener("scroll", handleParallax)
      observer.disconnect()
    }
  }, [])

  return null
}
