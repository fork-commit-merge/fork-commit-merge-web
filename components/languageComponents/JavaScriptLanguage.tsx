/* eslint-disable @next/next/no-img-element */
const JavaScriptLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1Ee"
            alt="JavaScript"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is JavaScript?</h2>
        <p className="mb-4">
          JavaScript is a high-level, interpreted scripting language primarily
          used for web development. Created in 1995 by Brendan Eich, it was
          initially designed to add interactivity and dynamic content to
          websites. Over the years, it has evolved into a versatile language
          with capabilities extending far beyond the browser, including
          server-side programming, data manipulation, and even machine learning.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use JavaScript?</h2>
        <p className="mb-6">
          JavaScript is indispensable in modern web development for several
          reasons. First, its client-side scripting capabilities allow
          developers to create highly interactive and responsive user
          interfaces. Second, it&apos;s supported by all major web browsers,
          ensuring broad compatibility. Third, the rise of Node.js has made
          JavaScript a viable option for server-side development, allowing for a
          unified language across the entire tech stack. Lastly, the rich
          ecosystem of libraries and frameworks, such as React, Angular, Svelte
          and Vue, makes development faster and more efficient.
        </p>

        <h4 className="text-2xl font-bold">
          JavaScript Best Practices and Coding Style Guide
        </h4>
        <ul className="my-2">
          <li>- Use let for block-scoped variables. Avoid var.</li>
          <li>- Use const for values that won&apos;t change.</li>
          <li>- Prefer arrow functions for short, non-method functions.</li>
          <li>
            - Use default parameters instead of manually checking and setting a
            default inside the function.
          </li>
          <li>
            - Use tools like ESLint to catch potential problems and enforce
            style consistency.
          </li>
        </ul>
        <a
          href="https://javascript.info/"
          className="font-bold underline hover:text-blue-400"
        >
          The Modern JavaScript Tutorial
        </a>
        <br />
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className="font-bold underline hover:text-blue-400"
        >
          MDN - JavaScript Documentation
        </a>
      </div>
    </div>
  );
};

export default JavaScriptLanguage;
