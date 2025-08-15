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
import TawkToChat from '../components/chat/TawkToChat'

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
          //* Ensure all text is white and visible in dark mode
          userButtonPopoverCard:
            'text-white [&_svg]:text-white [&_*]:text-white',
          userButtonPopoverActionButton: '[&_svg]:text-white [&_*]:text-white',
          userButtonPopoverFooter: '[&_svg]:text-white [&_*]:text-white',
          //* Dashboard and general text styling
          pageScrollBox: 'text-white [&_*]:text-white',
          card: 'font-sans text-white [&_*]:text-white',
          navbar: 'font-sans',
          headerTitle: 'text-white',
          headerSubtitle: 'text-white',
          socialButtonsBlockButton: 'text-white',
          formFieldLabel: 'text-white',
          formFieldInput: 'text-white',
          formFieldInputShowPasswordButton: 'text-white',
          formResendCodeLink: 'text-white',
          footerActionLink: 'text-white',
          footerActionText: 'text-white',
          identityPreviewText: 'text-white',
          identityPreviewEditButton: 'text-white',
          formButtonPrimary: 'font-sans text-white',
          formButtonSecondary: 'text-white',
          dividerLine: 'text-white',
          dividerText: 'text-white',
          alertText: 'text-white',
          alert: 'text-white',
          modalBackdrop: 'text-white',
          modalContent: 'text-white [&_*]:text-white',
          //* Ensure all text elements in Clerk components are white
          '*': 'text-white'
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
        <TawkToChat />
      </main>
    </ClerkProvider>
  )
}

export default MyApp
