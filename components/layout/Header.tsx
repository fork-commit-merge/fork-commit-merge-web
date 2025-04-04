/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Coffee from '../buttons/Coffee'
import styles from '../../styles/Coffee.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import { StarFilled } from '@ant-design/icons'
import { languageList } from '../data/languageList'
import { frameworkList } from '../data/frameworkList'
import { gitList } from '../data/gitList'
import { roadmapList } from '../data/roadmapList'
import { UserButton, useUser } from '@clerk/nextjs'
import ThemeSelector from '../ThemeSelector'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [isFrameworkDropdownOpen, setFrameworkDropdownOpen] = useState(false)
  const [isGitSelectionDropdownOpen, setGitSelectionDropdownOpen] =
    useState(false)
  const [isRoadmapDropdownOpen, setRoadmapDropdownOpen] = useState(false)
  const node = useRef<HTMLLIElement | null>(null)
  const frameworkNode = useRef<HTMLLIElement | null>(null)
  const gitSelectionNode = useRef<HTMLLIElement | null>(null)
  const roadmapNode = useRef<HTMLLIElement | null>(null)
  const router = useRouter()
  const [starCount, setStarCount] = useState<number | null>(null)
  const { user, isLoaded } = useUser()

  useEffect(() => {
    fetch('/api/repo-stats')
      .then(response => response.json())
      .then(data => {
        setStarCount(data.stargazers_count)
      })
      .catch(error => {
        console.error('Failed fetching star count:', error)
      })
  }, [])

  const toggleSideNav = () => {
    setIsOpen(!isOpen)
  }

  const navigateToLanguage = (link: string) => {
    router.push(link)
    setLanguageDropdownOpen(false)
  }

  const navigateToFramework = (link: string) => {
    router.push(link)
    setFrameworkDropdownOpen(false)
  }

  const navigateToGitSelection = (link: string) => {
    router.push(link)
    setGitSelectionDropdownOpen(false)
  }

  const navigateToRoadmap = (link: string) => {
    router.push(link)
    setRoadmapDropdownOpen(false)
  }

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen)
    if (!isLanguageDropdownOpen) {
      window.dispatchEvent(new Event('dropdownOpened'))
    }
    setFrameworkDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setRoadmapDropdownOpen(false)
  }

  const toggleFrameworkDropdown = () => {
    setFrameworkDropdownOpen(!isFrameworkDropdownOpen)
    if (!isFrameworkDropdownOpen) {
      window.dispatchEvent(new Event('dropdownOpened'))
    }
    setLanguageDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
    setRoadmapDropdownOpen(false)
  }

  const toggleGitSelectionDropdown = () => {
    setGitSelectionDropdownOpen(!isGitSelectionDropdownOpen)
    if (!isGitSelectionDropdownOpen) {
      window.dispatchEvent(new Event('dropdownOpened'))
    }
    setLanguageDropdownOpen(false)
    setFrameworkDropdownOpen(false)
    setRoadmapDropdownOpen(false)
  }

  const toggleRoadmapDropdown = () => {
    setRoadmapDropdownOpen(!isRoadmapDropdownOpen)
    if (!isRoadmapDropdownOpen) {
      window.dispatchEvent(new Event('dropdownOpened'))
    }
    setLanguageDropdownOpen(false)
    setFrameworkDropdownOpen(false)
    setGitSelectionDropdownOpen(false)
  }

  return (
    <nav className='border-b border-gray-200 bg-white shadow-md'>
      <div className='modern-container'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <Link href='/' className='flex items-center'>
              <img
                src='/fork-commit-merge-logo.jpg'
                alt='Logo'
                className='h-10 w-auto'
              />
            </Link>

            <div className='hidden md:block'>
              <div className='flex items-center space-x-6'>
                <div
                  className='relative'
                  ref={node as React.RefObject<HTMLDivElement>}
                >
                  <button
                    onClick={toggleLanguageDropdown}
                    className='flex items-center transition-colors hover:text-modern-purple'
                    style={{ color: 'var(--fc-primary)' }}
                  >
                    <span className='font-medium'>Languages</span>
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {isLanguageDropdownOpen && (
                    <div
                      className='scrollable-dropdown absolute z-50 mt-2 w-60 rounded-md py-1 shadow-lg'
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--fc-primary)'
                      }}
                    >
                      {languageList.map(language => (
                        <button
                          key={language.name}
                          onClick={() => navigateToLanguage(language.link)}
                          className='block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)]'
                          style={{
                            color: 'var(--fc-primary)',
                            backgroundColor: 'var(--bg-secondary)'
                          }}
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className='relative'
                  ref={frameworkNode as React.RefObject<HTMLDivElement>}
                >
                  <button
                    onClick={toggleFrameworkDropdown}
                    className='flex items-center transition-colors hover:text-modern-purple'
                    style={{ color: 'var(--fc-primary)' }}
                  >
                    <span className='font-medium'>Frameworks</span>
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isFrameworkDropdownOpen ? 'rotate-180' : ''}`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {isFrameworkDropdownOpen && (
                    <div
                      className='scrollable-dropdown absolute z-50 mt-2 w-60 rounded-md py-1 shadow-lg'
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--fc-primary)'
                      }}
                    >
                      {frameworkList.map(framework => (
                        <button
                          key={framework.name}
                          onClick={() => navigateToFramework(framework.link)}
                          className='block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)]'
                          style={{
                            color: 'var(--fc-primary)',
                            backgroundColor: 'var(--bg-secondary)'
                          }}
                        >
                          {framework.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className='relative'
                  ref={gitSelectionNode as React.RefObject<HTMLDivElement>}
                >
                  <button
                    onClick={toggleGitSelectionDropdown}
                    className='flex items-center transition-colors hover:text-modern-purple'
                    style={{ color: 'var(--fc-primary)' }}
                  >
                    <span className='font-medium'>Git</span>
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isGitSelectionDropdownOpen ? 'rotate-180' : ''}`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {isGitSelectionDropdownOpen && (
                    <div
                      className='scrollable-dropdown absolute z-50 mt-2 w-60 rounded-md py-1 shadow-lg'
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--fc-primary)'
                      }}
                    >
                      {gitList.map(git => (
                        <button
                          key={git.name}
                          onClick={() => navigateToGitSelection(git.link)}
                          className='block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)]'
                          style={{
                            color: 'var(--fc-primary)',
                            backgroundColor: 'var(--bg-secondary)'
                          }}
                        >
                          {git.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className='relative'
                  ref={roadmapNode as React.RefObject<HTMLDivElement>}
                >
                  <button
                    onClick={toggleRoadmapDropdown}
                    className='flex items-center transition-colors hover:text-modern-purple'
                    style={{ color: 'var(--fc-primary)' }}
                  >
                    <span className='font-medium'>Roadmap</span>
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isRoadmapDropdownOpen ? 'rotate-180' : ''}`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {isRoadmapDropdownOpen && (
                    <div
                      className='scrollable-dropdown absolute z-50 mt-2 w-60 rounded-md py-1 shadow-lg'
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--fc-primary)'
                      }}
                    >
                      {roadmapList.map(roadmap => (
                        <button
                          key={roadmap.name}
                          onClick={() => navigateToRoadmap(roadmap.link)}
                          className='block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)]'
                          style={{
                            color: 'var(--fc-primary)',
                            backgroundColor: 'var(--bg-secondary)'
                          }}
                        >
                          {roadmap.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='hidden items-center md:flex'>
            <div className='flex items-center space-x-4'>
              <Link
                href='/resources'
                className='mx-2 font-medium text-gray-700 transition-colors hover:text-modern-purple'
              >
                Resources
              </Link>
              <Link
                href='/contributors'
                className='mx-2 font-medium text-gray-700 transition-colors hover:text-modern-purple'
              >
                Contributors
              </Link>
              <Link
                href='/ai'
                className='mx-2 font-medium text-gray-700 transition-colors hover:text-modern-purple'
              >
                AI Tools
              </Link>

              <div className='h-5 border-r border-gray-300'></div>

              <a
                href='https://github.com/fork-commit-merge/fork-commit-merge'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-700 transition-colors hover:text-modern-purple'
              >
                <svg
                  className='mr-1 h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                {starCount !== null && (
                  <span className='text-sm font-medium'>{starCount}</span>
                )}
              </a>

              <ThemeSelector />

              {isLoaded &&
                (user ? (
                  <UserButton afterSignOutUrl='/' />
                ) : (
                  <Link href='/dashboard' className='modern-button text-sm'>
                    Sign In
                  </Link>
                ))}
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleSideNav}
              className='text-gray-700 hover:text-modern-purple'
            >
              {isOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='z-50 bg-white shadow-lg md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
            <div className='block px-3 py-2 text-base font-medium text-gray-700'>
              <button
                onClick={toggleLanguageDropdown}
                className='flex w-full items-center justify-between'
              >
                <span>Languages</span>
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className='space-y-2 pl-4 pt-2'>
                  {languageList.map(language => (
                    <button
                      key={language.name}
                      onClick={() => navigateToLanguage(language.link)}
                      className='block w-full py-1 text-left text-sm text-gray-600 hover:text-modern-purple'
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className='block px-3 py-2 text-base font-medium text-gray-700'>
              <button
                onClick={toggleFrameworkDropdown}
                className='flex w-full items-center justify-between'
              >
                <span>Frameworks</span>
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${isFrameworkDropdownOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {isFrameworkDropdownOpen && (
                <div className='space-y-2 pl-4 pt-2'>
                  {frameworkList.map(framework => (
                    <button
                      key={framework.name}
                      onClick={() => navigateToFramework(framework.link)}
                      className='block w-full py-1 text-left text-sm text-gray-600 hover:text-modern-purple'
                    >
                      {framework.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className='block px-3 py-2 text-base font-medium text-gray-700'>
              <button
                onClick={toggleGitSelectionDropdown}
                className='flex w-full items-center justify-between'
              >
                <span>Git</span>
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${isGitSelectionDropdownOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {isGitSelectionDropdownOpen && (
                <div className='space-y-2 pl-4 pt-2'>
                  {gitList.map(git => (
                    <button
                      key={git.name}
                      onClick={() => navigateToGitSelection(git.link)}
                      className='block w-full py-1 text-left text-sm text-gray-600 hover:text-modern-purple'
                    >
                      {git.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href='/resources'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-purple'
            >
              Resources
            </Link>

            <Link
              href='/contributors'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-purple'
            >
              Contributors
            </Link>

            <Link
              href='/ai'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-purple'
            >
              AI Tools
            </Link>

            <Link
              href='/faq'
              onClick={() => setIsOpen(false)}
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-purple'
            >
              FAQ
            </Link>

            <div className='flex items-center space-x-2 px-3 py-2'>
              <ThemeSelector />
              {isLoaded && !user && (
                <Link
                  href='/dashboard'
                  className='modern-button w-full text-center text-sm'
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
