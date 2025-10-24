import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import Header from '../layout/Header'

jest.mock('@clerk/nextjs', () => ({
  useUser: jest.fn(),
  UserButton: jest.fn(() => <div data-testid="user-button" />),
}))

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Header component', () => {
  const pushMock = jest.fn()
  const onMock = jest.fn()
  const offMock = jest.fn()

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      events: { on: onMock, off: offMock },
    })

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ stargazers_count: 123 }),
      }) as any
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  const renderHeader = async () => {
    await act(async () => {
      render(<Header />)
    })
  }

  test('renders logo and main links', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    await renderHeader()

    expect(screen.getAllByAltText('Logo')[0]).toBeInTheDocument()
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Frameworks')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
    expect(screen.getByText('Roadmap')).toBeInTheDocument()
    expect(screen.getAllByText('Sign In')[0]).toBeInTheDocument()
  })

  test('fetches GitHub stars and displays them', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    await renderHeader()

    await waitFor(() => {
      expect(screen.getAllByText('123')[0]).toBeInTheDocument()
    })
  })

  test('toggles dropdown menus', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    await renderHeader()

    const languagesButton = screen.getByText('Languages')
    fireEvent.click(languagesButton)
    expect(screen.getByText('JavaScript')).toBeInTheDocument()

    fireEvent.click(languagesButton)
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument()
  })

  test('navigates when dropdown item clicked', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    await renderHeader()

    fireEvent.click(screen.getByText('Languages'))
    fireEvent.click(screen.getByText('JavaScript'))
    expect(pushMock).toHaveBeenCalledWith('/languages/javascript')
  })

  test('mobile menu toggles', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })
    await renderHeader()

    const menuButton = screen.getByTestId('mobile-menu-button')

    fireEvent.click(menuButton)
    await waitFor(() => {
      const lang = screen.getAllByText('Languages')
      expect(lang.length).toBeGreaterThan(0)
    })

    fireEvent.click(menuButton)
    await waitFor(() => {
      const lang = screen.queryAllByText('Languages')
      expect(lang.length).toBeGreaterThan(0)
    })
  })

  test('renders UserButton if user is logged in', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: { id: '1' }, isLoaded: true })

    await renderHeader()

    expect(screen.getByTestId('user-button')).toBeInTheDocument()
  })

  test('handles fetch error gracefully', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    await renderHeader()

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalled()
    })
    errorSpy.mockRestore()
  })

  test('registers and cleans up router.events listeners', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    const { unmount } = render(<Header />)

    await waitFor(() => {
      expect(onMock).toHaveBeenCalledWith('routeChangeStart', expect.any(Function))
    })

    unmount()
    expect(offMock).toHaveBeenCalledWith('routeChangeStart', expect.any(Function))
  })

  test('toggleSideNav opens and closes side navigation', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })
    await renderHeader()

    const menuButton = screen.getByTestId('mobile-menu-button')
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    expect(menuButton).toBeInTheDocument()
  })

  test('dispatches custom event when dropdowns open', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })
    const eventSpy = jest.fn()
    window.addEventListener('dropdownOpened', eventSpy)

    await renderHeader()

    const langBtn = screen.getAllByText('Languages')[0]
    const fwBtn = screen.getAllByText('Frameworks')[0]
    const gitBtn = screen.getAllByText('Git')[0]
    const roadmapBtn = screen.getAllByText('Roadmap')[0]

    fireEvent.click(langBtn)
    fireEvent.click(fwBtn)
    fireEvent.click(gitBtn)
    fireEvent.click(roadmapBtn)

    expect(eventSpy).toHaveBeenCalledTimes(4)

    window.removeEventListener('dropdownOpened', eventSpy)
  })

  test('navigates for framework', async () => {
    ;(useUser as jest.Mock).mockReturnValue({ user: null, isLoaded: true })

    await renderHeader()

    const fwBtn = screen.getAllByText('Frameworks')[0]
    fireEvent.click(fwBtn)
    fireEvent.click(await screen.findByText('React'))
    expect(pushMock).toHaveBeenCalledWith('/frameworks/react')


  })
})
