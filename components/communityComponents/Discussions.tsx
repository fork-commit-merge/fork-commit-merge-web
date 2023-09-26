import Link from "next/link";

const Discussions = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950 py-10 px-10">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">
                    GitHub Discussions: An Overview
                </h1>
                <p className="mb-4">
                    GitHub Discussions is a space within a GitHub repository
                    where the community can have conversations, ask questions,
                    and share updates. It&apos;s a platform to engage with the
                    project maintainers and other contributors.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    How to Access Discussions
                </h2>
                <p className="mb-4">
                    You can find the Discussions tab near the top of the GitHub
                    repository page, often alongside &quot;Issues&quot; and
                    &quot;Pull Requests.&quot; Click on it to enter the
                    Discussions section.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    Starting a New Discussion
                </h2>
                <p className="mb-4">
                    To start a new discussion, click on the &quot;New
                    discussion&quot; button. Choose the appropriate category and
                    add a descriptive title and body content for your
                    discussion.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    How to Participate
                </h2>
                <p className="mb-4">
                    Participation can range from asking questions, answering
                    queries, to providing updates or feedback. You can react to
                    discussions and comments to show agreement or appreciation.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    Guidelines for Effective Participation
                </h2>
                <p className="mb-4">
                    Always follow the repository&apos;s code of conduct and
                    guidelines. Stay on topic, be respectful, and help create a
                    welcoming environment for all.
                </p>
                <hr className="my-6" />
                <p>
                    GitHub Discussions is a powerful tool for community
                    building. Make the most of it by engaging respectfully and
                    constructively.
                </p>
                <div className="mt-10 mb-3">
                    <Link
                        href="https://github.com/nikohoffren/fork-commit-merge/discussions"
                        target="blank"
                        className="text-sm text-white bg-slate-900 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider font-primary"
                        style={{
                            wordWrap: "break-word",
                            display: "inline-block",
                        }}
                    >
                        TAKE A PART IN FORK, COMMIT, MERGE DISCUSSIONS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Discussions;
