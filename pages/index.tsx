/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Contributors } from "../components/Contributors";
import { contributorData } from "../components/contributorData";
import Descriptions from "../components/Descriptions";
import Badges from "../components/Badges";

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
            <main className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 px-4 sm:px-6 md:px-0">
                <div className="my-6 min-w-full">
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
                    <p className="mt-4 mb-7 text-xl font-light text-gray-100">
                        Your one-stop resource hub for mastering GitHub
                        contributions
                    </p>
                    <Badges />
                    <div className="bg-slate-900 w-full pt-4 pb-16 text-center">
                        <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-4xl">
                            <p className="text-2xl leading-8 mt-8 mb-8">
                                Join us with over 100 developers who have
                                already contributed to this project!
                            </p>
                            <Contributors contributors={contributorData} />
                        </div>
                    </div>
                    <div className="bg-slate-950 w-full py-6">
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
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge"
                                target="blank"
                                className="text-2xl text-white bg-slate-900 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                    <h2 className="text-4xl font-bold my-4">
                        About the Fork, Commit, Merge project
                    </h2>

                    <p className="text-xl leading-9 pt-8">
                        If you have already made some contributions to our Fork,
                        Commit, Merge repo, you can{" "}
                        <Link
                            href="/login"
                            className="underline hover:text-blue-500"
                        >
                            Login
                        </Link>{" "}
                        to see all of your contributions and which issues you
                        have already solved. It makes it easier to keep track of
                        your progress and see how you have improved your skills.
                    </p>
                    <p className="text-xl leading-9 pt-8">
                        &quot;Fork, Commit, Merge&quot; is an educational and
                        practical project aimed at helping developers - both
                        newcomers and seasoned - improve their skills in
                        open-source contribution, problem-solving, finding bugs,
                        testing, and much more in over 50 individual issues
                        encompassing various programming languages, libraries
                        and frameworks.
                        <br />
                        <br />
                        Here are some key aspects of the repository that make it
                        unique and enriching for every developer:
                    </p>
                </div>
            </main>
            <div className="bg-slate-900 pb-10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto text-slate-50">
                    <Descriptions />
                </div>
            </div>
        </>
    );
}
