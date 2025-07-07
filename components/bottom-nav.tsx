"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Home, Sparkles, Plus, Bell, User } from "lucide-react"
import { LimelightNav, type NavItem } from "@/components/ui/limelight-nav"
import { PostGigModal } from "./post-gig-modal"

interface BottomNavProps {
  activeTab: string
}

export function BottomNav({ activeTab }: BottomNavProps) {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const router = useRouter()

  const getActiveIndex = () => {
    switch (activeTab) {
      case "home":
        return 0
      case "discover":
        return 1
      case "post":
        return 2
      case "notifications":
        return 3
      case "profile":
        return 4
      default:
        return 0
    }
  }

  const navItems: NavItem[] = [
    {
      id: "home",
      icon: <Home />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      id: "discover",
      icon: <Sparkles />,
      label: "Discover",
      onClick: () => router.push("/discover"),
    },
    {
      id: "post",
      icon: <Plus />,
      label: "Post",
      onClick: () => setIsPostModalOpen(true),
    },
    {
      id: "notifications",
      icon: <Bell />,
      label: "Notifications",
      onClick: () => router.push("/notifications"),
    },
    {
      id: "profile",
      icon: <User />,
      label: "Profile",
      onClick: () => router.push("/profile"),
    },
  ]

  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-40">
        <LimelightNav
          items={navItems}
          defaultActiveIndex={getActiveIndex()}
          className="bg-white/90 backdrop-blur-xl border-gray-200 shadow-2xl rounded-2xl"
          limelightClassName="bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>

      <PostGigModal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} />
    </>
  )
}
