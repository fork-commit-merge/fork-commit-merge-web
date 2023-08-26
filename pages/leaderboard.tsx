// pages/leaderboard.tsx
import React from "react";
import { LeaderBoard } from "../components/LeaderBoard";

const LeaderBoardPage: React.FC = () => {
    return (
        <div className="bg-slate-950 text-slate-50 flex flex-col min-h-screen">
        <div className="flex-grow text-center flex items-center justify-center">
            <div className="pb-6">
                <h1 className="text-3xl py-10">
                    Top 20 Contributors by Solved Issues
                </h1>
                <LeaderBoard />
            </div>
        </div>
        </div>
    );
};

export default LeaderBoardPage;
