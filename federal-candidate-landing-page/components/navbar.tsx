"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "In\u00edcio" },
  { href: "#transparencia", label: "Transpar\u00eancia" },
  { href: "#propostas", label: "Propostas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#noticias", label: "Not\u00edcias" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className={`font-serif text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Ricardo Monteiro
          </span>
          <span
            className={`hidden text-xs font-medium uppercase tracking-widest sm:inline ${
              scrolled ? "text-accent" : "text-primary-foreground/70"
            }`}
          >
            Deputado Federal
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-card/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
