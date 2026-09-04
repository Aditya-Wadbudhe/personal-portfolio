import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya | Software Developer",
  description:
    "Software developer building scalable web applications and backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}