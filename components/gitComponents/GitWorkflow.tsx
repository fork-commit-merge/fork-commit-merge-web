const GitWorkflow = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/git.png')" }}>
        <div className="mb-10 flex flex-col items-center justify-center p-24 text-center text-white">
          <h1 className="text-4xl font-bold">Git Workflow</h1>
          <p className="mt-4 text-xl">
            Best practices and common Git workflow patterns
          </p>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">What is Git Workflow?</h2>
        <p className="mb-4">
          A Git Workflow is a recipe or recommendation for how to use Git to
          accomplish work in a consistent and productive manner. Workflows are
          designed to be guidelines rather than concrete rules, helping teams
          and individual developers to manage changes efficiently.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Why is Git Workflow Important?
        </h2>
        <p className="mb-6">
          Git Workflows provide a robust framework for managing a wide array of
          tasks such as feature development, bug fixes, and collaboration. They
          also allow for consistency among developers on a team, facilitating
          smoother collaboration.
        </p>

        <h2 className="text-2xl font-bold mb-4">Common Git Workflows</h2>
        <ul className="mb-6">
          <li>- Feature Branch Workflow</li>
          <li>- Gitflow Workflow</li>
          <li>- Forking Workflow</li>
          <li>- Centralized Workflow</li>
        </ul>

        <h4 className="text-2xl font-bold my-4">
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
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.atlassian.com/git/tutorials/comparing-workflows"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Git - Official Workflow Documentation
        </a>
      </div>
    </div>
  );
};

export default GitWorkflow;
