import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties } from "react";

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
};

export const ActiveLink = ({ name, href }: { name: string; href: string }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{name}</a>
        </Link>
    );
};
