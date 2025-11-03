import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    orderId: v.string(),
    status: v.string(),
    createdAt: v.number(),

    // Customer details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping details
    shippingAddress: v.string(),
    city: v.string(),
    zipCode: v.string(),
    country: v.string(),

    // Payment details
    paymentMethod: v.union(v.literal("e-money"), v.literal("cash")),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order items
    items: v.array(
      v.object({
        productId: v.number(),
        productName: v.string(),
        productSlug: v.string(),
        productImage: v.string(),
        quantity: v.number(),
        price: v.number(),
        itemTotal: v.number(),
      }),
    ),

    // Order totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  }).index("by_email", ["customerEmail"]),
});
