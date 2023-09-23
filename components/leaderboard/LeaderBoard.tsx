/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { renderStar } from "../../utils/helpers/RenderStar";
import axios from "axios";

type UserStat = {
    username: string;
    prCount: number;
    avatarUrl: string;
}

export const LeaderBoard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<UserStat[] | null>(
        null
    );
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios.get('api/topUsers')
          .then(response => {
            setLeaderBoardData(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
            setIsError(true);
            setIsLoading(false);
          });
      }, []);


    return (
        <div className="text-center">
            {isLoading ? (
                <div className="flex justify-center items-center h-[200px]">
                    <div className="spinner"></div>
                </div>
            ) : isError ? (
                <div className="min-w-full bg-slate-950 border rounded-lg shadow-lg mx-auto text-slate-300 py-4">
                    <p>No data available, try again later!</p>
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
                        {leaderBoardData && leaderBoardData.length > 0 ? (
                            leaderBoardData.map((user, index) => (
                                <tr key={index} className="text-center">
                                    <td className="flex px-6 py-4 border-b relative">
                                        {renderStar(index)}
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} className="text-center py-4">
                                    No contributors found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};
