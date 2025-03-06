/* eslint-disable @next/next/no-img-element */
const ZSHLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Zsh-60B5CC?style=for-the-badge&logo=Zsh&logoColor=white"
            alt="Zsh"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is ZSH?</h2>
        <p className="mb-4">
          The Z shell (Zsh) is a Unix shell that can be used as an interactive
          login shell and as a command interpreter for shell scripting. Zsh is
          an extended Bourne shell with many improvements, including some
          features of Bash, ksh, and tcsh.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use ZSH?</h2>
        <p className="mb-6">
          Zsh has powerful scripting capabilities, often considered an
          improvement over Bash. It supports advanced control structures,
          improved variable handling, and enhanced arithmetic operations. Zsh
          can correct typos in your commands, which can be helpful for users who
          frequently mistype commands or filenames.
        </p>

        <h4 className="text-2xl font-bold my-4">
          YAML Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            Use consistent indentation with spaces (not tabs) for improved
            readability.
          </li>
          <li>
            - Start Zsh scripts with a shebang line to specify the Zsh
            interpreter, like `#!/bin/zsh`.
          </li>
          <li>Use meaningful and descriptive variable and function names</li>
          <li>
            - Define functions clearly and include a comment describing the
            purpose of the function
          </li>
          <li>
            - Implement error handling in your scripts. You can use set -e to
            exit on error and set -u to treat unset variables as errors
          </li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://zsh.sourceforge.io/Doc/"
          className="text-xl font-bold underline hover:text-blue-400">
          ZSH - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ZSHLanguage;
