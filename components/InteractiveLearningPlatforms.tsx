import React from "react";

const InteractiveLearningPlatforms: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-1/2 mb-8">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">
                        Interactive Learning Platforms
                    </h2>
                    <p className="mb-4 max-w-prose">
                        Interactive learning platforms provide a variety of
                        courses in programming and software development. Whether
                        you&apos;re new to coding or looking to learn a new
                        language or skill, these resources can help you on your
                        journey.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://www.codecademy.com/"
                                className="hover:underline text-blue-400"
                            >
                                Codecademy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.udemy.com/"
                                className="hover:underline text-blue-400"
                            >
                                Udemy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.coursera.org/"
                                className="hover:underline text-blue-400"
                            >
                                Coursera
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default InteractiveLearningPlatforms;
