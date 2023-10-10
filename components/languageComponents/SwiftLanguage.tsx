/* eslint-disable @next/next/no-img-element */
const SwiftLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/swift-%23E32F26.svg?style=for-the-badge&logo=swift&logoColor=white"
            alt="Swift"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Swift?</h2>
        <p className="mb-4">
          Swift is a general-purpose, multi-paradigm programming language
          developed by Apple. Introduced in 2014, it was designed to be concise,
          efficient, and safe, making it ideal for application development on
          iOS, macOS, watchOS, and tvOS. It also supports server-side and Linux
          development, making it increasingly versatile.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Swift?</h2>
        <p className="mb-6">
          Swift is known for its performance, modern syntax, and safety
          features. It incorporates best practices from various programming
          languages, resulting in cleaner and more maintainable code. Swift is
          strongly typed and compiled, which enables better optimization and
          fewer runtime errors. It’s also one of the fastest-growing languages
          in terms of popularity and adoption.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Swift Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Favor immutability. Use `let` instead of `var` wherever possible.
          </li>
          <li>- Use optionals wisely to handle the absence of a value.</li>
          <li>
            - Utilize Swift’s type inference but also provide explicit types
            when it improves readability.
          </li>
          <li>
            - Follow the Single Responsibility Principle for cleaner and more
            modular code.
          </li>
          <li>
            - Write unit tests to validate your code and avoid regressions.
          </li>
        </ul>
        <br />
        <a
          href="https://developer.apple.com/swift/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Swift - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default SwiftLanguage;
