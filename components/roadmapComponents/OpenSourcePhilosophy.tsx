/* eslint-disable @next/next/no-img-element */
import { openSourcePrinciples } from "../data/openSourcePrinciples";

const philosophyTopics = [
  {
    name: 'Freedom and Transparency',
    description: 'Open source software grants users the freedom to view, modify, and distribute the source code, promoting transparency and trust.',
    features: [
      'Access to source code',
      'Freedom to modify',
      'Right to redistribute',
      'Transparency in development',
      'Community oversight'
    ]
  },
  {
    name: 'Collaborative Innovation',
    description: 'The open source model enables global collaboration, leading to rapid innovation and improvement through diverse perspectives.',
    features: [
      'Global participation',
      'Diverse perspectives',
      'Rapid iteration',
      'Knowledge sharing',
      'Collective problem-solving'
    ]
  },
  {
    name: 'Community-Driven Development',
    description: 'Open source thrives on community participation, where developers worldwide contribute to improve and maintain the software.',
    features: [
      'Community governance',
      'Shared ownership',
      'Democratic decision-making',
      'Inclusive participation',
      'Collaborative maintenance'
    ]
  },
  {
    name: 'Knowledge Sharing',
    description: 'Open source promotes the free exchange of knowledge and expertise, benefiting both individual developers and the broader community.',
    features: [
      'Educational resources',
      'Code examples',
      'Best practices',
      'Documentation',
      'Mentorship opportunities'
    ]
  }
]

const OpenSourcePhilosophy = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Understanding <span className='text-modern-purple'>Open Source</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Explore the fundamental principles and philosophy behind the open source movement and its impact on software development.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {philosophyTopics.map((topic, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{topic.name}</h2>
                <p className='mb-4 text-gray-300'>{topic.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Aspects:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {topic.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Core Open Source Principles</h2>
            <div className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              {openSourcePrinciples.map((principle, index) => (
                <div key={index} className='flex items-start'>
                  <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className='font-semibold'>{principle.name}</h3>
                    <p className='text-sm'>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://opensource.org/osd/'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              LEARN MORE ABOUT OPEN SOURCE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSourcePhilosophy

