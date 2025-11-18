# Audiophile E-commerce: Elevate Your Sound Experience 🎧

## Overview
Audiophile E-commerce is a modern full-stack web application built with **Next.js 15 (App Router)** and **TypeScript** for an intuitive and responsive user experience. It features a robust backend powered by **Convex** for real-time data persistence and **Nodemailer** for seamless order confirmation emails, providing a complete solution for browsing, purchasing, and managing premium audio gear.

## ✨ Features

*   **Product Catalog**: Browse a wide range of headphones, speakers, and earphones with detailed product pages.
*   **Shopping Cart**: Add, update quantities, and remove items from a dynamic cart, with state managed by **Zustand**.
*   **Secure Checkout**: A comprehensive checkout process with form validation powered by **Zod** and **React Hook Form**.
*   **Order Management**: Place orders that are securely persisted in a **Convex** database.
*   **Email Confirmation**: Receive immediate order confirmation emails via a **Nodemailer** API route upon successful checkout.
*   **Responsive Design**: Optimized for seamless viewing and interaction across all devices (desktop, tablet, mobile).
*   **Interactive UI**: Smooth animations and transitions powered by **Tailwind CSS** and **Shadcn/ui** components.
*   **Image Optimization**: Next.js Image component for performant asset loading.

## 🚀 Getting Started

Follow these steps to set up and run the Audiophile E-commerce project locally on your machine.

### 📋 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Lansa-18/hng-audiophile-ecommerce.git
    cd hng-audiophile-ecommerce
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Convex**:
    This project uses Convex as its backend. You'll need to install the Convex CLI and deploy your schema and functions.
    *   Install Convex CLI:
        ```bash
        npm install -g convex
        ```
    *   Log in to Convex (follow the prompts to authenticate via your browser):
        ```bash
        npx convex auth
        ```
    *   Deploy your Convex functions and schema:
        ```bash
        npx convex deploy
        ```
    This will generate a `NEXT_PUBLIC_CONVEX_URL` and `CONVEX_DEPLOYMENT` which you will need for your environment variables.

### 🔑 Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```local
NEXT_PUBLIC_CONVEX_URL=https://<your-convex-deployment-url>.convex.cloud
CONVEX_DEPLOYMENT=dev:<your-convex-deployment-name> 

GMAIL_USER=your_gmail_email@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

