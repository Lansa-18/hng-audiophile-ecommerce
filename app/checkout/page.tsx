"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, RadioOption } from "@/components/ui/form-elements";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { checkoutFormSchema, type CheckoutFormData } from "./validation";
import { PrimaryButton } from "@/components/ui/button-variants";
import { ConfirmationModal } from "@/components/checkout/ConfirmationModal";
import { formatProductName } from "@/lib/utils";
import { toast } from "@/lib/toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderItems, setOrderItems] = useState<typeof items>([]);
  const createOrderMutation = useMutation(api.orders.createOrder);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: "cash",
      eMoneyNumber: null,
      eMoneyPin: null,
    },
  });

  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping;

  // Watch payment method for validation
  const watchPaymentMethod = watch("paymentMethod");

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      if (items.length === 0) {
        toast.warning("Cart is empty", {
          description: "Add some items to your cart before checking out",
        });
        return;
      }

      setIsSubmitting(true);

      const orderData = {
        customerName: data.name,
        customerEmail: data.email,
        customerPhone: data.phone,
        shippingAddress: data.address,
        city: data.city,
        zipCode: data.zipCode,
        country: data.country,
        paymentMethod: data.paymentMethod as "e-money" | "cash",
        eMoneyNumber: data.eMoneyNumber || undefined,
        eMoneyPin: data.eMoneyPin || undefined,
        items: items.map((item) => ({
          productId: item.id,
          productName: item.name,
          productSlug: item.name.toLowerCase().replace(/ /g, "-"),
          productImage: item.image,
          quantity: item.quantity,
          price: item.price,
          itemTotal: item.price * item.quantity,
        })),
        subtotal: totalPrice,
        shipping,
        vat,
        grandTotal,
      };

      const { orderId } = await createOrderMutation(orderData);

      // Prepare email data
      const emailData = {
        orderId,
        customer: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        shippingAddress: {
          address: data.address,
          city: data.city,
          zipCode: data.zipCode,
          country: data.country,
        },
        paymentMethod: data.paymentMethod as "e-money" | "cash",
        items: items.map((item) => ({
          productId: item.id,
          productName: item.name,
          productImage: item.image,
          quantity: item.quantity,
          price: item.price,
          itemTotal: item.price * item.quantity,
        })),
        subtotal: totalPrice,
        shippingCost: shipping,
        vat,
        grandTotal,
        createdAt: Date.now(),
      };

      // Send confirmation email
      try {
        const emailResponse = await fetch("/api/send-confirmation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok) {
          console.error("Email API error:", emailResult);
          throw new Error(
            emailResult.error || "Failed to send confirmation email",
          );
        }

        if (emailResult.success) {
          toast.success("Order confirmation email sent!", {
            description: `Email sent to ${data.email}`,
          });
        } else {
          throw new Error("Email sending failed");
        }
      } catch (emailError) {
        // Don't block the checkout process if email fails
        console.error("Error sending confirmation email:", emailError);
        toast.error("Order placed but email delivery failed", {
          description:
            emailError instanceof Error
              ? emailError.message
              : "Our team has been notified and will contact you shortly.",
        });
      }

      // Save order items before clearing cart
      setOrderItems(items);

      // Show confirmation modal
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Order failed", {
        description:
          error instanceof Error ? error.message : "Please try again later",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar className="px-container" />
      <main className="bg-brand-light min-h-screen">
        <div className="px-container px-6 pt-16 pb-35 lg:px-40">
          <button className="text-brand-black hover:text-brand-primary text-15px mb-8 cursor-pointer font-medium opacity-50 transition-colors duration-300">
            Go Back
          </button>

          <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
            {/* Checkout Form */}
            <form
              id="checkout-form"
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-lg bg-white p-8 lg:p-12"
            >
              <h1 className="text-brand-black mb-10 text-3xl font-bold tracking-[1px]">
                CHECKOUT
              </h1>

              {/* Billing Details */}
              <section className="mb-12.5 space-y-6">
                <h2 className="text-brand-primary text-[13px] font-bold tracking-[1px] uppercase">
                  Billing Details
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <TextField
                    label="Name"
                    placeholder="Alexei Ward"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <TextField
                    label="Email Address"
                    placeholder="alexei@mail.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <TextField
                    label="Phone Number"
                    placeholder="+1 202-555-0136"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>
              </section>

              {/* Shipping Info */}
              <section className="mb-12 space-y-6">
                <h2 className="text-brand-primary text-[13px] font-bold tracking-[1px] uppercase">
                  Shipping Info
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <TextField
                      label="Address"
                      placeholder="1137 Williams Avenue"
                      error={errors.address?.message}
                      {...register("address")}
                    />
                  </div>
                  <TextField
                    label="ZIP Code"
                    placeholder="10001"
                    error={errors.zipCode?.message}
                    {...register("zipCode")}
                  />
                  <TextField
                    label="City"
                    placeholder="New York"
                    error={errors.city?.message}
                    {...register("city")}
                  />
                  <TextField
                    label="Country"
                    placeholder="United States"
                    error={errors.country?.message}
                    {...register("country")}
                  />
                </div>
              </section>

              {/* Payment Details */}
              <section className="space-y-4">
                <h2 className="text-brand-primary text-[13px] font-bold tracking-[1px] uppercase">
                  Payment Details
                </h2>
                <div className="flex justify-between">
                  <label className="text-brand-black text-[12px] font-bold">
                    Payment Method
                  </label>
                  <div className="w-72 space-y-4">
                    <RadioOption
                      label="e-Money"
                      value="e-money"
                      checked={watchPaymentMethod === "e-money"}
                      {...register("paymentMethod")}
                    />
                    <RadioOption
                      label="Cash on Delivery"
                      value="cash"
                      checked={watchPaymentMethod === "cash"}
                      {...register("paymentMethod")}
                    />
                  </div>
                </div>

                {watchPaymentMethod === "e-money" && (
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <TextField
                      label="e-Money Number"
                      placeholder="238521993"
                      error={errors.eMoneyNumber?.message}
                      {...register("eMoneyNumber")}
                    />
                    <TextField
                      label="e-Money PIN"
                      placeholder="6891"
                      error={errors.eMoneyPin?.message}
                      {...register("eMoneyPin")}
                    />
                  </div>
                )}

                {/* Cash on Delivery */}
                {watchPaymentMethod === "cash" && (
                  <div className="mt-8 flex items-center gap-8">
                    <div>
                      <Image
                        src="/assets/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on delivery icon"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-brand-black/50 text-[15px] leading-[25px]">
                        The &apos;Cash on Delivery&apos; option enables you to
                        pay in cash when our delivery courier arrives at your
                        residence. Just make sure your address is correct so
                        that your order will not be cancelled.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            </form>

            {/* Summary */}
            <div className="rounded-lg bg-white p-8">
              <h2 className="text-brand-black mb-8 text-[18px] font-bold tracking-[1.29px] uppercase">
                Summary
              </h2>

              <div className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 mb-8 max-h-[300px] overflow-y-auto pr-2">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="bg-brand-light relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-brand-black min-w-0 flex-1">
                        <h3 className="text-15px truncate font-bold">
                          {formatProductName(item.name)}
                        </h3>
                        <p className="text-[14px] font-bold opacity-50">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-brand-black text-15px shrink-0 font-bold opacity-50">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-brand-black space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-15px font-medium uppercase opacity-50">
                    Total
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-15px font-medium uppercase opacity-50">
                    Shipping
                  </span>
                  <span className="text-[18px] font-bold">$ {shipping}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-15px font-medium uppercase opacity-50">
                    VAT (Included)
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {vat.toLocaleString()}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-15px font-medium uppercase opacity-50">
                    Grand Total
                  </span>
                  <span className="text-brand-primary text-[18px] font-bold">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <PrimaryButton
                form="checkout-form"
                type="submit"
                className="mt-8 w-full"
                disabled={isSubmitting || items.length === 0}
              >
                {isSubmitting ? "Processing..." : "CONTINUE & PAY"}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          clearCart();
          reset();
        }}
        orderItems={orderItems}
        grandTotal={grandTotal}
      />
    </>
  );
}
