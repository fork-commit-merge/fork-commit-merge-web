import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const ThemeSelector = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.add(`theme-${savedTheme}`)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove(`theme-${theme}`)
    document.documentElement.classList.add(`theme-${newTheme}`)
  }

  return (
    <button
      onClick={toggleTheme}
      className='text-text-1 hover:bg-background-2 focus:ring-primary flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 hover:text-blue-400'
    >
      {theme === 'dark' ? (
        <SunIcon className='h-5 w-5' />
      ) : (
        <MoonIcon className='h-5 w-5' />
      )}
      <span className='capitalize'>{theme}</span>
    </button>
  )
}

export default ThemeSelector
