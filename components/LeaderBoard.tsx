/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { fetchTopUsersByPullRequests } from "../pages/api/fetchTopUsersByPullRequests";

interface UserStat {
    username: string;
    prCount: number;
    avatarUrl: string;
}

export const LeaderBoard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<UserStat[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetchTopUsersByPullRequests("nikohoffren/fork-commit-merge")
            .then((data) => {
                setLeaderBoardData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="text-center">
            {isLoading ? (

                <div className="flex justify-center items-center h-[200px]">
    <div className="spinner"></div>
  </div>
            ) : (
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th className="pb-6">Contributor</th>
                            <th className="pb-6">Issues</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaderBoardData.map((user, index) => (
                            <tr key={index}>
                                <td className="flex px-4 py-2">
                                    <img
                                        className="rounded-full w-10 h-10 mr-4"
                                        src={user.avatarUrl}
                                        alt={`${user.username}'s avatar`}
                                    />
                                    {user.username}
                                </td>
                                <td>{user.prCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

