"use client"

import { Play, Download, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Discography() {
  const albums = [
    {
      id: 1,
      title: "Nostalgia",
      year: "2024",
      cover: "/images/discMusic01.jpg",
      tracks: 12,
      genre: "Afrobeat/Folk",
      description: "Uma celebração das tradições musicais angolanas com toques modernos",
    },
    {
      id: 2,
      title: "Chefe",
      year: "2025",
      cover: "/images/chefe.jpg",
      tracks: 10,
      genre: "R&B/Soul",
      description: "Letras altruístas que tocam a alma com melodias envolventes",
    },
    {
      id: 3,
      title: "Espirito",
      year: "2024",
      cover: "/images/espirit.jpg",
      tracks: 8,
      genre: "Rap Melódico",
      description: "A vida urbana angolana retratada através do rap consciente",
    },
  ]

  const singles = [
    { title: "Nostalgia", year: "2024", plays: "840K" },
    { title: "Quem Matou", year: "2025", plays: "2.1M" },
    { title: "Chefe", year: "2025", plays: "3.2M" },
    { title: "Soldado", year: "2024", plays: "123K" },
  ]

  return (
    <section id="discografia" className="py-20 discografia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text mb-6">Discografia</h2><br />
          <p className="text-xl text-gray-300 ">
            Uma jornada musical através dos álbuns e singles que definem o som único de Ganan Boy
          </p><br />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Álbuns</h3><br />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square relative group">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full">
                      <Play size={24} />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{album.title}</h4>
                  <p className="text-orange-400 font-medium mb-2">
                    {album.year} • {album.genre}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{album.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{album.tracks} faixas</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                        <Heart size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                        <Share2 size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-orange-400">
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}<br />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Singles Populares</h3><br />
          <div className="bg-slate-800/30 rounded-2xl p-6">
            <div className="space-y-4 ">
              {singles.map((single, index) => (
                <div
                  key={index}
                  className="flex items-center singlePadding justify-between p-4 hover:bg-slate-700/30 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Play className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{single.title}</h4>
                      <p className="text-gray-400 text-sm">{single.year}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-400 font-medium">{single.plays}</div>
                    <div className="text-gray-500 text-sm">reproduções</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
