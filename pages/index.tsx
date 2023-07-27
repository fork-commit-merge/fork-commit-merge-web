// pages/index.tsx
import { GetServerSideProps } from "next";
import { connectToDB } from "../utils/db";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

interface Project {
    _id: string;
    projectName: string;
    developerName: string;
    imageUrl: string;
    projectDescription: string;
    projectLink: string;
}

export default function Home({ projects }: { projects: Project[] }) {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950">
            <div className="my-20 min-w-full">
                <div
                    className="mx-auto rounded-md overflow-hidden"
                    style={{ width: 180, height: 180 }}
                >
                    <Image
                        src="/dev-gallery.png"
                        alt="Dev Gallery Logo"
                        width={180}
                        height={180}
                        priority
                    />
                </div>
                <h1 className="mt-5 text-5xl font-bold text-slate-50">
                    Welcome to devgallery.io
                </h1>
                <p className="mt-2 mb-20 text-lg font-light text-gray-100">
                    Explore amazing projects developed by talented developers
                </p>
                <div className="bg-slate-900 w-full py-2">
                    <div className="my-5 text-xl font-light text-gray-100 mx-auto max-w-2xl">
                        <code>devgallery.io</code> is a platform for showcasing
                        and discovering amazing projects created by talented
                        developers around the globe.
                        <br />
                        <br />
                        By joining our community and adding your projects and
                        profiles, you&apos;re not just increasing your
                        visibility but also inspiring and motivating other
                        developers.
                        <br />
                        <br />
                        Don&apos;t miss out on this chance to be a part of a
                        vibrant and supportive community. Register and upload
                        your projects now. Let the world see your capabilities!
                    </div>
                    <div className="my-10">
                        <Link
                            href="/add-project"
                            className="text-3xl text-white bg-slate-950 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {/* {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        projectName={project.projectName}
                        developerName={project.developerName}
                        imageUrl={project.imageUrl}
                        projectDescription={project.projectDescription}
                        projectLink={project.projectLink}
                    />
                ))} */}
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
