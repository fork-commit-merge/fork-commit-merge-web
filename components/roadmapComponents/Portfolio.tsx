const portfolioTopics = [
  {
    name: 'Essential Components',
    description:
      'Key elements that make up a professional developer portfolio.',
    features: [
      'Personal introduction and background',
      'Technical skills and expertise',
      'Project showcase with live demos',
      'GitHub contributions and activity',
      'Professional experience and achievements'
    ]
  },
  {
    name: 'Project Showcase',
    description:
      'How to effectively present your projects to potential employers.',
    features: [
      'Clear project descriptions',
      'Technologies used and architecture',
      'Code samples and documentation',
      'Live demos and deployment links',
      'Problem-solving approach'
    ]
  },
  {
    name: 'Technical Skills',
    description: 'Presenting your technical expertise in an impactful way.',
    features: [
      'Programming languages proficiency',
      'Framework and library experience',
      'Database and infrastructure knowledge',
      'Version control and DevOps skills',
      'Problem-solving abilities'
    ]
  },
  {
    name: 'Professional Growth',
    description:
      'Demonstrating your commitment to continuous learning and improvement.',
    features: [
      'Open source contributions',
      'Technical blog posts or articles',
      'Certifications and courses',
      'Community involvement',
      'Personal projects and experiments'
    ]
  }
]

