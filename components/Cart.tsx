"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PrimaryButton } from "./ui/button-variants";
import QuantityCounter from "./QuantityCounter";
import { useCartStore } from "@/store/cartStore";
import { formatProductName } from "@/lib/utils";

export default function Cart() {
  const router = useRouter();
  const { items, isOpen, updateQuantity, clearCart, closeCart } =
    useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section
      className="max-custom-630:px-4 fixed inset-0 z-50 flex items-start justify-end bg-black/40 pt-32 pr-[10%]"
      onClick={closeCart}
    >
      <article
        className="text-brand-black max-custom-630:w-full w-[377px] rounded-lg border-red-500 bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[18px] font-bold tracking-[1.29px] uppercase">
            Cart ({totalItems})
          </h2>
          <button
            onClick={clearCart}
            className="hover:text-brand-primary text-15px font-medium underline opacity-50 transition-colors duration-300"
          >
            Remove all
          </button>
        </div>

        <article className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 max-h-90 overflow-y-auto pr-1">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <article className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-lg"
                  />
                  <div>
                    <h3 className="text-15px leading-[25px] font-bold">
                      {formatProductName(item.name)}
                    </h3>
                    <p className="text-[14px] font-bold opacity-50">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </article>
                <QuantityCounter
                  className="h-8"
                  value={item.quantity}
                  onChange={(value) => updateQuantity(item.id, value)}
                />
              </div>
            ))}
          </div>
        </article>

        <div className="mt-8 flex items-center justify-between border-red-500">
          <span className="text-15px font-medium uppercase opacity-50">
            Total
          </span>
          <span className="text-[18px] font-bold">
            $ {totalPrice.toLocaleString()}
          </span>
        </div>

        <div className="mt-6 w-full">
          <PrimaryButton
            onClick={handleCheckout}
            className="w-full justify-center text-center"
          >
            CHECKOUT
          </PrimaryButton>
        </div>
      </article>
    </section>
  );
}
