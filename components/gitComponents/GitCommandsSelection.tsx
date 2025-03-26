import { gitCommands } from "./GitCommands";

const commandCategories = [
  {
    name: 'Basic Commands',
    description: 'Essential commands for getting started with Git',
    commands: gitCommands.slice(0, 4) // git init, clone, add, commit
  },
  {
    name: 'Remote Operations',
    description: 'Commands for working with remote repositories',
    commands: gitCommands.slice(4, 6) // git push, pull
  },
  {
    name: 'Repository Information',
    description: 'Commands to view repository status and history',
    commands: gitCommands.slice(6, 8) // git status, log
  },
  {
    name: 'Branch Management',
    description: 'Commands for working with branches',
    commands: gitCommands.slice(8, 12) // git branch, checkout, switch, merge
  }
];

const GitCommandsSelection = () => {
  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Essential Git <span className="text-modern-purple">Commands</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Master the fundamental Git commands to enhance your version control workflow
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
            {commandCategories.map((category, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">{category.name}</h2>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                      <code className="text-modern-purple font-mono text-lg">{cmd.command}</code>
                      <p className="mt-2 text-gray-300">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Git Best Practices</h2>
            <div className="grid gap-4 text-gray-600 sm:grid-cols-2">
              <div className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Write clear, descriptive commit messages</p>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Commit early and commit often</p>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Use branches for new features</p>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Review changes before committing</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://git-scm.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              EXPLORE FULL GIT DOCUMENTATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCommandsSelection;