*   **`NEXT_PUBLIC_CONVEX_URL`**: Your public Convex deployment URL. This is automatically generated after `npx convex deploy`.
*   **`CONVEX_DEPLOYMENT`**: Your Convex deployment name. Also generated after `npx convex deploy`.
*   **`GMAIL_USER`**: The Gmail address you will use to send order confirmation emails.
*   **`GMAIL_APP_PASSWORD`**: A Gmail App Password generated from your Google Account security settings. If you don't have one, you'll need to generate one [here](https://myaccount.google.com/apppasswords).

### 🏃 Running the Development Server

1.  **Start the development server**:
    ```bash
    npm run dev
    ```

2.  **Open in your browser**:
    Navigate to `http://localhost:3000` in your web browser.

## 💻 Usage

Once the application is running, you can:

1.  **Browse Products**: Explore various categories like Headphones, Speakers, and Earphones from the navigation bar.
2.  **View Product Details**: Click on any product to see its detailed description, features, and items included in the box.
3.  **Add to Cart**: On a product details page, adjust the quantity and click "ADD TO CART" to add items to your shopping cart.
4.  **Manage Cart**: Click the cart icon in the navigation bar to view your cart. You can update item quantities or remove items.
5.  **Proceed to Checkout**: From the cart, click "CHECKOUT" to fill in your billing, shipping, and payment details.
6.  **Place Order**: Complete the form, select your payment method (e-Money or Cash on Delivery), and click "CONTINUE & PAY" to place your order. A confirmation modal will appear, and an email confirmation will be sent to the provided email address.

### API Documentation

This project leverages Convex for its database and serverless functions, and a Next.js API route for email handling.

#### Base URL

For Convex functions, API calls are made directly through the Convex client in the frontend.
For the email API, the base URL is the application's root: `/`.

#### Endpoints

##### **Convex Database Mutations (Invoked via Convex client)**

Convex mutations are server-side functions that can modify the database. They are called from the client-side using `useMutation` from `convex/react`.

###### `mutation` `api.orders.createOrder`
**Purpose**: Creates a new order in the Convex database.

**Request**:
```typescript
{
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "e-money" | "cash";
  eMoneyNumber?: string; // Required if paymentMethod is "e-money"
  eMoneyPin?: string;     // Required if paymentMethod is "e-money"
  items: Array<{
    productId: number;
    productName: string;
    productSlug: string;
    productImage: string;
    quantity: number;
    price: number;
    itemTotal: number;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}
```

**Response**:
```typescript
{
  orderId: string; // Unique identifier for the created order
  order: {         // The full document inserted into the 'orders' table
    _id: string;
    _creationTime: number;
    orderId: string;
    status: "pending";
    createdAt: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    city: string;
    zipCode: string;
    country: string;
    paymentMethod: "e-money" | "cash";
    eMoneyNumber?: string;
    eMoneyPin?: string;
    items: Array<{
      productId: number;
      productName: string;
      productSlug: string;
      productImage: string;
      quantity: number;
      price: number;
      itemTotal: number;
    }>;
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
}
```

**Errors**:
-   Convex client-side errors if arguments do not match the expected schema (e.g., missing required fields, incorrect types).

##### **Convex Database Queries (Invoked via Convex client)**

Convex queries are server-side functions that can read from the database. They are called from the client-side using `useQuery` from `convex/react`.

###### `query` `api.orders.getOrderById`
**Purpose**: Retrieves a single order by its unique `orderId`.

**Request**:
```typescript
{
  orderId: string;
}
```

**Response**:
```typescript
{
  _id: string;
  _creationTime: number;
  orderId: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "e-money" | "cash";
  eMoneyNumber?: string;
  eMoneyPin?: string;
  items: Array<{
    productId: number;
    productName: string;
    productSlug: string;
    productImage: string;
    quantity: number;
    price: number;
    itemTotal: number;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
} | undefined
```

###### `query` `api.orders.getOrdersByEmail`
**Purpose**: Retrieves all orders associated with a specific customer email.

**Request**:
```typescript
{
  customerEmail: string;
}
```

**Response**:
```typescript
Array<{
  _id: string;
  _creationTime: number;
  orderId: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "e-money" | "cash";
  eMoneyNumber?: string;
  eMoneyPin?: string;
  items: Array<{
    productId: number;
    productName: string;
    productSlug: string;
    productImage: string;
    quantity: number;
    price: number;
    itemTotal: number;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}>
```

###### `query` `api.orders.getAllOrders`
**Purpose**: Retrieves all orders, with optional pagination.

**Request**:
```typescript
{
  limit?: number;  // Optional limit for the number of orders to return
  cursor?: string; // Optional cursor for pagination (createdAt timestamp of the last item from previous query)
}
```

**Response**:
```typescript
{
  orders: Array<{
    _id: string;
    _creationTime: number;
    orderId: string;
    status: "pending" | "processing" | "shipped" | "delivered";
    createdAt: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    city: string;
    zipCode: string;
    country: string;
    paymentMethod: "e-money" | "cash";
    eMoneyNumber?: string;
    eMoneyPin?: string;
    items: Array<{
      productId: number;
      productName: string;
      productSlug: string;
      productImage: string;
      quantity: number;
      price: number;
      itemTotal: number;
    }>;
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  }>;
  cursor?: string; // Cursor for the next page, if available
}
```

##### **Next.js API Route**

Next.js API routes provide serverless function capabilities for handling HTTP requests.

###### `POST` `/api/send-confirmation`
**Purpose**: Sends an order confirmation email to the customer.

**Request**:
```typescript
{
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: "e-money" | "cash";
  items: Array<{
    productId: number;
    productName: string;
    productImage: string;
    quantity: number;
    price: number;
    itemTotal: number;
  }>;
  subtotal: number;
  shippingCost: number;
  vat: number;
  grandTotal: number;
  createdAt: number;
}
```

**Response**:
```json
{
  "success": true,
  "messageId": "..." 
}
```

**Errors**:
-   **400 Bad Request**:
    -   `{ "success": false, "error": "Missing required fields" }`: If `customer.email` or `orderId` is not provided.
    -   `{ "success": false, "error": "Invalid email format" }`: If the provided `customer.email` is not a valid email address.
-   **500 Internal Server Error**:
    -   `{ "success": false, "error": "Failed to send email. Please try again later." }`: Generic error during email sending.
    -   `{ "success": false, "error": "An unexpected error occurred" }`: For any other unhandled errors during the API call.

## 🛠️ Technologies Used

| Category        | Technology                                                                                                  | Description                                                               |
| :-------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Frontend**    | [Next.js](https://nextjs.org/)                                                                              | React framework for building user interfaces.                             |
|                 | [React](https://react.dev/)                                                                                 | JavaScript library for building interactive UIs.                          |
|                 | [TypeScript](https://www.typescriptlang.org/)                                                               | Strongly typed JavaScript that enhances code quality.                     |
|                 | [Tailwind CSS](https://tailwindcss.com/)                                                                    | Utility-first CSS framework for rapid UI development.                     |
|                 | [Shadcn/ui](https://ui.shadcn.com/)                                                                         | Reusable UI components built with Radix UI and Tailwind CSS.              |
|                 | [Zustand](https://zustand-demo.pmnd.rs/)                                                                    | Small, fast, and scalable bear-bones state-management solution.           |
|                 | [Radix UI](https://www.radix-ui.com/)                                                                       | Low-level UI components for building accessible design systems.            |
|                 | [React Hook Form](https://react-hook-form.com/)                                                             | Performant, flexible and extensible forms with easy-to-use validation.    |
|                 | [Zod](https://zod.dev/)                                                                                     | TypeScript-first schema declaration and validation library.               |
| **Backend**     | [Convex](https://www.convex.dev/)                                                                           | Real-time backend as a service for database and serverless functions.     |
|                 | [Nodemailer](https://nodemailer.com/about/)                                                                 | Module for Node.js applications to send emails.                           |
|                 | [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)          | API endpoints handled by Next.js for server-side logic.                   |
| **Linting/Formatting** | [ESLint](https://eslint.org/)                                                                               | Pluggable JavaScript linter.                                              |
|                 | [Prettier](https://prettier.io/)                                                                            | Opinionated code formatter.                                               |

## 🤝 Contributing

This project currently does not have specific contribution guidelines. Please refrain from creating pull requests or issues at this time.

## 📜 License

No explicit license file was found in the project repository.

## ✒️ Author

**Lansa**

*   [LinkedIn](https://www.linkedin.com/in/lancer18)
*   [X](https://x.com/Lansa_18)
*   [Portfolio](https://lansa-portfolio.vercel.app)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)