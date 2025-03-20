import Link from 'next/link'

const Discussions = () => {
  return (
    <div className='bg-primary flex items-center justify-center px-10 py-10'>
      <div className='max-w-2xl text-center'>
        <h1 className='mb-6 text-3xl font-bold'>
          GitHub Discussions: An Overview
        </h1>
        <p className='mb-4'>
          GitHub Discussions is a space within a GitHub repository where the
          community can have conversations, ask questions, and share updates.
          It&apos;s a platform to engage with the project maintainers and other
          contributors.
        </p>
        <hr className='my-6' />
        <h2 className='mb-4 text-2xl font-semibold'>
          How to Access Discussions
        </h2>
        <p className='mb-4'>
          You can find the Discussions tab near the top of the GitHub repository
          page, often alongside &quot;Issues&quot; and &quot;Pull
          Requests.&quot; Click on it to enter the Discussions section.
        </p>
        <hr className='my-6' />
        <h2 className='mb-4 text-2xl font-semibold'>
          Starting a New Discussion
        </h2>
        <p className='mb-4'>
          To start a new discussion, click on the &quot;New discussion&quot;
          button. Choose the appropriate category and add a descriptive title
          and body content for your discussion.
        </p>
        <hr className='my-6' />
        <h2 className='mb-4 text-2xl font-semibold'>How to Participate</h2>
        <p className='mb-4'>
          Participation can range from asking questions, answering queries, to
          providing updates or feedback. You can react to discussions and
          comments to show agreement or appreciation.
        </p>
        <hr className='my-6' />
        <h2 className='mb-4 text-2xl font-semibold'>
          Guidelines for Effective Participation
        </h2>
        <p className='mb-4'>
          Always follow the repository&apos;s code of conduct and guidelines.
          Stay on topic, be respectful, and help create a welcoming environment
          for all.
        </p>
        <hr className='my-6' />
        <p>
          GitHub Discussions is a powerful tool for community building. Make the
          most of it by engaging respectfully and constructively.
        </p>
        <div className='mb-3 mt-10'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/fork-commit-merge/fork-commit-merge/discussions'
            className='font-primary themed-button my-8 transform rounded-md px-8 pb-5 pt-4 text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            style={{
              wordWrap: 'break-word',
              display: 'inline-block'
            }}
          >
            TAKE A PART IN FORK, COMMIT, MERGE DISCUSSIONS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Discussions
