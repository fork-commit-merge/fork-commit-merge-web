const managementTopics = [
  {
    name: 'Code Review Process',
    description: 'Effective code reviews are crucial for maintaining code quality and knowledge sharing within the project.',
    features: [
      'Understand context and purpose',
      'Check code style and standards',
      'Review for security vulnerabilities',
      'Ensure proper test coverage',
      'Verify documentation updates'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CONTRIBUTING.md#code-review-process'
  },
  {
    name: 'Feedback Guidelines',
    description: 'Providing constructive feedback helps contributors grow while maintaining a positive community atmosphere.',
    features: [
      'Be specific and clear',
      'Focus on code, not the person',
      'Suggest improvements',
      'Acknowledge good practices',
      'Use a respectful tone'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CODE_OF_CONDUCT.md'
  },
  {
    name: 'CI/CD Pipeline',
    description: 'Continuous Integration and Deployment ensures code quality and streamlines the contribution process.',
    features: [
      'Automated testing',
      'Code quality checks',
      'Build verification',
      'Deployment automation',
      'Performance monitoring'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/actions'
  },
  {
    name: 'Issue Management',
    description: 'Effective issue tracking and management helps organize and prioritize project work.',
    features: [
      'Issue templates',
      'Label organization',
      'Priority assignment',
      'Milestone tracking',
      'Regular triage'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/issues'
  }
]

const ContributionManagement = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Managing <span className='text-modern-purple'>Contributions</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Learn how to effectively review, manage, and maintain quality contributions in open source projects.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {managementTopics.map((topic, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{topic.name}</h2>
                <p className='mb-4 text-gray-300'>{topic.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Aspects:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {topic.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={topic.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer text-blue-400 hover:underline'
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Best Practices Summary</h2>
            <p className='text-gray-600 mb-6'>
              Successful contribution management relies on clear communication, consistent processes, and automated tooling.
              Remember to:
            </p>
            <ul className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maintain clear contribution guidelines
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automate quality checks where possible
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Provide constructive feedback
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Keep documentation up to date
              </li>
            </ul>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CONTRIBUTING.md'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              VIEW CONTRIBUTION GUIDELINES
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributionManagement

