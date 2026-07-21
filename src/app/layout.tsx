import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Tai Nguyen Phu — LLM & AI Agent Engineer",
  description:
    "LLM and AI Agent Engineer building reliable agentic RAG systems, multimodal document intelligence, and applied AI products.",
  openGraph: {
    title: "Tai Nguyen Phu — LLM & AI Agent Engineer",
    description:
      "LLM and AI Agent Engineer building reliable agentic RAG systems, multimodal document intelligence, and applied AI products.",
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
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
