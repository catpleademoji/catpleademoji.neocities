import Link from "next/link";

type GameCardProps = {
    name: string;
    description: string;
    path: string;
    imageSrc: string;
}

export function GameCard({ name, description, path, imageSrc }: GameCardProps) {
    return (
        <div className="game-card">
            <Link href={path}>
                <img className="game-card-image" alt={description} src={imageSrc}></img>
                <div className="game-card-info">
                    <div className="game-card-title">{name}</div>
                    <p className="game-card-description">{description}</p>
                </div>
            </Link>
        </div>
    );
}
