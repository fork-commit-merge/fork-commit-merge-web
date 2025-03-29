import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { motion } from 'framer-motion'

type LazyImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
    >
      {inView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fetchPriority="auto"
        />
      )}
    </motion.div>
  )
}

export default LazyImage
