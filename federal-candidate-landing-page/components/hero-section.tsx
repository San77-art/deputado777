import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(213_60%_35%),transparent_70%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center md:py-20">
        {/* Text content */}
        <div className="animate-fade-in-up text-center md:text-left">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
            Candidato a Deputado Federal
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              {"Um novo caminho para o Brasil que a gente merece."}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80 md:mx-0">
            {"Compromisso real com transpar\u00eancia, sa\u00fade de qualidade, educa\u00e7\u00e3o transformadora e seguran\u00e7a para todas as fam\u00edlias."}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#propostas"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              {"Conhe\u00e7a as Propostas"}
            </a>
            <a
              href="#transparencia"
              className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {"Painel de Transpar\u00eancia"}
            </a>
          </div>
        </div>

        {/* Candidate photo */}
        <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary-foreground/10 shadow-2xl sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]">
              <Image
                src="/images/candidato-hero.jpg"
                alt="Ricardo Monteiro, candidato a Deputado Federal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  )
}
