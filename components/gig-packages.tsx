"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Users, Star, ArrowRight, Heart, Zap, Package, Plus, Minus } from "lucide-react"

const gigs = [
  {
    id: "basic",
    name: "Basic Floor Plan Design",
    price: 299,
    originalPrice: 399,
    delivery: "3 days",
    revisions: "2",
    rating: 4.9,
    orders: 150,
    badge: "BESTSELLER",
    description: "I will create a professional 2D floor plan with basic measurements and room layouts",
    features: [
      "Professional 2D Floor Plan Drawing",
      "Accurate Room Measurements & Dimensions",
      "Basic Furniture Layout Suggestions",
      "High-Resolution PDF File Delivery",
      "2 Revision Rounds Included",
      "Commercial Use Rights",
      "24/7 Customer Support",
    ],
    extras: [
      { name: "Express 24h Delivery", price: 50, popular: true },
      { name: "Additional Revision Round", price: 25 },
      { name: "3D Basic Visualization", price: 100 },
      { name: "AutoCAD File Format", price: 75 },
    ],
    gigDetails: {
      about:
        "Perfect for homeowners and small businesses who need professional floor plans for renovations, real estate listings, or planning purposes.",
      whatYouGet: [
        "Detailed 2D floor plan with precise measurements",
        "Room labels and dimensions clearly marked",
        "Basic furniture placement suggestions",
        "Professional architectural symbols",
        "Print-ready high-resolution files",
      ],
      requirements: [
        "Rough sketch or existing floor plan (photo/scan)",
        "Room dimensions (if available)",
        "Specific requirements or preferences",
        "Property address for reference",
      ],
    },
  },
  {
    id: "standard",
    name: "Standard Architecture Package",
    price: 499,
    originalPrice: 649,
    delivery: "5 days",
    revisions: "3",
    rating: 4.95,
    orders: 89,
    badge: "RECOMMENDED",
    description:
      "I will design detailed floor plans with architectural elements, measurements, and professional layouts",
    features: [
      "Detailed 2D Floor Plan with Architectural Elements",
      "Precise Measurements & Professional Dimensions",
      "Complete Furniture & Fixture Layout",
      "Electrical & Lighting Plan Basics",
      "PDF + AutoCAD Files Included",
      "3 Professional Revision Rounds",
      "Interior Design Consultation Call",
      "Space Optimization Recommendations",
    ],
    extras: [
      { name: "Express 48h Delivery", price: 75, popular: true },
      { name: "3D Walkthrough Animation", price: 150 },
      { name: "Detailed Electrical Layout", price: 100 },
      { name: "Plumbing Layout Plan", price: 120 },
      { name: "Landscape Design Basic", price: 200 },
    ],
    gigDetails: {
      about:
        "Ideal for contractors, architects, and property developers who need comprehensive architectural drawings with professional details and multiple file formats.",
      whatYouGet: [
        "Professional architectural floor plan with all details",
        "Complete furniture and fixture placement",
        "Electrical outlets and lighting positions",
        "Multiple file formats (PDF, AutoCAD, JPG)",
        "Professional consultation and recommendations",
        "Space optimization suggestions",
      ],
      requirements: [
        "Detailed property measurements or existing plans",
        "Specific architectural requirements",
        "Preferred style and design elements",
        "Budget considerations for recommendations",
      ],
    },
  },
  {
    id: "premium",
    name: "Premium Design Suite",
    price: 799,
    originalPrice: 999,
    delivery: "7 days",
    revisions: "Unlimited",
    rating: 5.0,
    orders: 45,
    badge: "PREMIUM",
    description:
      "I will create complete architectural designs with 3D visualization, all formats, and unlimited revisions",
    features: [
      "Complete 2D + 3D Architectural Drawings",
      "Photorealistic 3D Renderings & Walkthrough",
      "All Professional File Formats (PDF, CAD, 3DS, SKP)",
      "Unlimited Revision Rounds",
      "Interior Design & Space Planning",
      "Structural Layout & Engineering Basics",
      "Virtual Reality Ready Files",
      "1-Hour Video Consultation Call",
      "Priority 24/7 Support",
    ],
    extras: [
      { name: "VR Ready Files & Setup", price: 200, popular: true },
      { name: "4K Animation Video (2-3 min)", price: 300 },
      { name: "Complete Construction Documents", price: 250 },
      { name: "Landscape & Exterior Design", price: 400 },
      { name: "Smart Home Integration Plan", price: 350 },
    ],
    gigDetails: {
      about:
        "The ultimate package for luxury projects, commercial developments, and clients who want the complete architectural experience with cutting-edge 3D visualization.",
      whatYouGet: [
        "Complete architectural drawing set",
        "Stunning 3D renderings and virtual walkthrough",
        "All professional file formats for any use",
        "Unlimited revisions until perfect",
        "Personal consultation and design guidance",
        "VR-ready files for immersive experience",
      ],
      requirements: [
        "Detailed project brief and vision",
        "Property specifications and measurements",
        "Style preferences and inspiration images",
        "Timeline and specific deliverable needs",
      ],
    },
  },
]

