import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import Footer from '../layout/Footer'

jest.mock('../buttons/Coffee', () => () => <div data-testid="coffee-button" />)
jest.mock('../buttons/Sponsor', () => () => <div data-testid="sponsor-button" />)

describe('Footer', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ stargazers_count: 123 })
      } as Response)
    ) as jest.Mock
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('renders footer links and components', async () => {
    render(<Footer />)

    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('Helpful Links')).toBeInTheDocument()

    expect(screen.getByTestId('coffee-button')).toBeInTheDocument()
    expect(screen.getByTestId('sponsor-button')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('123')).toBeInTheDocument()
    })
  })
})
