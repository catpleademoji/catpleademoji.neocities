import type { Metadata } from "next";
import Link from "next/link";
import { EmojiImage } from "./emojis/EmojiImage";
import { useEmoji } from "./emojis/Emojis";
import Sidebar from "./Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "catpleademoji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pleadEmoji = useEmoji("cat-plead");

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link className="home" href="/">
              <EmojiImage {...pleadEmoji!} />
              cat plead emoji
            </Link>
            <Link href="emojis">Emojis</Link>
            <Link href="games">Games</Link>
          </nav>
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
