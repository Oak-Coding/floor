"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Check, Plus, Minus, Star, Clock } from "lucide-react"

const gigs = [
  {
    id: "basic",
    title: "Basic Floor Plan",
    price: 299,
    delivery: "5 days",
    features: ["2D Floor Plan", "Basic Layout", "Room Labels", "1 Revision"],
  },
  {
    id: "standard",
    title: "Standard Floor Plan",
    price: 499,
    delivery: "3 days",
    features: ["2D + 3D Floor Plan", "Detailed Layout", "Furniture Placement", "3 Revisions", "Color Coding"],
  },
  {
    id: "premium",
    title: "Premium Floor Plan",
    price: 799,
    delivery: "2 days",
    features: [
      "2D + 3D + Walkthrough",
      "Professional Layout",
      "Interior Design",
      "Unlimited Revisions",
      "Multiple Formats",
    ],
  },
]

const addOns = [
  { id: "express", name: "Express Delivery (24h)", price: 150 },
  { id: "revisions", name: "Extra Revision", price: 50 },
  { id: "3d", name: "3D Visualization", price: 200 },
]

interface PopupFormProps {
  isOpen: boolean
  onClose: () => void
}

export function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [step, setStep] = useState(1)
  const [selectedGig, setSelectedGig] = useState("")
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  if (!isOpen) return null

  const selectedGigData = gigs.find((g) => g.id === selectedGig)
  const totalAddOnPrice = Object.entries(selectedAddOns).reduce((sum, [id, qty]) => {
    const addOn = addOns.find((a) => a.id === id)
    return sum + (addOn ? addOn.price * qty : 0)
  }, 0)
  const totalPrice = (selectedGigData?.price || 0) + totalAddOnPrice

  const handleAddOnChange = (id: string, change: number) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-gray-50">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Start Your Project</h2>
            <p className="text-sm text-slate-600 mt-1">Professional floor plan services</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-white/80">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Step 1: Select Gig */}
        {step === 1 && (
          <div className="p-6 space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Choose Your Package</h3>
              <p className="text-sm text-slate-600">Select the perfect plan for your project needs</p>
            </div>
            {gigs.map((gig) => (
              <div
                key={gig.id}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedGig === gig.id
                    ? "border-slate-900 bg-slate-50 shadow-md"
                    : "border-gray-200 hover:border-slate-300"
                }`}
                onClick={() => setSelectedGig(gig.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">{gig.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-slate-600">4.9</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600">{gig.delivery}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-slate-900">${gig.price}</span>
                  </div>
                </div>
                <ul className="text-sm text-slate-700 space-y-2">
                  {gig.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Button
              onClick={() => setStep(2)}
              disabled={!selectedGig}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium"
            >
              Continue to Add-ons
            </Button>
          </div>
        )}

        {/* Step 2: Add-ons */}
        {step === 2 && (
          <div className="p-6 space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enhance Your Package</h3>
              <p className="text-sm text-slate-600">Add extra services to customize your order</p>
            </div>
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-slate-300 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{addOn.name}</p>
                  <p className="text-sm text-slate-600">${addOn.price} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddOnChange(addOn.id, -1)}
                    disabled={!selectedAddOns[addOn.id]}
                    className="h-8 w-8 p-0 rounded-full"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{selectedAddOns[addOn.id] || 0}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddOnChange(addOn.id, 1)}
                    className="h-8 w-8 p-0 rounded-full"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-slate-900">Total Amount</span>
                  <span className="text-2xl font-bold text-slate-900">${totalPrice}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 rounded-xl">
                  Back
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1 bg-slate-900 hover:bg-slate-800 rounded-xl">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="p-6 space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Information</h3>
              <p className="text-sm text-slate-600">We'll reach out to discuss your project details</p>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-slate-900"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-slate-900"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-slate-900"
              />
              <Textarea
                placeholder="Project Details (optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="rounded-xl border-gray-200 focus:border-slate-900"
              />
            </div>
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl p-4 mb-4">
                <div className="text-center">
                  <p className="text-slate-200 text-sm">Total Investment</p>
                  <p className="text-3xl font-bold">${totalPrice}</p>
                  <p className="text-slate-300 text-xs mt-1">Professional floor plan service</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1 rounded-xl">
                  Back
                </Button>
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800 rounded-xl font-medium">
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
