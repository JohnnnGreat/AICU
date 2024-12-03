"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      setIsLoaded(true);
   }, []);

   return (
      <html lang="en">
         <body>
            {isLoaded && (
               <div>
                  <Header />
                  {children}
                  <Footer />
               </div>
            )}
         </body>
      </html>
   );
}
