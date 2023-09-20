import LazyImage from "./LazyImage";

interface Contributor {
    id: string;
    url: string;
    avatar: string;
    name: string;
}

interface ContributorsProps {
    contributors: Contributor[];
}

export const Contributors: React.FC<ContributorsProps> = ({ contributors }) => (
    <div className="contributor-images">
        {contributors.map((contributor) => (
            <a
                key={contributor.id}
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LazyImage
                    src={contributor.avatar}
                    alt={contributor.name}
                    width={130}
                    height={130}
                />
            </a>
        ))}
    </div>
);
