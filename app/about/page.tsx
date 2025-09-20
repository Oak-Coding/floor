import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Heart, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Architect",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      specialties: ["Residential Design", "Commercial Spaces", "3D Visualization"],
    },
    {
      name: "Michael Chen",
      role: "Senior Designer",
      experience: "8+ years",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
      specialties: ["Floor Planning", "Space Optimization", "Technical Drawing"],
    },
    {
      name: "Emily Rodriguez",
      role: "3D Visualization Specialist",
      experience: "6+ years",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
      specialties: ["3D Rendering", "Virtual Tours", "Photorealistic Visualization"],
    },
    {
      name: "David Thompson",
      role: "Project Manager",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300&text=David+Thompson",
      specialties: ["Project Coordination", "Client Relations", "Quality Assurance"],
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Precision & Accuracy",
      description: "Every measurement, every detail matters. We ensure absolute precision in all our designs.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Client-Centered Approach",
      description: "Your vision is our priority. We listen, understand, and deliver exactly what you need.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with unlimited revisions and a 100% satisfaction guarantee.",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "Time is valuable. We deliver professional results quickly without compromising quality.",
    },
  ]

  const stats = [
    { number: "1250+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const achievements = [
    "Licensed Architectural Professionals",
    "AIA (American Institute of Architects) Members",
    "NCARB Certified Architects",
    "Award-Winning Design Team",
    "Featured in Architectural Digest",
    "Top-Rated Service Provider",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                About Tahura Architects
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                We are a team of passionate architects and designers dedicated to transforming spaces through innovative
                floor plan design and architectural visualization. With over 15 years of combined experience, we've
                helped hundreds of clients across the globe bring their vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/options">
                  <Button variant="outline" size="lg">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Team+at+Work"
                alt="Tahura Architects team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Founded with a vision to make professional architectural design accessible to everyone.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Tahura Architects was born from a simple observation: too many people struggle to visualize their space
              and communicate their design ideas effectively. Whether you're a homeowner planning a renovation, a real
              estate professional showcasing properties, or a business owner designing a new space, you deserve access
              to professional-quality floor plans and architectural designs.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              What started as a small team of architects helping local clients has grown into a comprehensive design
              service serving customers across the globe. We've completed over 1250 projects, from simple floor plan
              conversions to complex architectural visualizations, always maintaining our commitment to quality, speed,
              and client satisfaction.
            </p>

            <p className="text-lg leading-relaxed">
              Today, we combine traditional architectural expertise with modern technology to deliver exceptional
              results quickly and affordably. Our team of licensed architects and designers brings decades of experience
              to every project, ensuring that your vision becomes reality with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              These core principles guide everything we do and ensure exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-card-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our talented team of architects and designers brings expertise, creativity, and dedication to every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg text-card-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-accent mr-2" />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Recognized Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join hundreds of satisfied clients who have transformed their spaces with our professional design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/reviews">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Read Client Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
