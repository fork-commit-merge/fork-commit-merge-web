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
            Hone your coding skills and prepare for technical interviews by
            solving challenges on these platforms. They offer problems of
            various difficulty levels in multiple programming languages.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">HackerRank</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">LeetCode</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codewars.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">CodeWars</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codechef.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">CodeChef</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CodingChallenges;
