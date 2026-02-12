import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    image: "/images/noticia-1.jpg",
    category: "Sa\u00fade",
    date: "08 Fev 2026",
    title: "Projeto de lei para amplia\u00e7\u00e3o de UPAs \u00e9 aprovado na comiss\u00e3o",
    excerpt:
      "A proposta prev\u00ea a constru\u00e7\u00e3o de 50 novas Unidades de Pronto Atendimento em regi\u00f5es carentes de infraestrutura m\u00e9dica.",
  },
  {
    image: "/images/noticia-2.jpg",
    category: "Educa\u00e7\u00e3o",
    date: "02 Fev 2026",
    title: "Ricardo Monteiro apresenta programa de inclus\u00e3o digital nas escolas",
    excerpt:
      "Iniciativa pretende levar tablets e internet de alta velocidade para mais de 10 mil escolas p\u00fablicas em todo o pa\u00eds.",
  },
  {
    image: "/images/noticia-3.jpg",
    category: "Pol\u00edtica",
    date: "28 Jan 2026",
    title: "Deputado devolve R$ 1,2 milh\u00e3o de verba parlamentar aos cofres p\u00fablicos",
    excerpt:
      "Pelo quinto ano consecutivo, Ricardo Monteiro devolveu parte significativa da cota parlamentar, refor\u00e7ando seu compromisso com a economia.",
  },
]

export function NewsSection() {
  return (
    <section id="noticias" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            {"Not\u00edcias"}
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {"\u00daltimas Not\u00edcias"}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {"Fique por dentro das nossas a\u00e7\u00f5es, projetos e conquistas no Congresso."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="scroll-reveal group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="mb-3 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Ler mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
