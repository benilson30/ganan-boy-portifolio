"use client"

import { useState, useEffect } from "react"
import { Menu, X, Music, User, Calendar, Disc } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Início", icon: Music },
    { href: "#biografia", label: "Biografia", icon: User },
    { href: "#discografia", label: "Discografia", icon: Disc },
    { href: "#tour", label: "Tour", icon: Calendar },
  ]

  return (
    <nav
      className={`  fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-serif  gradient-text">Ganan Boy</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="letters text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <item.icon size={18} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-orange-400 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
