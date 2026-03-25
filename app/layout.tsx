import type { Metadata } from "next";
import { Syne, Archivo, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ideaz Ventures — Startup Execution Backed by Experience",
  description:
    "We help founders transform early concepts into market-ready products and scalable platforms. Strategy, product development, branding, and operational execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${archivo.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-white font-bricolage">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
