/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";

export interface Contributor {
    id: string;
    url: string;
    avatar: string;
    name: string;
    rank?: number;
}

interface TopThreeContributorsProps {
    contributors: Contributor[];
}

export const TopThreeContributors: FC<TopThreeContributorsProps> = ({ contributors }) => (<>
    <div className="flex flex-wrap justify-center">
        {contributors.map((contributor) => {
            return (
                <div key={contributor.id} className="relative contributor-images">
                    <a
                        href={contributor.url}
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <Image
                            src={contributor.avatar}
                            width={150}
                            height={150}
                            alt={contributor.name}
                        />
                    </a>
                    {contributor.rank === 1 && (
                        <img
                            src="../golden_star.png"
                            alt="Golden Star"
                            className="absolute top-0 right-0 w-6 h-6"
                        />
                    )}
                    {contributor.rank === 2 && (
                        <img
                            src="../silver_star.png"
                            alt="Silver Star"
                            className="absolute top-0 right-0 w-6 h-6"
                        />
                    )}
                    {contributor.rank === 3 && (
                        <img
                            src="../bronze_star.png"
                            alt="Bronze Star"
                            className="absolute top-0 right-0 w-6 h-6"
                        />
                    )}
                </div>
            );
        })}
    </div>
    </>
);
