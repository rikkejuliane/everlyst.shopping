import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "everlyst.shopping • Online Store",
  description: "A modern, stylish shopping experience built with Next.js.",
  keywords: ["online shop", "ecommerce", "next.js", "typescript", "everlyst"],
  authors: [
    { name: "Rikke Juliane", url: "https://rikkejuliane.netlify.app/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
