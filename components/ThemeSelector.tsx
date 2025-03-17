import { useState, useEffect } from 'react';
import { ColorSwatchIcon } from '@heroicons/react/outline';

const themes = [
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Red', value: 'red' },
  { name: 'Yellow', value: 'yellow' },
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'blue';
    setCurrentTheme(savedTheme);
    document.documentElement.className = `theme-${savedTheme}`;
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.className = `theme-${theme}`;
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      >
        <ColorSwatchIcon className='h-5 w-5' />
        <span className='hidden md:inline font-bold'>Theme</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg'>
          {themes.map(theme => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value)}
              className={`block w-full px-4 py-2 text-left text-sm font-bold ${
                currentTheme === theme.value
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
};

export default ThemeSelector;
