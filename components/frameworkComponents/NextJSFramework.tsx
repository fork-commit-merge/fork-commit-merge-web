const NextJSFramework = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Next.js</h1>

                <h2 className="text-2xl font-bold mb-4">What is Next.js?</h2>
                <p className="mb-4">
                    Next.js is an open-source development framework built on top
                    of Node.js enabling React-based web applications
                    functionalities such as server-side rendering and generating
                    static websites. Developed and maintained by Vercel, it aims
                    to make it easier to create performant and SEO-friendly web
                    applications.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Next.js?</h2>
                <p className="mb-6">
                    Next.js offers features like pre-rendering, dynamic routing,
                    and API routes out of the box. It provides a straightforward
                    setup process and smart defaults, saving you time during
                    development. The framework also boasts exceptional
                    performance and optimization features such as automatic code
                    splitting, server-side rendering, and static site
                    generation.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Next.js Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use the `getStaticProps` and `getServerSideProps`
                        functions for data fetching.
                    </li>
                    <li>
                        - Take advantage of Next.js’ built-in CSS and Sass
                        support.
                    </li>
                    <li>
                        - Utilize the built-in Image component for optimized
                        image delivery.
                    </li>
                    <li>
                        - Use the `Link` component for client-side navigation.
                    </li>
                    <li>
                        - Follow the file and folder naming conventions provided
                        by Next.js.
                    </li>
                </ul>

                <br />
                <a
                    href="https://nextjs.org/docs"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Next.js - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default NextJSFramework;
