import { EmojiModel } from "./Emojis";

type EmojiProps = EmojiModel;
export function EmojiImage({ name, alt, display }: EmojiProps) {
    return (
        <img
            src={`./images/${name}.svg`}
            alt={alt}
            loading="lazy"
            title={display} />
    );
}
