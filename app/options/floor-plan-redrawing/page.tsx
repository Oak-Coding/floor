import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, CheckCircle, Users, MessageCircle, Home } from "lucide-react"

export default function FloorPlanRedrawingPage() {
  const packages = [
    {
      name: "Basic",
      price: 79,
      delivery: "1 day",
      revisions: "2",
      features: [
        "Digital conversion of existing plan",
        "Scale correction",
        "Basic cleanup & enhancement",
        "PDF delivery",
        "2 revisions included",
      ],
    },
    {
      name: "Standard",
      price: 139,
      delivery: "2 days",
      revisions: "5",
      popular: true,
      features: [
        "Professional redrawing",
        "Enhanced details & clarity",
        "Modern design standards",
        "Multiple formats (PDF, DWG, PNG)",
        "5 revisions included",
        "Color enhancement",
      ],
    },
    {
      name: "Premium",
      price: 219,
      delivery: "3 days",
      revisions: "Unlimited",
      features: [
        "Complete redesign & modernization",
        "Advanced enhancements",
        "All formats + source files",
        "Unlimited revisions",
        "3D preview included",
        "Rush delivery available",
        "Priority support",
      ],
    },
  ]

  const beforeAfter = [
    {
      before: "/placeholder.svg?height=200&width=300&text=Old+Sketch",
      after: "/placeholder.svg?height=200&width=300&text=Professional+Plan",
      title: "Hand Sketch to Professional Plan",
    },
    {
      before: "/placeholder.svg?height=200&width=300&text=Faded+Blueprint",
      after: "/placeholder.svg?height=200&width=300&text=Modern+Design",
      title: "Old Blueprint Modernization",
    },
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
                  <Home className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Floor Plan Redrawing</Badge>
                  <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Professional Floor Plan Redrawing & Conversion
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">5.0</span>
                    <span className="text-muted-foreground">(89 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>300+ orders completed</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  Transform your existing sketches, hand-drawn plans, or outdated blueprints into professional, modern
                  digital floor plans with enhanced clarity and precision.
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="before-after">Before & After</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Perfect for Converting</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Hand-drawn Sketches</h4>
                            <p className="text-sm text-muted-foreground">Rough sketches to professional plans</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Old Blueprints</h4>
                            <p className="text-sm text-muted-foreground">Faded or damaged blueprints</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Photos of Plans</h4>
                            <p className="text-sm text-muted-foreground">Pictures of existing floor plans</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">PDF Scans</h4>
                            <p className="text-sm text-muted-foreground">Low-quality digital files</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="before-after" className="mt-6">
                  <div className="space-y-8">
                    {beforeAfter.map((item, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-medium mb-2 text-muted-foreground">Before</h4>
                              <img
                                src={item.before || "/placeholder.svg"}
                                alt="Before"
                                className="w-full h-48 object-cover rounded-lg border"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium mb-2 text-accent">After</h4>
                              <img
                                src={item.after || "/placeholder.svg"}
                                alt="After"
                                className="w-full h-48 object-cover rounded-lg border"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-medium">Jennifer Martinez</h4>
                            <div className="flex items-center space-x-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">1 week ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          "Amazing transformation! My old hand-drawn sketch was converted into a beautiful, professional
                          floor plan. The quality exceeded my expectations and delivery was super fast."
                        </p>
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
                    <CardDescription>Fast turnaround, professional results</CardDescription>
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
                    <h4 className="font-medium mb-2">Have Questions?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Not sure if your file can be converted? Send it to us for a free assessment.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Get Free Assessment
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
