import React from "react";

const JobSearchingPlatforms: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-1/2 mb-8">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">
                        Job Searching Platforms
                    </h2>
                    <p className="mb-4 max-w-prose">
                        Looking for your next role or just curious about
                        what&apos;s out there? These job searching platforms are
                        specifically tailored for tech roles and can help you
                        find your next opportunity.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://angel.co/jobs"
                                className="hover:underline text-blue-400"
                            >
                                AngelList Jobs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.hired.com/"
                                className="hover:underline text-blue-400"
                            >
                                Hired
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.dice.com/"
                                className="hover:underline text-blue-400"
                            >
                                Dice
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.upwork.com/work/"
                                className="hover:underline text-blue-400"
                            >
                                Upwork
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://builtin.com/"
                                className="hover:underline text-blue-400"
                            >
                                Built In
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.hiretechladies.com/"
                                className="hover:underline text-blue-400"
                            >
                                Tech Ladies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default JobSearchingPlatforms;
