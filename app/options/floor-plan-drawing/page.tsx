import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, CheckCircle, Users, MessageCircle, Ruler } from "lucide-react"

export default function FloorPlanDrawingPage() {
  const packages = [
    {
      name: "Basic",
      price: 99,
      delivery: "2 days",
      revisions: "2",
      features: [
        "2D Floor Plan (up to 1,500 sq ft)",
        "Basic room labels",
        "Standard measurements",
        "PDF delivery",
        "2 revisions included",
      ],
    },
    {
      name: "Standard",
      price: 179,
      delivery: "3 days",
      revisions: "5",
      popular: true,
      features: [
        "2D Floor Plan (up to 3,000 sq ft)",
        "Detailed room labels & dimensions",
        "Furniture layout suggestions",
        "Multiple formats (PDF, DWG, PNG)",
        "5 revisions included",
        "Color-coded areas",
      ],
    },
    {
      name: "Premium",
      price: 299,
      delivery: "5 days",
      revisions: "Unlimited",
      features: [
        "2D Floor Plan (unlimited sq ft)",
        "Detailed annotations & specifications",
        "Furniture & fixture layouts",
        "All formats + source files",
        "Unlimited revisions",
        "3D preview included",
        "Priority support",
      ],
    },
  ]

  const portfolio = [
    { image: "/placeholder.svg?height=200&width=300&text=Modern+Home+Plan", title: "Modern Family Home" },
    { image: "/placeholder.svg?height=200&width=300&text=Office+Layout", title: "Office Space Layout" },
    { image: "/placeholder.svg?height=200&width=300&text=Apartment+Plan", title: "Studio Apartment" },
    { image: "/placeholder.svg?height=200&width=300&text=Restaurant+Floor+Plan", title: "Restaurant Design" },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely perfect! The floor plan exceeded my expectations. Very detailed and professional work.",
      date: "2 weeks ago",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Fast delivery and excellent communication. Will definitely use this service again for my next project.",
      date: "1 month ago",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Great attention to detail. The measurements were spot on and the layout suggestions were very helpful.",
      date: "3 weeks ago",
    },
  ]

  const faqs = [
    {
      question: "What information do I need to provide?",
      answer:
        "You'll need to provide basic measurements, room requirements, and any specific preferences. We can work with sketches, photos, or detailed descriptions.",
    },
    {
      question: "Can you work with existing sketches?",
      answer: "We can transform hand-drawn sketches, photos, or rough measurements into professional floor plans.",
    },
    {
      question: "What formats will I receive?",
      answer:
        "Depending on your package, you'll receive PDF files (all packages), plus DWG and PNG formats in Standard and Premium packages.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Basic includes 2 revisions, Standard includes 5 revisions, and Premium includes unlimited revisions until you're satisfied.",
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
                  <Ruler className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Floor Plan Drawing</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Professional Floor Plan Drawing from Scratch
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground">(127 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>500+ orders completed</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground text-pretty">
                  Get professionally designed floor plans created from scratch with precise measurements, detailed
                  layouts, and expert attention to functionality and flow.
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Get</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Precise Measurements</h4>
                            <p className="text-sm text-muted-foreground">Accurate dimensions and scale</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Room Labels</h4>
                            <p className="text-sm text-muted-foreground">Clear identification of all spaces</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Furniture Layout</h4>
                            <p className="text-sm text-muted-foreground">Optimal furniture placement suggestions</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium">Multiple Formats</h4>
                            <p className="text-sm text-muted-foreground">PDF, DWG, PNG delivery options</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolio.map((item, index) => (
                      <Card key={index} className="overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h4 className="font-medium">{item.title}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <div className="flex items-center space-x-1 mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-2">{faq.question}</h4>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
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
                    <CardDescription>Select the option that best fits your needs</CardDescription>
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
                    <h4 className="font-medium mb-2">Need Custom Quote?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have specific requirements? Contact us for a personalized quote.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Contact Us
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
