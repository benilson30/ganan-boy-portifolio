"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import Biography from "@/components/biography"
import Discography from "@/components/discography"
import MusicPlayer from "@/components/music-player"
import Tour from "@/components/tour"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen bg-gradient-to-br from-pink-900 via-blue-900 to-pink-800">
        <Navigation />
        <Hero />
        <Biography />
        <MusicPlayer />
        <Discography />
        <Tour />
        <Footer />
      </main>
    </>
  )
}
