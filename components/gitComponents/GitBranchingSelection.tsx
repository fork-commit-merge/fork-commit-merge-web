/* eslint-disable @next/next/no-img-element */

const GitBranchingSelection = () => {
  const branchingCommands = [
    {
      name: 'Create Branch',
      commands: [
        { command: 'git branch [branch-name]', description: 'Create a new branch' },
        { command: 'git checkout -b [branch-name]', description: 'Create and switch to new branch' },
        { command: 'git switch -c [branch-name]', description: 'Create and switch to new branch (new syntax)' }
      ]
    },
    {
      name: 'Branch Management',
      commands: [
        { command: 'git checkout [branch-name]', description: 'Switch to specified branch' },
        { command: 'git switch [branch-name]', description: 'Switch to specified branch (new syntax)' },
        { command: 'git branch -d [branch-name]', description: 'Delete a branch' },
        { command: 'git merge [branch-name]', description: 'Merge specified branch into current branch' }
      ]
    }
  ];

  const bestPractices = [
    'Create a new branch for each feature or bugfix',
    'Follow consistent naming conventions for branches',
    'Keep branches focused on single tasks',
    'Regularly sync with the main branch',
    'Delete merged branches to maintain cleanliness',
    'Use descriptive branch names for clarity'
  ];

  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Git <span className="text-modern-purple">Branching</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Understanding Git branch management and workflows for effective collaboration
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mt-16 rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">What is Git Branching?</h2>
            <p className="text-gray-300 mb-6">
              Git Branching is a core feature that allows developers to create isolated environments
              within a repository to work on separate tasks simultaneously. Each branch serves as an
              independent line of development, enabling teams to work collaboratively without
              conflicting with each other.
            </p>
            <p className="text-gray-300">
              Branching is essential for team collaboration and efficient workflow management.
              It enables parallel development by allowing developers to work on multiple features
              or fixes concurrently, while maintaining a stable main codebase.
            </p>
          </div>

          {/* Commands Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {branchingCommands.map((category, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">{category.name}</h2>
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

          {/* Best Practices Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Branching Best Practices</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">{practice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Link */}
          <div className="mt-16 text-center">
            <a
              href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"
              target="_blank"
              rel="noopener noreferrer"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              LEARN MORE ABOUT GIT BRANCHING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitBranchingSelection;



