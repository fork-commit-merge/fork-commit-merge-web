const eventTypes = [
  {
    name: 'Hackathons',
    description: 'Time-bound events where developers, designers, and others collaborate intensively on software projects.',
    features: [
      'Intensive coding sessions',
      'Team collaboration',
      'Project development',
      'Problem-solving challenges',
      'Networking opportunities'
    ],
    link: 'https://github.com/topics/hackathon'
  },
  {
    name: 'Contribution Days',
    description: 'Events focused on allowing new contributors to get hands-on experience with contributing to open-source projects.',
    features: [
      'Guided contributions',
      'Mentorship opportunities',
      'Code review practice',
      'Documentation improvements',
      'Bug fixing sessions'
    ],
    link: 'https://opensource.guide/how-to-contribute/'
  },
  {
    name: 'Webinars and Workshops',
    description: 'Educational events that provide tutorials or discussions on specific topics related to open-source software.',
    features: [
      'Live coding sessions',
      'Expert presentations',
      'Interactive Q&A',
      'Hands-on tutorials',
      'Technical deep dives'
    ],
    link: 'https://www.youtube.com/@fork-commit-merge'
  },
  {
    name: 'Community Meetups',
    description: 'Less formal gatherings for community members to meet, discuss, and network with like-minded individuals.',
    features: [
      'Networking sessions',
      'Lightning talks',
      'Project showcases',
      'Knowledge sharing',
      'Community building'
    ],
    link: 'https://github.com/fork-commit-merge/fork-commit-merge/discussions/categories/announcements'
  }
]

const Events = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Open Source <span className='text-modern-purple'>Events</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Discover opportunities to collaborate, learn, and network with the open source community through various events and gatherings.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {eventTypes.map((event, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{event.name}</h2>
                <p className='mb-4 text-gray-300'>{event.description}</p>
                <h3 className='mb-2 text-xl text-white'>What to Expect:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={event.link}
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
            <p className='text-gray-600 mb-8'>
              Participating in these events can enrich your open-source experience, offering chances to learn, improve, and engage with like-minded individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events

