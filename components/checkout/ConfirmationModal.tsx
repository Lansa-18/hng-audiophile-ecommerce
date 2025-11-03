"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { formatProductName } from "@/lib/utils";
import { PrimaryButton } from "../ui/button-variants";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  grandTotal: number;
  orderItems: CartItem[];
}

export function ConfirmationModal({
  isOpen,
  onClose,
  grandTotal,
  orderItems,
}: ConfirmationModalProps) {
  const router = useRouter();

  const handleBackToHome = () => {
    onClose();
    router.push("/");
  };

  const firstItem = orderItems[0];
  const otherItemsCount = orderItems.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/40" />
      <DialogContent className="text-brand-black max-w-140 rounded-xl p-12" showCloseButton={false}>
        <DialogTitle className="sr-only">Order Confirmation</DialogTitle>
        <section className="space-y-8">
          {/* Checkmark Icon */}
          <article className="h-16 w-16">
            <Image
              src="/assets/checkout/icon-order-confirmation.svg"
              alt="Order confirmed"
              width={64}
              height={64}
            />
          </article>

          {/* Thank you message */}
          <article className="space-y-4">
            <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
              Thank you
              <br />
              for your order
            </h2>
            <p className="text-[15px] leading-[25px] opacity-50">
              You will receive an email confirmation shortly.
            </p>
          </article>

          {/* Order summary */}
          <article className="flex overflow-hidden rounded-lg">
            {/* Items section */}
            <div className="bg-brand-light text-brand-black basis-[65%] border-blue-500 p-6">
              {firstItem && (
                <div className="flex justify-between">
                  <article className="flex items-start gap-4 border-red-500">
                    <div className="bg-brand-light border-brand-black relative h-12.5 w-12.5 overflow-hidden rounded-lg">
                      <Image
                        src={firstItem.image}
                        alt={firstItem.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-brand-black text-[15px] font-bold">
                        {formatProductName(firstItem.name)}
                      </p>
                      <p className="text-[14px] font-bold opacity-50">
                        $ {firstItem.price.toLocaleString()}
                      </p>
                    </div>
                  </article>
                  <article>
                    <span className="text-[15px] font-bold opacity-50">
                      x{firstItem.quantity}
                    </span>
                  </article>
                </div>
              )}
              {otherItemsCount > 0 && (
                <div className="mt-4">
                  <hr className="my-3 h-px bg-black/8" />
                  <p className="text-center text-[12px] font-bold tracking-[-0.21px] opacity-50">
                    and {otherItemsCount} other item(s)
                  </p>
                </div>
              )}
            </div>
            {/* Grand total section */}
            <div className="bg-brand-black flex basis-[43%] flex-col items-center justify-center p-6">
              <p className="mb-2 text-[15px] text-white/50">GRAND TOTAL</p>
              <p className="text-[18px] font-bold text-white">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </article>

          {/* Back to home button */}
          <PrimaryButton
            className="bg-brand-primary hover:bg-brand-primary/80 w-full"
            onClick={handleBackToHome}
          >
            BACK TO HOME
          </PrimaryButton>
        </section>
      </DialogContent>
    </Dialog>
  );
}
