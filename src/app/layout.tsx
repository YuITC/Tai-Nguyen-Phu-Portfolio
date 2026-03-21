import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tai Nguyen Phu — AI Engineer",
  description:
    "Aspiring AI Engineer specializing in LLM-powered systems, RAG, agentic workflows, and model fine-tuning.",
  openGraph: {
    title: "Tai Nguyen Phu — AI Engineer",
    description:
      "Aspiring AI Engineer specializing in LLM-powered systems, RAG, agentic workflows, and model fine-tuning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
