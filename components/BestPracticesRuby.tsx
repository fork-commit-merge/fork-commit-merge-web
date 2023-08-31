const BestPracticesRuby = (
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

export default BestPracticesRuby;
