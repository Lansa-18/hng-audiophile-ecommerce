import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Mutations
export const createOrder = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    shippingAddress: v.string(),
    city: v.string(),
    zipCode: v.string(),
    country: v.string(),
    paymentMethod: v.union(v.literal("e-money"), v.literal("cash")),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),
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
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderId = `ORD-${Date.now()}`;
    const order = await ctx.db.insert("orders", {
      orderId,
      status: "pending",
      createdAt: Date.now(),
      ...args,
    });

    return { orderId, order };
  },
});

// Queries
export const getOrderById = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query("orders")
      .filter((q) => q.eq(q.field("orderId"), args.orderId))
      .collect();
    return orders[0];
  },
});

export const getOrdersByEmail = query({
  args: { customerEmail: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_email", (q) => q.eq("customerEmail", args.customerEmail))
      .collect();
  },
});

export const getAllOrders = query({
  args: {
    limit: v.optional(v.number()),
    cursor: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;
    let ordersQuery = ctx.db.query("orders").order("desc");

    if (args.cursor) {
      ordersQuery = ordersQuery.filter((q) =>
        q.lt(q.field("createdAt"), parseInt(args.cursor!)),
      );
    }

    const orders = await ordersQuery.take(limit);
    const cursor =
      orders.length === limit
        ? orders[orders.length - 1].createdAt.toString()
        : undefined;

    return { orders, cursor };
  },
});
