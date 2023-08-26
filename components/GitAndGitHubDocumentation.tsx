import React from "react";

const GitAndGitHubDocumentation: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-1/2 mb-8">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">
                        Git and GitHub Documentation
                    </h2>
                    <p className="mb-4 max-w-prose">
                        Mastering Git and GitHub is fundamental for effective
                        open-source contributions. The following documentation
                        provides a deep dive into using Git and GitHub,
                        including the official documentation and additional
                        helpful tutorials.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://git-scm.com/doc"
                                className="hover:underline text-blue-400"
                            >
                                Official Git Documentation
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://docs.github.com/en"
                                className="hover:underline text-blue-400"
                            >
                                Official GitHub Documentation
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.atlassian.com/git/tutorials"
                                className="hover:underline text-blue-400"
                            >
                                Atlassian Git Tutorial
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default GitAndGitHubDocumentation;
