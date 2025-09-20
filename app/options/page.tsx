import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ruler, Home, Building, Star, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OptionsPage() {
  const gigs = [
    {
      id: "floor-plan-drawing",
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Professional Floor Plan Drawing",
      description: "Get custom floor plans created from scratch with precise measurements and professional quality.",
      image: "/placeholder.svg?height=200&width=300&text=Floor+Plan+Drawing",
      rating: 4.9,
      reviews: 127,
      startingPrice: 99,
      deliveryTime: "2 days",
      popular: false,
    },
    {
      id: "floor-plan-redrawing",
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Floor Plan Redrawing & Conversion",
      description: "Transform your existing sketches or old plans into professional digital floor plans.",
      image: "/placeholder.svg?height=200&width=300&text=Floor+Plan+Redrawing",
      rating: 5.0,
      reviews: 89,
      startingPrice: 79,
      deliveryTime: "1 day",
      popular: true,
    },
    {
      id: "architectural-design",
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Complete Architectural Design",
      description: "Full architectural design services including 3D renderings, elevations, and construction details.",
      image: "/placeholder.svg?height=200&width=300&text=Architectural+Design",
      rating: 4.8,
      reviews: 64,
      startingPrice: 299,
      deliveryTime: "5 days",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose Your Design Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Select from our range of professional design services. Each package is carefully crafted to meet different
            needs and budgets, just like your favorite freelance platform.
          </p>
        </div>
      </section>

      {/* Gigs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gigs.map((gig) => (
              <Card key={gig.id} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {gig.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">Best Seller</Badge>
                )}

                {/* Gig Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={gig.image || "/placeholder.svg"}
                    alt={gig.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{gig.rating}</span>
                      <span className="text-sm text-muted-foreground">({gig.reviews})</span>
                    </div>
                    {gig.icon}
                  </div>
                  <CardTitle className="text-lg text-card-foreground line-clamp-2">{gig.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {gig.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {gig.deliveryTime} delivery
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Starting at</div>
                      <div className="text-xl font-bold text-primary">${gig.startingPrice}</div>
                    </div>
                  </div>

                  <Link href={`/options/${gig.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's Included in Every Package</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every service package comes with these standard features to ensure quality and satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Unlimited Revisions</h3>
              <p className="text-sm text-muted-foreground">We work until you're 100% satisfied</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Multiple Formats</h3>
              <p className="text-sm text-muted-foreground">PDF, DWG, PNG, and more</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Commercial Rights</h3>
              <p className="text-sm text-muted-foreground">Full usage rights included</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
