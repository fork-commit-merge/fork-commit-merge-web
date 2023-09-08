import Link from "next/link";
import React from "react";

const IndexIntro: React.FC = () => {
    return (
        <>
            <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                <hr className="border-gray-700 border-1 pb-2" />
                <h2 className="text-4xl font-bold my-4">
                    About the Fork, Commit, Merge project
                </h2>

                <p className="text-xl leading-7 pt-8">
                    If you have already made some contributions to our Fork,
                    Commit, Merge repo, you can{" "}
                    <Link
                        href="/login"
                        className="underline hover:text-blue-500"
                    >
                        Login
                    </Link>{" "}
                    to see all of your contributions and which issues you have
                    already solved. It makes it easier to keep track of your
                    progress and see how you have improved your skills.
                </p>
                <p className="text-xl leading-7 pt-8">
                    &quot;Fork, Commit, Merge&quot; is an educational and
                    practical project aimed at helping developers - both
                    newcomers and seasoned - improve their skills in open-source
                    contribution, problem-solving, finding bugs, testing, and
                    much more in over 70 individual issues encompassing various
                    programming languages, libraries and frameworks.
                    <br />
                    <br />
                    Here are some key aspects of the repository that make it
                    unique and enriching for every developer:
                </p>
            </div>
        </>
    );
};

export default IndexIntro;
