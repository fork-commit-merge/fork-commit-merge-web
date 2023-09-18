import Link from "next/link";

const HowToContribute = () => {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                <h2 className="text-3xl font-bold my-4 text-center">
                    How to make an Open Source Contribution?
                </h2>
                <p className="leading-6 pt-8">
                    Contributing to open-source projects is a collaborative
                    effort that offers the opportunity to learn, grow, and
                    engage with the community.
                    <br />
                    Here&apos;s how you can get started:
                    <br />
                    <br />
                    <strong>1. Find a Project:</strong>
                    <br />
                    <br />
                    Identify a project that interests you. Many projects
                    specifically mark issues as &quot;good for beginners&quot;,
                    &quot;good first issue&quot; or similar to that to help you
                    find a starting point. Some excellent places for looking these kind of
                    issues are for example{" "}
                    <a
                        href="https://goodfirstissues.com"
                        className="hover:underline text-blue-400"
                        target="blank"
                    >
                        goodfirstissues.com.
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://github.com/MunGell/awesome-for-beginners"
                        className="hover:underline text-blue-400"
                        target="blank"
                    >
                        Awesome for Beginners - GitHub repository
                    </a>
                    .
                    <br />
                    <br />
                    However, you don&apos;t necessary have to start looking for
                    issues, you can also start really small with just finding
                    typos or broken links in the documentation such as in the
                    README or CONTRIBUTING files on different repositories and
                    making a pull request. This is a great way to get started
                    with open source contributions.
                    <br />
                    <br />
                    <strong>
                        2. Understand the Contribution Process:
                    </strong>{" "}
                    <br />
                    <br />
                    Review the project&apos;s README and CONTRIBUTING files, if
                    available, to understand the contribution process, code of
                    conduct, and requirements as the repository might have
                    specific instructions on how to contribute to that project.
                    Some projects might also have different rules. For example,
                    some projects might require you to create an issue first
                    before making a pull request. If you are unsure about
                    anything, you can always ask the maintainers of the project.
                    <br />
                    <br />
                    <strong>3. Fork and Clone:</strong>
                    <br />
                    <br />
                    Fork the repository to your account, and clone it to your
                    local machine. Create a new branch for your changes.
                    <br />
                    <br />
                    <strong>4. Make Your Changes:</strong>
                    <br />
                    <br />
                    Make the necessary changes or additions to the code,
                    following the project&apos;s coding standards and
                    guidelines.
                    <br />
                    <br />
                    <strong>5. Test Your Changes:</strong>
                    <br />
                    <br />
                    Ensure that your changes do not break existing functionality
                    by running any available tests.
                    <br />
                    <br />
                    <strong>6. Commit and Push:</strong>
                    <br />
                    <br />
                    Commit your changes with a clear and concise message
                    describing what you did. Push the changes to your fork on
                    GitHub.
                    <br />
                    <br />
                    <strong>7. Create a Pull Request:</strong>
                    <br />
                    <br />
                    Open a pull request (PR) in the original repository,
                    providing details of the changes and why they were made.
                    Follow any further instructions or requests from the
                    maintainers.
                    <br />
                    <br />
                    <strong>8. Stay Engaged:</strong>
                    <br />
                    <br />
                    Respond to any comments or feedback on your PR and be ready
                    to make additional changes if requested. You should also get
                    email from GitHub each time someone comments on your pull
                    request. You can also subscribe to the repository to get
                    notifications about new issues and pull requests.
                    <br />
                    Also, we recommend downloading the GitHub mobile app to your
                    phone.
                    <br />
                    <a
                        href="https://play.google.com/store/apps/details?id=com.github.android&hl=en&gl=US"
                        className="hover:underline text-blue-400"
                        target="blank"
                    >
                        Download GitHub app for Android
                    </a>
                    <br />
                    <a
                        href="https://apps.apple.com/us/app/github/id1477376905"
                        className="hover:underline text-blue-400"
                        target="blank"
                    >
                        Download GitHub app for iOS
                    </a>
                    .<br />
                    It&apos;s a great way to stay up to date with your
                    notifications and you can also use it to merge pull requests
                    and do other things on the go.
                    <br />
                    <br />
                    <hr className="my-6" />
                    To find more detailed info about the contribution process,
                    check out the Fork, Commit, Merge repository README
                    <span className="mr-2"></span>
                    <a
                        href="https://github.com/nikohoffren/fork-commit-merge#setup-instructions"
                        className="hover:underline text-blue-400"
                    >
                        Setup Instructions
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://github.com/nikohoffren/fork-commit-merge#submitting-your-changes"
                        className="hover:underline text-blue-400"
                    >
                        Submitting Your Changes
                    </a>
                    <span className="mr-2"></span>
                    sections. You can also check out the{" "}
                    <Link
                        href="/resources"
                        className="hover:underline text-blue-400"
                    >
                        Resources
                    </Link>{" "}
                    section in this website for videos and other documentation
                    about open source contributions.
                    <br />
                    <br />
                    Remember, every contribution, no matter how small, adds
                    value. Be patient, respectful, and open to feedback.
                    Open-source contributions foster community, collaboration,
                    and continuous learning. Happy coding!
                </p>
            </div>
        </div>
    );
};

export default HowToContribute;
