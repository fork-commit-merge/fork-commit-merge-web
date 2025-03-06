/* eslint-disable @next/next/no-img-element */
const RustLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/rust-%23E32F26.svg?style=for-the-badge&logo=rust&logoColor=white"
            alt="Rust"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Rust?</h2>
        <p className="mb-4">
          Rust is a systems programming language that aims to provide memory
          safety, concurrency, and performance. Developed by Mozilla Research,
          it is designed for tasks where low-level control over the system is
          needed but also aims to provide high-level abstractions for better
          developer ergonomics.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Rust?</h2>
        <p className="mb-6">
          Rust is well-suited for performance-critical applications such as
          operating systems, game engines, and web browsers. Its memory safety
          features help eliminate common bugs and security vulnerabilities. The
          language encourages a culture of documentation and has an active,
          inclusive community with a growing ecosystem of libraries.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Rust Best Practices and Coding Style Guide
        </h4>
        <h5 className="text-xl font-bold my-4">Ownership and Borrowing:</h5>
        <ul>
          <li>
            Always try to use references (&) when you don&apos;t need to take
            ownership of a value.
          </li>
          <li>
            Be explicit with lifetimes where required, but rely on Rust&apos;s
            lifetime elision rules whenever possible to keep code concise.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Immutability:</h5>
        <ul>
          <li>
            Prefer immutability by default. Use let to create immutable bindings
            and let mut only when you need to mutate the value.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Error Handling:</h5>
        <ul>
          <li>
            Use the Result type for functions that can fail. Avoid using
            unwrap() and expect() unless you&apos;re absolutely certain the
            Result is Ok or the Option is Some.
          </li>
          <li>
            Prefer the ? operator for propagating errors in most situations.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Use of Enums:</h5>
        <ul>
          <li>
            Use enums to represent data that can be one of several variants.
            This is much more idiomatic in Rust than, for instance, class
            hierarchies in object-oriented languages.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Match Statement:</h5>
        <ul>
          <li>
            Use match statements for pattern matching. It&apos;s exhaustive,
            ensuring every possible case is handled.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Clippy:</h5>
        <ul>
          <li>
            Use clippy, the Rust linting tool. It provides a lot of suggestions
            and idiomatic ways to write Rust code. You can use it with cargo
            clippy.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Formatting:</h5>
        <ul>
          <li>
            Run cargo fmt before committing to ensure your code conforms to the
            Rust community coding standards.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Use of Crates:</h5>
        <ul>
          <li>
            Don&apos;t reinvent the wheel. If there&apos;s a well-maintained
            crate (Rust&apos;s term for libraries) that does what you need,
            consider using it. But also be wary of adding too many dependencies.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Documentation:</h5>
        <ul>
          <li>
            Document public APIs with triple-slash /// comments. Use markdown
            inside these comments.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Concurrency:</h5>
        <ul>
          <li>
            Make use of Rust&apos;s powerful concurrency guarantees. The borrow
            checker will help you a lot here. When shared state is needed,
            prefer using types like Mutex or RwLock from the standard library.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Tests:</h5>
        <ul>
          <li>
            Write unit tests using Rust&apos;s built-in testing framework. Put
            tests in a mod tests block within your source files and use the
            #[test] attribute for test functions.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Avoiding unsafe:</h5>
        <ul>
          <li>
            Rust offers the unsafe keyword to bypass the borrow checker. While
            it&apos;s there for valid use-cases, use it sparingly and always
            document the exact reason and ensure that the surrounding code truly
            upholds the safety guarantees.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Performance:</h5>
        <ul>
          <li>
            Rust allows for great performance, but always remember: write clear
            and readable code first, then optimize. With Rust, it&apos;s often
            the case that more idiomatic code is also faster, thanks to compiler
            optimizations.
          </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Keep Cargo.toml Clean:</h5>
        <ul>
          <li>
            Regularly check your dependencies and remove any that you
            aren&apos;t using. This reduces compile time, binary size, and
            potential security risks.
          </li>
        </ul>
        <br />
        <p>You might also want to check out these sites:</p>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rust-lang.org/learn"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Rust Programming Language - Official Documentation
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://doc.rust-lang.org/book/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          The Rust Programming Language Book
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://doc.rust-lang.org/rust-by-example/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Rust by Example
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://doc.rust-lang.org/std/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Rust API Documentation
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.rust-lang.org"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Rust Playground
        </a>
      </div>
    </div>
  );
};

export default RustLanguage;
