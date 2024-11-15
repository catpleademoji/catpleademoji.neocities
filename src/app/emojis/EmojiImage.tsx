import Image from "next/image";
import { EmojiModel } from "./Emojis";

type EmojiProps = EmojiModel;
export function EmojiImage({ name, alt, display }: EmojiProps) {
    return (
        <Image
            src={`./images/${name}.svg`}
            alt={alt || ""}
            title={display} />
    );
}
