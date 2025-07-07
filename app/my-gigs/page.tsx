"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, Star, MessageCircle, CheckCircle, Eye, TrendingUp, Users, ArrowLeft } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockGigs, mockUsers } from "@/lib/mock-data"
import Link from "next/link"

export default function MyGigsPage() {
  const currentUserId = "1"
  const [activeTab, setActiveTab] = useState("posted")

  const postedGigs = mockGigs.filter((gig) => gig.posterId === currentUserId)
  const acceptedGigs = mockGigs.filter((gig) => gig.acceptedBy === currentUserId)

  const stats = {
    totalPosted: postedGigs.length,
    totalAccepted: acceptedGigs.length,
    totalEarned: 15000,
    avgRating: 4.8,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
      case "Accepted":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      case "In Progress":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      case "Completed":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
      case "Cancelled":
        return "bg-gradient-to-r from-red-500 to-rose-500 text-white"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const GigCard = ({ gig, isPosted = false }: { gig: any; isPosted?: boolean }) => {
    const otherUser = isPosted
      ? mockUsers.find((user) => user.id === gig.acceptedBy)
      : mockUsers.find((user) => user.id === gig.posterId)

    return (
      <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getStatusColor(gig.status)}>{gig.status}</Badge>
                <Badge
                  className={
                    gig.type === "Manual"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  }
                >
                  {gig.type}
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight">{gig.title}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{gig.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ₦{gig.budget.toLocaleString()}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{gig.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{gig.timeNeeded}</span>
              </div>
            </div>
          </div>

          {otherUser && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-white shadow-md">
                  <AvatarImage src={otherUser.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                    {otherUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{otherUser.name}</span>
                    {otherUser.verified && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-500 font-medium">{otherUser.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl h-10">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat
            </Button>

            {gig.status === "In Progress" && (
              <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl h-10">
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete
              </Button>
            )}

            {gig.status === "Pending" && isPosted && (
              <Button variant="outline" className="bg-white/70 backdrop-blur-sm border-white/30 rounded-xl h-10">
                <Eye className="h-4 w-4 mr-2" />
                Applications ({gig.applications})
              </Button>
            )}

            {gig.status === "Completed" && (
              <Button variant="outline" className="flex-1 bg-white/70 backdrop-blur-sm border-white/30 rounded-xl h-10">
                <Star className="h-4 w-4 mr-2" />
                Rate
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 md:pt-24 pb-24 md:pb-8">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20">
        <div className="safe-area-top" />
        <div className="px-6 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="p-2 rounded-xl">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Gigs
              </h1>
              <p className="text-gray-600 text-sm">Manage your gigs and earnings</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
              <TrendingUp className="h-5 w-5 mb-2 opacity-80" />
              <div className="text-lg font-bold">{stats.totalPosted}</div>
              <div className="text-xs opacity-80">Posted Gigs</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white">
              <Users className="h-5 w-5 mb-2 opacity-80" />
              <div className="text-lg font-bold">{stats.totalAccepted}</div>
              <div className="text-xs opacity-80">Accepted</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/70 backdrop-blur-sm border-white/30 rounded-2xl p-1 mb-6">
            <TabsTrigger
              value="posted"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white font-semibold"
            >
              Posted ({postedGigs.length})
            </TabsTrigger>
            <TabsTrigger
              value="accepted"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white font-semibold"
            >
              Accepted ({acceptedGigs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posted" className="space-y-4 mt-0">
            {postedGigs.length > 0 ? (
              postedGigs.map((gig) => <GigCard key={gig.id} gig={gig} isPosted={true} />)
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posted gigs yet</h3>
                <p className="text-gray-500 text-sm mb-6">Start by posting your first gig</p>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl px-8">
                  Post a Gig
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="accepted" className="space-y-4 mt-0">
            {acceptedGigs.length > 0 ? (
              acceptedGigs.map((gig) => <GigCard key={gig.id} gig={gig} isPosted={false} />)
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No accepted gigs yet</h3>
                <p className="text-gray-500 text-sm mb-6">Browse available gigs to get started</p>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl px-8">
                  Browse Gigs
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav activeTab="my-gigs" />
    </div>
  )
}
