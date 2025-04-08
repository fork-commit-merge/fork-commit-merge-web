import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <section className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            What Our Contributors Say
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Join our community of developers who are learning and growing
            together
          </p>
        </div>

        <div className='mt-12 flex flex-wrap justify-center gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='w-full rounded-lg bg-gray-50 p-6 shadow-sm md:w-[calc(50%-12px)] lg:w-[30%]'
            >
              <div className='mb-4 flex items-center'>
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className='mr-3 h-10 w-10 rounded-full'
                />
                <a
                  href={testimonial.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-gray-900 hover:text-modern-purple'
                >
                  {testimonial.name}
                </a>
              </div>
              <p className='text-gray-600'>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
