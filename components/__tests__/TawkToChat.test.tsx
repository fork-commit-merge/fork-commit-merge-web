import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { afterEach, beforeAll, beforeEach, describe, expect, jest, test } from '@jest/globals'
import TawkToChat from '../chat/TawkToChat'

describe('TawkToChat Test', () => {
  beforeEach(() => {
    const existingScript = document.createElement('script')
    document.head.appendChild(existingScript)
  })

  afterEach(() => {
    cleanup()
    document.querySelectorAll('script').forEach(s => s.remove())
    document.querySelectorAll('style').forEach(s => s.remove())
  })

  test('Adds Tawk.to script and style on mount', () => {
    render(<TawkToChat />)

    const script = document.querySelector('script[src*="tawk.to"]') as HTMLScriptElement | null
    expect(script).not.toBeNull()
    expect(script?.async).toBe(true)
    expect(script?.charset).toBe('UTF-8')
    expect(script?.getAttribute('crossorigin')).toBe('*')

    const style = document.querySelector('style') as HTMLStyleElement | null
    expect(style).not.toBeNull()
    expect(style?.textContent).toContain('#tawkto-container')
  })

  test('Removes Tawk.to script and style on unmount', () => {
    const { unmount } = render(<TawkToChat />)
    unmount()

    const script = document.querySelector('script[src*="tawk.to"]') as HTMLScriptElement | null
    const style = document.querySelector('style') as HTMLStyleElement | null

    expect(script).toBeNull()
    expect(style).toBeNull()
  })
})
