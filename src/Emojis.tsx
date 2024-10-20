import emojisJson from "./assets/@emojis.json";

export interface Emoji {
    name: string
    display: string
    alt?: string
    tags: string[]
}

const emojis = emojisJson as Emoji[];
export default emojis;

export function useEmoji(name: string) {
    return emojis.find(emoji => emoji.name === name);
}