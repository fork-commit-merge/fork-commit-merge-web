/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";
import { StarFilled } from "@ant-design/icons";

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

export const TopThreeContributors: FC<TopThreeContributorsProps> = ({
    contributors,
}) => (
    <>
        <div className="flex flex-wrap justify-center">
            {contributors.map((contributor) => {
                return (
                    <div
                        key={contributor.id}
                        className="relative contributor-images"
                    >
                        <a
                            href={contributor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={contributor.avatar}
                                width={145}
                                height={145}
                                alt={contributor.name}
                                className="px-1"
                            />
                        </a>
                        {contributor.rank === 1 && (
                            <StarFilled
                                style={{
                                    position: "absolute",
                                    top: 7,
                                    right: 7,
                                    fontSize: 30,
                                    color: "gold",
                                }}
                            />
                        )}
                        {contributor.rank === 2 && (
                            <StarFilled
                                style={{
                                    position: "absolute",
                                    top: 7,
                                    right: 7,
                                    fontSize: 30,
                                    color: "silver",
                                }}
                            />
                        )}
                        {contributor.rank === 3 && (
                            <StarFilled
                                style={{
                                    position: "absolute",
                                    top: 7,
                                    right: 7,
                                    fontSize: 30,
                                    color: "var(--color-bronze)",
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    </>
);
