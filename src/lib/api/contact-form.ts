import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactFormSchema.parse(data))
  .handler(async ({ data }) => {
    // Store contact form submission
    // In production, you would send an email here using a service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Or store in a database and process later

    console.log("Contact form submission:", data);

    // For now, we'll just log and return success
    // TODO: Connect to email service or database storage

    return {
      success: true,
      message: "Contact form submitted successfully",
    };
  });
