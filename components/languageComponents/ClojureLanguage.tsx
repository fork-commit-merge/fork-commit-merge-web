/* eslint-disable @next/next/no-img-element */
const ClojureLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure"
            alt="Clojure"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Clojure?</h2>
        <p className="mb-4">
          Clojure is a modern, functional programming language that runs on the
          Java Virtual Machine (JVM). It was created by Rich Hickey and released
          in 2007. Clojure is designed to be a general-purpose language, with an
          emphasis on simplicity, immutability, and leveraging the power of
          concurrent programming.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Clojure?</h2>
        <p className="mb-6">
          Clojure offers several advantages such as high performance via JVM,
          simplicity with its small set of powerful language constructs, and
          strong support for concurrent programming. It&apos;s also highly
          extensible and has a robust ecosystem, making it a solid choice for a
          variety of software projects, including web services and data
          analytics applications.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Clojure Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Prioritize immutability and pure functions.</li>
          <li>- Utilize Clojure&apos;s standard library effectively.</li>
          <li>- Make use of namespaces to organize code.</li>
          <li>- Adopt the REPL-driven development for rapid iterations.</li>
          <li>- Write unit tests and leverage Clojure’s testing frameworks.</li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://clojure.org/guides/getting_started"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Clojure - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ClojureLanguage;
