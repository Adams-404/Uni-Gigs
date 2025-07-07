"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Camera, MapPin } from "lucide-react"

interface PostGigModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PostGigModal({ isOpen, onClose }: PostGigModalProps) {
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting gig:", formData)
    onClose()
    // Reset form
    setFormData({
      title: "",
      description: "",
      budget: "",
      location: "",
      category: "",
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.5,
            }}
            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl max-h-[90vh] overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Create Gig</h2>
              <Button variant="ghost" size="sm" onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-120px)] space-y-6">
              {/* Photo Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative h-40 bg-gray-100 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium text-sm">Add a photo</p>
                    <p className="text-gray-400 text-xs">Make your gig stand out</p>
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Input
                  placeholder="What do you need help with?"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="h-12 bg-gray-50 border-gray-200 rounded-xl text-base font-medium"
                />
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Textarea
                  placeholder="Describe your gig in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[80px] bg-gray-50 border-gray-200 rounded-xl resize-none"
                />
              </motion.div>

              {/* Budget */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Input
                  placeholder="Budget (₦)"
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                />
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="pl-12 h-12 bg-gray-50 border-gray-200 rounded-xl"
                />
              </motion.div>

              {/* Categories */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <h3 className="text-base font-semibold text-gray-900 mb-3">Category</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, category: category.name })}
                      className={`relative h-16 rounded-xl overflow-hidden transition-all duration-200 ${
                        formData.category === category.name ? "ring-2 ring-gray-900 shadow-lg" : "shadow-sm"
                      }`}
                      style={{ background: category.gradient }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{category.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-4 pb-6"
              >
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.title || !formData.description || !formData.budget}
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Gig
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
