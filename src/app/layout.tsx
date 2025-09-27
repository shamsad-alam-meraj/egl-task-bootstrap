import type { Metadata } from "next";
import { Inter, Lato, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Everything Green",
  description: "Measuring Impact, Driving Change",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${lato.variable} d-flex flex-column vh-100 vw-100`}
      >
        <Navbar />
        <main className="flex-grow-1 overflow-auto p-4">{children}</main>
      </body>
    </html>
  );
}
