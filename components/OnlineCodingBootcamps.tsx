import React from "react";

const OnlineCodingBootcamps: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-1/2 mb-8">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">
                        Online Coding Bootcamps
                    </h2>
                    <p className="mb-4 max-w-prose">
                        Online bootcamps offer comprehensive and structured
                        learning experiences for aspiring developers. They
                        provide in-depth curricula and project-based learning to
                        help you build a solid foundation in software
                        development.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://www.appacademy.io/"
                                className="hover:underline text-blue-400"
                            >
                                App Academy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://lambdaschool.com/"
                                className="hover:underline text-blue-400"
                            >
                                Lambda School
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://generalassemb.ly/"
                                className="hover:underline text-blue-400"
                            >
                                General Assembly
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://launchschool.com/"
                                className="hover:underline text-blue-400"
                            >
                                Launch School
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://careerfoundry.com/"
                                className="hover:underline text-blue-400"
                            >
                                Career Foundry
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://brainstation.io/"
                                className="hover:underline text-blue-400"
                            >
                                Brain Station
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default OnlineCodingBootcamps;
