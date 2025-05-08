import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
        className='fixed right-3 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-500 hover:bg-white hover:text-modern-black'
      >
        <ChevronUpIcon className='h-6 w-6' />
      </button>
    )
  )
}

export default BackToTopButton
