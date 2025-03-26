import Link from 'next/link'

const discussionTopics = [
  {
    title: 'Getting Started with Discussions',
    description: 'GitHub Discussions is a collaborative communication forum for the community. Located alongside Issues and Pull Requests, it provides a space for conversations, Q&A, and announcements.',
    features: [
      'Create new discussions',
      'Choose discussion categories',
      'React to discussions and comments',
      'Mark answers as solutions',
      'Pin important discussions'
    ],
    link: 'https://docs.github.com/en/discussions/quickstart'
  },
  {
    title: 'Best Practices for Participation',
    description: 'Make the most of GitHub Discussions by following community guidelines and best practices for effective communication and collaboration.',
    features: [
      'Follow the code of conduct',
      'Use clear and descriptive titles',
      'Stay on topic',
      'Be respectful and welcoming',
      'Help others learn and grow'
    ],
    link: 'https://docs.github.com/en/discussions/guides/best-practices-for-community-conversations-on-github'
  },
  {
    title: 'Categories and Organization',
    description: 'Discussions are organized into categories to help maintain structure and make it easier to find relevant conversations.',
    features: [
      'Announcements',
      'General',
      'Ideas',
      'Q&A',
      'Show and tell'
    ],
    link: 'https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-categories-for-discussions'
  },
  {
    title: 'Engaging with the Community',
    description: 'Build relationships and contribute to meaningful discussions within the open source community.',
    features: [
      'Share knowledge and experiences',
      'Ask and answer questions',
      'Provide constructive feedback',
      'Collaborate on ideas',
      'Support fellow developers'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/discussions'
  }
]

const Discussions = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              GitHub <span className='text-modern-purple'>Discussions</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              A collaborative space for community conversation, knowledge sharing, and project updates.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {discussionTopics.map((topic, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{topic.title}</h2>
                <p className='mb-4 text-gray-300'>{topic.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Features:</h3>
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

          <div className='mt-16 text-center'>
            <Link
              href='https://github.com/fork-commit-merge/fork-commit-merge/discussions'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              JOIN OUR DISCUSSIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussions

