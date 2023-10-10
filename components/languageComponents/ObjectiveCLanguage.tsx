/* eslint-disable @next/next/no-img-element */
const ObjectiveCLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://seeklogo.com/images/O/objective-c-logo-81746870EF-seeklogo.com.png"
            alt="Objective-c"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Objective-C?</h2>
        <p className="mb-4">
          Objective-C is an object-oriented, class-based programming language
          primarily used for developing software applications on Apple&apos;s
          macOS and iOS platforms. Originally created in the early 1980s,
          Objective-C has evolved to support modern development practices while
          maintaining compatibility with Apple&apos;s ecosystem.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Objective?</h2>
        <p className="mb-6">
          Many existing macOS and iOS applications are written in Objective-C.
          Maintaining and extending these projects requires knowledge of the
          language. Objective-C can be mixed with Swift in the same project,
          allowing developers to leverage both language&apos;s strengths and
          gradually transition to Swift when necessary. Objective-C benefits
          from a rich ecosystem of libraries, frameworks, and tools built over
          decades of development. Objective-C can achieve high performance,
          especially when working closely with C or C++ code, making it suitable
          for resource-intensive tasks.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Objective-C Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Follow Apple&apos;s official Objective-C coding guidelines.</li>
          <li>
            - Master memory management, including object retention and release
            with manual or ARC.
          </li>
          <li>
            - Use modern Objective-C features like literals and subscripting for
            readable code.
          </li>
          <li>
            - Apply suitable error handling, using NSError or exceptions as
            needed.
          </li>
          <li>
            - Write unit tests and employ testing frameworks for code
            reliability.
          </li>
        </ul>
        <br />
        <a
          href="https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Objective-C - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ObjectiveCLanguage;
