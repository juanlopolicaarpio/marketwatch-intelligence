import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "MarketWatch — E-commerce Category Intelligence",
  description: "Market share, platform mix, competitive momentum, and product intelligence across e-commerce marketplaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
