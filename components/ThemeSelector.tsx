import { useState, useEffect } from 'react';
import { ColorSwatchIcon } from '@heroicons/react/outline';

const themes = [
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Red', value: 'red' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Purple', value: 'purple' },
  { name: 'Black', value: 'black' },
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ?? 'blue';
    setCurrentTheme(savedTheme);
    document.documentElement.className = `theme-${savedTheme}`;
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.className = `theme-${theme}`;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDropdownChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('dropdownOpened', handleDropdownChange);
    return () => window.removeEventListener('dropdownOpened', handleDropdownChange);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full p-2 text-white hover:text-white focus:outline-none"
        title="Change theme"
      >
        <ColorSwatchIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute md:right-0 md:mt-2 mt-2 w-36 rounded-md bg-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 md:left-auto left-0">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value)}
              className={`block w-full px-4 py-2 text-left text-sm text-gray-100
                ${currentTheme === theme.value ? 'bg-secondary' : ''}
                hover:bg-[#1a1a1a] transition-colors duration-150`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;

