import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  address: z.string().min(1, "Address is required"),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.enum(["e-money", "cash"]),
  eMoneyNumber: z
    .string()
    .regex(/^\d{9}$/, "Please enter a valid 9-digit e-Money number")
    .optional()
    .nullable(),
  eMoneyPin: z
    .string()
    .regex(/^\d{4}$/, "Please enter a valid 4-digit PIN")
    .optional()
    .nullable(),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
