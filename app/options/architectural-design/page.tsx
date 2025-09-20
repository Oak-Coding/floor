import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, CheckCircle, Users, MessageCircle, Building } from "lucide-react"

export default function ArchitecturalDesignPage() {
  const packages = [
    {
      name: "Essential",
      price: 299,
      delivery: "5 days",
      revisions: "3",
      features: [
        "2D Floor Plans + Elevations",
        "Basic 3D renderings (2 views)",
        "Material specifications",
        "PDF delivery package",
        "3 revisions included",
      ],
    },
    {
      name: "Professional",
      price: 599,
      delivery: "7 days",
      revisions: "5",
      popular: true,
      features: [
        "Complete 2D drawings package",
        "High-quality 3D renderings (5 views)",
        "Detailed material & finish specs",
        "Construction details",
        "All formats + source files",
        "5 revisions included",
        "Design consultation call",
      ],
    },
    {
      name: "Premium",
      price: 999,
      delivery: "10 days",
      revisions: "Unlimited",
      features: [
        "Full architectural drawing set",
        "Photorealistic 3D renderings",
        "Virtual walkthrough video",
        "Complete construction documents",
        "Structural considerations",
        "Unlimited revisions",
        "Multiple design consultations",
        "Priority support",
      ],
    },
  ]

  const portfolio3D = [
    { image: "/placeholder.svg?height=200&width=300&text=Modern+House+3D", title: "Modern Family Home" },
    { image: "/placeholder.svg?height=200&width=300&text=Office+Building+3D", title: "Commercial Office" },
    { image: "/placeholder.svg?height=200&width=300&text=Restaurant+Interior+3D", title: "Restaurant Interior" },
    { image: "/placeholder.svg?height=200&width=300&text=Apartment+Complex+3D", title: "Apartment Complex" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Architectural Design</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Complete Architectural Design Services
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(64 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>150+ projects completed</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  Comprehensive architectural design services including 3D renderings, elevations, construction details,
                  and complete design documentation for your project.
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">What's Included</TabsTrigger>
                  <TabsTrigger value="portfolio">3D Portfolio</TabsTrigger>
                  <TabsTrigger value="process">Design Process</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">2D Drawings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Floor plans with dimensions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Elevation views (all sides)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Section drawings</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Construction details</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">3D Visualizations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Photorealistic renderings</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Multiple viewing angles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Interior & exterior views</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">Virtual walkthrough (Premium)</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolio3D.map((item, index) => (
                      <Card key={index} className="overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">3D Architectural Rendering</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="process" className="mt-6">
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Initial Consultation</h4>
                            <p className="text-muted-foreground">
                              We discuss your vision, requirements, and project goals in detail.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Concept Development</h4>
                            <p className="text-muted-foreground">
                              Create initial design concepts and 2D layouts for your review.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">3D Visualization</h4>
                            <p className="text-muted-foreground">
                              Develop detailed 3D renderings and visualizations of the design.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            4
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Final Documentation</h4>
                            <p className="text-muted-foreground">
                              Complete construction documents and final presentation package.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Packages */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Your Package</CardTitle>
                    <CardDescription>Professional architectural design solutions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {packages.map((pkg, index) => (
                      <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-accent" : ""}`}>
                        {pkg.popular && (
                          <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                            Most Popular
                          </Badge>
                        )}
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-semibold text-lg">{pkg.name}</h4>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {pkg.delivery}
                            </div>
                            <div>{pkg.revisions} revisions</div>
                          </div>
                          <ul className="space-y-2 mb-4">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full ${pkg.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
                          >
                            Order Now - ${pkg.price}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-medium mb-2">Custom Project?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Large or complex projects may require custom pricing. Let's discuss your needs.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Request Custom Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
