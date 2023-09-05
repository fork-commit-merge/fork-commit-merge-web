import React from "react";
import { LeaderBoard } from "../components/LeaderBoard";

const LeaderBoardPage: React.FC = () => {
    return (
        <div className="bg-slate-900 text-slate-50 flex flex-col min-h-screen">
            <div className="flex-grow text-center flex items-center justify-center">
                <div className="pb-6 max">
                    <h1 className="text-4xl pt-10">Leaderboard</h1>
                    <h2 className="text-2xl py-10">
                        Top 20 Contributors by Solved Issues
                    </h2>
                    <LeaderBoard />
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardPage;
