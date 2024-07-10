import type { Metadata } from "next";
import "./globals.css";
import { typeSecond } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-secondary">{children}</body>
    </html>
  );
}
