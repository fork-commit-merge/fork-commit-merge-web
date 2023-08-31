const BestPracticesJavaScript = (
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

export default BestPracticesJavaScript;
