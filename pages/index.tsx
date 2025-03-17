/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import IndexIntro from '../components/index/IndexIntro'
import Descriptions from '../components/index/Descriptions'
import IndexMain from '../components/index/IndexMain'
import Testimonials from '../components/index/Testimonials'
import { testimonials } from '../components/data/testimonials'

export default function Home() {
  return (
    <div className="w-full">
      <main className='bg-secondary min-h-screen w-full flex flex-col items-center'>
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

      <section className='w-full bg-secondary'>
        <div className='w-full px-4 py-8'>
          <p className='mx-auto max-w-3xl text-center text-2xl leading-7 text-gray-300'>
            Here are some key aspects of the repository that make it unique and
            enriching for every developer:
          </p>
        </div>
      </section>

      <section className='w-full bg-secondary'>
        <div className='w-full px-4 pt-10'>
          <div className='mx-auto max-w-5xl grid grid-cols-1 gap-20 pb-6 md:grid-cols-2'>
            <Descriptions />
          </div>
        </div>
      </section>

      <section className='w-full bg-primary'>
        <div className='w-full px-4'>
          <div className='mx-auto max-w-7xl'>
            {testimonials.map((testimonial, index) => (
              <Testimonials key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <div className='w-full bg-primary pb-10' />
    </div>
  )
}



