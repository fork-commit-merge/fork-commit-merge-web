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
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://opensource.guide/"
                className="hover:underline text-blue-400"
                target="blank"
              >
                Introduction to Open Source
              </a>
            </li>
            <li>
              <a
                href="https://github.com/firstcontributions/first-contributions"
                className="hover:underline text-blue-400"
                target="blank"
              >
                First Contributions on GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.codecademy.com/articles/what-is-open-source"
                className="hover:underline text-blue-400"
                target="blank"
              >
                What is Open Source?
              </a>
            </li>
            <li>
              <a
                href="https://opensource.org/resources"
                className="hover:underline text-blue-400"
                target="blank"
              >
                Open Source Initiative Resources
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/"
                className="hover:underline text-blue-400"
                target="blank"
              >
                Getting Started With Contributing to Open Source
              </a>
            </li>
            <li>
              <a
                href="https://www.makeuseof.com/how-to-contribute-to-open-source-projects//"
                className="hover:underline text-blue-400"
                target="blank"
              >
                How to Contribute to Open Source Projects
              </a>
            </li>
            <li>
              <a
                href="https://www.opensourceagenda.com/"
                className="hover:underline text-blue-400"
                target="blank"
              >
                Open Source Agenda. Discover the best free open source software projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OpenSourceDocumentation;
