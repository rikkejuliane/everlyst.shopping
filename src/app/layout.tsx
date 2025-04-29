import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
