import Link from "next/link";

export type SocialSite = {
    name: string;
    display: string;
    url: string;
}

export type SocialsProps = {
    socials: SocialSite[]
}

export function SocialsList({ socials }: SocialsProps) {
    return (
        <ul className="socials-list">
            {
                socials.map(social => {
                    return (
                        <li key={social.name}>
                            <Link href={social.url} target="_blank">
                                <img src={`/socials/${social.name}.svg`} alt={social.display} />
                                <span>{social.display}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}
