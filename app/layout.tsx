import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sarpanch } from "next/font/google";
import Background from "@/components/background";

export const metadata: Metadata = {
  title: "ARZI | Professional Web Developer Portfolio by Gunawan",
  description:
    "ARZI by Gunawan – A professional web developer specializing in full-stack development, responsive design, and creative solutions for businesses and individuals. Explore my portfolio and let’s bring your vision to life.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarpach = Sarpanch({
  subsets: ["latin"],
  variable: "--font-sarpanch",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sarpach.variable} text-white antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
