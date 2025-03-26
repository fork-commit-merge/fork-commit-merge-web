import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 z-50 rounded-full bg-white p-3 text-black shadow-lg transition-all duration-500 hover:bg-white'
      >
        <ChevronUpIcon className='h-6 w-6' />
      </button>
    )
  )
}

export default BackToTopButton
