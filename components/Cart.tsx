"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "./ui/button-variants";
import QuantityCounter from "./QuantityCounter";
import { useCartStore } from "@/store/cartStore";

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

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-start justify-center border-red-500 bg-black/40"
      onClick={closeCart}
    >
      <article
        className="text-brand-black absolute top-32 right-41 w-[377px] rounded-lg border-blue-500 bg-white p-8"
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

        <article className="max-h-60 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-red-500"
            >
              <article className="flex items-center justify-between gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div className="">
                  <h3 className="text-15px leading-[25px] font-bold">
                    {item.name
                      .replace(" Headphones", "")
                      .replace(" Speaker", "")
                      .replace(" Earphones", "")
                      .replace("Mark", "MK")}
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