const Portfolio = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-20'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Building Your{' '}
              <span className='text-modern-purple'>Developer Portfolio</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Learn how to create an impressive portfolio that showcases your
              skills, projects, and professional growth as a developer.
            </p>
          </div>

          <div className='mx-auto mt-16 grid w-full max-w-4xl gap-8 md:grid-cols-2'>
            {portfolioTopics.map((topic, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h2 className='mb-4 text-2xl font-semibold text-white'>
                  {topic.name}
                </h2>
                <p className='mb-4 text-gray-300'>{topic.description}</p>
                <h3 className='mb-2 text-xl text-white'>Key Elements:</h3>
                <ul className='mb-4 list-disc pl-5 text-gray-300'>
                  {topic.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <a
              href='https://github.com/topics/portfolio'
              target='_blank'
              rel='noopener noreferrer'
              className='themed-button inline-block transform rounded-md px-8 py-3 text-xl font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              EXPLORE PORTFOLIOS
            </a>
          </div>

          {/* Portfolio Example Section */}
          <div className='mt-20'>
            <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
              Portfolio <span className='text-modern-purple'>Example</span>
            </h2>
            <p className='mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600'>
              Below is an example of a professional developer portfolio that you
              can use as a reference for creating your own.
            </p>

            {/* A4 Portfolio Example */}
            <div className='mx-auto max-w-4xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl'>
              {/* Portfolio Header */}
              <div className='border-b border-gray-200 bg-gray-50 p-8'>
                <div className='flex flex-col items-center justify-between md:flex-row'>
                  <div>
                    <h1 className='text-3xl font-bold text-gray-900'>
                      Alex Johnson
                    </h1>
                    <p className='mt-1 text-xl text-gray-700'>
                      Full Stack Developer
                    </p>
                    <div className='mt-3 flex flex-wrap items-center gap-4'>
                      <div className='flex items-center text-gray-600'>
                        <svg
                          className='mr-1 h-5 w-5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        alex.johnson@example.com
                      </div>
                      <div className='flex items-center text-gray-600'>
                        <svg
                          className='mr-1 h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                        github.com/alexjohnson
                      </div>
                      <div className='flex items-center text-gray-600'>
                        <svg
                          className='mr-1 h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                        </svg>
                        linkedin.com/in/alexjohnson
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 md:mt-0'>
                    <div className='font-medium text-modern-purple'>
                      alexjohnson.dev
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Content */}
              <div className='p-8'>
                {/* Summary Section */}
                <div className='mb-8'>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Professional Summary
                  </h2>
                  <p className='leading-relaxed text-gray-700'>
                    Passionate Full Stack Developer with 5+ years of experience
                    building scalable web applications. Proficient in
                    JavaScript, React, Node.js, and cloud technologies. Strong
                    problem-solving skills and a collaborative team player with
                    a track record of delivering high-quality solutions.
                  </p>
                </div>

                {/* Skills Section */}
                <div className='mb-8'>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Technical Skills
                  </h2>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <h3 className='mb-2 font-semibold text-gray-800'>
                        Frontend
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          React
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Next.js
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          TypeScript
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Redux
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className='mb-2 font-semibold text-gray-800'>
                        Backend
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Node.js
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Express
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          MongoDB
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          PostgreSQL
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          GraphQL
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className='mb-2 font-semibold text-gray-800'>
                        DevOps & Tools
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Docker
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          AWS
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          CI/CD
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Git
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Jest
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className='mb-2 font-semibold text-gray-800'>
                        Other
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          Agile
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          UI/UX
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          RESTful APIs
                        </span>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
                          WebSockets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className='mb-8'>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Work Experience
                  </h2>

                  <div className='mb-6'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          Senior Full Stack Developer
                        </h3>
                        <p className='text-gray-600'>TechCorp Inc.</p>
                      </div>
                      <p className='text-sm text-gray-500'>
                        Jan 2021 - Present
                      </p>
                    </div>
                    <ul className='mt-2 list-disc space-y-1 pl-5 text-gray-700'>
                      <li>
                        Led the development of a microservices-based e-commerce
                        platform serving 1M+ monthly users
                      </li>
                      <li>
                        Implemented CI/CD pipelines reducing deployment time by
                        60%
                      </li>
                      <li>
                        Mentored junior developers and conducted code reviews
                      </li>
                      <li>
                        Optimized database queries resulting in 40% performance
                        improvement
                      </li>
                    </ul>
                  </div>

                  <div className='mb-6'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          Full Stack Developer
                        </h3>
                        <p className='text-gray-600'>WebSolutions LLC</p>
                      </div>
                      <p className='text-sm text-gray-500'>
                        Mar 2018 - Dec 2020
                      </p>
                    </div>
                    <ul className='mt-2 list-disc space-y-1 pl-5 text-gray-700'>
                      <li>
                        Developed and maintained multiple client-facing web
                        applications using React and Node.js
                      </li>
                      <li>Integrated third-party APIs and payment gateways</li>
                      <li>
                        Collaborated with UX designers to implement responsive
                        interfaces
                      </li>
                      <li>
                        Reduced application load time by 35% through code
                        optimization
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          Junior Developer
                        </h3>
                        <p className='text-gray-600'>StartupX</p>
                      </div>
                      <p className='text-sm text-gray-500'>
                        Jun 2016 - Feb 2018
                      </p>
                    </div>
                    <ul className='mt-2 list-disc space-y-1 pl-5 text-gray-700'>
                      <li>
                        Assisted in the development of a SaaS platform for small
                        businesses
                      </li>
                      <li>
                        Fixed bugs and implemented new features based on client
                        feedback
                      </li>
                      <li>
                        Participated in daily stand-ups and sprint planning
                        meetings
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Projects Section */}
                <div className='mb-8'>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Featured Projects
                  </h2>

                  <div className='mb-6'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          E-Commerce Platform
                        </h3>
                        <p className='text-gray-600'>Personal Project</p>
                      </div>
                      <div className='text-sm text-modern-purple'>
                        github.com/alexjohnson/ecommerce
                      </div>
                    </div>
                    <p className='mt-2 text-gray-700'>
                      A full-featured e-commerce platform built with React,
                      Node.js, and MongoDB. Features include user
                      authentication, product catalog, shopping cart, payment
                      processing, and admin dashboard.
                    </p>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        React
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        Node.js
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        MongoDB
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        Stripe API
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          Task Management App
                        </h3>
                        <p className='text-gray-600'>
                          Open Source Contribution
                        </p>
                      </div>
                      <div className='text-sm text-modern-purple'>
                        github.com/org/taskmanager
                      </div>
                    </div>
                    <p className='mt-2 text-gray-700'>
                      A collaborative task management application with real-time
                      updates using WebSockets. Implemented drag-and-drop
                      functionality, task assignment, and progress tracking.
                    </p>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        Vue.js
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        Express
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        PostgreSQL
                      </span>
                      <span className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                        Socket.io
                      </span>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className='mb-8'>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Education
                  </h2>

                  <div className='mb-4'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          Bachelor of Science in Computer Science
                        </h3>
                        <p className='text-gray-600'>
                          University of Technology
                        </p>
                      </div>
                      <p className='text-sm text-gray-500'>2012 - 2016</p>
                    </div>
                    <p className='mt-1 text-gray-700'>
                      Graduated with honors. Specialized in Software Engineering
                      and Web Technologies.
                    </p>
                  </div>

                  <div>
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='font-bold text-gray-800'>
                          AWS Certified Solutions Architect
                        </h3>
                        <p className='text-gray-600'>Amazon Web Services</p>
                      </div>
                      <p className='text-sm text-gray-500'>2020</p>
                    </div>
                  </div>
                </div>

                {/* Languages Section - Added for completeness */}
                <div>
                  <h2 className='mb-3 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900'>
                    Languages
                  </h2>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        English
                      </span>
                      <span className='text-modern-purple'>Native</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        Spanish
                      </span>
                      <span className='text-modern-purple'>Intermediate</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        French
                      </span>
                      <span className='text-modern-purple'>Basic</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        German
                      </span>
                      <span className='text-modern-purple'>Basic</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        Portuguese
                      </span>
                      <span className='text-modern-purple'>Intermediate</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='font-bold text-modern-purple'>
                        Chinese (Mandarin)
                      </span>
                      <span className='text-modern-purple'>Basic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
