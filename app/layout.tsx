import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sledge",
  description: "Sarcastic Cricket News",
  icons: {
    icon: "/images/haha.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 sm:px-16">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
