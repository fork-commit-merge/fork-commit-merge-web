/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { renderStar } from "../../utils/helpers/RenderStar";
import axios from "axios";
import Spinner from "../../components/Spinner";

type UserStat = {
  username: string;
  prCount: number;
  avatarUrl: string;
};

export const LeaderBoard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [leaderBoardData, setLeaderBoardData] = useState<UserStat[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get("/api/topUsers", {
          timeout: 60000, // Increased timeout to 60 seconds
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
        setLeaderBoardData(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
        setIsError(true);

        // Retry logic with exponential backoff
        if (retryCount < 3) {
          const backoffTime = Math.pow(2, retryCount) * 2000; // 2s, 4s, 8s
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, backoffTime);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [retryCount]); // Add retryCount as dependency

  return (
    <div className="text-center">
      {isLoading ? (
        <div className="flex justify-center items-center h-[200px]">
          <Spinner />
        </div>
      ) : isError ? (
        <div className="min-w-full bg-primary border rounded-lg shadow-lg mx-auto py-4">
          <p>No data available, try again later!</p>
        </div>
      ) : (
        <table className="min-w-full bg-primary border rounded-lg shadow-lg mx-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-4 px-6 border-b border-gray-300">Rank</th>
              <th className="py-4 px-6 border-b border-gray-300">Contributor</th>
              <th className="py-4 px-6 border-b border-gray-300">Solved Issues</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData && leaderBoardData.length > 0 ? (
              leaderBoardData.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="py-4 px-6 border-b">{index + 1}</td>
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
                  <td className="py-4 px-6 border-b">{user.prCount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
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





