"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return <>{children}</>
}
