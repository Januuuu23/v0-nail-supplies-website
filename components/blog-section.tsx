import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Guia Completo: Como Aplicar Acrílico em Unhas",
    excerpt: "Aprenda passo a passo a técnica perfeita para aplicação de acrílico profissional.",
    image: "/nail-technician-applying-acrylic-nails-tutorial.jpg",
    readTime: "8 min",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Fibra de Vidro vs Acrílico: Qual Escolher?",
    excerpt: "Descubra as diferenças e vantagens de cada técnica de alongamento.",
    image: "/comparison-fiberglass-vs-acrylic-nails.jpg",
    readTime: "5 min",
    category: "Comparativo",
  },
  {
    id: 3,
    title: "10 Erros Comuns ao Trabalhar com Moldes",
    excerpt: "Evite os principais erros e garanta resultados profissionais sempre.",
    image: "/nail-forms-application-mistakes.jpg",
    readTime: "6 min",
    category: "Dicas",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-balance font-sans text-4xl md:text-5xl font-bold mb-4">Aprenda com os Especialistas</h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutoriais, dicas e guias completos para aprimorar suas técnicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-semibold mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  Ler artigo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  )
}
