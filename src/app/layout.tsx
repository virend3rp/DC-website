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
      <body className="flex min-h-screen transition-transform duration-300">
        {/* Sidebar */}
        <SidebarSymbol isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Shift main content when sidebar opens */}
        <main
          className={`flex-grow container mx-auto transition-transform duration-300 ${
            isOpen ? "translate-x-56" : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
