import { Emoji as EmojiModel } from "../Emojis";

export default function Emoji({ name, alt, display }: EmojiModel) {
    return (
        <img
            src={`./images/${name}.svg`}
            alt={alt}
            title={display}
            loading="lazy"
        />
    )
}
