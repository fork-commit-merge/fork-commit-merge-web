const CoffeeScriptLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">CoffeeScript</h1>

                <h2 className="text-2xl font-bold mb-4">
                    What is CoffeeScript?
                </h2>
                <p className="mb-4">
                    CoffeeScript is a programming language that transcompiles to
                    JavaScript. It aims to make JavaScript code more readable
                    and concise, offering a syntax that is more consistent and
                    expressive. CoffeeScript compiles one-to-one into the
                    equivalent JS and offers no runtime overhead.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                    Why Use CoffeeScript?
                </h2>
                <p className="mb-6">
                    Using CoffeeScript can help you write cleaner and more
                    maintainable code. Its syntax encourages the use of good
                    programming practices and also comes with some additional
                    features that don&apos;t exist in JavaScript, like array
                    comprehensions. However, note that it adds an additional
                    compilation step and may not be suitable for all projects.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    CoffeeScript Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Favor immutability and avoid using mutable data
                        structures.
                    </li>
                    <li>
                        - Make liberal use of whitespace for better readability.
                    </li>
                    <li>
                        - Utilize CoffeeScript&apos;s syntactic sugar but avoid
                        being overly clever.
                    </li>
                    <li>- Keep lines of code short and functions small.</li>
                    <li>- Always be explicit about what your code is doing.</li>
                </ul>
                <br />
                <a
                    href="https://coffeescript.org/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    CoffeeScript - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default CoffeeScriptLanguage;
