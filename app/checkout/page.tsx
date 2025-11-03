"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useForm } from "react-hook-form";
import { TextField, RadioOption } from "@/components/ui/form-elements";
import { PrimaryButton } from "@/components/ui/button-variants";
import Image from "next/image";
import Navbar from "@/components/Navbar";

type PaymentMethod = "e-money" | "cash";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: PaymentMethod;
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("e-money");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>();

  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping;

  const onSubmit = (data: CheckoutForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <Navbar className="px-container" />
      <main className="bg-brand-light min-h-screen">
        <div className="px-container px-6 pt-16 pb-35 lg:px-40">
          <button className="text-brand-black hover:text-brand-primary mb-8 cursor-pointer text-[15px] font-medium opacity-50 transition-colors duration-300">
            Go Back
          </button>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-lg border-red-500 bg-white p-8 lg:p-12"
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
                    {...register("name", { required: "Name is required" })}
                  />
                  <TextField
                    label="Email Address"
                    placeholder="alexei@mail.com"
                    error={errors.email?.message}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <TextField
                    label="Phone Number"
                    placeholder="+1 202-555-0136"
                    error={errors.phone?.message}
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
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
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                  </div>
                  <TextField
                    label="ZIP Code"
                    placeholder="10001"
                    error={errors.zipCode?.message}
                    {...register("zipCode", {
                      required: "ZIP code is required",
                    })}
                  />
                  <TextField
                    label="City"
                    placeholder="New York"
                    error={errors.city?.message}
                    {...register("city", { required: "City is required" })}
                  />
                  <TextField
                    label="Country"
                    placeholder="United States"
                    error={errors.country?.message}
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                </div>
              </section>

              {/* Payment Details */}
              <section className="space-y-4 border-red-500">
                <h2 className="text-brand-primary text-[13px] font-bold tracking-[1px] uppercase">
                  Payment Details
                </h2>
                <div className="flex justify-between space-y-4">
                  <label className="text-brand-black text-[12px] font-bold">
                    Payment Method
                  </label>
                  <div className="w-72 space-y-4">
                    <RadioOption
                      label="e-Money"
                      checked={paymentMethod === "e-money"}
                      onChange={() => setPaymentMethod("e-money")}
                    />
                    <RadioOption
                      label="Cash on Delivery"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                  </div>
                </div>
              </section>

              {/* CASH ON DELIVERY */}
              <section className="mt-7.5 flex justify-between items-center gap-8">
                <article>
                  <Image
                    src="/assets/checkout/icon-cash-on-delivery.svg"
                    alt="Cash on delivery icon"
                    width={48}
                    height={48}
                  />
                </article>
                <article className="w-138">
                  <p className="text-brand-black/50 text-[15px] leading-[25px] font-normal not-italic">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </article>
              </section>
            </form>

            {/* Summary */}
            <div className="rounded-lg bg-white p-8">
              <h2 className="mb-8 text-[18px] font-bold tracking-[1.29px] uppercase">
                Summary
              </h2>

              <div className="mb-8 max-h-[300px] space-y-6 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-[#F1F1F1]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-bold">
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
                    <span className="text-[15px] font-bold opacity-50">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium uppercase opacity-50">
                    Total
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium uppercase opacity-50">
                    Shipping
                  </span>
                  <span className="text-[18px] font-bold">$ {shipping}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-medium uppercase opacity-50">
                    VAT (Included)
                  </span>
                  <span className="text-[18px] font-bold">
                    $ {vat.toLocaleString()}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[15px] font-medium uppercase opacity-50">
                    Grand Total
                  </span>
                  <span className="text-brand-primary text-[18px] font-bold">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <PrimaryButton type="submit" className="mt-8 w-full">
                CONTINUE & PAY
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
