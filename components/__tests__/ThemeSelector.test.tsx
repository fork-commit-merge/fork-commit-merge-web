import { render, screen, fireEvent } from '@testing-library/react'
import ThemeSelector from '../ui/ThemeSelector'

describe('ThemeSelector', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
  })

  test('renders with default theme', () => {
    render(<ThemeSelector />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('dark')
    expect(document.documentElement.classList.contains('theme-dark')).toBe(true)
  })

  test('toggles theme on click', () => {
    render(<ThemeSelector />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(button).toHaveTextContent('light')
    expect(document.documentElement.classList.contains('theme-light')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('light')

    fireEvent.click(button)
    expect(button).toHaveTextContent('dark')
    expect(document.documentElement.classList.contains('theme-dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
