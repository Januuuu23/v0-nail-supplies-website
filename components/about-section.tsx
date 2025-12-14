import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Truck, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Todos os produtos são testados e aprovados por profissionais",
  },
  {
    icon: Award,
    title: "Marcas Premium",
    description: "Trabalhamos apenas com as melhores marcas do mercado",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Enviamos para todo o Brasil com agilidade e segurança",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Especializado",
    description: "Nossa equipe está pronta para ajudar você",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-balance font-sans text-4xl md:text-5xl font-bold mb-6">
              Sua Parceira em Beleza Profissional
            </h2>
            <p className="text-pretty text-lg text-muted-foreground mb-6 leading-relaxed">
              Na NailArt Pro, acreditamos que cada manicure merece acesso aos melhores produtos do mercado. Por isso,
              selecionamos cuidadosamente cada item do nosso catálogo, garantindo qualidade superior e resultados
              excepcionais.
            </p>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Com mais de 10 anos de experiência no setor, entendemos as necessidades dos profissionais e oferecemos não
              apenas produtos, mas conhecimento e suporte para o seu crescimento.
            </p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/30">
            <img src="/professional-nail-salon-workspace-manicure.jpg" alt="Nossa equipe" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
