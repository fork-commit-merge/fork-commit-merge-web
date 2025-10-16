import { motion } from 'framer-motion'
import Link from 'next/link'
import { ides } from '../../components/data/IDEInfo'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function IDE() {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Integrated Development{' '}
              <span className='text-modern-blue'>Environments</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Discover powerful IDEs and development tools to enhance your
              coding workflow.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16 flex justify-center'
          >
            <motion.div variants={item} className='w-full max-w-4xl'>
              <div className='rounded-lg bg-gray-50 p-8 shadow-sm'>
                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  What is an IDE?
                </h2>
                <p className='mb-6 text-gray-600'>
                  An Integrated Development Environment (IDE) is a software
                  application that consolidates basic tools required for
                  software testing and development. An IDE typically consists of
                  a source code editor, build automation tools, and a debugger.
                  Some IDEs, like Android Studio or Visual Studio, even offer
                  more advanced features such as version control, databases,
                  cloud services, and more.
                </p>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>
                  Why use an IDE?
                </h3>
                <p className='mb-6 text-gray-600'>
                  Using an IDE can significantly speed up the development
                  process by offering a variety of tools and features under one
                  roof.
                </p>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>
                  Key Benefits:
                </h3>
                <ul className='grid gap-4 text-gray-600 sm:grid-cols-2'>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-blue'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Efficiency: With everything in one place, developers can
                    write, test, and debug code without needing to switch
                    between different tools.
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-blue'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Code Assistance: Many IDEs offer features like
                    autocompletion, syntax highlighting, and suggestions, making
                    the code-writing process smoother.
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Integrated Debugging: Integrated debuggers allow developers
                    to test and debug their programs within the IDE, speeding up
                    the development cycle.
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Extensions & Plugins: Most modern IDEs support a wide range
                    of extensions and plugins, enabling developers to customize
                    their environment and add even more functionalities.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16 flex justify-center'
          >
            <motion.div variants={item} className='w-full max-w-4xl'>
              <div className='rounded-lg bg-gray-50 p-8 shadow-sm'>
                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  A Brief History of IDEs
                </h2>
                <p className='mb-6 text-gray-600'>
                  The concept of an IDE dates back to the early days of
                  computing when programming tools started to be integrated into
                  a single environment. One of the earliest examples of this was
                  the Maestro I, developed in the 1970s for the PDP-11
                  minicomputers. As computers and programming languages evolved,
                  so did IDEs. In the 1990s, with the rise of graphical user
                  interfaces, IDEs like Microsoft&apos;s Visual Studio and
                  Borland&apos;s Delphi became popular. With the increasing
                  demand for web development, IDEs evolved to support a plethora
                  of languages, platforms, and technologies, leading to the
                  diverse range of options available today.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16 flex justify-center'
          >
            <motion.div variants={item} className='w-full max-w-4xl'>
              <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                Popular IDEs
              </h2>
              <div className='grid gap-8 md:grid-cols-2'>
                {ides.map((ide, index) => (
                  <div
                    key={index}
                    className='rounded-lg bg-gray-50 p-6 shadow-sm'
                  >
                    <h3 className='mb-4 text-xl font-semibold text-gray-900'>
                      {ide.name}
                    </h3>
                    <p className='mb-4 text-gray-600'>{ide.description}</p>
                    <h4 className='mb-2 text-lg font-medium text-gray-900'>
                      Functionalities:
                    </h4>
                    <ul className='mb-4 list-disc pl-5 text-gray-600'>
                      {ide.functionalities.map((func, idx) => (
                        <li key={idx}>{func}</li>
                      ))}
                    </ul>
                    <h4 className='mb-2 text-lg font-medium text-gray-900'>
                      Supported Languages:
                    </h4>
                    <ul className='mb-4 list-disc pl-5 text-gray-600'>
                      {ide.supportedLanguages.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                      ))}
                    </ul>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      href={ide.installLink}
                      passHref
                    >
                      <span className='cursor-pointer text-modern-purple hover:underline'>
                        Install {ide.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
