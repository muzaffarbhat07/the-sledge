import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <main className="flex flex-col items-center justify-center max-w-[1400px] mx-auto px-6 sm:px-16 gap-10 xl:gap-28">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
