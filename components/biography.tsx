"use client"

import { Heart, Globe, Award, Mic } from "lucide-react"

export default function Biography() {
  const highlights = [
    {
      icon: Heart,
      title: "Letras Altruístas",
      description: "Mensagens positivas que tocam o coração dos angolanos",
    },
    {
      icon: Globe,
      title: "Raízes Africanas",
      description: "Mistura autêntica de ritmos folclóricos tradicionais",
    },
    {
      icon: Award,
      title: "Estrela Nacional",
      description: "Reconhecimento crescente no mercado musical angolano",
    },
    {
      icon: Mic,
      title: "Versatilidade",
      description: "Domínio do Afrobeat, R&B e Rap melódico",
    },
  ]

  return (
    <section id="biografia" className="py-20 bg-slate-800/50 flexerSectionBiografy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text biograf-text">Biografia</h2>
          <p className="text-xl text-gray-300">
            Conheça a jornada de um jovem talento que está revolucionando a música angolana.
          </p><br />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-orange-400">Ganan Boy</strong> é um jovem músico, compositor e instrumentista de
                25 anos que tem se destacado no cenário musical angolano com suas letras altruístas e melodias
                envolventes.
              </p>

              <p className="text-lg leading-relaxed">
                Suas composições enfatizam as <strong className="text-orange-400">raízes africanas</strong>, criando uma
                mistura única de ritmos folclóricos tradicionais com variedades modernas do Afrobeat, R&B e Rap
                melódico.
              </p>

              <p className="text-lg leading-relaxed">
                Com seu <strong className="text-orange-400">carisma natural</strong> e energia pura, Ganan Boy tem
                conquistado o coração de muitos angolanos e despertado olhares internacionais, acumulando mais de meio
                milhão de seguidores e mais de 8 milhões de alcance em suas redes sociais.
              </p>

              <p className="text-lg leading-relaxed">
                Em pouco tempo, tem se provado ser uma <strong className="text-orange-400">estrela em ascensão</strong>{" "}
                no mercado nacional, representando a nova geração da música angolana.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-6 ppprp rounded-2xl hover:bg-slate-700/70 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                  <highlight.icon className="text-orange-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl text-center impo">
          <h3 className="text-2xl font-bold text-white mb-4">Impacto nas Redes Sociais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold gradient-text">500K+</div>
              <div className="text-gray-300">Seguidores</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">8M+</div>
              <div className="text-gray-300">Alcance Total</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">25</div>
              <div className="text-gray-300">Anos de Idade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
