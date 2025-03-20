import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import BackToTopButton from '../components/buttons/BackToTopButton'
import { Ubuntu } from 'next/font/google'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  adjustFontFallback: false,
})

const ubuntu = Ubuntu({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark,
        elements: {
          // Ensure Clerk elements use their default font
          formButtonPrimary: 'font-sans',
          card: 'font-sans',
          navbar: 'font-sans',
          // Ensure icons are visible in dark mode
          userButtonPopoverCard: 'text-white [&_svg]:text-white',
          userButtonPopoverActionButton: '[&_svg]:text-white',
          userButtonPopoverFooter: '[&_svg]:text-white'
        }
      }}
    >
      <main className={`${ysabeau.className} ${ubuntu.className}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <BackToTopButton/>
      </main>
    </ClerkProvider>
  )
}

export default MyApp




