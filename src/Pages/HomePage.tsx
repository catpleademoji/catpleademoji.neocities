import { Link } from "react-router-dom"
import Emoji from "../Components/Emoji"
import emojis from "../Emojis"

export default function HomePage() {

    return (
        <>
            <h1>Recent emojis</h1>
            <div className="emoji-container" style={{ justifyContent: "unset" }}>
                {emojis.slice(-7).reverse().map(emoji => {
                    return (
                        <div key={emoji.name} className="emoji">
                            <Emoji {...emoji} />
                        </div>
                    )
                })}
                <div style={{ display: "flex", alignItems: "end", padding: "0.25rem" }}>
                    <Link to="/emojis">See all</Link>
                </div>
            </div>
        </>
    )
}