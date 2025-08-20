"use client"

import { MapPin, Clock, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Tour() {
  const tourDates = [
    {
      id: 1,
      date: "15 FEV",
      year: "2025",
      city: "Luanda",
      venue: "Pavilhão Multiusos do Kilamba",
      time: "20:00",
      status: "available",
      price: "A partir de 5.000 Kz",
    },
    {
      id: 2,
      date: "22 FEV",
      year: "2025",
      city: "Benguela",
      venue: "Centro Cultural de Benguela",
      time: "19:30",
      status: "available",
      price: "A partir de 4.000 Kz",
    },
    {
      id: 3,
      date: "08 MAR",
      year: "2025",
      city: "Huambo",
      venue: "Estádio dos Eucaliptos",
      time: "20:00",
      status: "selling-fast",
      price: "A partir de 4.500 Kz",
    },
    {
      id: 4,
      date: "15 MAR",
      year: "2025",
      city: "Lubango",
      venue: "Centro de Convenções da Huíla",
      time: "19:00",
      status: "available",
      price: "A partir de 3.500 Kz",
    },
    {
      id: 5,
      date: "29 MAR",
      year: "2025",
      city: "Cabinda",
      venue: "Pavilhão Desportivo de Cabinda",
      time: "20:30",
      status: "available",
      price: "A partir de 4.000 Kz",
    },
    {
      id: 6,
      date: "12 NOV",
      year: "2025",
      city: "Malanje",
      venue: "Centro Cultural de Malanje",
      time: "19:30",
      status: "coming-soon",
      price: "Em breve",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "text-green-400 bg-green-400/20"
      case "selling-fast":
        return "text-orange-400 bg-orange-400/20"
      case "sold-out":
        return "text-red-400 bg-red-400/20"
      case "coming-soon":
        return "text-blue-400 bg-blue-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Disponível"
      case "selling-fast":
        return "Últimos ingressos"
      case "sold-out":
        return "Esgotado"
      case "coming-soon":
        return "Em breve"
      default:
        return "Disponível"
    }
  }

  return (
    <section id="tour" className="py-20 bg-slate-800/50 tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text mb-6">Tour 2025</h2><br />
          <p className="text-xl text-gray-300">
            Venha viver a experiência única dos shows de Ganan Boy por todo Angola.
          </p>
        </div><br />

        <div className="space-y-4 mb-12">
          {tourDates.map((show) => (
            <div
              key={show.id}
              className="bg-slate-700/30 rounded-2xl p-6 hover:bg-slate-700/50 transition-all mmmppps duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mmmppp">
                <div className="md:col-span-2">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">{show.date}</div>
                    <div className="text-gray-400">{show.year}</div>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-orange-400" size={20} />
                    <div>
                      <h3 className="text-xl font-bold text-white">{show.city}</h3>
                      <p className="text-gray-400">{show.venue}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock size={16} />
                    <span>{show.time}</span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(show.status)}`}>
                    {getStatusText(show.status)}
                  </span>
                </div>

                <div className="md:col-span-2">
                  <div className="text-right">
                    <div className="text-white font-medium mb-2">{show.price}</div>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600"
                      disabled={show.status === "sold-out" || show.status === "coming-soon"}
                    >
                      <Ticket className="mr-2" size={16} />
                      {show.status === "coming-soon" ? "Em breve" : "Ingressos"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          <br />
        <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl p-8 text-center tenewletter">
          <h3 className="text-2xl font-bold text-white mb-4">Não perca nenhum show!</h3>
          <p className="text-gray-300 mb-6">Inscreva-se para receber notificações sobre novos shows e lançamentos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center  tenewletterr ">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 bg-slate-700 text-white inputNewletter border border-slate-600 focus:border-orange-400 focus:outline-none"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 btnNewletter">Inscrever-se</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
