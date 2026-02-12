"use client"

import { useState, type FormEvent } from "react"
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone, Send } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function SiteFooter() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="scroll-reveal grid gap-12 lg:grid-cols-3">
          {/* Column 1: Info */}
          <div>
            <h3 className="mb-2 font-serif text-2xl font-bold">Ricardo Monteiro</h3>
            <p className="mb-6 text-sm text-primary-foreground/70">
              {"Candidato a Deputado Federal comprometido com um Brasil mais justo, transparente e inclusivo."}
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                {"Bras\u00edlia, DF \u2014 S\u00e3o Paulo, SP"}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (11) 99999-0000
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                contato@ricardomonteiro.com.br
              </span>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">
              {"Navega\u00e7\u00e3o"}
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: "#inicio", label: "In\u00edcio" },
                { href: "#transparencia", label: "Transpar\u00eancia" },
                { href: "#propostas", label: "Propostas" },
                { href: "#sobre", label: "Sobre" },
                { href: "#noticias", label: "Not\u00edcias" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact form */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">
              Fale Conosco
            </h4>
            {sent ? (
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 text-center">
                <p className="text-sm font-semibold text-accent">
                  {"Mensagem enviada com sucesso!"}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  {"Entraremos em contato em breve."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
                <textarea
                  placeholder="Sua mensagem"
                  required
                  rows={3}
                  className="resize-none rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {"\u00a9 2026 Ricardo Monteiro. Todos os direitos reservados."}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
