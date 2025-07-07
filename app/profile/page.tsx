"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Settings, Star } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockUsers, mockGigs } from "@/lib/mock-data"
import Link from "next/link"
import { DesktopNav } from "@/components/desktop-nav"

export default function ProfilePage() {
  const currentUser = mockUsers[0]
  const userGigs = mockGigs.filter((gig) => gig.posterId === currentUser.id)

  return (
    <div className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8">
      <DesktopNav activeTab="profile" />
      {/* Status Bar */}
      <div className="h-11 bg-transparent md:hidden" />

      {/* Header */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <Link href="/" className="md:hidden">
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
          <Settings className="h-6 w-6 text-gray-900" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 md:px-8 lg:px-12 max-w-4xl mx-auto py-8 bg-white">
        <div className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-gray-200 text-2xl">
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentUser.name}</h2>
          <p className="text-gray-600 mb-4">{currentUser.bio}</p>

          <div className="flex items-center justify-center gap-1 mb-6">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{currentUser.rating}</span>
            <span className="text-gray-500">• {currentUser.gigsCompleted} gigs completed</span>
          </div>

          <Button className="bg-black hover:bg-gray-800 text-white rounded-2xl px-8">Edit Profile</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 md:px-8 lg:px-12 max-w-4xl mx-auto py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{currentUser.gigsPosted}</div>
            <div className="text-gray-500 text-sm">Posted</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{currentUser.gigsCompleted}</div>
            <div className="text-gray-500 text-sm">Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">₦{(currentUser.totalEarned / 1000).toFixed(0)}k</div>
            <div className="text-gray-500 text-sm">Earned</div>
          </div>
        </div>
      </div>

      {/* My Gigs */}
      <div className="px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4">My Gigs</h3>
        <div className="space-y-4">
          {userGigs.map((gig, index) => (
            <div
              key={gig.id}
              className="relative h-32 rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${
                  index % 2 === 0 ? "#667eea 0%, #764ba2 100%" : "#f093fb 0%, #f5576c 100%"
                })`,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="text-white/80 text-sm">{gig.applications} applications</div>
                <div>
                  <h4 className="text-white text-lg font-bold">{gig.title}</h4>
                  <div className="text-white/80 text-sm">₦{gig.budget.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  )
}
