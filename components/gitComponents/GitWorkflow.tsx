interface GitWorkflowProps {
  headerStyle: React.CSSProperties;
}

const GitWorkflow = ({ headerStyle }: GitWorkflowProps) => {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='page-header-background' style={headerStyle}>
        <div className='page-header-content'>
          <h1 className='text-4xl font-bold'>Git Workflow</h1>
          <p className='mt-4 text-xl'>
            Understanding Git workflow patterns and best practices
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-2xl px-4 py-10 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>What is Git Workflow?</h2>
        <p className='mb-4'>
          A Git Workflow is a recipe or recommendation for how to use Git to
          accomplish work in a consistent and productive manner. Workflows are
          designed to be guidelines rather than concrete rules, helping teams
          and individual developers to manage changes efficiently.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>
          Why is Git Workflow Important?
        </h2>
        <p className='mb-6'>
          Git Workflows provide a robust framework for managing a wide array of
          tasks such as feature development, bug fixes, and collaboration. They
          also allow for consistency among developers on a team, facilitating
          smoother collaboration.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>Common Git Workflows</h2>
        <ul className='mb-6'>
          <li>- Feature Branch Workflow</li>
          <li>- Gitflow Workflow</li>
          <li>- Forking Workflow</li>
          <li>- Centralized Workflow</li>
        </ul>

        <h4 className='my-4 text-2xl font-bold'>
          Git Workflow Best Practices and Guidelines
        </h4>
        <ul>
          <li>- Choose the workflow that best fits your team’s needs.</li>
          <li>
            - Keep branches focused to single features or tasks to make history
            more understandable.
          </li>
          <li>
            - Always pull the latest changes from the upstream before starting
            new work.
          </li>
          <li>
            - Regularly push your branches to the remote repository for backup
            and collaboration.
          </li>
        </ul>

        <br />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.atlassian.com/git/tutorials/comparing-workflows'
          className='text-xl font-bold underline hover:text-blue-400'
        >
          Git - Official Workflow Documentation
        </a>
      </div>
    </div>
  )
};

export default GitWorkflow;


