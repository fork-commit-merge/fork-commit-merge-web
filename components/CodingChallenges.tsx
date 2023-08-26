import React from "react";

const CodingChallenges: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-1/2 mb-8">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">
                        Coding Challenges and Practice
                    </h2>
                    <p className="mb-4 max-w-prose">
                        Hone your coding skills and prepare for technical
                        interviews by solving challenges on these platforms.
                        They offer problems of various difficulty levels in
                        multiple programming languages.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://www.hackerrank.com/"
                                className="hover:underline text-blue-400"
                            >
                                HackerRank
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://leetcode.com/"
                                className="hover:underline text-blue-400"
                            >
                                LeetCode
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.codewars.com/"
                                className="hover:underline text-blue-400"
                            >
                                CodeWars
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CodingChallenges;
