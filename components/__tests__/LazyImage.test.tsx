import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useInView } from 'react-intersection-observer'
import { describe, expect, test } from '@jest/globals'
import React from 'react'
import LazyImage from '../index/LazyImage'

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn()
}))

const mockedUseInView = useInView as unknown as jest.Mock

describe('LazyImage', () => {
  const mockProps = {
    src: '/test.png',
    alt: 'Test Image',
    width: 100,
    height: 100
  }

  test('does not render image when not in view', () => {
    mockedUseInView.mockReturnValue({ ref: jest.fn(), inView: false })

    render(<LazyImage {...mockProps} />)

    expect(screen.queryByAltText('Test Image')).toBeNull()
  })

  test('renders image when in view', () => {
    mockedUseInView.mockReturnValue({ ref: jest.fn(), inView: true })

    render(<LazyImage {...mockProps} />)

    const img = screen.getByAltText('Test Image')
    expect(img).not.toBeNull()
    expect(img?.getAttribute('src')).toContain('test.png')
  })
})
