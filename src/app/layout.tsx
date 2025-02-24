"use client";

import { UserProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetBrainsMono.variable} font-firacode bg-fundo text-texto flex flex-col md:flex-row-reverse h-screen`}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
