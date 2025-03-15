import React from "react";

const OpenSourceDocumentation: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Open Source Contribution
          </h2>
          <p className="mb-4 max-w-prose">
            Open source refers to a type of software where the source code is
            available for anyone to view, modify, and distribute. Contributing
            to open source projects is a great way to improve your coding
            skills, work on real-world projects, and potentially make a
            meaningful impact in the software that people use every day.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://opensource.guide/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Introduction to Open Source</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/firstcontributions/first-contributions"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">First Contributions on GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codecademy.com/articles/what-is-open-source"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">What is Open Source?</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://opensource.org/resources"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Open Source Initiative Resources</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Getting Started With Contributing to Open Source</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.makeuseof.com/how-to-contribute-to-open-source-projects//"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">How to Contribute to Open Source Projects</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.opensourceagenda.com/"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Open Source Agenda. Discover the best free open source software projects</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OpenSourceDocumentation;
