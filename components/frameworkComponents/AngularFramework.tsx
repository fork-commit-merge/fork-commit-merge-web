/* eslint-disable @next/next/no-img-element */
const AngularFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
            alt="Angular"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Angular?</h2>
        <p className="mb-4">
          Angular is a platform for building mobile and desktop web
          applications, developed by Google. It offers a comprehensive set of
          tools for developing complex and scalable apps, including dependency
          injection, declarative templates, end-to-end tooling, and much more.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Angular?</h2>
        <p className="mb-6">
          Angular is a mature, robust, and powerful framework that provides a
          wide range of features out of the box. These include two-way data
          binding, a rich component-based architecture, and strong community
          support. It’s an excellent choice for enterprise-level applications or
          for projects that require scalability and maintainability.
        </p>

        <h4 className="text-2xl font-bold my-4">Angular Best Practices</h4>
        <ul>
          <li>- Use Angular CLI for boilerplate and project generation.</li>
          <li>- Adopt lazy loading to improve performance.</li>
          <li>
            - Use async/await for readable and maintainable asynchronous code.
          </li>
          <li>
            - Make use of Angular’s RxJS library for reactive programming.
          </li>
          <li>
            - Follow the official Angular Style Guide for consistent code.
          </li>
        </ul>
        <br />
        <a
          href="https://angular.io/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Angular - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default AngularFramework;
