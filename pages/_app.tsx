import { SessionProvider } from 'next-auth/react'
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark
      }}
    >
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ClerkProvider>
  )
}

export default MyApp
