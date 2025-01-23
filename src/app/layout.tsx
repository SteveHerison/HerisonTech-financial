import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "My App",
  description: "An app with custom fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetBrainsMono.variable} font-pixelify bg-blue-950 text-zinc-200 flex flex-col md:flex-row-reverse h-screen`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
