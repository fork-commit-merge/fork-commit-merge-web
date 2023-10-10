/* eslint-disable @next/next/no-img-element */
const KotlinLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"
            alt="Kotlin"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Kotlin?</h2>
        <p className="mb-4">
          Kotlin is a modern, statically-typed programming language that runs on
          the Java Virtual Machine (JVM). Developed by JetBrains, it was
          officially released in 2016. Kotlin aims to be more expressive,
          concise, and safe compared to Java, while being fully interoperable
          with it.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Kotlin?</h2>
        <p className="mb-6">
          Kotlin offers several advantages such as concise syntax, null safety,
          and functional programming features. It has first-class support for
          Android development and can be used for server-side, client-side web,
          and even native applications. The language is designed to be fully
          interoperable with Java, making it easier to integrate into existing
          projects.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Kotlin Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use `val` for read-only variables and `var` for mutable variables.
          </li>
          <li>
            - Prefer using Kotlin&apos;s standard library functions like `.let`,
            `.apply`, etc., for common operations.
          </li>
          <li>- Utilize smart casts and sealed classes.</li>
          <li>- Use data classes for simple classes intended to hold data.</li>
          <li>- Make use of Kotlin Coroutines for asynchronous tasks.</li>
        </ul>
        <br />
        <a
          href="https://kotlinlang.org/docs/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Kotlin - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default KotlinLanguage;
