/* eslint-disable @next/next/no-img-element */
const ScalaLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/scala-%23E32F26.svg?style=for-the-badge&logo=scala&logoColor=white"
                        alt="Scala"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Scala?</h2>
                <p className="mb-4">
                    Scala is a high-level, statically-typed programming language
                    that combines functional and object-oriented programming
                    paradigms. It runs on the Java Virtual Machine (JVM),
                    allowing seamless interoperability with Java. Scala was
                    created to be a more concise, elegant, and, arguably, a more
                    powerful version of Java.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Scala?</h2>
                <p className="mb-6">
                    Scala offers several benefits over traditional Java, such as
                    a more expressive syntax, powerful type inference, and
                    first-class functional programming constructs. Scala is
                    widely used in data analytics, parallel batch processing,
                    and even scientific computing tasks. It’s a popular choice
                    for web servers, APIs, and concurrent programming tasks.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Scala Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>- Prefer immutable data structures.</li>
                    <li>
                        - Utilize pattern matching for more readable and robust
                        code.
                    </li>
                    <li>
                        - Make use of case classes for immutable data
                        containers.
                    </li>
                    <li>
                        - Use companion objects for factory methods and static
                        members.
                    </li>
                    <li>
                        - Leverage Scala’s rich standard library for common
                        tasks.
                    </li>
                </ul>
                <br />
                <a
                    href="https://www.scala-lang.org/documentation/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Scala - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default ScalaLanguage;
