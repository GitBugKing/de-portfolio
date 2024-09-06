import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome To My Portfolio Site | Vincent Liu",
  openGraph: {
    title: "Welcome To My Portfolio Site | Vincent Liu",
    description: "My Coding Chronicles",
    type: "website",
    url: "https://de-portfolio.vercel.app/", 
    images: [
      {
        url: "https://de-portfolio.vercel.app/avatar.png", 
        width: 100,
        height: 70,
        alt: "Vincent Liu's Portfolio Cover",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
