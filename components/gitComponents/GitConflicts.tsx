const GitConflicts = () => {
  const conflictResolutionSteps = [
    {
      name: 'Identify Conflicts',
      description: 'Use git status to identify conflicting files',
      commands: [
        { command: 'git status', description: 'Shows files with conflicts' }
      ]
    },
    {
      name: 'Analyze Conflicts',
      description: 'Open the conflicting files and locate conflict markers',
      markers: [
        { marker: '<<<<<<< HEAD', description: 'Start of your changes' },
        { marker: '=======', description: 'Separator between changes' },
        { marker: '>>>>>>> branch-name', description: 'End of incoming changes' }
      ]
    },
    {
      name: 'Resolve Conflicts',
      description: 'Choose which changes to keep and remove conflict markers',
      commands: [
        { command: 'git add [file-name]', description: 'Stage resolved files' },
        { command: 'git commit', description: 'Complete the merge with a commit' }
      ]
    }
  ];

  const bestPractices = [
    'Pull latest changes before starting work',
    'Communicate with team members about overlapping work',
    'Resolve conflicts promptly to avoid blocking others',
    'Use visual merge tools for complex conflicts',
    'Review all changes carefully before committing',
    'Keep commits small and focused to minimize conflicts'
  ];

  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Git <span className="text-modern-purple">Conflicts</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Understanding and resolving merge conflicts in Git effectively
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mt-16 rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">What are Git Conflicts?</h2>
            <p className="text-gray-300 mb-6">
              Git conflicts occur when there are competing changes on the same lines of a file,
              or when one developer has deleted a file while another developer was modifying it.
              Conflicts usually arise during the merging process and must be manually resolved
              before the merge can be completed.
            </p>
            <p className="text-gray-300">
              Understanding how to handle conflicts is crucial for maintaining a smooth
              collaborative workflow and ensuring code integrity across your project.
            </p>
          </div>

          {/* Resolution Steps Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {conflictResolutionSteps.map((step, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">{step.name}</h2>
                <p className="text-gray-300 mb-6">{step.description}</p>

                {step.commands && (
                  <div className="space-y-4">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                        <code className="text-modern-purple font-mono text-lg">{cmd.command}</code>
                        <p className="mt-2 text-gray-300">{cmd.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {step.markers && (
                  <div className="space-y-4">
                    {step.markers.map((marker, markerIndex) => (
                      <div key={markerIndex} className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                        <code className="text-modern-purple font-mono text-lg">{marker.marker}</code>
                        <p className="mt-2 text-gray-300">{marker.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Best Practices Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Conflict Resolution Best Practices</h2>
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
              href="https://git-scm.com/docs/git-merge#_how_conflicts_are_presented"
              target="_blank"
              rel="noopener noreferrer"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              LEARN MORE ABOUT CONFLICT RESOLUTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitConflicts;

