import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Strategium | Warhammer 40K Coaching by World Champions",
  description:
    "Level up your Warhammer 40K game with world-champion coaching, masterclasses, and a gamified learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
