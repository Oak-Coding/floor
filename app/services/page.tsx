import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ruler, Home, Building, Clock, CheckCircle, Star, ArrowRight, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Ruler className="h-12 w-12 text-primary" />,
      title: "Floor Plan Drawing",
      description: "Professional floor plan creation from scratch with precise measurements and detailed layouts.",
      price: "Starting at $99",
      deliveryTime: "24-48 hours",
      features: [
        "2D Floor Plans with accurate measurements",
        "Room labels and dimensions",
        "Furniture layout suggestions",
        "Multiple format delivery (PDF, DWG, PNG)",
        "Unlimited revisions",
        "Commercial use rights",
      ],
      popular: false,
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Floor Plan Redrawing",
      description:
        "Transform existing sketches, hand-drawn plans, or outdated designs into professional digital floor plans.",
      price: "Starting at $79",
      deliveryTime: "12-24 hours",
      features: [
        "Digital conversion of existing plans",
        "Scale correction and standardization",
        "Enhanced details and clarity",
        "Modern design standards compliance",
        "Quality improvement guarantee",
        "Fast turnaround time",
      ],
      popular: true,
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Architectural Design",
      description:
        "Complete architectural design services including 3D renderings, elevations, and construction details.",
      price: "Starting at $299",
      deliveryTime: "3-7 days",
      features: [
        "3D architectural renderings",
        "Elevation and section views",
        "Construction detail drawings",
        "Material specifications",
        "Design consultation included",
        "Professional presentation package",
      ],
      popular: false,
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with unlimited revisions",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Licensed architects and designers with years of experience",
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "5-Star Service",
      description: "Consistently rated 5 stars by our satisfied customers",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Design Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            From simple floor plans to complete architectural designs, we provide comprehensive design solutions
            tailored to your specific needs and requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              500+ Projects Completed
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              98% Client Satisfaction
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              Licensed Professionals
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative bg-card hover:shadow-xl transition-all duration-300 ${service.popular ? "ring-2 ring-accent" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/options/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button
                      className={`w-full ${service.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose FloorPlan Pro?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine expertise, technology, and dedication to deliver exceptional results that exceed your
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join hundreds of satisfied customers who have transformed their spaces with our professional design
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/options">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Browse Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
