"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Share2, ZoomIn } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Modern Villa Floor Plan",
    category: "Residential",
    image: "/modern-residential-exterior.png",
    likes: 234,
    views: 1520,
    description: "Luxury 4-bedroom villa with open concept design",
  },
  {
    id: 2,
    title: "Corporate Office Layout",
    category: "Commercial",
    image: "/modern-office-glass.png",
    likes: 189,
    views: 980,
    description: "Efficient office space for 50+ employees",
  },
  {
    id: 3,
    title: "Apartment Complex Design",
    category: "Residential",
    image: "/modern-residential-exterior.png",
    likes: 156,
    views: 750,
    description: "Multi-unit residential complex with amenities",
  },
  {
    id: 4,
    title: "Restaurant Floor Plan",
    category: "Commercial",
    image: "/modern-office-glass.png",
    likes: 298,
    views: 1340,
    description: "Fine dining restaurant with kitchen layout",
  },
  {
    id: 5,
    title: "Retail Store Design",
    category: "Commercial",
    image: "/modern-residential-exterior.png",
    likes: 167,
    views: 890,
    description: "Boutique retail space with customer flow optimization",
  },
  {
    id: 6,
    title: "Family Home Renovation",
    category: "Residential",
    image: "/modern-office-glass.png",
    likes: 203,
    views: 1120,
    description: "Complete home renovation with modern touches",
  },
]

const categories = ["All", "Residential", "Commercial"]

export function InteractivePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  )

  const handleLike = (id: number) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  const handleCategoryChange = (category: string) => {
    setIsVisible(false)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsVisible(true)
    }, 150)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our diverse collection of architectural projects, from residential homes to commercial spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="flex flex-wrap gap-2 p-2 bg-card rounded-lg border">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => handleCategoryChange(category)}
                className="smooth-transition hover-glow"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="scroll-reveal hover-lift smooth-transition"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 smooth-transition"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button size="sm" variant="secondary" className="animate-bounce-in">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleLike(item.id)}
                      className={`animate-bounce-in ${likedItems.includes(item.id) ? "text-red-500" : ""}`}
                      style={{ animationDelay: "100ms" }}
                    >
                      <Heart className={`h-4 w-4 ${likedItems.includes(item.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="animate-bounce-in"
                      style={{ animationDelay: "200ms" }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">{item.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary smooth-transition">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {item.likes + (likedItems.includes(item.id) ? 1 : 0)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {item.views}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button size="lg" className="btn-interactive hover-glow">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
