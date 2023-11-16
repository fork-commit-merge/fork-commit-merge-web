/* eslint-disable @next/next/no-img-element */
const ReasonLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://reasonml.github.io/img/reason.svg"
              alt="ReScript"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is Reason?</h2>
          <p className="mb-4">
            Reason is a programming language powered by OCaml's strong type system, 
            and has a syntax designed to feel familiar to people coming from JavaScript 
            or C-family languages.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use Reason?</h2>
          <p className="mb-6">
            The powerful typesystem underlying Reason will reduce bugs, increase
            maintainability, and improve the refactorabilty of your code.
          </p>
  
          <h4 className="text-2xl font-bold my-4">
            Reason Best Practices and Coding Style Guide
          </h4>
          <ul>
            <li>
              - Employ the double-slash // for single-line comments and /* */ for
              multi-line comments.
            </li>
            <li>
              - Expressions need not be terminated with a semicolon, but it is best practice;
            </li>
            <li>
              - All of Reason's types and structures have modules in the standard library. 
              In general, it is best to interface with your data via these modules
            </li>
          </ul>
          <br />
          <a
            href="https://reasonml.github.io/docs/en/what-and-why"
            className="text-xl font-bold underline hover:text-blue-400"
          >
            Reason - Official Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default ReasonLanguage;
  