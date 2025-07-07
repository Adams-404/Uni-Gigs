"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Camera, MapPin } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import Link from "next/link"
import { DesktopNav } from "@/components/desktop-nav"

export default function PostGigPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    location: "",
    category: "",
  })

  const categories = [
    { name: "Laundry", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "Tutoring", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { name: "Design", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { name: "Delivery", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { name: "Tech Help", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { name: "Cleaning", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8">
      <DesktopNav activeTab="post" />

      {/* Status Bar */}
      <div className="h-11 bg-transparent md:hidden" />

      {/* Header */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link href="/" className="md:hidden">
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Create Gig</h1>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 md:px-8 lg:px-12 max-w-2xl mx-auto py-6 space-y-6">
        {/* Photo Upload */}
        <div className="relative h-48 bg-gray-200 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Add a photo</p>
              <p className="text-gray-400 text-sm">Make your gig stand out</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <Input
            placeholder="What do you need help with?"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="h-12 bg-white border-gray-200 rounded-2xl text-lg font-medium"
          />
        </div>

        {/* Description */}
        <div>
          <Textarea
            placeholder="Describe your gig in detail..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="min-h-[100px] bg-white border-gray-200 rounded-2xl resize-none"
          />
        </div>

        {/* Budget */}
        <div>
          <Input
            placeholder="Budget (₦)"
            type="number"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="h-12 bg-white border-gray-200 rounded-2xl"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="pl-12 h-12 bg-white border-gray-200 rounded-2xl"
          />
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setFormData({ ...formData, category: category.name })}
                className={`relative h-20 rounded-2xl overflow-hidden ${
                  formData.category === category.name ? "ring-2 ring-gray-900" : ""
                }`}
                style={{ background: category.gradient }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-2xl font-semibold"
          disabled={!formData.title || !formData.description || !formData.budget}
        >
          Post Gig
        </Button>
      </div>

      <BottomNav activeTab="post" />
    </div>
  )
}
