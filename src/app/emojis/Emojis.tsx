import emojisJson from "../../assets/@emojis.json";

export type EmojiModel = {
    name: string
    display: string
    alt?: string
    tags: string[]
}

const emojis = emojisJson as EmojiModel[];
export default emojis;

export function useEmoji(name: string) {
    return emojis.find(emoji => emoji.name === name);
}
