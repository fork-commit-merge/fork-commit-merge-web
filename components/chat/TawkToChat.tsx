import { useEffect } from 'react'

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to API
    const Tawk_API: any = window.Tawk_API || {}
    const Tawk_LoadStart = new Date()

    // Create and append the script
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]

    s1.async = true
    s1.src = 'https://embed.tawk.to/67e9792b57cf2a190d47a9b3/1ink02kf4'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')

    s0.parentNode?.insertBefore(s1, s0)

    // Cleanup function to remove the script when component unmounts
    return () => {
      s1.remove()
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return null // This component doesn't render anything
}

export default TawkToChat
