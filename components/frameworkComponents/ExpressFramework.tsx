/* eslint-disable @next/next/no-img-element */
const ExpressFramework = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                        alt="Express.js"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Express.js?</h2>
                <p className="mb-4">
                    Express (or Express.js) is a fast, unopinionated, and
                    minimalist web framework for Node.js. Developed as part of
                    the Node.js ecosystem, it&apos;s designed to simplify tasks
                    like setting up the server, routing, interacting with
                    databases, and more.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Express.js?</h2>
                <p className="mb-6">
                    Express provides a robust set of features for both web and
                    mobile applications. It offers a thin layer of fundamental
                    web application features without obscuring Node.js features.
                    This makes it flexible, scalable, and very popular for
                    building APIs, especially in the context of SPAs (Single
                    Page Applications) and microservice architectures.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Express.js Best Practices
                </h4>
                <ul>
                    <li>- Structure your application using the MVC pattern.</li>
                    <li>- Use middlewares for reusable features.</li>
                    <li>- Utilize environment variables for configuration.</li>
                    <li>
                        - Handle errors effectively through centralized error
                        handling.
                    </li>
                    <li>- Monitor performance and maintain scalability.</li>
                </ul>

                <br />
                <a
                    href="https://expressjs.com/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Express.js - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default ExpressFramework;
