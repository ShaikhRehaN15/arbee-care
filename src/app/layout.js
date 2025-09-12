// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
import Layout from "@/components/layout"; // ← Your client component with header

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arbee Group",
  description: "Premium marine ingredients for global wellness",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Layout> {/* ← This wraps children and includes the sticky header */}
            {children}
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}