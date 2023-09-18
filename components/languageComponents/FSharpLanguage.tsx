/* eslint-disable @next/next/no-img-element */
const FSharpLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/F%23-378BBA.svg?style=for-the-badge&logo=fsharp&logoColor=fff"
                        alt="F#"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is F#?</h2>
                <p className="mb-4">
                    F# (pronounced F-sharp) is a strongly-typed, multi-paradigm
                    programming language that runs on the .NET framework.
                    Developed by Microsoft and first released in 2005, F#
                    combines functional, imperative, and object-oriented
                    programming features. It is particularly well-suited for
                    tasks like data analysis, scientific computing, and web
                    development.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use F#?</h2>
                <p className="mb-6">
                    F# offers a concise and expressive syntax, enabling
                    developers to write clean and maintainable code. Its strong
                    type system helps catch errors at compile-time, while the
                    language&apos;s functional features encourage immutability
                    and safe concurrency patterns. F# also integrates well with
                    the extensive .NET library, providing a rich ecosystem for
                    development.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    F# Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use pattern matching for greater code readability and
                        maintainability.
                    </li>
                    <li>
                        - Leverage type inference but also provide explicit type
                        annotations for clarity.
                    </li>
                    <li>
                        - Prefer immutability and utilize F#&apos;s immutable
                        collections.
                    </li>
                    <li>
                        - Make use of discriminated unions and record types for
                        domain modeling.
                    </li>
                    <li>
                        - Employ F#&apos;s async capabilities for handling
                        asynchronous tasks efficiently.
                    </li>
                </ul>

                <br />
                <a
                    href="https://docs.microsoft.com/en-us/dotnet/fsharp/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    F# - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default FSharpLanguage;
