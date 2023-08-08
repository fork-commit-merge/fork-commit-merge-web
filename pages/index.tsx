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
                                className="text-2xl text-white bg-slate-950 hover:bg-slate-800 my-8 pt-4 px-8 pb-5 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold tracking-wider"
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
                            languages and frameworks (HTML, CSS, JavaScript,
                            TypeScript, Python, Ruby, PHP, SQL, JSON, YAML,
                            Tailwind CSS and Markdown). Each task is a problem
                            that needs to be solved, which helps contributors
                            sharpen their problem-solving abilities - a critical
                            skill for every developer.
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
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Learn and Work with Python
                        </h3>
                        <p className="text-lg leading-7">
                            Python is a high-level, interpreted language known
                            for its ease of use and simplicity. With Python
                            issues in the repository, contributors can develop a
                            solid understanding of Python, and improve their
                            skills in writing cleaner, more efficient code.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Explore Ruby and Its Frameworks
                        </h3>
                        <p className="text-lg leading-7">
                            Ruby is a dynamic, open-source programming language
                            with a focus on simplicity. Ruby issues in this
                            repository will help contributors understand the
                            syntax, features, and powerful frameworks like Ruby
                            on Rails.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Work with Tailwind CSS
                        </h3>
                        <p className="text-lg leading-7">
                            Tailwind CSS is a highly customizable, low-level CSS
                            framework that gives you all of the building blocks
                            you need to build bespoke designs without any
                            annoying opinionated styles you have to fight to
                            override. Through the Tailwind CSS issues in this
                            repository, contributors can practice and understand
                            the utility-first principle in designing web
                            applications.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Become Proficient with Markdown
                        </h3>
                        <p className="text-lg leading-7">
                            Markdown is a lightweight markup language used to
                            create formatted text. Markdown issues in this
                            repository allow contributors to practice and master
                            the art of writing clean, readable, and
                            well-structured documentation.
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
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Dive Into PHP and Web Development
                        </h3>
                        <p className="text-lg leading-7">
                            PHP is a popular server-side scripting language
                            especially suited to web development. Through the
                            PHP issues in this repository, contributors can
                            practice PHP concepts and get a grasp of web
                            development intricacies.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Master Data Manipulation with SQL
                        </h3>
                        <p className="text-lg leading-7">
                            SQL is a standard language for managing data held in
                            relational databases. SQL issues within the
                            repository offer contributors an opportunity to work
                            with databases, write queries, and understand how
                            data is manipulated and retrieved.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Understand and Use JSON
                        </h3>
                        <p className="text-lg leading-7">
                            JSON (JavaScript Object Notation) is a lightweight
                            data-interchange format that is easy for humans to
                            read and write and easy for machines to parse and
                            generate. JSON issues in this repository allow
                            contributors to understand how JSON works, how to
                            generate JSON objects, and how to parse them.
                        </p>
                        <hr className="my-6" />
                        <h3 className="text-2xl font-semibold my-3 mt-10">
                            Work with YAML
                        </h3>
                        <p className="text-lg leading-7">
                            YAML (YAML Ain&apos;t Markup Language) is a
                            human-friendly data serialization standard for all
                            programming languages. YAML issues in this
                            repository allow contributors to understand how to
                            write YAML files and use them for configuration and
                            data sharing between languages with different data
                            structures.
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
