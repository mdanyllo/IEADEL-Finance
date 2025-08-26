import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";

const Monserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "IEADEL Finance",
  description: "Gerenciador de dízimos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${Monserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
