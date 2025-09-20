import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Ruler, Home, Building } from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  const services = [
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Floor Plan Drawing",
      description:
        "Create detailed and accurate floor plans from scratch based on your specifications and requirements.",
      features: ["2D Floor Plans", "Detailed Measurements", "Room Labels", "Furniture Layout"],
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Floor Plan Redrawing",
      description: "Transform existing sketches or outdated plans into professional, modern floor plan designs.",
      features: ["Plan Modernization", "Scale Correction", "Digital Conversion", "Enhanced Details"],
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Architectural Design",
      description: "Complete architectural design services including elevations, sections, and 3D visualizations.",
      features: ["3D Renderings", "Elevation Views", "Construction Details", "Design Consultation"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From simple floor plans to complete architectural designs, we deliver professional results that exceed
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
