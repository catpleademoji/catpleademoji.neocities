import { useEmoji } from "./emojis/Emojis";
import { EmojiImage } from "./emojis/EmojiImage";
import Link from "next/link";

export default function NotFoundPage() {
    const dizzyEmoji = useEmoji("cat-dizzy");
    const pleadEmoji = useEmoji("cat-plead");

    return (
        <main style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>404 Not Found</h1>
            <div style={{ width: 320 }}>
                <EmojiImage {...dizzyEmoji!} />
            </div>
            <p>Sorry, the page you were looking for was not found.</p>
            <Link href="/">
                <span style={{ width: "2rem" }}>
                    <EmojiImage {...pleadEmoji!} />
                </span>
                Home
            </Link>
        </main>
    )
}