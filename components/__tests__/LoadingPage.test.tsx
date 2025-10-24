import { render, screen } from '@testing-library/react'
import LoadingPage from '../layout/LoadingPage'
import { useRouter } from 'next/router'
import { act } from 'react-dom/test-utils'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('LoadingPage', () => {
  let pushMock: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.useRealTimers()
  })

  test('renders logo, title, bouncing dots and redirect text', () => {
    render(<LoadingPage />)

    expect(screen.getByAltText('FCM Logo')).toBeInTheDocument()

    expect(screen.getByText('Welcome to Fork, Commit, Merge')).toBeInTheDocument()

    expect(screen.getByText('Redirecting you to the homepage...')).toBeInTheDocument()

    const dots = document.querySelectorAll('.animate-bounce')
    expect(dots.length).toBe(3)
  })

  test('redirects to home after 3 seconds', () => {
    render(<LoadingPage />)

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    expect(pushMock).toHaveBeenCalledWith('/')
  })
})
