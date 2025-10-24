import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { beforeAll, beforeEach, describe, expect, jest, test } from '@jest/globals'
import BackToTopButton from '../buttons/BackToTopButton'
import '@testing-library/jest-dom'

describe('BackToTopButton Test', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn()

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  test('Not displayed when scrollY < 300', () => {
    render(<BackToTopButton />)
    fireEvent.scroll(window)
    expect(screen.queryByRole('button')).toBeNull()
  })

  test('Displayed when scrollY > 300', () => {
    render(<BackToTopButton />)
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button'))
  })

  test('When clicked, it calls scrollTo with the correct parameters', () => {
    render(<BackToTopButton />)
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true })
    fireEvent.scroll(window)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })
})

