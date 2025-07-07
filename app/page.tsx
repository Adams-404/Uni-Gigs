"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockGigs, mockUsers } from "@/lib/mock-data"
import { DesktopNav } from "@/components/desktop-nav"
import { WorldMap } from "@/components/ui/world-map"
import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { motion } from "framer-motion"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const featuredGig = mockGigs[1] // Design flyer gig
  const featuredUser = mockUsers.find((u) => u.id === featuredGig.posterId)

  const nearbyGigs = mockGigs.slice(0, 3)

  // Campus locations for the world map
  const campusConnections = [
    {
      start: { lat: 6.5244, lng: 3.3792 }, // Lagos, Nigeria (University of Lagos)
      end: { lat: 7.3775, lng: 3.947 }, // Ibadan, Nigeria (University of Ibadan)
    },
    {
      start: { lat: 6.5244, lng: 3.3792 }, // Lagos, Nigeria
      end: { lat: 9.0579, lng: 8.6753 }, // Abuja, Nigeria (University of Abuja)
    },
    {
      start: { lat: 6.5244, lng: 3.3792 }, // Lagos, Nigeria
      end: { lat: 5.3158, lng: 7.0498 }, // Port Harcourt, Nigeria (University of Port Harcourt)
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8"
    >
      <DesktopNav activeTab="home" />

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

      {/* Hero Section with Spiral Animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[500px] md:h-[600px] overflow-hidden"
      >
        {/* Spiral Animation Background */}
        <div className="absolute inset-0">
          <SpiralAnimation />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />

        {/* Featured Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-4 right-4 z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-12 w-12 ring-2 ring-white/30">
              <AvatarImage src={featuredUser?.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-white/20 text-white">
                {featuredUser?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-white font-medium">{featuredUser?.name}</span>
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Campus Creative Hub</h1>

          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <motion.div
                key={dot}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className={`w-2 h-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Near You Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="px-4 md:px-8 lg:px-12 py-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Near You</h2>

        {/* Interactive World Map */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mb-6"
        >
          <WorldMap dots={campusConnections} lineColor="#667eea" />

          {/* Open Map Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-4 left-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl font-semibold text-gray-900 shadow-lg"
            >
              Open Map
            </motion.button>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-4 right-4 bg-teal-600 rounded-2xl p-4 text-white min-w-[120px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback className="bg-white/20 text-xs">L</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Lagos</span>
            </div>
            <div className="text-xs opacity-90">31 items</div>
            <div className="text-lg font-bold">University</div>
          </motion.div>
        </motion.div>

        {/* People to follow */}
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl font-bold text-gray-900 mb-4"
        >
          People to follow:
        </motion.h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {mockUsers.slice(0, 3).map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative min-w-[280px] h-32 rounded-3xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
                style={{
                  backgroundImage: `url('${user.avatar}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <span className="text-white text-lg">×</span>
              </motion.button>

              {/* User info */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 mb-1">
                  <Avatar className="h-8 w-8 ring-2 ring-white/30">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-white/20 text-white text-xs">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white font-medium text-sm">{user.name}</span>
                </div>
                <div className="text-white/80 text-xs">{user.gigsCompleted} gigs completed</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav activeTab="home" />
    </motion.div>
  )
}
