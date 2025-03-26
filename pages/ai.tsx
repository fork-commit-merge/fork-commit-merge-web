import AIContent from '../components/ai/AIContent'

export default function AI() {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              AI Development <span className='text-modern-purple'>Tools</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Discover powerful AI tools and best practices to enhance your development workflow.
            </p>
          </div>

          <div className='mt-16 flex justify-center'>
            <AIContent />
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Best Practices for Using AI Tools</h2>
            <ul className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Always review and understand AI-generated code
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Use AI tools as assistants, not replacements
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Keep security in mind when sharing code
              </li>
              <li className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Verify licenses and terms of use
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
