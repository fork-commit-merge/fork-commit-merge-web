/* eslint-disable @next/next/no-img-element */
const DLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/D-CC342D?style=for-the-badge&logo=d&logoColor=white"
            alt="DLang"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is D?</h2>
        <p className="mb-4">
          D is a statically-typed systems programming language that was
          developed by Walter Bright. It is designed to be efficient, readable,
          and expressive, while also providing a high level of control over
          system resources. D draws inspiration from other programming languages
          like C++, Java, C#, and Python, and it aims to combine the best
          features of these languages into a single language.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use D?</h2>
        <p className="mb-6">
          Its strong typing, garbage collection, and support for both
          object-oriented and functional programming make it versatile. Dlang
          also offers excellent performance and can interoperate with C and C++
          code, making it suitable for various applications, from game
          development to high-performance systems. Its active community and
          growing ecosystem make it a language worth considering for projects
          that require a balance of control and productivity.
        </p>

        <h4 className="text-2xl font-bold my-4">
          D Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use camelCase for variables and functions, avoiding underscores at
            the start unless private.
          </li>
          <li>
            - Employ PascalCase for user-defined types (e.g., classes, structs).
          </li>
          <li>
            - Use spaces, not tabs, and maintain consistent four-space
            indentation.
          </li>
          <li>
            - Place opening curly braces on the same line for
            functions/conditionals, closing on separate lines.
          </li>
          <li>
            - Aim for concise lines (80-120 characters) to improve code
            readability.
          </li>
        </ul>
        <br />
        <a
          href="https://dlang.org/spec/spec.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          D - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default DLanguage;
