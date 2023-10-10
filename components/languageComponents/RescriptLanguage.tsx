/* eslint-disable @next/next/no-img-element */
const RescriptLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/rescript-%2314162c?style=for-the-badge&logo=rescript&logoColor=e34c4c"
            alt="ReScript"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is ReScript?</h2>
        <p className="mb-4">
          ReScript is a modern, statically typed programming language and
          development toolchain designed for building web applications. Formerly
          known as BuckleScript, it compiles to highly efficient and readable
          JavaScript code, making it a valuable choice for web developers who
          seek the benefits of strong typing and functional programming while
          seamlessly integrating with existing JavaScript libraries and
          ecosystems.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use ReScript?</h2>
        <p className="mb-6">
          ReScript is chosen for web development due to its strong typing,
          seamless JavaScript integration, and functional programming
          capabilities. It catches errors at compile time, enhancing code
          reliability. It also supports existing JavaScript libraries, making it
          versatile. With its concise and clean code, ReScript empowers
          developers to create efficient and robust web applications, reducing
          error risks.
        </p>

        <h4 className="text-2xl font-bold my-4">
          ReScript Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Employ the double-slash // for single-line comments and /* */ for
            multi-line comments.
          </li>
          <li>
            - Utilize CamelCase when naming modules, types, and variant
            constructors.
          </li>
          <li>- Opt for camelCase when naming variables and functions.</li>
          <li>- Reserve UPPER_CASE for constants.</li>
          <li>
            - Use the let keyword when declaring variables and steer clear of
            modifying their values after assignment.
          </li>
        </ul>
        <br />
        <a
          href="https://rescript-lang.org/docs/manual/latest/introduction"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          ReScript - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default RescriptLanguage;
