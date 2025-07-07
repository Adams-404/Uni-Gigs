"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star, ChevronLeft, MoreHorizontal } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { mockUsers } from "@/lib/mock-data"
import Link from "next/link"
import { DesktopNav } from "@/components/desktop-nav"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("Campus")
  const [activeTab, setActiveTab] = useState("For You")

  const tabs = ["For You", "Gigs", "People"]

  const searchResults = [
    {
      id: "1",
      user: mockUsers[0],
      title: "day in campus 📚",
      items: 28,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stars: 0,
    },
    {
      id: "2",
      user: mockUsers[1],
      title: "Campus Eats",
      items: 36,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      stars: 5,
    },
    {
      id: "3",
      user: mockUsers[2],
      title: "vibey Campus adventures",
      items: 3,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      stars: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:pt-24 pb-24 md:pb-8">
      <DesktopNav activeTab="search" />
      {/* Status Bar */}
      <div className="h-11 bg-transparent md:hidden" />

      {/* Header */}
      <div className="px-4 py-4 bg-white">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="md:hidden">
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Search</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-gray-100 border-0 rounded-2xl text-gray-900"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium ${
                activeTab === tab ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 md:px-8 lg:px-12 py-6 space-y-4">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="relative h-48 rounded-3xl overflow-hidden"
            style={{ background: result.gradient }}
          >
            <div className="absolute inset-0 bg-black/20" />

            {/* User info */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Avatar className="h-10 w-10 ring-2 ring-white/30">
                <AvatarImage src={result.user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-white/20 text-white">
                  {result.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">{result.user.name}</span>
            </div>

            {/* More button */}
            <div className="absolute top-4 right-4">
              <MoreHorizontal className="h-6 w-6 text-white/80" />
            </div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-16">
              <div className="text-white/80 text-sm mb-1">{result.items} items</div>
              <h3 className="text-white text-2xl font-bold">{result.title}</h3>
            </div>

            {/* Star with count */}
            <div className="absolute bottom-4 right-4 flex flex-col items-center">
              <Star className="h-6 w-6 text-white/80 mb-1" />
              <span className="text-white/80 text-xs">{result.stars}</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav activeTab="search" />
    </div>
  )
}
