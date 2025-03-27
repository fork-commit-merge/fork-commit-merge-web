/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import Coffee from '../buttons/Coffee'
import Sponsor from '../buttons/Sponsor'

const Footer = () => {
  const [starCount, setStarCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/fork-commit-merge/fork-commit-merge')
      .then(response => response.json())
      .then(data => {
        setStarCount(data.stargazers_count)
      })
      .catch(error => {
        console.error('Failed fetching star count:', error)
      })
  }, [])

  return (
    <footer className='border-t border-gray-200 bg-gray-50'>
      <div className='modern-container py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='col-span-1 md:col-span-1'>
            <Link href='/' className='flex items-center'>
              <img
                src='/fork-commit-merge-logo.jpg'
                alt='Logo'
                className='h-10 w-auto'
              />
              <span
                className='ml-2 text-xl font-semibold'
                style={{ color: 'var(--fc-primary)' }}
              >
                Fork Commit Merge
              </span>
            </Link>
            <p className='mt-4 text-sm text-gray-600'>
              A project to help developers learn and practice Git and contribute
              to open source.
            </p>
            <div className='mt-4 flex items-center space-x-4'>
              <a
                href='https://github.com/fork-commit-merge/fork-commit-merge'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-modern-purple'
                aria-label='GitHub'
              >
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <Coffee />
              <Sponsor />
            </div>
          </div>

          <div className='col-span-1'>
            <h3 className='text-lg font-medium text-gray-900'>Technology</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a
                  href='https://nextjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href='https://vercel.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Vercel
                </a>
              </li>
              <li>
                <a
                  href='https://mongodb.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  MongoDB
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/fork-commit-merge/fork-commit-merge'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center text-sm text-gray-600 hover:text-modern-purple'
                >
                  <span>GitHub Stars</span>
                  {starCount !== null ? (
                    <span className='ml-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 group-hover:bg-gray-200'>
                      {starCount}
                    </span>
                  ) : (
                    ''
                  )}
                </a>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h3 className='text-lg font-medium text-gray-900'>Information</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link
                  href='https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CONTRIBUTING.md'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Contributing
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/nikohoffren'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/fork-commit-merge/fork-commit-merge/blob/main/CODE_OF_CONDUCT.md'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h3 className='text-lg font-medium text-gray-900'>Helpful Links</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link
                  href='/faq'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/resources'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href='/ai'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href='https://opensource.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-modern-purple'
                >
                  opensource.org
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-200 pt-8'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <p className='text-sm text-gray-500'>
              &copy; {new Date().getFullYear()}{' '}
              <Link
                href='https://nikohoffren.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-modern-purple'
              >
                Niko Hoffrén
              </Link>{' '}
              &{' '}
              <Link
                href='https://github.com/fork-commit-merge/fork-commit-merge#list-of-contributors'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-modern-purple'
              >
                GitHub community
              </Link>
            </p>
            <p className='mt-4 text-sm text-gray-500 md:mt-0'>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
