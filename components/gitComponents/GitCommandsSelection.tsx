/* eslint-disable @next/next/no-img-element */
import { gitCommands } from "../data/GitCommands";

const GitCommandsSelection = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
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
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Command
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
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
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                  {cmd.command}
                </td>
                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
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
