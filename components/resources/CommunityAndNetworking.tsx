import React from "react";

const CommunityAndNetworking: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Community and Networking
          </h2>
          <p className="mb-4 max-w-prose">
            Join these communities to network with other developers, ask
            questions, and find answers to your coding challenges. They are a
            great place to learn and share knowledge.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Stack Overflow</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.to/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Dev.to</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reddit.com/r/programming/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Reddit Programming</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeandcoffee.org/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Code and Coffee</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.me/coding"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">The Programmer&apos;s Hangout</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashnode.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Hash Node</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommunityAndNetworking;
