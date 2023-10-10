/* eslint-disable @next/next/no-img-element */
const ZigLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Zig-%23F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white"
            alt="Zig"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Zig?</h2>
        <p className="mb-4">
          Zig is a general-purpose programming language designed for robustness,
          optimality, and maintainability. Introduced in 2016 by Andrew Kelley,
          it aims to be a simpler and safer alternative to languages like C and
          C++. Zig is often lauded for its focus on providing the programmer
          with total control over the hardware while also aiming to catch errors
          at compile-time whenever possible.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Zig?</h2>
        <p className="mb-6">
          Zig is advantageous for low-level system programming, similar to C,
          but also aims to improve safety and readability. It offers powerful
          compile-time code execution, simple syntax, and first-class debugging
          support. Zig&apos;s ability to cleanly interface with other languages
          like C and C++ makes it versatile for various kinds of projects.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Zig Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Prefer `const` and `var` over explicit types for local variables
            when the type is obvious.
          </li>
          <li>
            - Utilize Zig&apos;s built-in testing framework for unit tests.
          </li>
          <li>- Make use of compile-time checks to enforce safety.</li>
          <li>- Keep functions small and modular.</li>
          <li>- Document your code clearly to make it maintainable.</li>
        </ul>
        <br />
        <a
          href="https://ziglang.org/documentation/master/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Zig - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ZigLanguage;
