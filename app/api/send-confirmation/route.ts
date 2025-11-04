import { transporter, verifyEmailConfig } from "@/lib/nodemailer";
import { EmailOrderData, EmailResponse } from "@/types/email";
import { NextResponse } from "next/server";

// Verify email configuration on startup
verifyEmailConfig().catch(console.error);

function generateEmailHtml(order: EmailOrderData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation - Audiophile</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000000;
            margin: 0;
            padding: 0;
            background-color: #F1F1F1;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #FFFFFF;
            border-radius: 8px;
          }
          .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #E5E5E5;
          }
          .success-icon {
            color: #D87D4A;
            font-size: 48px;
            margin-bottom: 20px;
          }
          .order-info {
            background: #F8F8F8;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .items-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .items-table th,
          .items-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #E5E5E5;
          }
          .items-table th {
            background-color: #F8F8F8;
            font-weight: bold;
          }
          .totals {
            margin-top: 20px;
            background: #F8F8F8;
            padding: 20px;
            border-radius: 8px;
          }
          .total-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
          }
          .grand-total {
            color: #D87D4A;
            font-weight: bold;
            font-size: 20px;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 2px solid #E5E5E5;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: rgba(0,0,0,0.5);
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #E5E5E5;
          }
          @media only screen and (max-width: 600px) {
            .container {
              padding: 20px 10px;
            }
            .items-table {
              font-size: 14px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="success-icon">✓</div>
            <h1 style="color: #000000; font-size: 32px; margin: 0;">Thank You for Your Order!</h1>
            <p style="color: rgba(0,0,0,0.7);">Order ID: ${order.orderId}</p>
          </div>

          <div class="order-info">
            <h2 style="color: #000000; margin-bottom: 15px;">Order Details</h2>
            <p><strong>Customer:</strong> ${order.customer.name}</p>
            <p><strong>Email:</strong> ${order.customer.email}</p>
            <p><strong>Phone:</strong> ${order.customer.phone}</p>

            <h3 style="color: #000000; margin: 20px 0 10px;">Shipping Address</h3>
            <p>${order.shippingAddress.address}</p>
            <p>${order.shippingAddress.city}, ${order.shippingAddress.zipCode}</p>
            <p>${order.shippingAddress.country}</p>

            <p><strong>Payment Method:</strong> ${order.paymentMethod === "e-money" ? "E-Money" : "Cash on Delivery"}</p>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items
                .map(
                  (item) => `
                <tr>
                  <td>${item.productName}</td>
                  <td>x${item.quantity}</td>
                  <td>$ ${item.price.toLocaleString()}</td>
                  <td>$ ${item.itemTotal.toLocaleString()}</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>

          <div class="totals">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>$ ${order.subtotal.toLocaleString()}</span>
            </div>
            <div class="total-row">
              <span>Shipping:</span>
              <span>$ ${order.shippingCost.toLocaleString()}</span>
            </div>
            <div class="total-row">
              <span>VAT (20%):</span>
              <span>$ ${order.vat.toLocaleString()}</span>
            </div>
            <div class="total-row grand-total">
              <span>Grand Total:</span>
              <span>$ ${order.grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <div class="footer">
            <p>You will receive a shipping notification once your order is on its way.</p>
            <p>If you have any questions, please contact our support team.</p>
            <p>© ${new Date().getFullYear()} Audiophile. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    console.log("Starting email sending process...");
    const orderData: EmailOrderData = await request.json();
    console.log("Received order data:", JSON.stringify(orderData, null, 2));

    // Validate required fields
    if (!orderData.customer?.email || !orderData.orderId) {
      console.error("Missing required fields:", {
        email: orderData.customer?.email,
        orderId: orderData.orderId,
      });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderData.customer.email)) {
      console.error("Invalid email format:", orderData.customer.email);
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    try {
      console.log("Attempting to send email to:", orderData.customer.email);
      const info = await transporter.sendMail({
        from: `Audiophile <${process.env.GMAIL_USER}>`,
        to: orderData.customer.email,
        subject: "Order Confirmation - Audiophile",
        html: generateEmailHtml(orderData),
      });

      console.log("Email sent successfully:", info);
      return NextResponse.json({
        success: true,
        messageId: info.messageId,
      });
    } catch (emailError) {
      console.error("SMTP error:", emailError);
      return NextResponse.json(
        {
          success: false,
          error:
            emailError instanceof Error
              ? emailError.message
              : "Failed to send email. Please try again later.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Unexpected error in email sending:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 },
    );
  }
}
