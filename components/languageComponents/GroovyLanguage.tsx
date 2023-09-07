/* eslint-disable @next/next/no-img-element */
const GroovyLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/apache%20Groovy-4298B8?style=for-the-badge&logo=apachegroovy&logoColor=white"
                        alt="Groovy"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">
                    What is Apache Groovy?
                </h2>
                <p className="mb-4">
                    Apache Groovy is a dynamic, optionally typed language
                    running on the Java Virtual Machine (JVM). It&apos;s
                    concise, Java-compatible, and often used for scripting,
                    offering features like dynamic typing, metaprogramming, and
                    integration with Java libraries.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                    Why Use Apache Groovy?
                </h2>
                <p className="mb-6">
                    Apache Groovy is chosen by developers for its dynamic
                    typing, seamless compatibility with Java, and scripting
                    capabilities, making it ideal for automation, configuration,
                    and rapid development. Its metaprogramming features further
                    enhance flexibility, allowing dynamic class and object
                    modifications. Overall, Groovy is valued for its ability to
                    simplify coding and enhance productivity.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Apache Groovy Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Semicolons are optional, and it&apos;s more idiomatic
                        to omit them.
                    </li>
                    <li>
                        - The last expression in a method body is automatically
                        returned.
                    </li>
                    <li>- Use def or specify a type for variables.</li>
                    <li>
                        - By default, classes and methods are considered public.
                    </li>
                    <li>
                        - In Groovy, == corresponds to Java&apos;s equals(), and
                        is() is used for reference equality comparisons.
                    </li>
                </ul>
                <br />
                <a
                    href="https://groovy-lang.org/documentation.html"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Apache Groovy - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default GroovyLanguage;
