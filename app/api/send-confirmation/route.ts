import { transporter, verifyEmailConfig } from "@/lib/nodemailer";
import { EmailOrderData } from "@/types/email";
import { NextResponse } from "next/server";

// Verify email configuration on startup
verifyEmailConfig().catch(console.error);

function generateEmailHtml(order: EmailOrderData): string {
  const baseUrl = "https://hng-audiophile-ecommerce.vercel.app/";
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Audiophile Order #${order.orderId} is Confirmed</title>
        <style>
          @media only screen and (max-width: 600px) {
            .main-table { width: 100% !important; }
            .content-padding { padding: 20px !important; }
            .mobile-full-width { width: 100% !important; }
            .mobile-text-center { text-align: center !important; }
            .mobile-padding-adjust { padding: 10px !important; }
            .mobile-button { width: 100% !important; display: block !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #F1F1F1; font-family: Arial, Helvetica, sans-serif;">
        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#F1F1F1" style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <!-- Content Container -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="main-table" style="background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header Section -->
                <tr>
                  <td class="content-padding" style="padding: 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">Hi ${order.customer.name},</h1>
                          <p style="margin: 10px 0 0; color: #000000; font-size: 16px;">Thank you for your order! Your order has been confirmed and will be shipped soon.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 30px; border-bottom: 1px solid #E5E5E5;">
                          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #000000;">Order #${order.orderId}</p>
                          <p style="margin: 5px 0 0; color: rgba(0,0,0,0.5);">Placed on ${formattedDate}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Order Summary Section -->
                <tr>
                  <td class="content-padding" style="padding: 0 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <h2 style="margin: 0; font-size: 18px; color: #000000;">Order Summary</h2>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #F8F8F8; border-radius: 8px; padding: 20px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            ${order.items
                              .map(
                                (item) => `
                              <tr>
                                <td style="padding-bottom: 15px;">
                                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                      <td style="font-weight: bold;">${item.productName}</td>
                                      <td style="text-align: right; white-space: nowrap;">x${item.quantity}</td>
                                    </tr>
                                    <tr>
                                      <td style="color: rgba(0,0,0,0.5);">$${item.price.toLocaleString()}</td>
                                      <td style="text-align: right; white-space: nowrap;">$${item.itemTotal.toLocaleString()}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            `,
                              )
                              .join("")}
                            <tr>
                              <td style="padding-top: 15px; border-top: 1px solid #E5E5E5;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tr>
                                    <td style="padding: 5px 0;">Subtotal:</td>
                                    <td style="text-align: right;">$${order.subtotal.toLocaleString()}</td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 5px 0;">Shipping:</td>
                                    <td style="text-align: right;">$${order.shippingCost.toLocaleString()}</td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 5px 0;">VAT (20%):</td>
                                    <td style="text-align: right;">$${order.vat.toLocaleString()}</td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 10px 0; font-size: 18px; font-weight: bold; color: #D87D4A;">Grand Total:</td>
                                    <td style="padding: 10px 0; font-size: 18px; font-weight: bold; color: #D87D4A; text-align: right;">$${order.grandTotal.toLocaleString()}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Shipping Details Section -->
                <tr>
                  <td class="content-padding" style="padding: 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <h2 style="margin: 0; font-size: 18px; color: #000000;">Shipping Address</h2>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #F8F8F8; border-radius: 8px; padding: 20px;">
                          <p style="margin: 0 0 5px;">${order.shippingAddress.address}</p>
                          <p style="margin: 0 0 5px;">${order.shippingAddress.city}, ${order.shippingAddress.zipCode}</p>
                          <p style="margin: 0;">${order.shippingAddress.country}</p>
                          <p style="margin: 15px 0 0; color: rgba(0,0,0,0.5);">Estimated delivery: 5-7 business days</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Support Section -->
                <tr>
                  <td class="content-padding" style="padding: 0 40px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <h2 style="margin: 0; font-size: 18px; color: #000000;">Need Help?</h2>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #F8F8F8; border-radius: 8px; padding: 20px;">
                          <p style="margin: 0 0 10px;">If you have any questions about your order, our support team is here to help.</p>
                          <p style="margin: 0 0 5px;">Email: support@audiophile.com</p>
                          <p style="margin: 0 0 5px;">Phone: +1 (555) 123-4567</p>
                          <p style="margin: 0;">Hours: Mon-Fri, 9AM-5PM EST</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td class="content-padding" style="padding: 0 40px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td align="center">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                            <tr>
                              <td style="background-color: #D87D4A; border-radius: 8px;">
                                <a href="${baseUrl}" target="_blank" style="display: inline-block; padding: 16px 48px; font-size: 15px; font-weight: bold; color: #FFFFFF; text-decoration: none;">VISIT OUR STORE</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td class="content-padding" style="padding: 0 40px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="text-align: center;">
                      <tr>
                        <td style="padding-bottom: 20px; border-top: 1px solid #E5E5E5; padding-top: 20px;">
                          <p style="margin: 0 0 10px; font-weight: bold;">Audiophile - Bringing you the best audio gear</p>
                          <p style="margin: 0 0 10px; color: rgba(0,0,0,0.5);">Please keep this email for your records.</p>
                          <p style="margin: 0; color: rgba(0,0,0,0.5);">This is an automated message, please do not reply.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
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
