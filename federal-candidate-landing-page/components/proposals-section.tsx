import { Heart, GraduationCap, Shield, Leaf, Wifi, Users } from "lucide-react"

const proposals = [
  {
    icon: Heart,
    title: "Sa\u00fade para Todos",
    description:
      "Mais investimento no SUS, amplia\u00e7\u00e3o de UPAs e postos de sa\u00fade, al\u00e9m de programas de sa\u00fade mental para a popula\u00e7\u00e3o.",
    highlights: ["Mais m\u00e9dicos nas periferias", "Farm\u00e1cia popular expandida", "Sa\u00fade mental acess\u00edvel"],
  },
  {
    icon: GraduationCap,
    title: "Educa\u00e7\u00e3o Transformadora",
    description:
      "Ensino p\u00fablico de qualidade com tecnologia, valoriza\u00e7\u00e3o dos professores e acesso universal ao ensino superior.",
    highlights: ["Escolas em tempo integral", "Bolsas de estudo", "Tecnologia na sala de aula"],
  },
  {
    icon: Shield,
    title: "Seguran\u00e7a com Intelig\u00eancia",
    description:
      "Pol\u00edticas p\u00fablicas de seguran\u00e7a baseadas em dados, tecnologia e preven\u00e7\u00e3o da viol\u00eancia nas comunidades.",
    highlights: ["Policiamento comunit\u00e1rio", "C\u00e2meras inteligentes", "Programas para jovens"],
  },
  {
    icon: Leaf,
    title: "Meio Ambiente Sustent\u00e1vel",
    description:
      "Projetos de energia limpa, reflorestamento e fiscaliza\u00e7\u00e3o ambiental para proteger o futuro das pr\u00f3ximas gera\u00e7\u00f5es.",
    highlights: ["Energia renov\u00e1vel", "Combate ao desmatamento", "Cidades sustent\u00e1veis"],
  },
  {
    icon: Wifi,
    title: "Inclus\u00e3o Digital",
    description:
      "Internet para todos, capacita\u00e7\u00e3o tecnol\u00f3gica e moderniza\u00e7\u00e3o dos servi\u00e7os p\u00fablicos digitais.",
    highlights: ["Wi-Fi em \u00e1reas p\u00fablicas", "Cursos de programa\u00e7\u00e3o", "Governo digital"],
  },
  {
    icon: Users,
    title: "Gera\u00e7\u00e3o de Empregos",
    description:
      "Apoio \u00e0s micro e pequenas empresas, incentivos fiscais e programas de primeiro emprego para os jovens.",
    highlights: ["Cr\u00e9dito facilitado", "Desburocratiza\u00e7\u00e3o", "Capacita\u00e7\u00e3o profissional"],
  },
]

export function ProposalsSection() {
  return (
    <section id="propostas" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Propostas
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {"Nossas Bandeiras de Luta"}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {"Cada proposta nasce da escuta ativa das comunidades. Conhe\u00e7a os pilares do nosso mandato."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proposals.map((proposal, index) => (
            <div
              key={proposal.title}
              className="scroll-reveal group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <proposal.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {proposal.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {proposal.description}
              </p>
              <ul className="flex flex-col gap-2">
                {proposal.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
