"use client"

import { Instagram, Facebook, Youtube, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-slate-900 py-16 footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-serif gradient-text mb-4">Ganan Boy</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Jovem músico angolano revolucionando a cena musical com suas raízes africanas e melodias envolventes que
              tocam o coração de milhões.
            </p>
            <div className="flex space-x-4 socialFooter">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-full socialFooter flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-slate-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#biografia" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Biografia
                </a>
              </li>
              <li>
                <a href="#discografia" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Discografia
                </a>
              </li>
              <li>
                <a href="#tour" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Tour
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>contato@gananboy.ao</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+244 900 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Ganan Boy. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-sm">
              Desenvolvido pela <span className="text-orange-400 font-medium">Gingasoft .Inc</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
