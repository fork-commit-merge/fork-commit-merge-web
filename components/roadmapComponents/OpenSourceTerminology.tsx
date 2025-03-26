const terminologyGroups = [
  {
    name: 'Version Control Basics',
    description: 'Core concepts and actions in version control systems like Git.',
    terms: [
      {
        title: 'Repository',
        description: 'A storage space where an open-source project resides, often hosted on platforms like GitHub or GitLab.'
      },
      {
        title: 'Clone',
        description: 'Making a complete copy of a repository onto your local machine.'
      },
      {
        title: 'Commit',
        description: 'A change set, often a patch, that can be applied to a codebase.'
      },
      {
        title: 'Branch',
        description: 'A separate line of development in a repository, usually created to work on a specific feature or fix.'
      }
    ]
  },
  {
    name: 'Collaboration Concepts',
    description: 'Terms related to working with others in open source projects.',
    terms: [
      {
        title: 'Fork',
        description: 'Creating a personal copy of someone else\'s project to modify, improve, or adapt.'
      },
      {
        title: 'Pull Request',
        description: 'A method for submitting contributions to a project; it allows maintainers to review changes before integrating them.'
      },
      {
        title: 'Merge',
        description: 'The act of integrating changes from one branch into another.'
      },
      {
        title: 'Issue',
        description: 'A term for bugs, enhancements, tasks, and other kinds of questions that are meant for discussion.'
      }
    ]
  },
  {
    name: 'Project Roles',
    description: 'Different roles and responsibilities in open source projects.',
    terms: [
      {
        title: 'Maintainer',
        description: 'An individual responsible for managing a project, reviewing code, and guiding contributors.'
      },
      {
        title: 'Contributor',
        description: 'Anyone who contributes to a project, not necessarily with code.'
      },
      {
        title: 'Upstream',
        description: 'The original repository from which you forked.'
      },
      {
        title: 'Downstream',
        description: 'A project that incorporates your project into its codebase.'
      }
    ]
  },
  {
    name: 'Development Operations',
    description: 'Common operations in open source development workflow.',
    terms: [
      {
        title: 'Push',
        description: 'The action of updating a remote repository with local changes.'
      },
      {
        title: 'Fetch',
        description: 'Downloading changes from a remote repository without merging them.'
      },
      {
        title: 'Release',
        description: 'The distribution of a specific version of the project.'
      },
      {
        title: 'Patch',
        description: 'A set of changes to a codebase, often provided as a file.'
      }
    ]
  }
]

const OpenSourceTerminology = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Open Source <span className='text-modern-purple'>Terminology</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Master the essential terminology used in open source development and collaboration.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {terminologyGroups.map((group, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{group.name}</h2>
                <p className='mb-4 text-gray-300'>{group.description}</p>
                <div className='space-y-4'>
                  {group.terms.map((term, termIndex) => (
                    <div key={termIndex} className='border-t border-gray-700 pt-4 first:border-0 first:pt-0'>
                      <h3 className='mb-2 text-xl font-semibold text-white'>{term.title}</h3>
                      <p className='text-gray-300'>{term.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Tips for Learning Terminology</h2>
            <div className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Practice using terms in real projects</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Read project documentation regularly</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Engage in community discussions</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Follow open source projects on GitHub</p>
              </div>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://opensource.guide/how-to-contribute/'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              START CONTRIBUTING TO OPEN SOURCE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSourceTerminology

