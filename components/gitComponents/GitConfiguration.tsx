const GitConfiguration = () => {
  const commonConfigurations = [
    {
      name: 'User Information',
      commands: [
        { command: 'git config --global user.name "Your Name"', description: 'Set your username for all repositories' },
        { command: 'git config --global user.email "your.email@example.com"', description: 'Set your email for all repositories' }
      ]
    },
    {
      name: 'Core Settings',
      commands: [
        { command: 'git config --global color.ui true', description: 'Enable colored output in Git commands' },
        { command: 'git config --global init.defaultBranch main', description: 'Set the default branch name for new repositories' }
      ]
    },
    {
      name: 'Aliases',
      commands: [
        { command: 'git config --global alias.co checkout', description: 'Create shortcut: git co = git checkout' },
        { command: 'git config --global alias.st status', description: 'Create shortcut: git st = git status' }
      ]
    }
  ];

  const bestPractices = [
    'Keep configuration files backed up or version-controlled',
    'Be cautious when modifying global settings',
    'Utilize local configurations for project-specific requirements',
    'Regularly review and update your configurations',
    'Document custom configurations for team reference',
    'Use consistent settings across development machines'
  ];

  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Git <span className="text-modern-purple">Configuration</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Setting up and customizing your Git environment for optimal workflow
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mt-16 rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">What is Git Configuration?</h2>
            <p className="text-gray-300 mb-6">
              Git configuration refers to the settings that define the behavior, appearance, and functionality
              of a Git environment. These settings can be global, affecting all repositories on a system, or
              local, affecting only a single repository.
            </p>
            <p className="text-gray-300">
              Proper configuration ensures that Git operates smoothly and in sync with your specific needs.
              This includes basic settings like user name and email, as well as more advanced features like
              aliases, hooks, and custom scripts.
            </p>
          </div>

          {/* Common Configurations Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {commonConfigurations.map((config, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">{config.name}</h2>
                <div className="space-y-4">
                  {config.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                      <code className="text-modern-purple font-mono text-lg break-all">{cmd.command}</code>
                      <p className="mt-2 text-gray-300">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Configuration Levels Section */}
          <div className="mt-16 rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Configuration Levels</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                <h3 className="text-xl font-semibold text-modern-purple mb-2">System Level</h3>
                <p className="text-gray-300">Applied to all users on the system. Located in /etc/gitconfig</p>
              </div>
              <div className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                <h3 className="text-xl font-semibold text-modern-purple mb-2">Global Level</h3>
                <p className="text-gray-300">Applied to all repositories for current user. Located in ~/.gitconfig</p>
              </div>
              <div className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                <h3 className="text-xl font-semibold text-modern-purple mb-2">Local Level</h3>
                <p className="text-gray-300">Applied to specific repository. Located in .git/config</p>
              </div>
            </div>
          </div>

          {/* Best Practices Section */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Configuration Best Practices</h2>
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
              href="https://git-scm.com/docs/git-config"
              target="_blank"
              rel="noopener noreferrer"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              OFFICIAL GIT CONFIGURATION DOCUMENTATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitConfiguration;

