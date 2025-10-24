import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from '@jest/globals'
import { Contributors } from '../index/Contributors'

describe('Contributors', () => {
  const mockContributors = [
    { id: '1', url: 'https://github.com/alice', avatar: '/alice.png', name: 'Alice' },
    { id: '2', url: 'https://github.com/bob', avatar: '/bob.png', name: 'Bob' }
  ]

  test('renders all contributor images', () => {
    render(<Contributors contributors={mockContributors} />)

    const aliceImage = screen.getByAltText('Alice')
    const bobImage = screen.getByAltText('Bob')

    expect(aliceImage).not.toBeNull()
    expect(bobImage).not.toBeNull()

    const aliceLink = screen.getByRole('link', { name: /alice/i })
    const bobLink = screen.getByRole('link', { name: /bob/i })

    expect(aliceLink.getAttribute('href')).toBe('https://github.com/alice')
    expect(bobLink.getAttribute('href')).toBe('https://github.com/bob')
  })

  test('renders fallback when image fails to load', () => {
    render(<Contributors contributors={mockContributors} />)

    const aliceImage = screen.getByAltText('Alice')
    fireEvent.error(aliceImage)

    const fallback = screen.getByText('A')
    expect(fallback).not.toBeNull()
  })
})
