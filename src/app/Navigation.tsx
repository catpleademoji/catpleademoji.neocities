"use client"

import Link from "next/link";
import { EmojiImage } from "./emojis/EmojiImage";
import { useEmoji } from "./emojis/Emojis";
import { usePathname } from "next/navigation";

function ActiveLink(props: { path: string, name: string }) {
    const pathName = usePathname();
    return <Link href={props.path} className={pathName === props.path ? "active" : ""}>{props.name}</Link>
}

export default function Navigation() {
    const pleadEmoji = useEmoji("cat-plead");

    return <nav>
        <Link className="home" href="/">
            <EmojiImage {...pleadEmoji!} />
            cat plead emoji
        </Link>
        <ActiveLink path="/emojis" name="Emojis" />
        <ActiveLink path="/games" name="Games" />
        <ActiveLink path="/about" name="About" />
    </nav>
}