export interface OrderItem {
  productId: number;
  productName: string;
  productSlug: string;
  productImage: string;
  quantity: number;
  price: number;
  itemTotal: number;
}

export interface OrderData {
  orderId: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: number;

  // Customer details
  customerName: string;
  customerEmail: string;
  customerPhone: string;

  // Shipping details
  shippingAddress: string;
  city: string;
  zipCode: string;
  country: string;

  // Payment details
  paymentMethod: "e-money" | "cash";
  eMoneyNumber?: string;
  eMoneyPin?: string;

  // Order items and totals
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}
