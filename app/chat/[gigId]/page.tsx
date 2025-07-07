"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Paperclip, Phone, Video, MoreVertical } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockUsers, mockGigs } from "@/lib/mock-data"
import Link from "next/link"

export default function ChatPage({ params }: { params: { gigId: string } }) {
  const [message, setMessage] = useState("")
  const [messages] = useState([
    {
      id: "1",
      senderId: "2",
      content: "Hi! I'm interested in your laundry gig. When would be the best time to pick up your clothes?",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: "2",
      senderId: "1",
      content:
        "Great! I'm available this Saturday morning. The clothes are ready to be picked up from Hostel A, Room 204.",
      timestamp: "10:32 AM",
      type: "text",
    },
    {
      id: "3",
      senderId: "2",
      content: "Perfect! I can come by around 9 AM. Do you have detergent or should I bring my own?",
      timestamp: "10:35 AM",
      type: "text",
    },
    {
      id: "4",
      senderId: "1",
      content: "I have detergent, no worries. Just bring yourself! 😊",
      timestamp: "10:36 AM",
      type: "text",
    },
    {
      id: "5",
      senderId: "2",
      content: "Awesome! See you Saturday at 9 AM. I'll text you when I'm on my way.",
      timestamp: "10:38 AM",
      type: "text",
    },
  ])

  const currentUserId = "1"
  const gig = mockGigs.find((g) => g.id === params.gigId)
  const otherUser = mockUsers.find((u) => u.id === "2") // Mock other user

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Link href="/my-gigs">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Avatar className="h-10 w-10">
              <AvatarImage src={otherUser?.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {otherUser?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">{otherUser?.name}</h2>
                {otherUser?.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">Online now</p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gig Info */}
      {gig && (
        <div className="p-4 bg-blue-50 border-b">
          <Card>
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">{gig.title}</h3>
                  <p className="text-xs text-gray-500">
                    {gig.location} • ₦{gig.budget.toLocaleString()}
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 text-xs">{gig.status}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-24">
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === currentUserId
          const sender = mockUsers.find((u) => u.id === msg.senderId)

          return (
            <div key={msg.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-2 max-w-[80%] ${isCurrentUser ? "flex-row-reverse" : "flex-row"}`}>
                {!isCurrentUser && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={sender?.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs">
                      {sender?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={`rounded-lg p-3 ${isCurrentUser ? "bg-blue-600 text-white" : "bg-white border"}`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${isCurrentUser ? "text-blue-100" : "text-gray-500"}`}>{msg.timestamp}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4 pb-24">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>

          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="flex-1"
          />

          <Button size="sm" onClick={handleSendMessage} disabled={!message.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <BottomNav activeTab="my-gigs" />
    </div>
  )
}
