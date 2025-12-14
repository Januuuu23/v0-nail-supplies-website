import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-sans text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Produtos Profissionais para <span className="text-primary">Nail Artists</span>
          </h1>
          <p className="text-pretty text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Descubra nossa seleção premium de acrílico, fibra de vidro, moldes e ferramentas profissionais. Qualidade
            superior para resultados impecáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Ver Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Guia para Iniciantes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
