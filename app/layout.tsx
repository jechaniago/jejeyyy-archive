import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const reading = Lora({
  subsets: ["latin"],
  variable: "--font-reading",
  weight: ["400", "500", "600", "700"],
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JEJEYYY ARCHIVE — A Home for Stories That Live Forever",
  description: "An independent digital literary archive by Jejeyyy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${reading.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
