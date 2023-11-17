/* eslint-disable @next/next/no-img-element */
const PureScriptLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://raw.githubusercontent.com/purescript/purescript/master/logo.png"
              alt="JavaScript"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is PureScript?</h2>
          <p className="mb-4">
            PureScript is a strongly-typed, purely-functional programming language that 
            transpiles to JavaScript, C++11, Erlang, and Go. It can be used to
            develop web applications, server side apps, and also desktop applications 
            with use of Electron or via C++11 and Go compilers with suitable libraries. 
            Its syntax is mostly comparable to that of Haskell. In addition, it introduces 
            row polymorphism and extensible records. Also, contrary to Haskell, the 
            PureScript language is defined as having a strict evaluation strategy, 
            although there are non-conforming back ends which implement a lazy evaluation 
            strategy.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use PureScript?</h2>
          <p className="mb-6">
            PureScript offers straightforward installation and build processes, helping 
            developers create either simple or complex front-facing applications that are 
            easy to refactor, debug and test. PureScript is strongly typed and purely 
            functional. Also, it compiles to JavaScript and offers type classes that 
            enable programmers to create reusable code. PureScript tends to find more 
            favor among developers looking to learn functional paradigm concepts within 
            the safety of easier installation and build processes. The high granularity 
            of PureScript&apos;s type classes also eliminates the need for many of the language 
            extensions JavaScript developers typically rely on, such as TypeScript, Flow and JSDoc.
          </p>
  
          <h4 className="text-2xl font-bold">
          PureScript Best Practices and Coding Style Guide
          </h4>
          <ul className="my-2">
            <li>- Do not add type class contraint to foreign imported functions.</li>
            <li>- Convert Promise to Aff when dealing with async foreign code.</li>
            <li>- Prefer arrow functions for short, non-method functions.</li>
            <li>
              - Use tools like ESLint to catch potential problems and enforce
              style consistency.
            </li>
          </ul>
          <a
            href="https://github.com/purescript/documentation"
            className="font-bold underline hover:text-blue-400"
          >
            PureScript Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default PureScriptLanguage;
  