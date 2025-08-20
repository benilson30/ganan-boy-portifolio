"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

  const tracks = [
    { title: "Nostalgia", duration: "3:45", album: "Singles" },
    { title: "Quem Matou", duration: "4:12", album: "Singles" },
    { title: "Chefe", duration: "3:28", album: "Singles" },
    { title: "Soldado", duration: "4:35", album: "Singles" },
    { title: "Espirito", duration: "3:52", album: "Singles" },
  ]

  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8 musictt">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Ouvir Músicas
          </span>
        </h2><br />
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Explore a discografia completa de Ganan Boy e mergulhe nas melodias que conquistaram Angola.
        </p><br />

        <Card className="musicBackground  p-8 ">
          <div className="space-y-6">
            {/* Player Principal */}
            <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm musicpp">
              <div className="flex items-center justify-between mb-6 musicPlay">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">{tracks[currentTrack].title}</h3>
                  <p className="text-pink-400">{tracks[currentTrack].album}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-400">{tracks[currentTrack].duration}</p>
                </div>
              </div>

              {/* Controles */}
              <div className="flex items-center justify-center space-x-6 listC">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                  className="text-white hover:text-pink-400"
                >
                  <SkipBack size={24} />
                </Button>

                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white w-16 h-16 rounded-full"
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
                  className="text-white hover:text-blue-400"
                >
                  <SkipForward size={24} />
                </Button>
              </div>

              {/* Barra de Progresso */}
              <div className="mt-6 mpro">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Lista de Músicas */}
            <div className="space-y-3 ">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentTrack(index)}
                  className={`flex items-center justify-between listMusic  rounded-lg cursor-pointer transition-all ${
                    index === currentTrack
                      ? "bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30"
                      : "bg-black/20 hover:bg-black/30"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-500 pr200 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{index + 1}</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-medium">{track.title}</h4>
                      <p className="text-gray-400 text-sm">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
