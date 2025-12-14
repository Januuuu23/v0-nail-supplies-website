import Link from "next/link"
import { Sparkles, Instagram, Facebook, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ContactDialog } from "@/components/contact-dialog"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-sans font-semibold">NailArt Pro</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Sua loja especializada em produtos profissionais para nail art e manicure.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Acrílico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fibra de Vidro
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Moldes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Ferramentas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Troca
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Rastreamento
                </Link>
              </li>
              <li>
                <ContactDialog />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">Receba novidades e dicas exclusivas</p>
            <div className="flex gap-2 mb-4">
              <Input type="email" placeholder="Seu e-mail" className="h-9" />
              <Button size="sm" className="shrink-0">
                Inscrever
              </Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="truncate">contato@nailartpro.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NailArt Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
