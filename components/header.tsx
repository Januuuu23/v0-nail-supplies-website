import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartSheet } from "@/components/cart-sheet"
import { ContactDialog } from "@/components/contact-dialog"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-sans font-semibold">
            NailArt Pro
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#produtos" className="text-sm font-medium hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Nós
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <CartSheet />
          <div className="hidden md:block">
            <ContactDialog />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
