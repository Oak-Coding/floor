import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  Lightbulb,
  Cog,
  Truck,
  Trophy,
  Clock,
  Users,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ProcessPage() {
  const processSteps = [
    {
      title: "Consultation",
      icon: <MessageSquare className="h-8 w-8 text-primary-foreground" />,
      description: "We start with a detailed consultation to understand your vision, requirements, and project goals.",
      details: [
        "Initial project discussion",
        "Requirements gathering",
        "Budget and timeline planning",
        "Site analysis (if applicable)",
        "Style and preference review",
      ],
      duration: "30-60 minutes",
    },
    {
      title: "Concept Design",
      icon: <Lightbulb className="h-8 w-8 text-primary-foreground" />,
      description: "Our team creates initial design concepts and layouts based on your specifications and feedback.",
      details: [
        "Initial sketches and layouts",
        "Space planning and flow analysis",
        "Design concept presentation",
        "Client feedback incorporation",
        "Concept refinement",
      ],
      duration: "1-3 days",
    },
    {
      title: "Development",
      icon: <Cog className="h-8 w-8 text-primary-foreground" />,
      description: "We develop detailed drawings, 3D renderings, and technical specifications for your project.",
      details: [
        "Detailed floor plan creation",
        "3D modeling and rendering",
        "Technical specifications",
        "Material and finish selection",
        "Construction documentation",
      ],
      duration: "2-7 days",
    },
    {
      title: "Delivery",
      icon: <Truck className="h-8 w-8 text-primary-foreground" />,
      description: "Final delivery of all design documents, revisions, and ongoing support for your project.",
      details: [
        "Final design delivery",
        "Multiple format exports",
        "Revision implementation",
        "Quality assurance check",
        "Ongoing project support",
      ],
      duration: "1-2 days",
    },
  ]

  const timeline = [
    { phase: "Project Start", description: "Initial consultation and requirements gathering" },
    { phase: "Design Phase", description: "Concept development and client feedback" },
    { phase: "Development Phase", description: "Detailed drawings and 3D visualization" },
    { phase: "Final Delivery", description: "Complete project delivery and support" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Design Process</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            From initial consultation to final delivery, we follow a proven 4-step process that ensures exceptional
            results and complete client satisfaction.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-around">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-accent mr-2" />
              <span className="w-auto">Typical timeline: 5-14 days</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-accent mr-2" />
              <span>Dedicated project team</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              <span>Quality guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Circles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Visualization */}
          <div className="relative mb-20">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex items-center relative justify-between">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-primary/20 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mx-0"></div>
                      <div className="relative z-10">{step.icon}</div>
                    </div>

                    {index < processSteps.length - 1 && (
                      <div className="absolute top-10 left-32 w-64 flex justify-center z-0">
                        <svg
                          className="h-12 text-primary/60 w-44"
                          viewBox="0 0 256 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 24 L232 24 M224 16 L232 24 L224 32"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    {index === processSteps.length - 1 && (
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Trophy className="h-6 w-6 text-accent-foreground" />
                      </div>
                    )}

                    
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-primary/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                    <div className="relative z-10">{step.icon}</div>
                    {index === processSteps.length - 1 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <Trophy className="h-4 w-4 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center w-full absolute left-10 top-24">
                      <svg
                        className="h-12 w-12 text-primary/60"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 8 L24 32 M16 24 L24 32 L32 24"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span>Duration: {step.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Project Timeline</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Here's what you can expect during your project journey with us.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-primary rounded-full mr-6 relative z-10 justify-around items-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.phase}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's begin with a consultation to discuss your vision and requirements. Our team is ready to bring your
            ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/options">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
