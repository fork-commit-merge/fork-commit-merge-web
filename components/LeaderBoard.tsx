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
                <table className="min-w-full bg-slate-950 border rounded-lg shadow-lg mx-auto text-slate-300">
                    <thead>
                        <tr className="bg-gray-700 text-white">
                            <th className="py-4 px-6 border-b border-gray-300">
                                Contributor
                            </th>
                            <th className="py-4 px-6 border-b border-gray-300">
                                Solved Issues
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaderBoardData.map((user, index) => (
                            <tr key={index} className="text-center">
                                <td className="flex px-6 py-4 border-b">
                                    <img
                                        className="rounded-full w-16 h-16 mr-4"
                                        src={user.avatarUrl}
                                        alt={`${user.username}'s avatar`}
                                    />
                                    <div className="flex items-center justify-center">
                                        {user.username}
                                    </div>
                                </td>
                                <td className="py-4 px-6 border-b">
                                    {user.prCount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
