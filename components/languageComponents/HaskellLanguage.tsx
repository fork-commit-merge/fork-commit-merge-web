/* eslint-disable @next/next/no-img-element */
const HaskellLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/haskell-%239B30FF.svg?style=for-the-badge&logo=haskell&logoColor=white"
            alt="Haskell"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Haskell?</h2>
        <p className="mb-4">
          Haskell is a purely functional programming language that emphasizes
          strong static typing, immutability, and lazy evaluation. Created in
          1990, it is designed to enable developers to produce robust, concise,
          and correct software.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Haskell?</h2>
        <p className="mb-6">
          Haskell is well-suited for complex and mathematical tasks due to its
          rich type system and high-level abstractions. The language&apos;s pure
          functional nature makes it easier to reason about code, and strong
          typing helps catch many errors at compile-time. Its capabilities make
          it suitable for a variety of applications, including web servers,
          compilers, and data analysis.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Haskell Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Utilize the type system to create self-documenting code.</li>
          <li>
            - Employ immutability to make reasoning about program state easier.
          </li>
          <li>- Make use of Haskell&apos;s rich library ecosystem.</li>
          <li>- Always write type signatures for top-level functions.</li>
          <li>- Use pattern matching for cleaner and more readable code.</li>
        </ul>
        <br />
        <a
          href="https://www.haskell.org/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Haskell - Official Website
        </a>
      </div>
    </div>
  );
};

export default HaskellLanguage;
