/* eslint-disable @next/next/no-img-element */
interface GitBranchingSelectionProps {
  headerStyle: React.CSSProperties;
}

const GitBranchingSelection = ({ headerStyle }: GitBranchingSelectionProps) => {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='page-header-background' style={headerStyle}>
        <div className='page-header-content'>
          <h1 className='text-4xl font-bold'>Git Branching</h1>
          <p className='mt-4 text-xl'>
            Understanding Git branch management and workflows
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-2xl px-4 py-10 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>What is Git Branching?</h2>
        <p className='mb-4'>
          Git Branching is a core feature in Git, a distributed version control
          system. It allows developers to create isolated environments within a
          repository to work on separate tasks simultaneously. Each branch
          serves as an independent line of development, enabling teams to work
          collaboratively without conflicting with each other.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>Why Use Git Branching?</h2>
        <p className='mb-6'>
          Git Branching is essential for team collaboration and efficient
          workflow management. It enables parallel development by allowing
          developers to work on multiple features or fixes concurrently. This
          isolation prevents unstable code from affecting the main project while
          still enabling a clean history and easy merges once the work is
          complete.
        </p>
        <h2 className='mb-4 text-2xl font-bold'>
          How to Work with Git Branches
        </h2>
        <ul className='mb-6'>
          <li className='mb-1'>
            - Create a new branch:
            <br />
            <code>git branch [branch-name]</code>
          </li>
          <li className='mb-1'>
            - Switch to a branch:
            <br />
            <code>git checkout [branch-name]</code> or
            <br />
            <code>git switch [branch-name]</code>
          </li>
          <li className='mb-1'>
            - Create and switch in one command:
            <br />
            <code>git checkout -b [branch-name]</code> or
            <br />
            <code>git switch -c [branch-name]</code>
          </li>
          <li className='mb-1'>
            - Delete a branch:
            <br />
            <code>git branch -d [branch-name]</code>
          </li>
          <li className='mb-1'>
            - Merge a branch:
            <br />
            <code>git merge [branch-name]</code>
          </li>
          <li className='mb-1'>
            - List all branches:
            <br />
            <code>git branch</code> or
            <br />
            <code>git branch --all</code>
          </li>
        </ul>
        <h4 className='my-4 text-2xl font-bold'>
          Git Branching Best Practices and Guidelines
        </h4>
        <ul>
          <li>- Always create a new branch for each new feature or bugfix.</li>
          <li>
            - Follow a naming convention for branches for easier identification.
          </li>
          <li>- Keep branches focused; each should represent a single task.</li>
          <li>
            - Regularly synchronize your branch with the main branch to avoid
            conflicts.
          </li>
          <li>
            - Delete branches once they have been merged and are no longer
            needed.
          </li>
        </ul>

        <br />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'
          className='text-xl font-bold underline hover:text-blue-400'
        >
          Git - Official Branching Documentation
        </a>
      </div>
    </div>
  )
};

export default GitBranchingSelection;


