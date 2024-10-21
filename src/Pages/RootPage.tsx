import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEmoji } from "../Emojis";
import Emoji from "../Components/Emoji";

export default function RootPage() {
    const pleadEmoji = useEmoji("cat-plead");
    return (
        <>
            <header>
                <nav>
                    <Link className="home" to="/">
                        <Emoji {...pleadEmoji!} />
                        cat plead emoji
                    </Link>
                    <Link to="emojis">Emojis</Link>
                    <Link to="games">Games</Link>
                </nav>
            </header>
            <div className="main-content">
                <main>
                    <Outlet />
                </main>
                <aside>
                    <Sidebar />
                </aside>
            </div>
        </>
    )
}