export function GigPackages() {
  const [selectedGig, setSelectedGig] = useState<string | null>(null)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [additionalRevisions, setAdditionalRevisions] = useState(0)
  const [earlyDelivery, setEarlyDelivery] = useState(false)

  const handleGigSelect = (gigId: string) => {
    setSelectedGig(selectedGig === gigId ? null : gigId)
    setSelectedExtras([])
    setAdditionalRevisions(0)
    setEarlyDelivery(false)
  }

  const handleExtraToggle = (extraName: string) => {
    setSelectedExtras((prev) => (prev.includes(extraName) ? prev.filter((e) => e !== extraName) : [...prev, extraName]))
  }

  const calculateTotal = (gig: (typeof gigs)[0]) => {
    const extrasTotal = gig.extras
      .filter((extra) => selectedExtras.includes(extra.name))
      .reduce((sum, extra) => sum + extra.price, 0)
    const revisionsTotal = additionalRevisions * 30
    const earlyDeliveryTotal = earlyDelivery ? 100 : 0
    return gig.price + extrasTotal + revisionsTotal + earlyDeliveryTotal
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gig Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional architectural services designed like Fiverr, but better. Choose your perfect package and
            customize with premium extras.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gigs.map((gig) => (
            <div key={gig.id} className="relative">
              <Card
                className={`h-full transition-all duration-300 hover:shadow-xl border-2 ${
                  selectedGig === gig.id
                    ? "border-blue-500 shadow-xl scale-[1.02]"
                    : "border-gray-200 hover:border-blue-300"
                } relative overflow-hidden`}
              >
                <div className="absolute top-3 right-3 z-10">
                  <Badge
                    className={`font-bold text-xs px-2 py-1 ${
                      gig.badge === "BESTSELLER"
                        ? "bg-orange-500 hover:bg-orange-600"
                        : gig.badge === "RECOMMENDED"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-purple-500 hover:bg-purple-600"
                    }`}
                  >
                    {gig.badge}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between pr-16">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900 mb-2">{gig.name}</CardTitle>

                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-xs">{gig.rating}</span>
                          <span className="text-gray-500 text-xs">({gig.orders})</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Clock className="h-3 w-3" />
                          {gig.delivery}
                        </div>
                      </div>

                      <CardDescription className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {gig.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 line-through">${gig.originalPrice}</span>
                      <span className="text-2xl font-bold text-blue-600">${gig.price}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Users className="h-3 w-3" />
                        {gig.revisions} revisions
                      </div>
                      <span className="text-xs text-green-600 font-medium">Save ${gig.originalPrice - gig.price}!</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {gig.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {gig.features.length > 3 && (
                      <p className="text-xs text-blue-600 font-medium">+{gig.features.length - 3} more features...</p>
                    )}
                  </div>

                  <Button
                    onClick={() => handleGigSelect(gig.id)}
                    className={`w-full font-bold py-2 text-sm transition-all duration-300 ${
                      selectedGig === gig.id
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    }`}
                  >
                    {selectedGig === gig.id ? (
                      <>
                        <Package className="h-3 w-3 mr-2" />
                        Close Details
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-3 w-3 mr-2" />
                        View Details
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {selectedGig === gig.id && (
                <Card className="mt-4 border-2 border-blue-500 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Package className="h-4 w-4" />
                      Package Details & Add-ons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
                        <Plus className="h-4 w-4 text-blue-500" />
                        Additional Options:
                      </h4>

                      <div className="flex items-center justify-between mb-3 p-2 bg-white rounded border">
                        <div>
                          <span className="text-sm font-medium text-gray-800">Extra Revisions</span>
                          <p className="text-xs text-gray-600">$30 per additional revision</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setAdditionalRevisions(Math.max(0, additionalRevisions - 1))}
                            className="h-6 w-6 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-bold w-8 text-center">{additionalRevisions}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setAdditionalRevisions(additionalRevisions + 1)}
                            className="h-6 w-6 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between p-2 rounded border cursor-pointer transition-all ${
                          earlyDelivery ? "bg-blue-100 border-blue-300" : "bg-white border-gray-200"
                        }`}
                        onClick={() => setEarlyDelivery(!earlyDelivery)}
                      >
                        <div>
                          <span className="text-sm font-medium text-gray-800">Early Delivery</span>
                          <p className="text-xs text-gray-600">Get your project 1-2 days earlier</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={earlyDelivery}
                            onChange={() => setEarlyDelivery(!earlyDelivery)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm font-bold text-blue-600">+$100</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {gig.features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs text-gray-700">
                            <Check className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {gig.features.length > 5 && (
                          <p className="text-xs text-blue-600 font-medium">
                            +{gig.features.length - 5} more included...
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-500" />
                        Premium Add-ons:
                      </h4>
                      <div className="space-y-2">
                        {gig.extras.slice(0, 3).map((extra, index) => (
                          <div
                            key={index}
                            className={`flex items-center justify-between p-2 border rounded cursor-pointer transition-all text-xs ${
                              selectedExtras.includes(extra.name)
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                            onClick={() => handleExtraToggle(extra.name)}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedExtras.includes(extra.name)}
                                onChange={() => handleExtraToggle(extra.name)}
                                className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                              />
                              <span className="font-medium text-gray-800">{extra.name}</span>
                              {extra.popular && (
                                <Badge className="bg-orange-500 hover:bg-orange-600 text-xs px-1 py-0">HOT</Badge>
                              )}
                            </div>
                            <span className="font-bold text-blue-600">+${extra.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-lg text-white">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="text-xs opacity-90">Total Price:</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-2xl font-bold">${calculateTotal(gig)}</span>
                            {(selectedExtras.length > 0 || additionalRevisions > 0 || earlyDelivery) && (
                              <Badge className="bg-white/20 text-white text-xs">
                                +{selectedExtras.length + (additionalRevisions > 0 ? 1 : 0) + (earlyDelivery ? 1 : 0)}{" "}
                                add-ons
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Heart className="h-6 w-6 opacity-60" />
                      </div>

                      <Button
                        onClick={() =>
                          alert(`Order ${gig.name} for $${calculateTotal(gig)} - Payment integration would be here!`)
                        }
                        className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Order Now - ${calculateTotal(gig)}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
