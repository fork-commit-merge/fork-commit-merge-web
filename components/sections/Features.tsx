import {
  CodeBracketIcon,
  CommandLineIcon,
  BookOpenIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Open Source Learning',
    description:
      'Practice real-world open source contribution with 143 beginner-friendly issues across various programming languages and frameworks.',
    icon: CodeBracketIcon
  },
  {
    name: 'Structured Progression',
    description:
      'Issues are categorized into Easy, Medium, and Hard difficulties, allowing you to gradually build your skills and confidence.',
    icon: AcademicCapIcon
  },
  {
    name: 'Hands-on Testing',
    description:
      'Learn and practice testing with Jest, Jasmine, and Vitest through practical exercises and real test implementations.',
    icon: BeakerIcon
  },
  {
    name: 'Multi-Language Experience',
    description:
      'Explore a wide range of programming languages from modern (TypeScript, Rust, Go) to legacy (Fortran, Erlang) systems.',
    icon: CubeTransparentIcon
  },
  {
    name: 'Automated Learning',
    description:
      'Our bot automatically reverts changes after merging, keeping issues fresh for the next contributor while tracking your progress.',
    icon: RocketLaunchIcon
  },
  {
    name: 'Git Mastery',
    description:
      'Perfect your Git workflow through hands-on experience with forking, committing, and merging pull requests.',
    icon: CommandLineIcon
  },
  {
    name: 'Comprehensive Resources',
    description:
      'Access detailed documentation, and learning materials to help you succeed in your contributions.',
    icon: BookOpenIcon
  },
  {
    name: 'Community Recognition',
    description:
      'Get added to our contributors list and join a growing community of developers helping each other learn and grow.',
    icon: UserGroupIcon
  }
]

const Features = () => {
  return (
    <div className='bg-gray-50 py-24 sm:py-32'>
      <div className='modern-container'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-modern-purple text-2xl font-semibold leading-7'>
            Learn By Contributing
          </h2>
          <p className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Master Open Source Development
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            An educational platform designed to help developers
            improve their skills through practical open-source contribution, problem-solving,
            and hands-on learning.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
            {features.map(feature => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                  <feature.icon
                    className='text-modern-purple h-5 w-5 flex-none'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                  <p className='flex-auto'>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
