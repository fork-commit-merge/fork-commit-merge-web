/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import { Contributors } from "./Contributors";
import { TopThreeContributors } from "./TopThreeContributors";
import Badges from "./Badges";
import { contributorData } from "../data/contributorData";
import React from "react";

const IndexMain: React.FC = () => {
    return (
        <>
            <div className="my-6 min-w-full">
                <h1 className="text-5xl font-bold font-primary text-slate-50">
                    Welcome to Fork, Commit, Merge
                </h1>
                <p className="mt-4 mb-7 text-2xl font-primary text-gray-100">
                    Your one-stop resource hub for mastering GitHub
                    contributions
                </p>
                <Badges />
                <div className="bg-slate-950 w-full pt-4 pb-16 text-center">
                    <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-2xl">
                        <p className="text-2xl leading-8 mt-8 mb-8 font-primary">
                            Become a part of our thriving community of over 250
                            developers who have already contributed to this
                            project!
                        </p>
                    </div>
                    <TopThreeContributors />

                    <React.Suspense>
                        <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-4xl">
                            <Contributors contributors={contributorData} />
                        </div>
                    </React.Suspense>
                </div>
                <div className="bg-secondary w-full py-6">
                    <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-2xl">
                        <code>Fork, Commit, Merge</code> is your one-stop
                        resource hub for mastering GitHub contributions! Whether
                        you&apos;re a novice coder or an experienced developer,
                        our comprehensive guides are designed to streamline your
                        GitHub journey. We delve into everything from basic Git
                        commands to intricate pull request processes, making
                        collaboration seamless and efficient.
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
                    <div className="mt-10 mb-3">
                        <Link
                            href="https://github.com/nikohoffren/fork-commit-merge"
                            target="blank"
                            className="text-2xl text-white bg-slate-900 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider font-primary"
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexMain;
