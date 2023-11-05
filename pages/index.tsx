/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import IndexIntro from '../components/index/IndexIntro'
import Descriptions from '../components/index/Descriptions'
import IndexMain from '../components/index/IndexMain'
import Testimonials from '../components/index/Testimonials'
import { testimonials } from '../components/data/testimonials'

export default function Home() {
  return (
    <div>
      <main className='bg-secondary flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 md:px-0'>
        <div
          className='mx-auto mt-6 overflow-hidden rounded-md'
          style={{ width: 100, height: 100 }}
        >
          <Image
            src='/fork-commit-merge-logo.jpg'
            alt='Fork, Commit, Merge -logo'
            width={100}
            height={100}
            priority
          />
        </div>
        <IndexMain />
        <IndexIntro />
      </main>
      <div className='mx-auto flex max-w-3xl items-center justify-center text-center'>
        <p className='pt-8 text-2xl leading-7 text-gray-300'>
          Here are some key aspects of the repository that make it unique and
          enriching for every developer:
        </p>
      </div>
      <div className='bg-secondary pt-10'>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-20 pb-6  md:grid-cols-2'>
          <Descriptions />
        </div>
        <div className='bg-primary'>
          <div className='mx-4'>
            {testimonials.map((testimonial, index) => (
              <Testimonials key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-primary pb-10' />
    </div>
  )
}
