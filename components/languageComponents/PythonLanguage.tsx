/* eslint-disable @next/next/no-img-element */
const PythonLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/python-%23007ACC.svg?style=for-the-badge&logo=python&logoColor=yellow"
                        alt="Python"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Python?</h2>
                <p className="mb-4">
                    Python is a high-level, interpreted, and general-purpose
                    programming language. Created by Guido van Rossum and first
                    released in 1991, Python&apos;s design philosophy emphasizes
                    readability and ease of use. With its extensive standard
                    library, Python is widely used for various types of
                    programming, ranging from web development to data analysis,
                    machine learning, and more.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Python?</h2>
                <p className="mb-6">
                    Python is renowned for its simplicity and readability,
                    making it an excellent choice for beginners and experts
                    alike. Its versatile nature makes it suitable for a wide
                    range of applications. It has a large and active community,
                    meaning a wealth of third-party libraries and frameworks are
                    available. It is also widely used in scientific computing,
                    data analysis, and artificial intelligence.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Python Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>- Follow the PEP 8 style guide for Python code.</li>
                    <li>- Use meaningful variable and function names.</li>
                    <li>
                        - Keep functions and classes small and focused on a
                        single task.
                    </li>
                    <li>
                        - Use list comprehensions and other Pythonic idioms.
                    </li>
                    <li>
                        - Document your code effectively using comments and
                        docstrings.
                    </li>
                </ul>
                <br />
                <a
                    href="https://docs.python.org/3/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Python - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default PythonLanguage;
