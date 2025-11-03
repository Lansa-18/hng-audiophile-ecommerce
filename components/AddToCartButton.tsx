"use client";

import { useState } from "react";
import { PrimaryButton } from "./ui/button-variants";
import QuantityCounter from "./QuantityCounter";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/lib/get-product-data";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);


  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image.desktop.replace("./", "/"),
    });
  };

  return (
    <div className="flex w-full items-center gap-4">
      <QuantityCounter value={quantity} onChange={setQuantity} />
      <PrimaryButton className="w-40" onClick={handleAddToCart}>
        ADD TO CART
      </PrimaryButton>
    </div>
  );
}
