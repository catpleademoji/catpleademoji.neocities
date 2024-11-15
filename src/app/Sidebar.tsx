import Link from "next/link";
import socialsJson from "../assets/@socials.json";

type SocialSite = {
    name: string;
    display: string;
    url: string;
}

const socials = socialsJson as SocialSite[];

export default function Sidebar() {
    return (
        <div>
            <section>
                <h1>About me</h1>
                <p>hiii!! I'm <span style={{ fontWeight: 500 }}>catpleademoji</span>. I'm a cat-puppy guy :3</p>
                <p>I make little edits of the cat emojis.</p>
            </section>
            <section>
                <h1>Follow me on</h1>
                <div>
                    <ul className="socials-list">
                        {
                            socials.map(social => {
                                return (
                                    <li key={social.name}>
                                        <Link href={social.url} target="_blank">
                                            <img src={`./socials/${social.name}.svg`}>
                                            </img>
                                            <span>{social.display}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <section>
                <h1>Credit</h1>
                <p>
                    <span>Emojis are based on </span>
                    <Link target="_blank" href="https://github.com/twitter/twemoji">Twemoji</Link>
                    <span> by Twitter which are licensed under </span>
                    <Link target="_blank" href="https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS">CC-BY 4.0</Link>
                </p>
            </section>
            <section>
                <Link target="_blank" className="link-item" aria-label="neocities" href="https://neocities.org">
                    <img alt="hosted by neocities" src="/neocities.png" />
                </Link>
            </section>
        </div>
    )
}