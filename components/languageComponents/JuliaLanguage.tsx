/* eslint-disable @next/next/no-img-element */
const JuliaLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white"
            alt="Julia"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Julia?</h2>
        <p className="mb-4">
          Julia is a high-level, high-performance programming language for
          technical computing, with syntax that is familiar to users of other
          technical computing environments. Developed by a group of
          mathematicians and computer scientists, it is designed for data
          science, numerical analysis, and computational science.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Julia?</h2>
        <p className="mb-6">
          Julia offers exceptional performance comparable to C, while being as
          easy to use as Python. Its strong focus on numerical and scientific
          computing makes it ideal for applications like machine learning, data
          analytics, and modeling. It also has excellent support for parallelism
          and can call C, Fortran, and Python libraries natively.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Julia Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use meaningful variable names and comment your code for
            readability.
          </li>
          <li>
            - Leverage Julia&apos;s multiple dispatch feature for code
            reusability.
          </li>
          <li>
            - Use built-in functions for array manipulation for better
            performance.
          </li>
          <li>
            - Prefer using native Julia libraries to keep the performance
            advantages.
          </li>
          <li>
            - Modularize your code into smaller, reusable functions and modules.
          </li>
        </ul>
        <br />
        <a
          href="https://docs.julialang.org/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Julia - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default JuliaLanguage;
