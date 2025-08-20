"use client"

import { useState, useEffect } from "react"
import { Play, Users, TrendingUp, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/images/Ganan-Boy (2).png",
    "/images/ganan-boy-2.jpg",
    "/images/ganan-boy-1.jpg",
    "/images/img02.jpg",
    "/images/ganan-boy-5.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  const stats = [
    { icon: Users, value: "500K+", label: "Seguidores" },
    { icon: TrendingUp, value: "20K+", label: "Alcance" },
    { icon: Music, value: "25", label: "Anos" },
  ]


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          filter: "blur(0px) brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-serif">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ganan Boy
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white font-medium">Jovem Músico Angolano</p>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed ">
              Compositor e instrumentista com destaque no cenário musical angolano, misturando ritmos folclóricos com
              Afrobeat, R&B e Rap melódico.
            </p><br />
          </div>

          <div className="flex flex-wrap gap-12 justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-full mb-4 mx-auto backdrop-blur-sm">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-lg text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div><br />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 mew hover:from-pink-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
            >
              <Play className="mr-3" size={24} />
              Ouvir Música
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white  hover:bg-white/10 bg-transparent px-8 py-4 mew text-lg backdrop-blur-sm"
            >
              Ver Biografia
            </Button>
          </div><br />

          <div className="flex justify-center space-x-3 mt-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-4 h-4 rounded-full transition-all mr duration-300 ${
                  index === currentImage
                    ? "bg-gradient-to-r from-pink-400 to-blue-400"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
