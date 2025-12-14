"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Kit Acrílico Profissional",
    description: "Kit completo com pó acrílico, monômero e pincéis profissionais",
    price: "R$ 189,90",
    priceValue: 189.9,
    category: "Acrílico",
    image: "/professional-acrylic-nail-kit-pink-powder.jpg",
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Fibra de Vidro Premium",
    description: "Reforço em fibra de vidro para alongamento natural",
    price: "R$ 79,90",
    priceValue: 79.9,
    category: "Fibra de Vidro",
    image: "/fiberglass-nail-extension-kit.jpg",
  },
  {
    id: 3,
    name: "Moldes para Alongamento",
    description: "Caixa com 500 moldes descartáveis profissionais",
    price: "R$ 45,90",
    priceValue: 45.9,
    category: "Moldes",
    image: "/nail-extension-forms-professional.jpg",
  },
  {
    id: 4,
    name: "Kit Polygel Completo",
    description: "Polygel em 6 cores + acessórios para aplicação",
    price: "R$ 149,90",
    priceValue: 149.9,
    category: "Polygel",
    image: "/polygel-nail-kit-professional-colors.jpg",
    badge: "Novidade",
  },
  {
    id: 5,
    name: "Primers e Preparadores",
    description: "Kit essencial de preparação para unhas perfeitas",
    price: "R$ 65,90",
    priceValue: 65.9,
    category: "Preparação",
    image: "/nail-primer-and-prep-products.jpg",
  },
  {
    id: 6,
    name: "Pincéis Profissionais",
    description: "Set com 7 pincéis de alta qualidade",
    price: "R$ 129,90",
    priceValue: 129.9,
    category: "Ferramentas",
    image: "/professional-nail-art-brushes-set.jpg",
  },
  {
    id: 7,
    name: "Esmaltes Tradicionais",
    description: "Coleção com 12 cores vibrantes e duradouras",
    price: "R$ 89,90",
    priceValue: 89.9,
    category: "Esmaltes",
    image: "/colorful-nail-polish-bottles-collection.jpg",
  },
  {
    id: 8,
    name: "Esmaltes em Gel UV/LED",
    description: "Kit com 10 cores de esmalte em gel profissional",
    price: "R$ 159,90",
    priceValue: 159.9,
    category: "Esmaltes em Gel",
    image: "/gel-nail-polish-uv-led-bottles-set.jpg",
    badge: "Mais Vendido",
  },
  {
    id: 9,
    name: "Acetona Pura Profissional",
    description: "Acetona de alta qualidade 1 litro para remoção",
    price: "R$ 29,90",
    priceValue: 29.9,
    category: "Removedores",
    image: "/professional-acetone-bottle-nail-remover.jpg",
  },
  {
    id: 10,
    name: "Algodão para Unhas",
    description: "Pacote com 500g de algodão macio e absorvente",
    price: "R$ 19,90",
    priceValue: 19.9,
    category: "Consumíveis",
    image: "/cotton-balls-for-nail-art-manicure.jpg",
  },
  {
    id: 11,
    name: "Base e Top Coat Gel",
    description: "Duo essencial para finalização perfeita em gel",
    price: "R$ 69,90",
    priceValue: 69.9,
    category: "Esmaltes em Gel",
    image: "/base-coat-top-coat-gel-nail-polish.jpg",
  },
  {
    id: 12,
    name: "Lixa Elétrica Profissional",
    description: "Lixa elétrica com velocidade ajustável e acessórios",
    price: "R$ 299,90",
    priceValue: 299.9,
    category: "Ferramentas",
    image: "/electric-nail-file-drill-professional.jpg",
    badge: "Premium",
  },
  {
    id: 13,
    name: "Kit de Lixas e Blocos",
    description: "Conjunto com 50 lixas e blocos em diferentes grãos",
    price: "R$ 39,90",
    priceValue: 39.9,
    category: "Ferramentas",
    image: "/nail-files-and-buffers-blocks-set.jpg",
  },
  {
    id: 14,
    name: "Removedor de Cutículas",
    description: "Gel amolecedor de cutículas profissional 100ml",
    price: "R$ 24,90",
    priceValue: 24.9,
    category: "Preparação",
    image: "/cuticle-remover-gel-bottle-professional.jpg",
  },
  {
    id: 15,
    name: "Cabine UV/LED 48W",
    description: "Cabine profissional com sensor automático e timer",
    price: "R$ 249,90",
    priceValue: 249.9,
    category: "Equipamentos",
    image: "/uv-led-nail-lamp-48w-professional.jpg",
    badge: "Novidade",
  },
]

export function ProductsSection() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
    })
  }

  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-balance font-sans text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos selecionados com os mais altos padrões de qualidade para profissionais exigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                <h3 className="font-sans text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="text-2xl font-sans font-bold text-primary">{product.price}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full gap-2" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
