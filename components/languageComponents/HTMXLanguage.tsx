/* eslint-disable @next/next/no-img-element */
const HTMXLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/htmx-%23E34F26.svg?style=for-the-badge&logo=htmx&logoColor=white"
                        alt="HTMX"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is HTMX?</h2>
                <p className="mb-4">
                    HTMX is a modern tool that allows you to access AJAX, CSS
                    Transitions, WebSockets, and Server Sent Events directly in
                    HTML, using attributes, so you can build modern user
                    interfaces with the simplicity and power of hypertext.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use HTMX?</h2>
                <p className="mb-6">
                    HTMX offers a way to build modern web applications without
                    complicating your development process with JavaScript. It
                    brings the power of modern web technologies directly into
                    HTML, allowing developers to build complex interfaces
                    without leaving their comfort zone.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    HTMX Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Utilize the `hx-*` attributes effectively to make
                        interactions clear.
                    </li>
                    <li>
                        - Use `hx-swap` and `hx-swap-oob` to define how content
                        should be swapped out.
                    </li>
                    <li>
                        - Use `hx-trigger` to determine when an action should be
                        triggered.
                    </li>
                    <li>
                        - Take advantage of `hx-push-url` for modifying the
                        browser&apos;s history.
                    </li>
                    <li>
                        - Ensure server responses are appropriately structured
                        for the expected behavior.
                    </li>
                </ul>
                <br />
                <a
                    href="https://htmx.org/docs/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    HTMX - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default HTMXLanguage;
