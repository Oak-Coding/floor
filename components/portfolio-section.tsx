import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "Modern Residential Complex",
      category: "Residential",
      image: "/modern-residential-exterior.png",
      description: "Contemporary 50-unit residential complex with sustainable design features.",
    },
    {
      title: "Corporate Office Tower",
      category: "Commercial",
      image: "/modern-office-glass.png",
      description: "25-story corporate headquarters with innovative workspace design.",
    },
    {
      title: "Luxury Villa Design",
      category: "Residential",
      image: "/luxury-modern-villa-architecture.jpg",
      description: "Custom luxury villa with panoramic views and premium finishes.",
    },
    {
      title: "Educational Campus",
      category: "Institutional",
      image: "/modern-university-campus.png",
      description: "State-of-the-art educational facility with flexible learning spaces.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of innovative architectural designs that showcase our commitment to excellence and
            creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
