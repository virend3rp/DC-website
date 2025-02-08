"use client";
import "../styles/globals.css";
import SidebarSymbol from "../components/SideBar";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bannerImg bg-no-repeat bg-cover bg-center min-h-screen flex transition-transform duration-300">
        {/* Sidebar */}
        <SidebarSymbol isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content container */}
        <main
          className={`flex-grow w-full transition-transform duration-300 ${
            isOpen ? "translate-x-56" : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
