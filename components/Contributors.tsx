import Image from "next/image";
import { FC } from 'react';

interface Contributor {
    id: string;
    url: string;
    avatar: string;
    name: string;
}

interface ContributorsProps {
    contributors: Contributor[];
}

export const Contributors: FC<ContributorsProps> = ({ contributors }) => (
    <div className="contributor-images">
        {contributors.map(contributor => (
            <a
                key={contributor.id}
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={contributor.avatar}
                    width={100}
                    height={100}
                    alt={contributor.name}
                />
            </a>
        ))}
    </div>
);
