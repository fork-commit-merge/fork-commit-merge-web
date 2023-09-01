/* eslint-disable @next/next/no-img-element */
import { StarFilled } from "@ant-design/icons";
import React from "react";

const Stars: React.FC = () => {
    return (
        <div className="bg-slate-900 text-slate-50 flex flex-col min-h-screen">
            <div className="text-center flex items-center justify-center max-w-2xl mx-auto">
                <div className="pb-6">
                    <h1 className="text-4xl py-10">Star Badges</h1>
                    <p className="my-4">
                        In the List of Contributors section of the home page,
                        you can see all the users that have contributed to the
                        Fork, Commit, Merge project. The top 3 contributors are
                        awarded with a star badge.
                    </p>
                    <p className="my-4">
                        The contributors are ranked by the number of merged pull
                        requests they have made to the project, so in other
                        words, the most issues solved. The contributor with the
                        most merged pull requests is awarded with a golden star
                        badge, the contributor with the second most merged pull
                        requests is awarded with a silver star badge and the
                        contributor with the third most merged pull requests is
                        awarded with a bronze star badge.
                    </p>
                    <p>
                        If you login with your GitHub account, you can see your
                        own Merged pull requests history. In the Leaderboard
                        section, you can see the top 20 contributors by the
                        number of merged pull requests.
                    </p>
                    <hr className="my-6" />
                    <div className="flex justify-center my-6">
                        <StarFilled
                            style={{
                                fontSize: 100,
                                color: "gold",
                            }}
                        />

                        <StarFilled
                            style={{
                                fontSize: 100,
                                color: "silver",
                            }}
                        />

                        <StarFilled
                            style={{
                                fontSize: 100,
                                color: "var(--color-bronze)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stars;
