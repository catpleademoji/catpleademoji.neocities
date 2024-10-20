import Emoji from "../Components/Emoji";
import emojis from "../Emojis";

const Categories = {
    "Cats": "cat",
    "Pride": "pride",
    "Other": "misc",
}

export default function EmojisPage() {
    return (
        <>
            <h1>Emojis</h1>
            {

                Object.entries(Categories)
                    .map(([display, tag]) => {
                        return {
                            category: display,
                            emojis: emojis.filter(emoji => emoji.tags.includes(tag))
                        }
                    })
                    .filter(emojisInCategory => emojisInCategory.emojis.length > 0)
                    .map(emojisInCategory => {
                        return (
                            <div key={emojisInCategory.category}>
                                <h2>{emojisInCategory.category}</h2>
                                <div className="emoji-container">
                                    {emojisInCategory.emojis.map(emoji => {
                                        return (
                                            <div key={emoji.name} className="emoji">
                                                <Emoji {...emoji} />
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