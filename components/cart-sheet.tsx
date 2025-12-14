"use client"

import { ShoppingCart, Plus, Minus, Trash2, Tag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const VALID_COUPONS = {
  "ESMALTE+++": {
    discount: 0.2,
    name: "ESMALTE+++",
  },
}

export function CartSheet() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)
  const [couponError, setCouponError] = useState("")

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase()
    if (VALID_COUPONS[code as keyof typeof VALID_COUPONS]) {
      setAppliedCoupon(code)
      setCouponError("")
      setCouponCode("")
    } else {
      setCouponError("Cupom inválido")
      setAppliedCoupon(null)
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode("")
    setCouponError("")
  }

  const discount = appliedCoupon ? totalPrice * VALID_COUPONS[appliedCoupon as keyof typeof VALID_COUPONS].discount : 0
  const finalPrice = totalPrice - discount

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {totalItems}
            </Badge>
          )}
          <span className="sr-only">Carrinho</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto py-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary/30 shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 line-clamp-2">{item.name}</h4>
                      <p className="text-primary font-semibold">{item.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <SheetFooter className="border-t border-border pt-4 space-y-4">
                <div className="w-full space-y-3">
                  <div className="border border-border rounded-lg p-3 bg-secondary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Cupom de Desconto</span>
                    </div>

                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-md px-3 py-2">
                        <div className="flex items-center gap-2">
                          <Tag className="h-3.5 w-3.5 text-primary" />
                          <span className="text-sm font-semibold text-primary">{appliedCoupon}</span>
                          <span className="text-xs text-muted-foreground">
                            (-{(VALID_COUPONS[appliedCoupon as keyof typeof VALID_COUPONS].discount * 100).toFixed(0)}%)
                          </span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleRemoveCoupon}>
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Digite o cupom"
                            value={couponCode}
                            onChange={(e) => {
                              setCouponCode(e.target.value.toUpperCase())
                              setCouponError("")
                            }}
                            className="flex-1 h-9 text-sm"
                            onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                          />
                          <Button
                            onClick={handleApplyCoupon}
                            size="sm"
                            variant="secondary"
                            disabled={!couponCode.trim()}
                          >
                            Aplicar
                          </Button>
                        </div>
                        {couponError && <p className="text-xs text-destructive">{couponError}</p>}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-sm text-primary">
                        <span>Desconto ({appliedCoupon})</span>
                        <span>- R$ {discount.toFixed(2).replace(".", ",")}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-semibold border-t border-border pt-2">
                      <span>Total</span>
                      <span className="text-primary">R$ {finalPrice.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Finalizar Compra
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
