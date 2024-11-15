import Link from "next/link";
import { EmojiImage } from "./emojis/EmojiImage";
import emojis from "./emojis/Emojis";

export default function Home() {
  return (
    <>
      <h1>Recent emojis</h1>
      <div className="emoji-container" style={{ justifyContent: "unset" }}>
        {emojis.slice(-7).reverse().map(emoji => {
          return (
            <div key={emoji.name} className="emoji">
              <EmojiImage {...emoji} />
            </div>
          )
        })}
        <div style={{ display: "flex", alignItems: "end", padding: "0.25rem" }}>
          <Link href="/emojis">See more :3</Link>
        </div>
      </div>
    </>
  );
}
