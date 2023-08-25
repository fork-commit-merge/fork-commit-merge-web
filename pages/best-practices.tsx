export default function BestPractices() {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                <h3 className="text-3xl font-bold my-4">
                    Best Practices and Coding Style Guide
                </h3>
                <p className="text-xl leading-7 pt-8">
                    Programming languages, despite their diverse syntax and
                    underlying paradigms, universally emphasize the importance
                    of adhering to best practices. These practices evolve over
                    time, influenced by shared challenges faced by developers,
                    innovations in the field, and the inherent features and
                    limitations of the languages themselves. This section serves
                    as a compass, guiding you through the idiomatic ways of
                    coding in various languages, ensuring not only that your
                    code works but also that it aligns with the conventions and
                    norms of the community.
                </p>
                <h4 className="text-2xl font-bold mt-10">
                    Why Follow Best Practices?
                </h4>
                <p className="text-xl leading-7 pt-8">
                    - Readability: Code is read more often than it&apos;s
                    written. Adopting best practices ensures your code remains
                    accessible and comprehensible to other developers, or even
                    to your future self!
                    <br />
                    - Maintainability: Idiomatic code, by adhering to
                    established patterns and standards, is easier to update,
                    debug, and expand upon.
                    <br />
                    - Performance: Often, best practices evolve in response to
                    the understanding of a language&apos;s performance
                    characteristics. Writing idiomatic code might also mean
                    squeezing the best performance out of your programs.
                    <br />
                    - Community Support: If you&apos;re writing code in the way
                    that the broader community expects, you&apos;re more likely
                    to receive help when you run into issues. Moreover, you can
                    benefit from tools, linters, and extensions built with these
                    practices in mind.
                    <br />- Reducing Errors: Many best practices are born from
                    the lessons of countless debugged issues. By adhering to
                    them, you’re sidestepping many pitfalls before they even
                    occur. In this section, you&apos;ll find guides tailored to
                    various languages. Whether you&apos;re dabbling in a new
                    language or revisiting a familiar one, these insights will
                    help ensure your code is elegant, efficient, and effective.
                </p>
                <hr className="my-6" />
                {JavaScriptContent}
                <br />
                <hr className="my-6" />
                {TypeScriptContent}
                <br />
                <hr className="my-6" />
                {RubyContent}
                <br />
                <hr className="my-6" />
                {RustContent}
                <br />
                <hr className="my-6" />
            </div>
        </div>
    );
}

const JavaScriptContent = (
    <>
        <div className="">
            <h4 className="text-2xl font-bold my-4">
                JavaScript Best Practices and Coding Style Guide
            </h4>
            <ul className="text-lg my-2">
                <li>- Use let for block-scoped variables. Avoid var.</li>
                <li>- Use const for values that won&apos;t change.</li>
                <li>
                    - Prefer arrow functions for short, non-method functions.
                </li>
                <li>
                    - Use default parameters instead of manually checking and
                    setting a default inside the function.
                </li>

                <li>
                    - Use tools like ESLint to catch potential problems and
                    enforce style consistency.
                </li>
            </ul>
            <a
                href="https://javascript.info/"
                className="text-xl font-bold underline hover:text-blue-400"
            >
                The Modern JavaScript Tutorial
            </a>
            <br />
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="text-xl font-bold underline hover:text-blue-400"
            >
                MDN - JavaScript Documentation
            </a>
        </div>
    </>
);

const TypeScriptContent = (
    <>
        <h4 className="text-2xl font-bold my-4">
            TypeScript Best Practices and Coding Style Guide
        </h4>
        <ul>
            <li>
                - Always prefer to provide specific types over using the any
                type.
            </li>
            <li>- Use interfaces for defining the shape of objects.</li>

            <li>
                - When using third-party libraries, ensure you have the
                appropriate type definitions installed, often available as
                @types/package-name.
            </li>
        </ul>
        <br />
        <a
            href="https://www.typescriptlang.org/docs/"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            TypeScript - Official Documentation
        </a>
        <br />
    </>
);

const RubyContent = (
    <>
        <h4 className="text-2xl font-bold my-4">
            Ruby Best Practices and Coding Style Guide
        </h4>
        <ul>
            <li>Use two spaces per indentation level, no tabs.</li>
            <li>Use snake_case for methods and variables.</li>

            <li>
                Use tools like{" "}
                <a
                    href="https://github.com/rubocop/rubocop"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    RuboCop
                </a>{" "}
                to enforce style and linting rules. Configure it according to
                your team&apos;s preferences.
            </li>
        </ul>
        <br />
        <a
            href="https://www.ruby-lang.org/en/documentation/"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            Ruby Programming Language - Official Documentation
        </a>
        <br />
    </>
);

const RustContent = (
    <>
        <h4 className="text-2xl font-bold my-4">
            Rust Best Practices and Coding Style Guide
        </h4>
        <h5 className="text-xl font-bold my-4">Ownership and Borrowing:</h5>
        <ul>
            <li>
                Always try to use references (&) when you don&apos;t need to
                take ownership of a value.
            </li>
            <li>
                Be explicit with lifetimes where required, but rely on
                Rust&apos;s lifetime elision rules whenever possible to keep
                code concise.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Immutability:</h5>
        <ul>
            <li>
                Prefer immutability by default. Use let to create immutable
                bindings and let mut only when you need to mutate the value.
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
                Use clippy, the Rust linting tool. It provides a lot of
                suggestions and idiomatic ways to write Rust code. You can use
                it with cargo clippy.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Formatting:</h5>
        <ul>
            <li>
                Run cargo fmt before committing to ensure your code conforms to
                the Rust community coding standards.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Use of Crates:</h5>
        <ul>
            <li>
                Don&apos;t reinvent the wheel. If there&apos;s a well-maintained
                crate (Rust&apos;s term for libraries) that does what you need,
                consider using it. But also be wary of adding too many
                dependencies.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Documentation:</h5>
        <ul>
            <li>
                Document public APIs with triple-slash /// comments. Use
                markdown inside these comments.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Concurrency:</h5>
        <ul>
            <li>
                Make use of Rust&apos;s powerful concurrency guarantees. The
                borrow checker will help you a lot here. When shared state is
                needed, prefer using types like Mutex or RwLock from the
                standard library.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Tests:</h5>
        <ul>
            <li>
                Write unit tests using Rust&apos;s built-in testing framework.
                Put tests in a mod tests block within your source files and use
                the #[test] attribute for test functions.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Avoiding unsafe:</h5>
        <ul>
            <li>
                Rust offers the unsafe keyword to bypass the borrow checker.
                While it&apos;s there for valid use-cases, use it sparingly and
                always document the exact reason and ensure that the surrounding
                code truly upholds the safety guarantees.
            </li>
        </ul>
        <h5 className="text-xl font-bold my-4">Performance:</h5>
        <ul>
            <li>
                Rust allows for great performance, but always remember: write
                clear and readable code first, then optimize. With Rust,
                it&apos;s often the case that more idiomatic code is also
                faster, thanks to compiler optimizations.
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
            href="https://www.rust-lang.org/learn"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            Rust Programming Language - Official Documentation
        </a>
        <br />
        <a
            href="https://doc.rust-lang.org/book/"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            The Rust Programming Language Book
        </a>
        <br />
        <a
            href="https://doc.rust-lang.org/rust-by-example/"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            Rust by Example
        </a>
        <br />
        <a
            href="https://doc.rust-lang.org/std/"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            Rust API Documentation
        </a>
        <br />
        <a
            href="https://play.rust-lang.org"
            className="text-xl font-bold underline hover:text-blue-400"
        >
            Rust Playground
        </a>
        <br />
    </>
);
