import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24 lg:py-32'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
              Welcome to
              <span className='text-modern-purple'> Fork Commit Merge</span>
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600'>
              A project to help developers learn and practice Git and contribute
              to open source.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='https://github.com/fork-commit-merge/fork-commit-merge'
                className='hero-button'
                target='_blank'
                rel='noopener noreferrer'
              >
                Get Started
              </Link>
              <Link href='/help/faq' className='hero-button-outline'>
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
