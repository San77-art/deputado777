import Image from "next/image"
import { Award, BookOpen, Briefcase } from "lucide-react"

const timeline = [
  {
    icon: BookOpen,
    year: "1995",
    title: "Forma\u00e7\u00e3o Acad\u00eamica",
    text: "Bacharel em Direito pela Universidade de S\u00e3o Paulo (USP) com especializa\u00e7\u00e3o em Direito P\u00fablico.",
  },
  {
    icon: Briefcase,
    year: "2008",
    title: "In\u00edcio na Pol\u00edtica",
    text: "Eleito Vereador pela primeira vez. Atuou em projetos de sa\u00fade e educa\u00e7\u00e3o municipal.",
  },
  {
    icon: Award,
    year: "2018",
    title: "Deputado Estadual",
    text: "Mandato marcado pela transpar\u00eancia, devolu\u00e7\u00e3o de verba e premia\u00e7\u00f5es de excel\u00eancia parlamentar.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Sobre
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {"Conhe\u00e7a Ricardo Monteiro"}
          </h2>
        </div>

        {/* Two column layout */}
        <div className="scroll-reveal grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/candidato-sobre.jpg"
                alt="Ricardo Monteiro visitando comunidade"
                width={600}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"Nascido e criado na periferia de S\u00e3o Paulo, Ricardo Monteiro conhece de perto os desafios enfrentados pelas fam\u00edlias brasileiras. Pai de tr\u00eas filhos, advogado por forma\u00e7\u00e3o e servidor p\u00fablico por voca\u00e7\u00e3o."}
            </p>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              {"Com mais de 20 anos de vida p\u00fablica, sempre manteve o compromisso com a \u00e9tica, a transpar\u00eancia e o trabalho em prol dos mais necessitados. Agora, busca levar essa experi\u00eancia ao Congresso Nacional."}
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="mt-2 h-full w-px bg-border" />
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-serif text-lg font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
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
