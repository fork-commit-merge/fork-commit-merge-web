/* eslint-disable @next/next/no-img-element */
const ElmLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white"
                        alt="Elm"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Elm?</h2>
                <p className="mb-4">
                    Elm is a functional programming language known for building
                    highly reliable and maintainable web applications. Its
                    strict static typing and model-view-update (MVU)
                    architecture reduce runtime errors, making it a preferred
                    choice for web development. Elm compiles to JavaScript for
                    seamless integration into web projects, emphasizing
                    simplicity and robustness.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Elm?</h2>
                <p className="mb-6">
                    Elm is chosen for web development due to its reliability,
                    maintainability, and safety features. Its strict typing
                    catches errors early, ensuring a stable and bug-free
                    application. Elm's architecture simplifies code organization
                    and state management, making it easier to maintain and
                    extend. It also integrates seamlessly with JavaScript,
                    making it a practical choice for web development while
                    prioritizing developer productivity and safety.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Elm Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use camelCase for variables and functions, except for
                        private ones that may start with underscores.
                    </li>
                    <li>
                        - Employ PascalCase for user-defined types like classes
                        and structs.
                    </li>
                    <li>
                        - Use spaces for indentation, maintain a consistent
                        four-space indent.
                    </li>
                    <li>
                        - For functions and conditionals, open curly braces on
                        the same line, close them on separate lines.
                    </li>
                    <li>
                        - Aim for concise lines, typically 80-120 characters,
                        for improved code readability.
                    </li>
                </ul>
                <br />
                <a
                    href="https://elm-lang.org/docs"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Elm - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default ElmLanguage;
