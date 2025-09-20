"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Clock, Zap, RefreshCw, Star, Plus, Minus, CreditCard } from "lucide-react"

type FormStep = "gigs" | "options" | "contact" | "payment"

const gigs = [
  {
    id: "basic",
    name: "Basic Floor Plan",
    price: 299,
    delivery: "3 days",
    features: ["2D Floor Plan", "Basic Measurements", "2 Revisions", "PDF Delivery"],
    badge: null,
  },
  {
    id: "standard",
    name: "Standard Package",
    price: 499,
    delivery: "5 days",
    features: ["Detailed 2D Plan", "Furniture Layout", "3 Revisions", "Multiple Formats"],
    badge: "POPULAR",
  },
  {
    id: "premium",
    name: "Premium Suite",
    price: 799,
    delivery: "7 days",
    features: ["2D + 3D Design", "Unlimited Revisions", "All Formats", "Consultation"],
    badge: "BEST VALUE",
  },
]

const additionalOptions = [
  {
    id: "fast-delivery",
    name: "Express Delivery",
    description: "Get your project 2 days earlier",
    price: 150,
    icon: Zap,
  },
  {
    id: "extra-revisions",
    name: "Extra Revisions",
    description: "Additional revision rounds",
    price: 75,
    icon: RefreshCw,
    quantity: true,
  },
  {
    id: "3d-rendering",
    name: "3D Visualization",
    description: "Photorealistic 3D renders",
    price: 200,
    icon: Star,
  },
]

export function ServiceForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>("gigs")
  const [selectedGig, setSelectedGig] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({})
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const calculateTotal = () => {
    const baseGig = gigs.find((g) => g.id === selectedGig)
    const basePrice = baseGig?.price || 0
    const optionsPrice = Object.entries(selectedOptions).reduce((total, [optionId, quantity]) => {
      const option = additionalOptions.find((opt) => opt.id === optionId)
      return total + (option?.price || 0) * quantity
    }, 0)
    return basePrice + optionsPrice
  }

  const updateOptionQuantity = (optionId: string, change: number) => {
    setSelectedOptions((prev) => {
      const current = prev[optionId] || 0
      const newQuantity = Math.max(0, current + change)
      if (newQuantity === 0) {
        const { [optionId]: removed, ...rest } = prev
        return rest
      }
      return { ...prev, [optionId]: newQuantity }
    })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }

  const renderContent = () => {
    switch (currentStep) {
      case "gigs":
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Service</h2>
              <p className="text-gray-600">Professional architectural services tailored to your needs</p>
            </div>
            <div className="grid gap-4">
              {gigs.map((gig) => (
                <Card
                  key={gig.id}
                  className="cursor-pointer transition-all duration-200 hover:shadow-md border hover:border-blue-300 relative"
                  onClick={() => {
                    setSelectedGig(gig.id)
                    setCurrentStep("options")
                  }}
                >
                  {gig.badge && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {gig.badge}
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">{gig.name}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>{gig.delivery}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-800">${gig.price}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {gig.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "options":
        const selectedGigData = gigs.find((g) => g.id === selectedGig)
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Customize Your Order</h2>
              <div className="bg-blue-50 p-3 rounded-lg mt-3">
                <p className="font-semibold text-gray-800">{selectedGigData?.name}</p>
                <p className="text-xl font-bold text-blue-600">${selectedGigData?.price}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 text-sm">Add Extra Services</h3>
              {additionalOptions.map((option) => {
                const Icon = option.icon
                const quantity = selectedOptions[option.id] || 0
                return (
                  <div key={option.id} className="bg-gray-50 border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <Icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{option.name}</h4>
                          <p className="text-xs text-gray-600">{option.description}</p>
                          <p className="text-sm font-bold text-gray-800">+${option.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {option.quantity ? (
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateOptionQuantity(option.id, -1)}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateOptionQuantity(option.id, 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant={quantity > 0 ? "default" : "outline"}
                            size="sm"
                            onClick={() => updateOptionQuantity(option.id, quantity > 0 ? -1 : 1)}
                            className="text-xs px-3 py-1"
                          >
                            {quantity > 0 ? "Added" : "Add"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-gray-800 text-white p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold">${calculateTotal()}</span>
              </div>
            </div>

            <Button
              onClick={() => setCurrentStep("contact")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
            >
              Continue
            </Button>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
              <div className="bg-blue-50 p-3 rounded-lg mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{gigs.find((g) => g.id === selectedGig)?.name}</span>
                  <span className="text-xl font-bold text-blue-600">${calculateTotal()}</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <Input
                placeholder="Full Name *"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                required
                className="text-sm"
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                required
                className="text-sm"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="text-sm"
              />
              <Textarea
                placeholder="Project requirements..."
                value={contactInfo.message}
                onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
                rows={3}
                className="text-sm"
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
                Proceed to Payment
              </Button>
            </form>
          </div>
        )

      case "payment":
        const gig = gigs.find((g) => g.id === selectedGig)
        const total = calculateTotal()
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">{gig?.name}</span>
                <span className="font-semibold">${gig?.price}</span>
              </div>
              {Object.entries(selectedOptions).map(([optionId, quantity]) => {
                const option = additionalOptions.find((opt) => opt.id === optionId)
                return (
                  <div key={optionId} className="flex justify-between text-sm text-gray-600">
                    <span>
                      {option?.name} {quantity > 1 && `(×${quantity})`}
                    </span>
                    <span>+${(option?.price || 0) * quantity}</span>
                  </div>
                )
              })}
              <div className="border-t pt-2 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <Button
              onClick={() => alert("Payment integration would be implemented here!")}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Pay ${total}
            </Button>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
          <CardTitle className="text-center text-lg font-bold">Tahura Architects</CardTitle>
        </CardHeader>
        <CardContent className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
          {renderContent()}
          {currentStep !== "gigs" && currentStep !== "payment" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (currentStep === "contact") setCurrentStep("options")
                else if (currentStep === "options") setCurrentStep("gigs")
              }}
              className="w-full mt-4 text-sm"
            >
              ← Back
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
