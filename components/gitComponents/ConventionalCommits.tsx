import React from 'react';

const ConventionalCommits = () => {
  const commitTypes = [
    {
      name: 'Feature Changes',
      description: 'Changes that affect the application functionality',
      types: [
        { type: 'feat', description: 'A new feature' },
        { type: 'fix', description: 'A bug fix' },
        { type: 'perf', description: 'A code change that improves performance' }
      ]
    },
    {
      name: 'Code Organization',
      description: 'Changes that don\'t affect the meaning of the code',
      types: [
        { type: 'style', description: 'Changes that do not affect the meaning of the code' },
        { type: 'refactor', description: 'A code change that neither fixes a bug nor adds a feature' },
        { type: 'test', description: 'Adding missing tests or correcting existing tests' }
      ]
    },
    {
      name: 'Project Management',
      description: 'Changes related to project maintenance and documentation',
      types: [
        { type: 'docs', description: 'Documentation only changes' },
        { type: 'build', description: 'Changes that affect the build system or external dependencies' },
        { type: 'ci', description: 'Changes to CI configuration files and scripts' },
        { type: 'chore', description: 'Other changes that don\'t modify src or test files' }
      ]
    }
  ];

  const commitExamples = [
    {
      title: 'Feature Addition',
      message: 'feat(auth): add user authentication system\n\nImplement JWT-based authentication with refresh tokens.\n\nCloses #123',
      explanation: 'Adds a new authentication feature with JWT implementation'
    },
    {
      title: 'Bug Fix',
      message: 'fix(api): resolve user data fetch timeout\n\nIncrease request timeout to 30s and add retry logic.\n\nFixes #456',
      explanation: 'Fixes an API timeout issue with improved error handling'
    },
    {
      title: 'Breaking Change',
      message: 'feat(api)!: change authentication endpoint response\n\nModify the response structure to include more user details.\n\nBREAKING CHANGE: Authentication response now returns an object instead of a token string',
      explanation: 'Introduces a breaking change in the API response format'
    }
  ];

  const bestPractices = [
    'Keep commits atomic and focused on single changes',
    'Use clear and descriptive commit messages',
    'Reference issues and PRs in commit messages',
    'Include breaking changes in the footer',
    'Follow the project\'s commit message conventions',
    'Use appropriate commit types and scopes'
  ];

  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Conventional <span className='text-modern-purple'>Commits</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              A specification for adding human and machine-readable meaning to commit messages
            </p>
          </div>

          {/* Introduction Section */}
          <div className='mt-16 rounded-lg bg-gray-800 p-8 shadow-lg'>
            <h2 className='text-2xl font-semibold text-white mb-4'>What are Conventional Commits?</h2>
            <p className='text-gray-300 mb-6'>
              Conventional Commits is a lightweight convention on top of commit messages. It provides
              an easy set of rules for creating an explicit commit history that makes it easier to
              write automated tools and generate changelogs.
            </p>
            <p className='text-gray-300'>
              The commit message should be structured as follows:
            </p>
            <pre className='mt-4 bg-gray-900 p-4 rounded-lg overflow-x-auto'>
              <code className='text-modern-purple'>
                type(scope): subject{'\n\n'}body{'\n\n'}footer
              </code>
            </pre>
          </div>

          {/* Commit Types Section */}
          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {commitTypes.map((category, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='text-2xl font-semibold text-white mb-4'>{category.name}</h2>
                <p className='text-gray-300 mb-4'>{category.description}</p>
                <div className='space-y-4'>
                  {category.types.map((type, typeIndex) => (
                    <div key={typeIndex} className='border-t border-gray-700 pt-4 first:border-0 first:pt-0'>
                      <code className='text-modern-purple font-mono text-lg'>{type.type}:</code>
                      <p className='mt-2 text-gray-300'>{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Examples Section */}
          <div className='mt-16 space-y-8'>
            <h2 className='text-3xl font-bold text-center text-gray-900'>Commit Message Examples</h2>
            {commitExamples.map((example, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h3 className='text-xl font-semibold text-white mb-4'>{example.title}</h3>
                <pre className='bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4'>
                  <code className='text-modern-purple'>{example.message}</code>
                </pre>
                <p className='text-gray-300'>{example.explanation}</p>
              </div>
            ))}
          </div>

          {/* Best Practices Section */}
          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Commit Message Best Practices</h2>
            <div className='grid gap-4 sm:grid-cols-2'>
              {bestPractices.map((practice, index) => (
                <div key={index} className='flex items-start'>
                  <svg className='h-6 w-6 mr-2 text-modern-purple flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <p className='text-gray-600'>{practice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Link */}
          <div className='mt-16 text-center'>
            <a
              href='https://www.conventionalcommits.org'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              LEARN MORE ABOUT CONVENTIONAL COMMITS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConventionalCommits;


