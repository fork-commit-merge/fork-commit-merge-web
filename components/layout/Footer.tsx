/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [starCount, setStarCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/nikohoffren/fork-commit-merge')
      .then(response => response.json())
      .then(data => {
        setStarCount(data.stargazers_count)
      })
      .catch(error => {
        console.error('Failed fetching star count:', error)
      })
  }, [])

  return (
    <footer className='bg-secondary '>
      <div className='mx-auto max-w-5xl px-4 py-8 pb-6 sm:px-0'>
        <div className='grid grid-cols-1 px-4 sm:grid-cols-2 lg:px-0'>
          <div>
            <div className='mt-3 max-w-md space-y-2 text-center leading-relaxed text-black sm:max-w-xs sm:text-left'>
              <a
                href='https://nextjs.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex w-fit items-center gap-2 rounded bg-slate-100 p-1.5 text-sm font-bold shadow-lg'
              >
                Created with
                <Image
                  src='/next.svg'
                  alt='NextJS Logo'
                  title='created with NextJS'
                  width={62}
                  height={62}
                />
              </a>
              <a
                href='https://vercel.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex w-fit items-center gap-2 rounded bg-slate-100 p-1.5 text-sm font-bold shadow-lg'
              >
                Deployed with
                <Image
                  src='/vercel.svg'
                  alt='Vercel Logo'
                  title='deployed with Vercel'
                  width={62}
                  height={62}
                />
              </a>
              <a
                href='https://mongodb.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex w-fit items-center gap-2 rounded bg-slate-100 p-1.5 text-sm font-bold shadow-lg'
              >
                Data stored with
                <Image
                  src='/mongodb.png'
                  alt='MongoDB Logo'
                  title='Data stored with MongoDB'
                  width={62}
                  height={62}
                />
              </a>
              <a
                href='https://github.com/nikohoffren/fork-commit-merge'
                target='_blank'
                rel='noopener noreferrer'
                className='flex w-fit items-center space-x-2 rounded bg-slate-100 p-1.5 text-sm font-bold shadow-lg transition-all hover:bg-slate-300'
              >
                <span>Github Stars</span>
                {starCount !== null ? (
                  <>
                    <StarFilled color='currentColor' width={62} height={62} />
                    <div>{starCount}</div>
                  </>
                ) : (
                  ''
                )}
              </a>
            </div>
          </div>

          <div className='mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2 md:mt-0'>
            <div className='text-center sm:text-end'>
              <p className='text-lg font-bold '>Information</p>

              <ul className='mt-4 space-y-4 text-sm [&>li>a]:transition-all'>
                <li>
                  <Link
                    className='hover:/75 text-sm font-medium  transition hover:text-gray-300'
                    href='https://github.com/nikohoffren/fork-commit-merge/blob/main/CONTRIBUTING.md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Contributing
                  </Link>
                </li>

                <li>
                  <Link
                    className='hover:/75 text-sm font-medium  transition hover:text-gray-300'
                    href='/privacy-policy'
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    className='hover:/75 text-sm font-medium  transition hover:text-gray-300'
                    href='https://github.com/nikohoffren'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-end'>
              <p className='pb-4 text-lg font-bold'>Helpful Links</p>

              <ul className='hover:text-gray-300mt-4 space-y-4 text-sm [&>li>a]:transition-all'>
                <li>
                  <Link
                    className='hover:/75 text-sm font-medium hover:text-gray-300'
                    href='/faq'
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    className='hover:/75 text-sm  font-medium hover:text-gray-300'
                    href='https://github.com/nikohoffren/fork-commit-merge/blob/main/CODE_OF_CONDUCT.md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:/75 text-sm  font-medium hover:text-gray-300'
                    href='https://opensource.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    opensource.org
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-800 pt-6'>
          <div className='text-center sm:flex sm:justify-between sm:text-left'>
            <p className='text-sm text-gray-400'>
              <span className='block sm:inline'>All rights reserved</span>
            </p>

            <p className='[&>a] mt-4 text-sm text-gray-400 sm:order-first sm:mt-0'>
              &copy; {new Date().getFullYear()}{' '}
              <Link
                href='https://nikohoffren.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500'
              >
                Niko Hoffrén
              </Link>{' '}
              &{' '}
              <Link
                href='https://github.com/nikohoffren/fork-commit-merge#list-of-contributors'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500'
              >
                GitHub community
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
