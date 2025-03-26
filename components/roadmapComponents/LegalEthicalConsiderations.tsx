const legalEthicalTopics = [
  {
    name: 'Copyright Considerations',
    description: 'Understanding copyright is fundamental in open source development. While open-source licenses grant extensive permissions, copyright ownership remains with the original creators.',
    features: [
      'Original creators retain their rights',
      'Licenses grant specific permissions',
      'Copyright registration not required',
      'Automatic protection upon creation',
      'International copyright recognition'
    ]
  },
  {
    name: 'Patent Implications',
    description: 'Patents in software can affect both developers and users of open source projects. Understanding patent claims and licenses is crucial for project sustainability.',
    features: [
      'Patent claim awareness',
      'License patent grants',
      'Patent infringement risks',
      'Cross-licensing considerations',
      'Patent pool participation'
    ]
  },
  {
    name: 'Ethical Guidelines',
    description: 'Ethical considerations go beyond legal requirements, focusing on creating a responsible and trustworthy open source ecosystem.',
    features: [
      'Respect for original creators',
      'Transparency in contributions',
      'Community inclusivity',
      'Responsible code distribution',
      'Fair attribution practices'
    ]
  },
  {
    name: 'Compliance Requirements',
    description: 'Ensuring compliance with licenses and regulations is essential for maintaining legal and ethical standards in open source projects.',
    features: [
      'License compliance checks',
      'Attribution requirements',
      'Distribution guidelines',
      'Modified code handling',
      'Commercial use considerations'
    ]
  }
]

const LegalEthicalConsiderations = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Legal & Ethical <span className='text-modern-purple'>Considerations</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Navigate the complex landscape of legal and ethical considerations in open source development while maintaining trust and compliance.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {legalEthicalTopics.map((topic, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{topic.name}</h2>
                <p className='mb-4 text-gray-300'>{topic.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Points:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {topic.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Best Practices for Legal & Ethical Compliance</h2>
            <div className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Regularly review license compliance</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Maintain clear attribution records</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Document all third-party code usage</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Foster inclusive community practices</p>
              </div>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://opensource.guide/legal/'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              LEARN MORE ABOUT LEGAL CONSIDERATIONS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalEthicalConsiderations

