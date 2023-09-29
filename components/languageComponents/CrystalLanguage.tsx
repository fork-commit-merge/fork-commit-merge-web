/* eslint-disable @next/next/no-img-element */
const CrystalLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Crystal-000000?style=for-the-badge&logo=crystal&logoColor=white"
            alt="Crystal"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Crystal?</h2>
        <p className="mb-4">
          Crystal is a statically-typed, compiled language designed for high
          performance and developer productivity. It shares a Ruby-like syntax
          but compiles to efficient machine code. Notable features include
          static typing, Ruby-inspired syntax, native code compilation,
          automatic memory management, concurrency with lightweight fibers, C
          interoperability, powerful macros, and a growing standard library.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Crystal?</h2>
        <p className="mb-6">
          Developers choose Crystal for its unique blend of high-performance
          capabilities and developer-friendly syntax. It combines the speed of a
          compiled language with the elegance of Ruby-like code, offering static
          typing for early error detection and concurrency support through
          lightweight fibers. Its C interoperability and macros make it
          versatile for various tasks, while a growing standard library
          streamlines common development tasks. Crystal is an excellent choice
          for projects where performance matters without sacrificing a clean and
          expressive coding experience.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Crystal Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Type names should use PascalCase.</li>
          <li>
            - Method names should use snake_case and Variable names should use
            snake_case
          </li>
          <li>- Constants should use SCREAMING_SNAKE_CASE.</li>
          <li>
            - When crafting exception messages, follow sentence case, but
            it&apos;s acceptable to begin with lowercase letters for
            code-related terms or acronyms.
          </li>
        </ul>
        <br />
        <a
          href="https://crystal-lang.org/reference/1.9/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Crystal - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default CrystalLanguage;
