"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MapPin, TrendingUp, DollarSign } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: Zap,
      label: "Urgent Gigs",
      description: "Quick money",
      gradient: "from-red-500 to-orange-500",
      count: 5,
    },
    {
      icon: MapPin,
      label: "Near You",
      description: "Close by",
      gradient: "from-green-500 to-emerald-500",
      count: 12,
    },
    {
      icon: TrendingUp,
      label: "Trending",
      description: "Popular now",
      gradient: "from-purple-500 to-pink-500",
      count: 8,
    },
    {
      icon: DollarSign,
      label: "High Pay",
      description: "₦5K+",
      gradient: "from-blue-500 to-cyan-500",
      count: 3,
    },
  ]

  return (
    <div className="px-6 py-4">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const IconComponent = action.icon
          return (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${action.gradient} shadow-lg`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{action.label}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{action.count}</span>
                    </div>
                    <p className="text-xs text-gray-500">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
