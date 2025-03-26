import Link from 'next/link'

const contributionSteps = [
  {
    name: 'Finding Projects',
    description: 'Identify projects that interest you and match your skill level. Many projects specifically mark issues as "good for beginners" or "good first issue" to help newcomers get started.',
    features: [
      'Browse goodfirstissues.com',
      'Check Awesome for Beginners repository',
      'Look for documentation improvements',
      'Find typos or broken links',
      'Search project issue trackers'
    ],
    link: 'https://goodfirstissues.com'
  },
  {
    name: 'Understanding the Process',
    description: 'Before contributing, familiarize yourself with the project\'s guidelines and contribution process. Each project may have specific requirements and workflows.',
    features: [
      'Read CONTRIBUTING.md file',
      'Review code of conduct',
      'Check coding standards',
      'Understand issue guidelines',
      'Learn commit message format'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge#setup-instructions'
  },
  {
    name: 'Making Contributions',
    description: 'Follow the standard Git workflow to make your contributions. This involves creating a fork, making changes, and submitting a pull request.',
    features: [
      'Fork the repository',
      'Create feature branch',
      'Make necessary changes',
      'Write tests if required',
      'Submit pull request'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge#submitting-your-changes'
  },
  {
    name: 'Best Practices',
    description: 'Follow these best practices to ensure your contributions are valuable and more likely to be accepted by project maintainers.',
    features: [
      'Keep changes focused',
      'Write clear commit messages',
      'Follow project guidelines',
      'Test your changes',
      'Respond to feedback'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CONTRIBUTING.md'
  }
]

const HowToContribute = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              How to <span className='text-modern-purple'>Contribute</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Learn the essential steps and best practices for making meaningful contributions to open source projects.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {contributionSteps.map((step, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{step.name}</h2>
                <p className='mb-4 text-gray-300'>{step.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Points:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={step.link}
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
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Stay Connected</h2>
            <p className='text-gray-600 mb-6'>
              Download the GitHub mobile app to stay updated with your contributions and repository activities:
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://play.google.com/store/apps/details?id=com.github.android'
                target='_blank'
                rel='noopener noreferrer'
                className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
              >
                Android App
              </a>
              <a
                href='https://apps.apple.com/us/app/github/id1477376905'
                target='_blank'
                rel='noopener noreferrer'
                className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
              >
                iOS App
              </a>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://github.com/fork-commit-merge/fork-commit-merge#getting-started'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              START CONTRIBUTING
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToContribute

