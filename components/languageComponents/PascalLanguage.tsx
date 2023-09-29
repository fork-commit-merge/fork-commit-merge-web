/* eslint-disable @next/next/no-img-element */
const PascalLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://alefragnani.gallerycdn.vsassets.io/extensions/alefragnani/pascal/9.6.0/1676423977534/Microsoft.VisualStudio.Services.Icons.Default"
            alt="Pascal"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Pascal?</h2>
        <p className="mb-4">
          Pascal is a structured, imperative programming language that
          emphasizes simplicity and clear code readability. Niklaus Wirth
          initially designed Pascal in the late 1960s and released it in 1970.
          It was named after the French mathematician and philosopher Blaise
          Pascal. Pascal was created with the goal of providing a reliable and
          efficient tool for teaching programming and software development.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Pascal?</h2>
        <p className="mb-6">
          Pascal&apos;s clear and concise syntax makes it easy to read and
          understand code. This readability is particularly beneficial when
          working on collaborative projects or maintaining legacy code. Pascal
          was one of the first languages to promote structured programming
          principles, such as modularization and the use of procedures and
          functions. This approach encourages code organization and reusability.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Pascal Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Keep a uniform naming, indentation, and structure for better code
            maintainability.
          </li>
          <li>
            - Decompose code into reusable functions for better organization and
            efficiency.
          </li>
          <li>
            - Use Pascal&apos;s strong typing to detect type errors early in
            development.
          </li>
          <li>
            - Thoroughly comment and use clear names for self-explanatory code.
          </li>
          <li>
            - Perform rigorous testing, including unit tests, for code
            reliability.
          </li>
        </ul>
        <br />
        <a
          href="https://www.freepascal.org/docs.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Pascal - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default PascalLanguage;
