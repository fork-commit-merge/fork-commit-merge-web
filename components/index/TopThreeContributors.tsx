import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";

export type Contributor = {
  id: string;
  url: string;
  avatar: string;
  name: string;
  rank?: number;
};

const TopThreeContributors: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/topThreeUsers")
      .then((response) => {
        const fetchedData = response.data;
        const mappedData: Contributor[] = fetchedData.map(
          (userStat: { username: any; avatarUrl: any }, index: number) => {
            return {
              id: userStat.username,
              url: `https://github.com/${userStat.username}`,
              avatar: userStat.avatarUrl,
              name: userStat.username,
              rank: index + 1,
            };
          }
        );
        setContributors(mappedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {contributors.map((contributor) => (
        <div key={contributor.id} className="relative contributor-images">
          <a href={contributor.url} target="_blank" rel="noopener noreferrer">
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
      ))}
    </div>
  );
};

export { TopThreeContributors };
