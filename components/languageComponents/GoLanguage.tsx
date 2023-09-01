const GoLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Go</h1>

                <h2 className="text-2xl font-bold mb-4">What is Go?</h2>
                <p className="mb-4">
                    Go, also known as Golang, is a statically typed, compiled
                    programming language designed at Google. It was created to
                    improve programming productivity, reliability, and
                    efficiency. Released in 2009, Go has gained popularity for
                    its simplicity, performance, and strong support for
                    concurrency.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Go?</h2>
                <p className="mb-6">
                    Go offers a balance of performance and ease of use. Its
                    straightforward syntax and built-in features for concurrency
                    make it ideal for modern, scalable applications. Go is also
                    well-suited for cloud computing, microservices, and other
                    distributed systems. Its compiled nature allows for fast
                    execution and a smaller memory footprint.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Go Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Follow the official Go coding style, often enforced by
                        the `gofmt` tool.
                    </li>
                    <li>
                        - Make use of interfaces for cleaner and more flexible
                        code.
                    </li>
                    <li>
                        - Write unit tests and benchmarks, utilizing Go’s
                        built-in testing library.
                    </li>
                    <li>
                        - Leverage goroutines and channels for efficient
                        concurrency.
                    </li>
                    <li>- Use Go modules for dependency management.</li>
                </ul>
                <br />
                <a
                    href="https://golang.org/doc/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Go - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default GoLanguage;
