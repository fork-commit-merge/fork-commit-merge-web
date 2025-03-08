import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import BackToTopButton from '../components/buttons/BackToTopButton';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackToTopButton/>
    </ClerkProvider>
    
  )
}

export default MyApp
