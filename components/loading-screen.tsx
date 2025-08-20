"use client"

import { useState, useEffect } from "react"
import { Music, Headphones } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-600 via-blue-600 to-pink-800 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <Music className="text-white" size={40} />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce">
            <Headphones className="text-white" size={16} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white font-serif">Ganan Boy</h1>
          <p className="text-white/80">Carregando experiência musical...</p>
        </div>

        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
