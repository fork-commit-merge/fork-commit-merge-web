import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

type Theme = {
  name: string
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
  >
}

const themes: Theme[] = [
  { name: 'light', icon: SunIcon },
  { name: 'dark', icon: MoonIcon }
]

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.add(`theme-${savedTheme}`)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove(`theme-${theme}`)
    document.documentElement.classList.add(`theme-${newTheme}`)
    setIsOpen(false)
  }

  const currentTheme = themes.find(t => t.name === theme)
  const CurrentIcon = currentTheme?.icon

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='focus:ring-modern-purple flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2'
      >
        {CurrentIcon && <CurrentIcon className='h-5 w-5' />}
        <span className='capitalize'>{theme}</span>
      </button>

      {isOpen && (
        <div className='absolute left-0 md:left-auto md:right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {themes.map(t => {
            const Icon = t.icon
            return (
              <button
                key={t.name}
                onClick={() => handleThemeChange(t.name)}
                className='flex w-full items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                <Icon className='h-5 w-5' />
                <span className='capitalize'>{t.name}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ThemeSelector

