import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export async function sendContactEmail(formData: {
  fullname: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured. Please set environment variables.");
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
}
