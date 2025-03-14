/* eslint-disable @next/next/no-img-element */
import { gitCommands } from "./GitCommands";

const GitCommandsSelection = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/git.png')" }}>
        <div className="mb-10 flex flex-col items-center justify-center p-24 text-center text-white">
          <h1 className="text-4xl font-bold">Important Git Commands</h1>
          <p className="mt-4 text-xl">
            Essential commands for effective version control with Git
          </p>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Important Git Commands</h1>
        <p className="mb-4">
          Git is a distributed version control system created by Linus Torvalds
          in 2005. It enables teams to collaborate on code, maintaining a
          complete history of changes made to a codebase. Git tracks the changes
          made to files, allowing multiple developers to work on the same
          project simultaneously without overwriting each other&apos;s changes.
          It provides features like branching, merging, and conflict resolution,
          making the development process more efficient and flexible.
        </p>
        <p className="mb-4">
          Used by many open-source and commercial projects, Git helps teams
          manage changes to code over time. Whether you&apos;re working on a
          solo project or contributing to a large codebase, understanding Git
          commands is crucial for modern software development.
        </p>
        <p className="mb-6">
          Here are some essential Git commands that you may find useful:
        </p>
        <table className="min-w-full bg-slate-900">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                Command
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {gitCommands.map((cmd, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                  {cmd.command}
                </td>
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                  {cmd.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GitCommandsSelection;
