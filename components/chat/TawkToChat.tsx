import { useEffect } from 'react'

const TawkToChat = () => {
  useEffect(() => {
    const Tawk_API: any = window.Tawk_API || {}
    const Tawk_LoadStart = new Date()

    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]

    s1.async = true
    s1.src = 'https://embed.tawk.to/67e9792b57cf2a190d47a9b3/1ink02kf4'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')

    s0.parentNode?.insertBefore(s1, s0)

    const style = document.createElement('style')
    style.textContent = `
      body #tawkto-container,
      body #tawkto-container iframe,
      body .tawk-minimized,
      body .tawk-button,
      body .tawk-button-container,
      body .tawk-chat-container,
      body .tawk-chat-iframe {
        right: 150px !important;
        margin-right: 150px !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      s1.remove()
      style.remove()
    }
  }, [])

  return null
}

export default TawkToChat
