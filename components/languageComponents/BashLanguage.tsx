/* eslint-disable @next/next/no-img-element */
const BashLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/bash-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
            alt="Bash"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Bash?</h2>
        <p className="mb-4">
          Bash (Bourne Again SHell) is a Unix shell and command language
          interpreter. It was developed as an enhanced version of the Bourne
          Shell and has been the default shell for Linux and macOS. Bash is
          widely used for its command-line and scripting capabilities.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Bash?</h2>
        <p className="mb-6">
          Bash is versatile and allows for a wide range of tasks including file
          manipulation, program execution, and even network communications. It
          is especially powerful when combined with other Unix utilities like
          awk, sed, and grep. Bash scripting can automate repetitive tasks,
          making it invaluable for system administration.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Bash Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Always use double quotes around variables to avoid re-splitting.
          </li>
          <li>- Prefer `[[ ]]` over `[ ]` for tests.</li>
          <li>- Use `$()` for command substitution rather than backticks.</li>
          <li>- Check the exit status of commands you run.</li>
          <li>
            - Use functions to encapsulate complex logic or reusable code.
          </li>
        </ul>
        <br />
        <a
          href="https://www.gnu.org/software/bash/manual/bash.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          GNU Bash - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default BashLanguage;
