import { Link } from "react-router-dom";
import Emoji from "../Components/Emoji";
import { useEmoji } from "../Emojis"

export default function NotFoundPage() {
    const dizzyEmoji = useEmoji("cat-dizzy");
    const pleadEmoji = useEmoji("cat-plead");

    return (
        <main style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>404 Not Found</h1>
            <div style={{ width: 320 }}>
                <Emoji {...dizzyEmoji!} />
            </div>
            <p>Sorry, the page you were looking for was not found.</p>
            <Link to="/home">
                <span style={{ width: "2rem" }}>
                    <Emoji {...pleadEmoji!} />
                </span>
                Home
            </Link>
        </main>
    )
}