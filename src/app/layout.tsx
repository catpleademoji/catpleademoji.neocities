import type { Metadata } from "next";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "catpleademoji",
  description: "The cat pleademojiwebsite!",
  keywords: ["cat", "plead", "emoji", "catpleademoji"],
  robots: { index: true, follow: false }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <div className="main-content">
          <main>
            {children}
          </main>
          <aside>
            <Sidebar />
          </aside>
        </div>
      </body>
    </html>
  );
}
