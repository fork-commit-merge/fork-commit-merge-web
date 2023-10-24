/* eslint-disable @next/next/no-img-element */
const CLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/c-%231572B6.svg?style=for-the-badge&logo=c&logoColor=%23F7DF1E"
            alt="C"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is C?</h2>
        <p className="mb-4">
          C is a general-purpose, procedural programming language that was
          originally designed for system programming. Developed in 1972 by
          Dennis Ritchie at Bell Labs, it has become one of the most widely used
          programming languages. It provides low-level access to computer memory
          and is the basis for other languages like C++, C#, and Objective-C.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use C?</h2>
        <p className="mb-6">
          C is known for its performance and it&apos;s used for system software,
          including operating systems and embedded system applications. Being
          highly portable, code written in C can be run on different types of
          computer hardware. The language is simple and offers a great degree of
          control, but this comes at the expense of abstraction and some modern
          comforts.
        </p>

        <h4 className="text-2xl font-bold my-4">
          C Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Always include header guards in your header files.</li>
          <li>
            - Use meaningful names for variables, functions, and other
            identifiers.
          </li>
          <li>- Comment your code and maintain good indentation.</li>
          <li>- Always initialize variables.</li>
          <li>
            - Prefer using local variables and pass them as function arguments.
          </li>
        </ul>
        <br />
        <a
          href="https://en.cppreference.com/w/c/header"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          C Standard Library - Documentation
        </a>
      </div>
    </div>
  );
};

export default CLanguage;
