import Link from "next/link";

const FAQs = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950 py-10">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">
                    Frequently Asked Questions about Open Source
                </h1>
                <p className="mb-4">
                    New to open source? Here are some commonly asked questions
                    and their answers to guide you.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    How Do I Start Contributing?
                </h2>
                <p className="mb-4">
                    Begin by finding a project that aligns with your skills and
                    interests. Read the project&apos;s contribution guidelines
                    and start with beginner-friendly issues.
                    <br />
                    You can find more information about contributing to open
                    source in our{" "}
                    <Link
                        href="/roadmaps/how-to-contribute"
                        className="hover:underline text-blue-400"
                    >
                        How to Contribute
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/resources"
                        className="hover:underline text-blue-400"
                    >
                        Resources
                    </Link>{" "}
                    sections.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    Can I Monetize Open Source Projects?
                </h2>
                <p className="mb-4">
                    Yes, but it depends on the license and your business model.
                    Many projects make money through donations, sponsorships, or
                    dual licensing.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    What is a License?
                </h2>
                <p className="mb-4">
                    A license defines what others can and can&apos;t do with the
                    project&apos;s code. Make sure to follow the license terms
                    when using or contributing to a project.
                    <br />
                    You can find more information about open source licenses in
                    our{" "}
                    <Link
                        href="/roadmaps/open-source-licenses"
                        className="hover:underline text-blue-400"
                    >
                        Open Source Licenses
                    </Link>{" "}
                    section.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    How Do I Choose an Open Source License?
                </h2>
                <p className="mb-4">
                    Consider your project goals. If you want to encourage
                    collaboration, a permissive license like MIT or Apache may
                    be suitable. For more control, a copyleft license like GPL
                    could be a better fit.
                    <br />
                    You can find more information about open source licenses in
                    our{" "}
                    <Link
                        href="/roadmaps/open-source-licenses"
                        className="hover:underline text-blue-400"
                    >
                        Open Source Licenses
                    </Link>{" "}
                    section.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    What are the Best Practices for Code Contributions?
                </h2>
                <p className="mb-4">
                    Always follow the project&apos;s contribution guidelines.
                    Create a new branch for each feature or fix, keep your code
                    clean, and make your commit messages descriptive.
                    <br />
                    You can find more information about contributing best
                    practices in our{" "}
                    <Link
                        href="/roadmaps/contribution-management"
                        className="hover:underline text-blue-400"
                    >
                        Contribution Management
                    </Link>{" "}
                    section.
                </p>
                <hr className="my-6" />
                <h2 className="text-2xl font-semibold mb-4">
                    What Does It Mean to Fork a Repository?
                </h2>
                <p className="mb-6">
                    Forking a repository means creating your own copy of the
                    project on your account. This allows you to freely
                    experiment with changes without affecting the original
                    project.
                </p>
                <hr className="my-6" />
                <p>
                    Open source is a broad field with diverse practices and
                    norms. Always consult project-specific documentation for the
                    most accurate information.
                </p>
            </div>
        </div>
    );
};

export default FAQs;
