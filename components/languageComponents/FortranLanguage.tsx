/* eslint-disable @next/next/no-img-element */
const FortranLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white"
            alt="Fortran"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Fortran?</h2>
        <p className="mb-4">
          Fortran, short for Formula Translation, is a high-level,
          general-purpose programming language that was developed in the 1950s
          for scientific and engineering applications. It is one of the oldest
          programming languages and is particularly strong in numerical and
          computational tasks.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Fortran?</h2>
        <p className="mb-6">
          Fortran remains a language of choice for high-performance computing
          and is commonly used in scientific research. Its syntax is designed to
          be simple and straightforward, and modern Fortran standards have added
          support for object-oriented, modular, and generic programming.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Fortran Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Use explicit data types for variable declarations.</li>
          <li>- Leverage modular programming to structure your code.</li>
          <li>- Stick to a consistent naming convention.</li>
          <li>- Employ comments to explain complex code logic.</li>
          <li>- Use version control for project management.</li>
        </ul>
        <br />
        <a
          href="https://www.fortran-lang.org/learn/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Fortran - Learning Resources
        </a>
      </div>
    </div>
  );
};

export default FortranLanguage;
