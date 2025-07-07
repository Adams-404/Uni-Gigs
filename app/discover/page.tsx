"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockGigs, mockUsers } from "@/lib/mock-data"
import { DesktopNav } from "@/components/desktop-nav"
import { motion } from "framer-motion"

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "Laundry", image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", count: 12 },
    { name: "Tutoring", image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", count: 8 },
    { name: "Design", image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", count: 15 },
    { name: "Delivery", image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", count: 6 },
    { name: "Tech Help", image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", count: 9 },
    { name: "Cleaning", image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", count: 4 },
    { name: "Typing", image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", count: 7 },
    { name: "Errands", image: "linear-gradient(135deg, #ff8a80 0%, #ea4c89 100%)", count: 11 },
  ]

  const topGigs = mockGigs.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8"
    >
      <DesktopNav activeTab="discover" />

      {/* Status Bar */}
      <div className="h-11 bg-transparent md:hidden" />

      {/* Fixed Search Bar - Only show on mobile */}
      <div className="fixed top-6 left-4 right-4 md:hidden z-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
          <Input
            placeholder="Search Campus Gigs and students"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-white/10 backdrop-blur-md border-white/20 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/20"
          />
        </motion.div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="px-4 md:px-8 lg:px-12 pt-4 pb-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-blue-100 rounded-2xl px-4 py-2"
          >
            <span className="text-blue-600 font-semibold text-sm">15 items</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-gray-100 rounded-2xl px-4 py-2"
          >
            <Star className="h-4 w-4 text-gray-600" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-gray-100 rounded-2xl px-4 py-2 ml-auto"
          >
            <span className="text-gray-600 font-semibold text-sm">20 items</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Gig Matches */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 md:px-8 lg:px-12 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gig Matches</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {topGigs.map((gig, index) => {
            const user = mockUsers.find((u) => u.id === gig.posterId)
            return (
              <motion.div
                key={gig.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative min-w-[320px] h-48 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                    backgroundImage: `url('/placeholder.svg?height=200&width=320')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* User info */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Avatar className="h-8 w-8 ring-2 ring-white/30">
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-white/20 text-white text-xs">
                      {user?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white font-medium text-sm">{user?.name}</span>
                </div>

                {/* More button */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white/80 text-sm mb-1">{gig.applications} applications</div>
                  <h3 className="text-white text-xl font-bold">{gig.title}</h3>
                </div>

                {/* Star */}
                <div className="absolute bottom-4 right-4">
                  <Star className="h-6 w-6 text-white/80" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Discover More */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 md:px-8 lg:px-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Discover More</h2>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-32 rounded-3xl overflow-hidden cursor-pointer"
              style={{
                background: category.image,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
                <div className="text-white/80 text-sm">{category.count} gigs</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav activeTab="discover" />
    </motion.div>
  )
}
