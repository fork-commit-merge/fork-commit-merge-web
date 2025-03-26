import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LoadingPage from '../components/LoadingPage'

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  // If not loaded yet, show loading page
  if (!isLoaded) {
    return <LoadingPage />
  }

  // If user is not signed in, redirect to sign-in
  if (!isSignedIn) {
    router.push('/sign-in')
    return null
  }

  // If user is signed in, show loading page (which will redirect to home)
  return <LoadingPage />
}

