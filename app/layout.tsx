import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
