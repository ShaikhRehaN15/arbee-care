'use client';

// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Import the new Loader component

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {loading && (
          <div className="loading-overlay">
            <Loader />
          </div>
        )}
        <AuthProvider>
          <Layout>
            {children}
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
