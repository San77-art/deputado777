"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, BarChart3, Clock, TrendingDown } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: 72,
    suffix: "%",
    label: "Economia da Verba Parlamentar",
    description: "Devolvido aos cofres p\u00fablicos no \u00faltimo mandato",
  },
  {
    icon: BarChart3,
    value: 98,
    suffix: "%",
    label: "Frequ\u00eancia em Plen\u00e1rio",
    description: "Presen\u00e7a nas vota\u00e7\u00f5es da C\u00e2mara Federal",
  },
  {
    icon: Clock,
    value: 147,
    suffix: "",
    label: "Projetos Apresentados",
    description: "Propostas de lei em prol da popula\u00e7\u00e3o",
  },
  {
    icon: TrendingDown,
    value: 0,
    suffix: "",
    label: "Processos Judiciais",
    description: "Ficha 100% limpa e hist\u00f3rico transparente",
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeOut * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [target])

  return (
    <span ref={ref} className="font-serif text-5xl font-bold text-primary sm:text-6xl">
      {count}
      {suffix}
    </span>
  )
}

export function TransparencyPanel() {
  return (
    <section id="transparencia" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            {"Transpar\u00eancia"}
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {"Compromisso com a Presta\u00e7\u00e3o de Contas"}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {"Nossos n\u00fameros falam por si. Confira o desempenho parlamentar de Ricardo Monteiro com total transpar\u00eancia."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="scroll-reveal group rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-6 w-6" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
