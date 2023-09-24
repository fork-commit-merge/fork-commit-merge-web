import LazyImage from "./LazyImage";

type Contributor = {
    id: string;
    url: string;
    avatar: string;
    name: string;
}

type ContributorsProps = {
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
                    width={100}
                    height={100}
                />
            </a>
        ))}
    </div>
);
