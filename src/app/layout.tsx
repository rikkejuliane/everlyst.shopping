import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Online Shop",
  description: "An awesome online shop built with Next.js",
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
      </body>
    </html>
  );
}
