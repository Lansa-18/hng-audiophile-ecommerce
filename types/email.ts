export interface EmailItem {
  productId: number;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  itemTotal: number;
}

export interface EmailCustomer {
  name: string;
  email: string;
  phone: string;
}

export interface EmailShippingAddress {
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface EmailOrderData {
  orderId: string;
  customer: EmailCustomer;
  shippingAddress: EmailShippingAddress;
  paymentMethod: "e-money" | "cash";
  items: EmailItem[];
  subtotal: number;
  shippingCost: number;
  vat: number;
  grandTotal: number;
  createdAt: number;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
  messageId?: string;
}
