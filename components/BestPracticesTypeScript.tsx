const BestPracticesTypeScript = (
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

export default BestPracticesTypeScript;
