"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

interface Story {
  id: string
  userId: string
  userName: string
  userAvatar: string
  type: "gig_completed" | "new_service" | "achievement"
  preview: string
  isViewed: boolean
}

interface StoryBarProps {
  stories: Story[]
}

export function StoryBar({ stories }: StoryBarProps) {
  return (
    <div className="px-6 py-4">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {/* Add Story */}
        <div className="flex flex-col items-center gap-2 min-w-[70px]">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Plus className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-xs font-medium text-gray-700">Your Story</span>
        </div>

        {/* Stories */}
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="relative">
              <div
                className={`p-0.5 rounded-2xl ${
                  story.isViewed ? "bg-gray-300" : "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
                }`}
              >
                <Avatar className="h-14 w-14 ring-2 ring-white">
                  <AvatarImage src={story.userAvatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                    {story.userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              {story.type === "achievement" && (
                <Badge className="absolute -bottom-1 -right-1 h-5 w-5 p-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                  🏆
                </Badge>
              )}
            </div>
            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
              {story.userName.split(" ")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
