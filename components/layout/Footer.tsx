/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Footer = () => {
    const [starCount, setStarCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/nikohoffren/fork-commit-merge")
            .then((response) => response.json())
            .then((data) => {
                setStarCount(data.stargazers_count);
            })
            .catch((error) => {
                console.error("Failed fetching star count:", error);
            });
    }, []);

    return (
        <>
            <footer className="bg-secondary text-slate-50 py-8">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-center w-full">
                            <div className="flex justify-center items-center w-full space-x-2 mb-1">
                                <p className="text-base text-slate-100">
                                    Created with
                                </p>
                                <a
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className="bg-white p-1.5 rounded-md shadow-lg"
                                        src="/next.svg"
                                        alt="NextJS Logo"
                                        width={62}
                                        height={62}
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-full space-x-2 mb-1">
                                <p className="text-base text-slate-100">
                                    Deployed with
                                </p>
                                <a
                                    href="https://vercel.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className="bg-white p-1.5 rounded-md shadow-lg"
                                        src="/vercel.svg"
                                        alt="Vercel Logo"
                                        width={62}
                                        height={62}
                                    />
                                </a>
                            </div>
                            <p className="text-base text-slate-100">
                                Copyright © 2023
                                <a
                                    href="https://nikohoffren.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-red-100 pl-1"
                                >
                                    Niko Hoffrén
                                </a>
                            </p>
                        </div>
                        <div className="text-center w-full">
                            <ul className="list-none mt-2 text-base text-slate-50">
                                <li className="hover:underline">
                                    <Link
                                        href="https://github.com/nikohoffren/fork-commit-merge/blob/main/CONTRIBUTING.md"
                                        target="blank"
                                    >
                                        Contributing
                                    </Link>
                                </li>
                                <li className="hover:underline">
                                    <Link href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="hover:underline">
                                    <Link
                                        href="https://github.com/nikohoffren/fork-commit-merge/blob/main/code_of_conduct.md"
                                        target="blank"
                                    >
                                        Code of Conduct
                                    </Link>
                                </li>
                                <li className="hover:underline">
                                    <Link href="https://github.com/nikohoffren">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center w-full">
    <div className="text-base text-slate-50 flex flex-col items-center space-y-2">
        <Link
                                    className="py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-flex items-center space-x-2"
                                    href={
                                        "https://github.com/nikohoffren/fork-commit-merge"
                                    }
                                    target="blank"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        width="22"
                                        height="22"
                                        className="mr-2"
                                    >
                                        <title>GitHub icon</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                    {starCount !== null ? (
                                        <>
                                            Star us in GitHub{" "}
                                            <div
                                                style={{
                                                    position: "relative",
                                                }}
                                            >
                                                <StarFilled
                                                    style={{
                                                        fontSize: "2.9rem",
                                                        color: "gold",
                                                    }}
                                                />
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xs font-extrabold">
                                                    {starCount}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        "Star us in GitHub"
                                    )}
                                </Link>

                                <Link
                                    href="https://www.producthunt.com/posts/fork-commit-merge?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fork&#0045;commit&#0045;merge"
                                    target="_blank"
                                >
                                    <img
                                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=415196&theme=dark"
                                        alt="Fork, Commit, Merge - Resource hub for mastering GitHub contributions | Product Hunt"
                                        style={{
                                            width: "249px",
                                            height: "51px",
                                        }}
                                        width="249"
                                        height="51"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
