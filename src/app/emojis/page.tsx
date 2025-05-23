import emojis from "../../assets/@emojis.json";
import { EmojiImage } from "./EmojiImage";

const Categories = {
    "Cats": "cat",
    "Pride": "pride",
    "Other": "misc",
}

export default function EmojisPage() {
    return (
        <>
            <h1>Emojis</h1>
            <div>
                You can download these emojis as png or svg at my <a target="_blank" href="https://github.com/catpleademoji/catpleademoji.neocities/releases/latest">github</a>. :3
            </div>
            {

                Object.entries(Categories)
                    .map(([display, category]) => {
                        return {
                            display: display,
                            category: category,
                            emojis: emojis.filter(emoji => emoji.tags.includes(category))
                        }
                    })
                    .filter(emojisInCategory => emojisInCategory.emojis.length > 0)
                    .map(emojisInCategory => {
                        return (
                            <div key={emojisInCategory.category} id={emojisInCategory.category}>
                                <h2>{emojisInCategory.display}</h2>
                                <div className="emoji-container">
                                    {emojisInCategory.emojis.map(emoji => {
                                        return (
                                            <div key={emoji.name} className="emoji">
                                                <EmojiImage {...emoji} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}