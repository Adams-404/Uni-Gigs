"use client"

import Link from "next/link"
import { Search, Plus, Home, Sparkles, Bell, User, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PostGigModal } from "./post-gig-modal"
import { useState } from "react"

interface DesktopNavProps {
  activeTab: string
}

export function DesktopNav({ activeTab }: DesktopNavProps) {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", href: "/", icon: Home },
    { id: "discover", label: "Discover", href: "/discover", icon: Sparkles },
    { id: "my-gigs", label: "My Gigs", href: "/my-gigs", icon: MessageSquare },
    { id: "notifications", label: "Notifications", href: "/notifications", icon: Bell },
    { id: "profile", label: "Profile", href: "/profile", icon: User },
  ]

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-white/20 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">CG</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Campus Gigs
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search gigs..."
                  className="pl-10 w-64 h-10 bg-gray-50 border-gray-200 rounded-xl focus:bg-white"
                />
              </div>

              {/* Post Button */}
              <Button
                onClick={() => setIsPostModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl px-6 h-10 font-semibold shadow-lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Post Gig
              </Button>

              {/* Profile */}
              <Link href="/profile">
                <Avatar className="h-10 w-10 ring-2 ring-gray-200 hover:ring-blue-300 transition-all duration-200">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PostGigModal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} />
    </>
  )
}
