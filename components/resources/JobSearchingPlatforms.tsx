import React from "react";

const JobSearchingPlatforms: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Job Searching Platforms
          </h2>
          <p className="mb-4 max-w-prose">
            Looking for your next role or just curious about what&apos;s out
            there? These job searching platforms are specifically tailored for
            tech roles and can help you find your next opportunity.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wellfound.com/jobs"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Wellfound Jobs</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hired.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Hired</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dice.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Dice</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.upwork.com/work/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Upwork</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://builtin.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Built In</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hiretechladies.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Tech Ladies</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.outreachy.org/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Outreachy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobSearchingPlatforms;
