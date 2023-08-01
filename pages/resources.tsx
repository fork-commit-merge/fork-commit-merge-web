export default function Resources() {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-10">Resources</h1>
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 mb-8">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-2">
                            Video Tutorials
                        </h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=yzeVMecydCE"
                                    className="underline text-blue-400"
                                >
                                    Complete Guide to Open Source - How to
                                    Contribute (freeCodeCamp.org)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=c6b6B9oN4Vg"
                                    className="underline text-blue-400"
                                >
                                    Contributing to Open Source for the first
                                    time (Meta Open Source)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=2L0sxPx4C18"
                                    className="underline text-blue-400"
                                >
                                    How to contribute to open source (strager)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=LxdyX9p0wrM"
                                    className="underline text-blue-400"
                                >
                                    How to Contribute to Open Source Projects? (Tiff In Tech)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mb-8">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-2">
                            Git and GitHub Documentation
                        </h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <a
                                    href="https://git-scm.com/doc"
                                    className="underline text-blue-400"
                                >
                                    Official Git Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.github.com/en"
                                    className="underline text-blue-400"
                                >
                                    Official GitHub Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.atlassian.com/git/tutorials"
                                    className="underline text-blue-400"
                                >
                                    Atlassian Git Tutorial
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mb-8">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-2">
                            Open Source Contribution
                        </h2>
                        <p className="mb-4 max-w-prose">
                            Open source refers to a type of software where the
                            source code is available for anyone to view, modify,
                            and distribute. Contributing to open source projects
                            is a great way to improve your coding skills, work
                            on real-world projects, and potentially make a
                            meaningful impact in the software that people use
                            every day.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>
                                <a
                                    href="https://opensource.guide/"
                                    className="underline text-blue-400"
                                >
                                    Introduction to Open Source
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/firstcontributions/first-contributions"
                                    className="underline text-blue-400"
                                >
                                    First Contributions on GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.codecademy.com/articles/what-is-open-source"
                                    className="underline text-blue-400"
                                >
                                    What is Open Source?
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://opensource.org/resources"
                                    className="underline text-blue-400"
                                >
                                    Open Source Initiative Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mb-8">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-2">
                            Interactive Learning Platforms
                        </h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <a
                                    href="https://www.codecademy.com/"
                                    className="underline text-blue-400"
                                >
                                    Codecademy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.udemy.com/"
                                    className="underline text-blue-400"
                                >
                                    Udemy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.coursera.org/"
                                    className="underline text-blue-400"
                                >
                                    Coursera
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
