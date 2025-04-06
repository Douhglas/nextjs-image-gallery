"use client"

import { X } from "lucide-react"
import Image from "next/image"
import type { Photo } from "./ProductCard"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Photo[]
  removeFromCart: (productId: number) => void
}

export default function CartDrawer({ isOpen, onClose, cartItems, removeFromCart }: CartDrawerProps) {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background shadow-lg p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Carrito de Compra</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-muted-foreground">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto p-4 border rounded-md">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.src.original || "/placeholder.svg"} alt={item.photographer} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="font-medium">{item.photographer}</h3>
                      <p className="text-sm text-muted-foreground">${1234}</p>
                    </div>
                    <button  onClick={() => removeFromCart(item.id)} className="h-8 w-8">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
            <div className="border-t my-4"></div>
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">${12345}</span>
              </div>
              <button className="w-full">Proceder al pago</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}