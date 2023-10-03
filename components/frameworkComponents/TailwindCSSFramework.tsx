/* eslint-disable @next/next/no-img-element */
const TailwindCSSFramework = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Tailwind%20CSS-%2523DB0031.svg?logo=tailwindcss&logoColor=%20rgb(56%20189%20248)&color=rgb(30%2041%2059)"
            alt="Tailwind CSS"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Tailwind CSS?</h2>
        <p className="mb-4">
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build designs directly in your markup. It is not a
          traditional framework with pre-designed components but instead offers
          a set of building blocks that you can combine to create custom and
          responsive designs quickly.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Tailwind CSS?</h2>
        <p className="mb-6">
          Tailwind CSS promotes rapid development by allowing developers to
          style interfaces directly in the HTML, eliminating the need for
          context-switching between HTML and CSS files. It provides a highly
          configurable and extensible approach to styling, making it suitable
          for projects of various sizes. Tailwind CSS is especially popular
          among developers who appreciate the flexibility and control it offers
          over the styling process.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Tailwind CSS Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Embrace the utility-first approach for concise and maintainable
            styles.
          </li>
          <li>- Customize the configuration to match project requirements.</li>
          <li>
            - Use responsive design utilities for building mobile-friendly
            interfaces.
          </li>
          <li>- Leverage the plugin system for extending functionality.</li>
          <li>
            - Combine utility classes judiciously to maintain a clean and
            consistent codebase.
          </li>
        </ul>
        <br />
        <a
          href="https://tailwindcss.com/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Tailwind CSS - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default TailwindCSSFramework;
