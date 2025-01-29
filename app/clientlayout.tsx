"use client";

import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";

import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
        {children}
    </div>
  );
}