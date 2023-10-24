import React from "react";
import { LeaderBoard } from "../components/leaderboard/LeaderBoard";
import Stars from "../components/leaderboard/Stars";

const LeaderBoardPage: React.FC = () => {
  return (
    <div className="bg-primary  flex flex-col min-h-screen">
      <div className="flex-grow text-center flex items-center justify-center">
        <div className="pb-6 max">
          <h1 className="text-4xl pt-10">Leaderboard</h1>
          <h2 className="text-2xl pt-10">
            Top 20 Contributors by Solved Issues
          </h2>
          <p className="text-gray-300 pt-2 pb-10">Bot will update this list once in every 24 hours</p>
          <LeaderBoard />
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
