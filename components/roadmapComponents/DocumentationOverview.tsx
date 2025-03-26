const documentationTypes = [
  {
    name: 'README Documentation',
    description: 'The essential front door to your project, providing a comprehensive overview and getting started guide.',
    features: [
      'Project overview and purpose',
      'Installation instructions',
      'Basic usage examples',
      'Dependencies and requirements',
      'Quick start guide'
    ]
  },
  {
    name: 'CONTRIBUTING Guidelines',
    description: 'A detailed guide that helps potential contributors understand how they can participate in your project effectively.',
    features: [
      'Development setup steps',
      'Code style guidelines',
      'Pull request process',
      'Issue reporting guidelines',
      'Community standards'
    ]
  },
  {
    name: 'CODE OF CONDUCT',
    description: 'Sets clear expectations for community behavior and creates a welcoming, inclusive environment for all contributors.',
    features: [
      'Community values',
      'Expected behaviors',
      'Unacceptable behaviors',
      'Enforcement guidelines',
      'Reporting procedures'
    ]
  },
  {
    name: 'API Documentation',
    description: 'Detailed technical documentation that helps developers understand and implement your code correctly.',
    features: [
      'Function references',
      'Class documentation',
      'Code examples',
      'Integration guides',
      'Troubleshooting tips'
    ]
  }
]

const DocumentationOverview = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Essential <span className='text-modern-purple'>Documentation</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Comprehensive documentation is the foundation of successful open source projects. Learn about the key components that make your project accessible and maintainable.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {documentationTypes.map((docType, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{docType.name}</h2>
                <p className='mb-4 text-gray-300'>{docType.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Components:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {docType.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Documentation Best Practices</h2>
            <div className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Keep documentation up-to-date with code changes</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Write clear, concise, and accessible content</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Include examples and code snippets</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Maintain consistent formatting and structure</p>
              </div>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://www.writethedocs.org/guide/'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              LEARN MORE ABOUT DOCUMENTATION
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationOverview

