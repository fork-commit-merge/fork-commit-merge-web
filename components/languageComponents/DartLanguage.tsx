const DartLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Dart</h1>

                <h2 className="text-2xl font-bold mb-4">What is Dart?</h2>
                <p className="mb-4">
                    Dart is an object-oriented, class-based programming language
                    developed by Google. Initially released in 2011, it is
                    designed for ease of use, strong support for modern web
                    workflows, and robustness. Dart is used for building web,
                    server, and mobile applications, and is also the language
                    behind Flutter, Google&apos;s UI toolkit for building
                    natively compiled applications for mobile, web, and desktop.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Dart?</h2>
                <p className="mb-6">
                    Dart offers a blend of performance and productivity
                    features. It is strongly typed, yet flexible, with a
                    familiar syntax for Java and C# developers. Dart has a
                    robust standard library and package ecosystem, and it can
                    compile to native code for high performance across
                    platforms. It is particularly popular for Flutter
                    development.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Dart Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Follow the effective Dart guidelines for more
                        idiomatic Dart code.
                    </li>
                    <li>
                        - Use asynchronous programming constructs when dealing
                        with IO-bound work.
                    </li>
                    <li>
                        - Take advantage of Dart’s strong type system to catch
                        errors early.
                    </li>
                    <li>
                        - Keep dependencies up to date and adhere to semantic
                        versioning.
                    </li>
                    <li>
                        - Write unit and integration tests to ensure code
                        reliability.
                    </li>
                </ul>
                <br />
                <a
                    href="https://dart.dev/guides"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Dart - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default DartLanguage;
