import { GameCard } from "./game-card";
import "./game-page.css";

export default function GamesPage() {
    return (
        <>
            <h1>
                Games
            </h1>
            <div className="game-list">
                <GameCard
                    name="cat plead merge"
                    path="/games/cat-plead-merge"
                    imageSrc="/images/games/cat-plead-merge.jpg"
                    description={"A Suika-like featuring cat emojis. Merge two or more of the same cat to get a bigger cat! :3 Try not to let them reach the top!"} />
            </div>
        </>
    )
}
