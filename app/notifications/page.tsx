"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockUsers } from "@/lib/mock-data"
import Link from "next/link"
import { DesktopNav } from "@/components/desktop-nav"

export default function NotificationsPage() {
  const notifications = [
    {
      id: "1",
      user: mockUsers[1],
      message: "applied for your laundry gig",
      time: "2m ago",
      type: "application",
    },
    {
      id: "2",
      user: mockUsers[2],
      message: "completed your design project",
      time: "1h ago",
      type: "completion",
    },
    {
      id: "3",
      user: mockUsers[3],
      message: "left you a 5-star review",
      time: "3h ago",
      type: "review",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8">
      <DesktopNav activeTab="notifications" />

      {/* Status Bar */}
      <div className="h-11 bg-transparent md:hidden" />

      {/* Header */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link href="/" className="md:hidden">
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
        </div>
      </div>

      {/* Notifications */}
      <div className="px-4 md:px-8 lg:px-12 max-w-2xl mx-auto py-6 space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-white rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={notification.user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gray-200">
                  {notification.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-semibold">{notification.user.name}</span> {notification.message}
                </p>
                <p className="text-gray-500 text-sm">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav activeTab="notifications" />
    </div>
  )
}
