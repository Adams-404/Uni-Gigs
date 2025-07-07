"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, Star, Zap, Heart, Share, Bookmark } from "lucide-react"
import { mockUsers } from "@/lib/mock-data"
import { useState } from "react"

interface GigCardProps {
  gig: any
  variant?: "default" | "urgent"
}

export function GigCard({ gig, variant = "default" }: GigCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const poster = mockUsers.find((user) => user.id === gig.posterId)

  const getGigTypeColor = (type: string) => {
    return type === "Manual"
      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        variant === "urgent"
          ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-lg"
          : "bg-white/70 backdrop-blur-sm border-white/30 shadow-md"
      }`}
    >
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-4 pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getGigTypeColor(gig.type)} variant="secondary">
                  {gig.type}
                </Badge>
                {gig.priority === "Urgent" && (
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white animate-pulse">
                    <Zap className="h-3 w-3 mr-1" />
                    Urgent
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs bg-white/50">
                  {gig.category}
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2">{gig.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{gig.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ₦{gig.budget.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 capitalize">{gig.budgetType}</div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{gig.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{gig.timeNeeded}</span>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-white shadow-md">
                <AvatarImage src={poster?.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                  {poster?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">{poster?.name}</span>
                  {poster?.verified && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-0.5">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-500 font-medium">{poster?.rating}</span>
                  <span className="text-xs text-gray-400">• {poster?.gigsCompleted} gigs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2">
            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl h-11 shadow-lg">
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border-white/30"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border-white/30"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-blue-500 text-blue-500" : "text-gray-500"}`} />
            </Button>
            <Button variant="outline" size="sm" className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border-white/30">
              <Share className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
