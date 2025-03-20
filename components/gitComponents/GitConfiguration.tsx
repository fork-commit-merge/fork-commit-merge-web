const GitConfiguration = ({ headerStyle }) => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="page-header-background" style={headerStyle}>
        <div className="page-header-content">
          <h1 className="text-4xl font-bold">Git Configuration</h1>
          <p className="mt-4 text-xl">
            Setting up and customizing your Git environment
          </p>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">What is Git Configuration?</h2>
        <p className="mb-4">
          Git configuration refers to the settings that define the behavior,
          appearance, and functionality of a Git environment. These settings can
          be global, affecting all repositories on a system, or local, affecting
          only a single repository.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Why is Git Configuration Important?
        </h2>
        <p className="mb-6">
          Proper configuration ensures that Git operates smoothly and in sync
          with your specific needs. This includes basic settings like user name
          and email, as well as more advanced features like aliases, hooks, and
          custom scripts.
        </p>

        <h2 className="text-2xl font-bold mb-4">Common Git Configurations</h2>
        <ul className="mb-6">
          <li>
            - Setting User Info:{" "}
            <code>git config --global user.name &quot;Your Name&quot;</code>
          </li>
          <li>
            - Setting Email:{" "}
            <code>
              git config --global user.email &quot;your.email@example.com&quot;
            </code>
          </li>
          <li>
            - Enabling Color Output:{" "}
            <code>git config --global color.ui true</code>
          </li>
          <li>
            - Setting Default Branch:{" "}
            <code>git config --global init.defaultBranch main</code>
          </li>
          <li>
            - Creating Aliases:{" "}
            <code>git config --global alias.co checkout</code>
          </li>
        </ul>

        <h4 className="text-2xl font-bold my-4">
          Git Configuration Best Practices and Guidelines
        </h4>
        <ul>
          <li>
            - Keep configuration files backed up or version-controlled for
            easier restoration and syncing across machines.
          </li>
          <li>
            - Be cautious when modifying global settings, as they affect all
            repositories.
          </li>
          <li>
            - Utilize local configurations for project-specific requirements.
          </li>
          <li>
            - Regularly review and update your configurations to suit evolving
            needs.
          </li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://git-scm.com/docs/git-config"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Git - Official Configuration Documentation
        </a>
      </div>
    </div>
  );
};

export default GitConfiguration;

