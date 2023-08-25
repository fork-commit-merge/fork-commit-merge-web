export default function HowToContribute() {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                <h2 className="text-3xl font-bold my-4">
                    How to make an Open Source Contribution?
                </h2>
                <p className="text-xl leading-6 pt-8">
                    Contributing to open-source projects is a collaborative
                    effort that offers the opportunity to learn, grow, and
                    engage with the community.
                    <br />
                    Here&apos;s how you can get started:
                    <br />
                    <br />
                    <strong>1. Find a Project:</strong> Identify a project that
                    interests you. Many projects specifically mark issues as
                    &quot;good for beginners&quot; to help you find a starting
                    point.
                    <br />
                    <br />
                    <strong>
                        2. Understand the Contribution Process:
                    </strong>{" "}
                    Review the project&apos;s README and CONTRIBUTING files, if
                    available, to understand the contribution process, code of
                    conduct, and requirements.
                    <br />
                    <br />
                    <strong>3. Fork and Clone:</strong> Fork the repository to
                    your account, and clone it to your local machine. Create a
                    new branch for your changes.
                    <br />
                    <br />
                    <strong>4. Make Your Changes:</strong> Make the necessary
                    changes or additions to the code, following the
                    project&apos;s coding standards and guidelines.
                    <br />
                    <br />
                    <strong>5. Test Your Changes:</strong> Ensure that your
                    changes do not break existing functionality by running any
                    available tests.
                    <br />
                    <br />
                    <strong>6. Commit and Push:</strong> Commit your changes
                    with a clear and concise message describing what you did.
                    Push the changes to your fork on GitHub.
                    <br />
                    <br />
                    <strong>7. Create a Pull Request:</strong> Open a pull
                    request (PR) in the original repository, providing details
                    of the changes and why they were made. Follow any further
                    instructions or requests from the maintainers.
                    <br />
                    <br />
                    <strong>8. Stay Engaged:</strong> Respond to any comments or
                    feedback on your PR and be ready to make additional changes
                    if requested.
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
                    sections.
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
}
