import { openSourceLicenses } from "../data/openSourceLicenses"

const OpenSourceLicenses = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Open Source <span className='text-modern-purple'>Licenses</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Understanding software licenses is crucial for open source development. Learn about different licenses and their implications.
            </p>
          </div>

          <div className='mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2 mx-auto'>
            {openSourceLicenses.map((license, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>{license.name}</h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-xl text-white mb-2'>Key Features:</h3>
                    <p className='text-gray-300'>{license.features}</p>
                  </div>
                  <div>
                    <h3 className='text-xl text-white mb-2'>Conditions:</h3>
                    <p className='text-gray-300'>{license.conditions}</p>
                  </div>
                  <div>
                    <h3 className='text-xl text-white mb-2'>Limitations:</h3>
                    <p className='text-gray-300'>{license.limitations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-lg bg-gray-50 p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>License Selection Guidelines</h2>
            <div className='grid gap-4 text-gray-600 sm:grid-cols-2'>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Consider your project's goals and intended use cases</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Evaluate compatibility with dependencies</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Think about commercial use implications</p>
              </div>
              <div className='flex items-start'>
                <svg className="h-6 w-6 mr-2 text-modern-purple flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Review patent and trademark provisions</p>
              </div>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <a
              href='https://choosealicense.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              CHOOSE A LICENSE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSourceLicenses

