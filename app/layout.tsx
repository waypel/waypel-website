import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waypel – The pathway to learn and earn",
  description:
    "Waypel combines quizzes, short videos, and rewards into one engaging experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
