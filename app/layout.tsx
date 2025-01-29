import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistProvider, CssBaseline } from "@geist-ui/react"; // Correct import for Geist UI

import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Liane COUPAT CANDOULIVES - Web Developer",
  description: "Mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
        <GeistProvider>
          <CssBaseline />
          {children}
        </GeistProvider>
      </body>
    </html>
  );
}
