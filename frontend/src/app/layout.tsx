import type { Metadata } from "next";
import { sourceSans } from "@/utils/fonts";
import "./globals.css";

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
    <html lang="pt-br">
      <body className={`${sourceSans.className} `}>{children}</body>
    </html>
  );
}
