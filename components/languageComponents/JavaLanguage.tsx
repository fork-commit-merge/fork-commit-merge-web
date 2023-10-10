/* eslint-disable @next/next/no-img-element */
const JavaLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
            alt="Java"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Java?</h2>
        <p className="mb-4">
          Java is a high-level, object-oriented programming language that was
          initially released by Sun Microsystems in 1995. It is
          platform-independent, meaning that code written in Java can run on any
          device that has a Java Virtual Machine (JVM). Java is widely used for
          building enterprise-scale web applications and Android mobile app
          development.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Java?</h2>
        <p className="mb-6">
          Java is known for its reliability, scalability, and ease of
          maintenance. It has a strong type system, automatic memory management,
          and a large ecosystem of libraries and frameworks, making it a
          versatile choice for various types of projects. The language is also
          backed by a strong community of developers, providing excellent
          community support.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Java Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Follow the Java Code Conventions.</li>
          <li>
            - Use meaningful variable and method names that follow the camelCase
            naming convention.
          </li>
          <li>
            - Favor composition over inheritance to make your code more modular.
          </li>
          <li>
            - Always make use of access modifiers to encapsulate your code
            effectively.
          </li>
          <li>- Use exceptions for error handling, but don’t overuse them.</li>
        </ul>
        <br />
        <a
          href="https://docs.oracle.com/en/java/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Java - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default JavaLanguage;
