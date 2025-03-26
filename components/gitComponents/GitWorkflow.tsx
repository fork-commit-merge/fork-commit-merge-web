const GitWorkflow = () => {
  const workflowTypes = [
    {
      name: 'Feature Branch Workflow',
      description: 'A workflow pattern where all feature development takes place in dedicated branches instead of the main branch.',
      features: [
        'Isolates new development from main branch',
        'Enables collaborative feature development',
        'Simplifies parallel development',
        'Clean main branch history',
        'Easy code review process'
      ],
      commands: [
        'git checkout -b feature/new-feature',
        'git push -u origin feature/new-feature',
        'git merge feature/new-feature'
      ]
    },
    {
      name: 'Gitflow Workflow',
      description: 'A robust framework for managing larger projects, defining a strict branching model designed around project releases.',
      features: [
        'Separate branches for features, releases, and hotfixes',
        'Structured release management',
        'Supports parallel development',
        'Ideal for scheduled release cycles',
        'Clear production and development separation'
      ],
      commands: [
        'git flow init',
        'git flow feature start new-feature',
        'git flow release start 1.0.0'
      ]
    },
    {
      name: 'Forking Workflow',
      description: 'Common in open source projects, where developers fork the main repository and work on their own server-side copy.',
      features: [
        'Complete repository isolation',
        'Maintainer controls access',
        'Public contribution without access',
        'Reduced central repository clutter',
        'Independent development'
      ],
      commands: [
        'git remote add upstream [original-repo-url]',
        'git fetch upstream',
        'git merge upstream/main'
      ]
    }
  ];

  const bestPractices = [
    'Always pull the latest changes before starting new work',
    'Keep branches focused on single features or tasks',
    'Write clear, descriptive commit messages',
    'Regularly push your branches to remote',
    'Delete merged branches to maintain cleanliness',
    'Review code before merging to main branches'
  ];

  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Git <span className="text-modern-purple">Workflow</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Understanding and implementing effective Git workflow patterns
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mt-16 rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">What is Git Workflow?</h2>
            <p className="text-gray-300 mb-6">
              A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a
              consistent and productive manner. Workflows are designed to be guidelines rather than
              concrete rules, helping teams and individual developers to manage changes efficiently.
            </p>
            <p className="text-gray-300">
              Different workflows suit different project sizes and team structures. The key is to
              choose and consistently follow a workflow that enhances your team's productivity while
              minimizing confusion and conflicts.
            </p>
          </div>

          {/* Workflow Types Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {workflowTypes.map((workflow, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">{workflow.name}</h2>
                <p className="text-gray-300 mb-4">{workflow.description}</p>

                <h3 className="text-xl font-semibold text-modern-purple mb-2">Key Features:</h3>
                <ul className="mb-4 list-disc pl-5 text-gray-300">
                  {workflow.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-modern-purple mb-2">Common Commands:</h3>
                <div className="space-y-2">
                  {workflow.commands.map((command, cmdIndex) => (
                    <code key={cmdIndex} className="block text-modern-purple font-mono text-sm break-all bg-gray-900 p-2 rounded">
                      {command}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Workflow Best Practices</h2>
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
              href="https://www.atlassian.com/git/tutorials/comparing-workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              LEARN MORE ABOUT GIT WORKFLOWS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitWorkflow;

