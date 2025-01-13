"use client";

import { useEffect } from "react";
import "./globals.css";
import { Header, Footer } from "@/components";

export default function RootLayout({ children }) {
  useEffect(() => {
    window.location.href = `https://api.id.me/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_IDME_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_IDME_REDIRECT_URI}&response_type=code&scope=${process.env.NEXT_PUBLIC_IDME_SCOPE}`;
  }, []);
  return (
    <html lang="en">
      <body className="max-w-[1400px] m-auto">
        <Header />
        <main className="p-4 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
