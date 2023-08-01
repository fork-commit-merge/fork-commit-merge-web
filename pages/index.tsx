import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Contributors } from "../components/Contributors";
import { contributorData } from "../components/contributorData";

interface Project {
    _id: string;
    projectName: string;
    developerName: string;
    imageUrl: string;
    projectDescription: string;
    projectLink: string;
}

export default function Home({ projects }: { projects: Project[] }) {
    const { data: session } = useSession();

    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950">
                <div className="my-20 min-w-full">
                    <div
                        className="mx-auto rounded-md overflow-hidden"
                        style={{ width: 180, height: 180 }}
                    >
                        <Image
                            src="/fork-commit-merge-logo.jpg"
                            alt="Fork, Commit, Merge -logo"
                            width={180}
                            height={180}
                            priority
                        />
                    </div>
                    <h1 className="mt-5 text-5xl font-bold text-slate-50">
                        Welcome to Fork, Commit, Merge
                    </h1>
                    <p className="mt-4 mb-20 text-lg font-light text-gray-100">
                        Your one-stop resource hub for mastering GitHub
                        contributions
                    </p>
                    <div className="bg-slate-900 w-full py-2">
                        <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-2xl">
                            <code>Fork, Commit, Merge</code> is your one-stop
                            resource hub for mastering GitHub contributions!
                            Whether you&apos;re a novice coder or an experienced
                            developer, our comprehensive guides are designed to
                            streamline your GitHub journey. We delve into
                            everything from basic Git commands to intricate pull
                            request processes, making collaboration seamless and
                            efficient.
                            <br />
                            <br />
                            Learn the ins and outs of forking, committing, and
                            merging with our easy-to-follow tutorials and expert
                            advice. At Fork Commit Merge, we&apos;re passionate
                            about empowering you to contribute confidently and
                            effectively to the open-source world.
                            <br />
                            <br />
                            Let&apos;s code, collaborate, and create together!
                        </div>
                        <div className="my-10">
                            {/* <Link
                            href={session?.user ? "/" : "/login"}
                            className="text-3xl text-white bg-slate-950 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
                        >
                            GET STARTED
                        </Link> */}
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge"
                                target="blank"
                                className="text-3xl text-white bg-slate-950 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </div>
                    <div className="text-slate-50 mt-10 mx-auto max-w-2xl">
                        <h2 className="text-4xl font-bold my-4">
                            About the Fork, Commit, Merge project
                        </h2>
                        <p className="text-xl leading-9 pt-8">
                            &quot;Fork, Commit, Merge&quot; is an educational
                            and practical project aimed at helping developers -
                            both newcomers and seasoned - improve their skills
                            in open-source contribution, problem-solving,
                            finding bugs, testing, and much more. Here are some
                            key aspects of the repository that make it unique
                            and enriching for every developer.
                        </p>
                    </div>
                </div>
            </main>
            <div className="bg-slate-950 pb-10">
                <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto text-slate-50">
                    <div className="mb-8 px-4">
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Learn and Improve Problem Solving Skills
                        </h3>
                        <p className="text-lg leading-7">
                            The repository hosts a range of tasks with varying
                            difficulties (easy, medium, and hard) in different
                            languages (HTML, CSS, JavaScript, and TypeScript).
                            Each task is a problem that needs to be solved,
                            which helps contributors sharpen their
                            problem-solving abilities - a critical skill for
                            every developer.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Learn and Practice Testing
                        </h3>
                        <p className="text-lg leading-7">
                            Testing is an integral part of software development.
                            Within the JavaScript issues of this project,
                            contributors will find Jest tests that need to pass
                            for the solution to be accepted. This provides an
                            opportunity to understand how testing works, how to
                            write efficient tests, and how to debug them.
                        </p>
                    </div>
                    <div className="mb-8 px-4">
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Understand and Work with Types
                        </h3>
                        <p className="text-lg leading-7">
                            TypeScript, a statically-typed superset of
                            JavaScript, is quickly gaining popularity in the
                            development community. This repository includes
                            TypeScript issues that allow contributors to
                            understand and appreciate the importance of types in
                            programming, thus enhancing their TypeScript skills.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Polish Debugging Skills
                        </h3>
                        <p className="text-lg leading-7">
                            Debugging is an art, and mastering it can save a lot
                            of time and effort. This repository encourages
                            contributors to find and fix bugs in the codebase,
                            thus polishing their debugging skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 w-full pt-4 pb-16 text-center">
                <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-2xl">
                    <h2 className="text-3xl font-semibold my-3 mt-10">
                        List of Contributors
                    </h2>
                    <p className="text-lg leading-7 mt-8 mb-6">
                        Massive thanks to all of these fine individuals for
                        contributing to this project!
                    </p>
                    <Contributors contributors={contributorData} />
                </div>
            </div>
        </>
    );
}
