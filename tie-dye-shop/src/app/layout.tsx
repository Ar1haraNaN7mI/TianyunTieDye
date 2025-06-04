import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "天韵扎染 - 传承千年工艺",
  description: "传统扎染工艺，现代美学呈现",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 