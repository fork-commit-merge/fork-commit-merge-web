/* eslint-disable @next/next/no-img-element */
const NimLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/nim-%23FFE953.svg?style=for-the-badge&logo=nim&logoColor=white"
                        alt="Nim"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Nim?</h2>
                <p className="mb-4">
                    Nim is a versatile and efficient language known for its
                    performance, safety, and clean syntax. It offers static
                    typing and powerful metaprogramming tools. Developers can
                    choose between manual and automatic memory management.
                    Nim&apos;s active community and interoperability with other
                    languages make it a valuable choice for various tasks. Its
                    cross-platform support and extensive standard library
                    further enhance its appeal.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Nim?</h2>
                <p className="mb-6">
                    Nim is known for its reliability, scalability, and ease of
                    maintenance. It has a strong type system, automatic memory
                    management, and a large ecosystem of libraries and
                    frameworks, making it a versatile choice for various types
                    of projects. The language is also backed by a strong
                    community of developers, providing excellent community
                    support.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Nim Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Keep lines within 80 characters in length. Use two
                        spaces for indentation; tabs are not allowed, and the
                        compiler enforces this rule.
                    </li>
                    <li>
                        - Use PascalCase for type identifiers. For all other
                        identifiers, including variables and functions, use
                        camelCase, except for constants, which may use
                        PascalCase but are not required to.
                    </li>
                    <li>
                        - When defining exception and error types, add the
                        &quot;Error&quot; or &quot;Defect&quot; suffix to their names.
                    </li>
                    <li>
                        - Begin comments in Nim with the hash character (#). For
                        multiline or block comments, start with #[ and end with
                        ]#.
                    </li>
                </ul>
                <br />
                <a
                    href="https://nim-lang.org/documentation.html"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Nim - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default NimLanguage;
