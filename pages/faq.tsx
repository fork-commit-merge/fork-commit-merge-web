import Link from 'next/link'

const FAQs = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/faq.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
          <h1 className='mb-6 text-center text-4xl font-bold'>
            Frequently Asked Questions about Open Source
          </h1>
        </div>
      </div>
      <div className='bg-primary flex items-center justify-center px-10 py-10'>
        <div className='max-w-2xl text-center'>
          <h2 className='mb-4 text-2xl text-gray-300'>
            New to open source? Here are some commonly asked questions and their
            answers to guide you.
          </h2>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            How Do I Start Contributing?
          </h2>
          <p className='mb-4'>
            Begin by finding a project that aligns with your skills and
            interests. Read the project&apos;s contribution guidelines and start
            with beginner-friendly issues.
            <br />
            You can find more information about contributing to open source in
            our{' '}
            <Link
              href='/roadmaps/how-to-contribute'
              className='text-blue-400 hover:underline'
            >
              How to Contribute
            </Link>{' '}
            and{' '}
            <Link href='/resources' className='text-blue-400 hover:underline'>
              Resources
            </Link>{' '}
            sections.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            Can I Monetize Open Source Projects?
          </h2>
          <p className='mb-4'>
            Yes, but it depends on the license and your business model. Many
            projects make money through donations, sponsorships, or dual
            licensing.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>What is a License?</h2>
          <p className='mb-4'>
            A license defines what others can and can&apos;t do with the
            project&apos;s code. Make sure to follow the license terms when
            using or contributing to a project.
            <br />
            You can find more information about open source licenses in our{' '}
            <Link
              href='/roadmaps/open-source-licenses'
              className='text-blue-400 hover:underline'
            >
              Open Source Licenses
            </Link>{' '}
            section.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            How Do I Choose an Open Source License?
          </h2>
          <p className='mb-4'>
            Consider your project goals. If you want to encourage collaboration,
            a permissive license like MIT or Apache may be suitable. For more
            control, a copyleft license like GPL could be a better fit.
            <br />
            You can find more information about open source licenses in our{' '}
            <Link
              href='/roadmaps/open-source-licenses'
              className='text-blue-400 hover:underline'
            >
              Open Source Licenses
            </Link>{' '}
            section.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            What are the Best Practices for Code Contributions?
          </h2>
          <p className='mb-4'>
            Always follow the project&apos;s contribution guidelines. Create a
            new branch for each feature or fix, keep your code clean, and make
            your commit messages descriptive.
            <br />
            You can find more information about contributing best practices in
            our{' '}
            <Link
              href='/roadmaps/contribution-management'
              className='text-blue-400 hover:underline'
            >
              Contribution Management
            </Link>{' '}
            section.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            What Does It Mean to Fork a Repository?
          </h2>
          <p className='mb-6'>
            Forking a repository means creating your own copy of the project on
            your account. This allows you to freely experiment with changes
            without affecting the original project.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            What is a Pull Request?
          </h2>
          <p className='mb-4'>
            A Pull Request (PR) is a method of submitting contributions to an
            open-source project. It is a way to let maintainers know that you
            have code that you&apos;d like to be reviewed and added to the
            project.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            How is Open Source Different from Closed Source?
          </h2>
          <p className='mb-4'>
            Open source software is software whose source code is available for
            modification or enhancement by anyone. Closed source is proprietary
            software whose source code is not available to the public.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            What Does ‘Upstream’ and ‘Downstream’ Mean?
          </h2>
          <p className='mb-4'>
            &quot;Upstream&quot; refers to the original project or source that
            you have forked or cloned. &quot;Downstream&quot; refers to any
            project that is based on that upstream source.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            How Do I Report Bugs or Request Features?
          </h2>
          <p className='mb-4'>
            Many projects use issue trackers for this. After confirming that the
            bug or feature hasn&apos;t already been reported or requested, you
            can open a new issue in the project&apos;s issue tracker.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            Is Open Source Software Always Free?
          </h2>
          <p className='mb-4'>
            While open source software is generally free to use, modify, and
            distribute, this is not always the case. Always check the project’s
            license for specific terms.
          </p>
          <hr className='my-6' />
          <h2 className='mb-4 text-2xl font-semibold'>
            What is Version Control?
          </h2>
          <p className='mb-6'>
            Version control systems are tools that help manage changes to source
            code over time. They let you keep track of versions, roll back
            changes, and work collaboratively.
          </p>
          <hr className='my-6' />
          <p>
            Open source is a broad field with diverse practices and norms.
            Always consult project-specific documentation for the most accurate
            information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQs
