/* eslint-disable @next/next/no-img-element */
const TypeScriptLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                        alt="TypeScript"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is TypeScript?</h2>
                <p className="mb-4">
                    TypeScript is a superset of JavaScript that brings static
                    type checking to the language. Developed and maintained by
                    Microsoft, it was first released in 2012. TypeScript extends
                    JavaScript by adding types, interfaces, and other syntactic
                    features aimed at making the language more robust and
                    maintainable.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use TypeScript?</h2>
                <p className="mb-6">
                    TypeScript offers several advantages over plain JavaScript.
                    First, the static type checking can catch errors at
                    compile-time, making it easier to debug and maintain code.
                    Second, TypeScript offers enhanced code autocompletion,
                    making it easier to write code quickly and with fewer
                    errors. Third, the type system makes the code
                    self-documenting, aiding collaboration and onboarding of new
                    team members. Finally, it’s fully compatible with
                    JavaScript, allowing incremental adoption in existing
                    projects.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    TypeScript Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Always prefer to provide specific types over using the
                        any type.
                    </li>
                    <li>- Use interfaces for defining the shape of objects.</li>
                    <li>
                        - When using third-party libraries, ensure you have the
                        appropriate type definitions installed, often available
                        as @types/package-name.
                    </li>
                </ul>
                <br />
                <a
                    href="https://www.typescriptlang.org/docs/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    TypeScript - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default TypeScriptLanguage;
