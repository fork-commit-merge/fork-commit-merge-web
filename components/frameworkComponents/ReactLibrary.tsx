/* eslint-disable @next/next/no-img-element */
const ReactLibrary = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                        alt="React"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is React?</h2>
                <p className="mb-4">
                    React (or React.js) is a JavaScript library for building
                    user interfaces. Created and maintained by Facebook, it
                    allows developers to create complex UIs from isolated and
                    reusable components. React uses a virtual DOM to optimize
                    rendering and improve performance.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use React?</h2>
                <p className="mb-6">
                    React has several advantages including its component-based
                    architecture, strong community support, and flexibility. Its
                    reactive updates make it ideal for building dynamic and
                    complex applications, while features like hooks and context
                    make state management easier. Its compatibility with other
                    libraries and tools like Redux and GraphQL make it extremely
                    versatile.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    React Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use functional components and hooks for state and
                        lifecycle features.
                    </li>
                    <li>
                        - Employ JSX for better readability and maintainability.
                    </li>
                    <li>
                        - Make components small and focused on a single
                        responsibility.
                    </li>
                    <li>- Use PropTypes for type-checking.</li>
                    <li>
                        - Leverage code splitting and lazy loading to improve
                        performance.
                    </li>
                </ul>

                <br />
                <a
                    href="https://reactjs.org/docs/getting-started.html"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    React - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default ReactLibrary;
