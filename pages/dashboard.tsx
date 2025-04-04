import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LoadingPage from '../components/LoadingPage'

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  if (!isLoaded) {
    return <LoadingPage />
  }

  if (!isSignedIn) {
    router.push('/sign-in')
    return null
  }

  return <LoadingPage />
}

