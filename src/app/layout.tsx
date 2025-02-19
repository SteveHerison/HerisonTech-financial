"use client";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { AppProvider } from "@/contexts";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/signin" || pathname === "/signup";
  return (
    <html lang="pt-BR">
      <body
        className={`${jetBrainsMono.variable} font-pixelify bg-blue-950 text-zinc-200 flex flex-col md:flex-row-reverse h-screen`}
      >
        <AppProvider>{children}</AppProvider>
        {!hideNavbar && <Navbar />}
      </body>
    </html>
  );
}
