"use client"

import { Phone, Mail, MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

const contacts = [
  {
    name: "Maria Silva",
    role: "Consultora de Vendas",
    phone: "(11) 98765-4321",
    email: "maria.silva@nailartpro.com",
    whatsapp: "5511987654321",
  },
  {
    name: "Ana Santos",
    role: "Atendimento ao Cliente",
    phone: "(11) 98765-4322",
    email: "ana.santos@nailartpro.com",
    whatsapp: "5511987654322",
  },
  {
    name: "Juliana Costa",
    role: "Suporte Técnico",
    phone: "(11) 98765-4323",
    email: "juliana.costa@nailartpro.com",
    whatsapp: "5511987654323",
  },
]

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Contato</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Entre em Contato</DialogTitle>
          <DialogDescription>Nossa equipe está pronta para atender você e responder suas dúvidas</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{contact.role}</p>

                    <div className="space-y-2">
                      <a
                        href={`tel:${contact.phone.replace(/\D/g, "")}`}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{contact.email}</span>
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-4 text-sm">
          <p className="font-semibold mb-1">Horário de Atendimento</p>
          <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
          <p className="text-muted-foreground">Sábado: 9h às 13h</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
