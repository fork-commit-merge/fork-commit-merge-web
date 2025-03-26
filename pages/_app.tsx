import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import BackToTopButton from '../components/buttons/BackToTopButton'
import { Ubuntu } from 'next/font/google'
import { Ysabeau } from 'next/font/google'
import { useEffect } from 'react'

const ysabeau = Ysabeau({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  adjustFontFallback: false
})

const ubuntu = Ubuntu({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap'
})

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    //* Set default theme to dark if no theme is selected
    const savedTheme = localStorage.getItem('theme') ?? 'dark'
    //* Remove any existing theme classes
    document.documentElement.classList.remove('theme-light', 'theme-dark')
    //* Add the selected theme class
    document.documentElement.classList.add(`theme-${savedTheme}`)
  }, [])

  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark,
        elements: {
          //* Ensure Clerk elements use their default font
          formButtonPrimary: 'font-sans',
          card: 'font-sans',
          navbar: 'font-sans',
          //* Ensure icons are visible in dark mode
          userButtonPopoverCard: 'text-white [&_svg]:text-white',
          userButtonPopoverActionButton: '[&_svg]:text-white',
          userButtonPopoverFooter: '[&_svg]:text-white'
        }
      }}
    >
      <main
        className={`${ysabeau.className} ${ubuntu.className} flex min-h-screen flex-col`}
      >
        <Header />
        <div className='flex-grow'>
          <Component {...pageProps} />
        </div>
        <Footer />
        <BackToTopButton />
      </main>
    </ClerkProvider>
  )
}

export default MyApp
