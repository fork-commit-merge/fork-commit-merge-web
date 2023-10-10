/* eslint-disable @next/next/no-img-element */
const CPPLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is C++?</h2>
        <p className="mb-4">
          C++ is a general-purpose programming language created as an extension
          of the C programming language. Developed by Bjarne Stroustrup in 1983,
          C++ includes features like classes, inheritance, and polymorphism,
          effectively adding object-oriented capabilities to C.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use C++?</h2>
        <p className="mb-6">
          C++ offers a blend of high- and low-level language features, enabling
          both system-level memory manipulation and abstract object-oriented
          programming. It is widely used in system software, game development,
          embedded systems, and performance-critical applications.
        </p>

        <h4 className="text-2xl font-bold my-4">
          C++ Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use RAII (Resource Acquisition Is Initialization) for resource
            management.
          </li>
          <li>- Prefer `std::vector` and `std::array` over C-style arrays.</li>
          <li>- Make use of the Standard Template Library (STL).</li>
          <li>- Use `nullptr` instead of `NULL` or `0` for pointers.</li>
          <li>
            - Always include proper header guards and prefer `#pragma once` if
            supported.
          </li>
        </ul>
        <br />
        <a
          href="https://en.cppreference.com/w/cpp/header"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          C++ Standard Library - Documentation
        </a>
      </div>
    </div>
  );
};

export default CPPLanguage;
