import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote, ArrowRight, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  const overallStats = {
    averageRating: 4.9,
    totalReviews: 287,
    fiveStars: 92,
    fourStars: 6,
    threeStars: 1,
    twoStars: 1,
    oneStars: 0,
  }

  const featuredReviews = [
    {
      name: "Sarah Mitchell",
      location: "Austin, TX",
      service: "Floor Plan Drawing",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely incredible work! I provided a rough sketch of my dream home layout, and they transformed it into a professional, detailed floor plan that exceeded all my expectations. The attention to detail was remarkable - every measurement was precise, and they even suggested improvements to the flow that I hadn't considered. Communication was excellent throughout the process, and they delivered ahead of schedule. I'll definitely be using their services for my next project!",
      verified: true,
      helpful: 24,
    },
    {
      name: "Michael Rodriguez",
      location: "Denver, CO",
      service: "Architectural Design",
      rating: 5,
      date: "1 month ago",
      comment:
        "Working with FloorPlan Pro was a game-changer for our restaurant renovation. They provided complete architectural drawings including 3D renderings that helped us visualize the space perfectly. The team was professional, responsive, and delivered exactly what we needed for our contractor and permits. The quality of work is outstanding - you can tell these are experienced professionals who take pride in their craft.",
      verified: true,
      helpful: 18,
    },
    {
      name: "Jennifer Chen",
      location: "Seattle, WA",
      service: "Floor Plan Redrawing",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "I had an old, hand-drawn floor plan from the 1970s that was barely readable. FloorPlan Pro converted it into a beautiful, modern digital plan that's now perfect for our home insurance and renovation planning. The transformation was amazing - they cleaned up all the details, corrected the proportions, and even enhanced it with modern design standards. Fast turnaround and excellent customer service!",
      verified: true,
      helpful: 15,
    },
    {
      name: "David Thompson",
      location: "Miami, FL",
      service: "Floor Plan Drawing",
      rating: 5,
      date: "1 week ago",
      comment:
        "As a real estate agent, I need professional floor plans for my luxury listings. FloorPlan Pro consistently delivers high-quality work that impresses my clients and helps properties sell faster. Their attention to detail and quick turnaround times make them my go-to choice for all floor plan needs. Highly recommended for anyone in the real estate industry!",
      verified: true,
      helpful: 12,
    },
    {
      name: "Lisa Johnson",
      location: "Chicago, IL",
      service: "Architectural Design",
      rating: 5,
      date: "2 months ago",
      comment:
        "The 3D renderings they created for our office renovation were absolutely stunning. It helped our entire team visualize the new space and make important decisions before construction began. The level of detail in the renderings was photorealistic - you could see textures, lighting, and even furniture placement. This saved us time and money by catching potential issues early in the design phase.",
      verified: true,
      helpful: 21,
    },
    {
      name: "Robert Kim",
      location: "Phoenix, AZ",
      service: "Floor Plan Redrawing",
      rating: 5,
      date: "3 months ago",
      comment:
        "Exceptional service from start to finish. I needed to convert several hand-sketched floor plans for a commercial property, and they delivered professional-grade drawings that met all our architectural standards. The team was patient with my revisions and always responsive to questions. The final product was exactly what we needed for our construction permits.",
      verified: true,
      helpful: 9,
    },
  ]

  const serviceReviews = {
    "floor-plan-drawing": [
      {
        name: "Amanda Foster",
        rating: 5,
        comment: "Perfect floor plan for our new home. Every detail was captured beautifully.",
        date: "1 week ago",
      },
      {
        name: "James Wilson",
        rating: 5,
        comment: "Professional quality work delivered faster than promised. Highly recommend!",
        date: "2 weeks ago",
      },
    ],
    "floor-plan-redrawing": [
      {
        name: "Maria Gonzalez",
        rating: 5,
        comment: "Transformed my old sketches into professional plans. Amazing transformation!",
        date: "5 days ago",
      },
      {
        name: "Tom Anderson",
        rating: 5,
        comment: "Quick turnaround and excellent quality. Exactly what I needed.",
        date: "1 week ago",
      },
    ],
    "architectural-design": [
      {
        name: "Rachel Green",
        rating: 5,
        comment: "The 3D renderings were absolutely stunning. Helped us visualize everything perfectly.",
        date: "3 days ago",
      },
      {
        name: "Steve Martinez",
        rating: 5,
        comment: "Complete architectural package exceeded expectations. Professional team!",
        date: "1 week ago",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Client Reviews & Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            See what our clients say about their experience working with FloorPlan Pro. Real reviews from real customers
            across the United States.
          </p>

          {/* Overall Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{overallStats.averageRating}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-muted-foreground">Based on {overallStats.totalReviews} reviews</div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-accent mr-2" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-accent mr-2" />
                <span>98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2" />
                <span>Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Rating Breakdown</CardTitle>
              <CardDescription>How our clients rate our services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    stars: 5,
                    percentage: overallStats.fiveStars,
                    count: Math.round((overallStats.totalReviews * overallStats.fiveStars) / 100),
                  },
                  {
                    stars: 4,
                    percentage: overallStats.fourStars,
                    count: Math.round((overallStats.totalReviews * overallStats.fourStars) / 100),
                  },
                  {
                    stars: 3,
                    percentage: overallStats.threeStars,
                    count: Math.round((overallStats.totalReviews * overallStats.threeStars) / 100),
                  },
                  {
                    stars: 2,
                    percentage: overallStats.twoStars,
                    count: Math.round((overallStats.totalReviews * overallStats.twoStars) / 100),
                  },
                  {
                    stars: 1,
                    percentage: overallStats.oneStars,
                    count: Math.round((overallStats.totalReviews * overallStats.oneStars) / 100),
                  },
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm font-medium">{rating.stars}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground w-16 text-right">
                      {rating.percentage}% ({rating.count})
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="drawing">Drawing</TabsTrigger>
                <TabsTrigger value="redrawing">Redrawing</TabsTrigger>
                <TabsTrigger value="architectural">3D Design</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredReviews.map((review, index) => (
                  <Card key={index} className="bg-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            {review.location} • {review.service}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-muted-foreground/30" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-pretty">{review.comment}</p>
                      <div className="text-sm text-muted-foreground">{review.helpful} people found this helpful</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drawing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceReviews["floor-plan-drawing"].map((review, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-card-foreground">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="redrawing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceReviews["floor-plan-redrawing"].map((review, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-card-foreground">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="architectural" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceReviews["architectural-design"].map((review, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-card-foreground">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Satisfied Clients</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Experience the same exceptional service and quality that our clients rave about. Start your project today
            and see why we maintain a 98% satisfaction rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/options">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
