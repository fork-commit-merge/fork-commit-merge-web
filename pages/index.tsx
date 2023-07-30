import { GetServerSideProps } from "next";
import { connectToDB } from "../utils/db";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
                        resource hub for mastering GitHub contributions! Whether
                        you&apos;re a novice coder or an experienced developer,
                        our comprehensive guides are designed to streamline your
                        GitHub journey. We delve into everything from basic Git
                        commands to intricate pull request processes, making
                        collaboration seamless and efficient. Learn the ins and
                        outs of forking, committing, and merging with our
                        easy-to-follow tutorials and expert advice. At Fork
                        Commit Merge, we&apos;re passionate about empowering you
                        to contribute confidently and effectively to the
                        open-source world. Let&apos;s code, collaborate, and
                        create together!
                    </div>
                    <div className="my-10">
                        <Link
                            href={session?.user ? "/add-project" : "/login"}
                            className="text-3xl text-white bg-slate-950 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        projectName={project.projectName}
                        developerName={project.developerName}
                        imageUrl={project.imageUrl}
                        projectDescription={project.projectDescription}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { db } = await connectToDB();
    const projects = await db.collection("projects").find().toArray();

    return {
        props: {
            //* convert BSON to JSON
            projects: JSON.parse(JSON.stringify(projects)),
        },
    };
};
