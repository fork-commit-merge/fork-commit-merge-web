/* eslint-disable @next/next/no-sync-scripts */
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Coffee from "../Coffee";
import styles from "../../styles/Coffee.module.css";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { StarFilled } from "@ant-design/icons";

const languageList = [
    { name: "HTML", link: "/languages/html" },
    { name: "CSS", link: "/languages/css" },
    { name: "CoffeeScript", link: "/languages/coffeescript" },
    { name: "JavaScript", link: "/languages/javascript" },
    { name: "TypeScript", link: "/languages/typescript" },
    { name: "C", link: "/languages/c" },
    { name: "C++", link: "/languages/cpp" },
    { name: "C#", link: "/languages/csharp" },
    { name: "F#", link: "/languages/fsharp" },
    { name: "Java", link: "/languages/java" },
    { name: "Kotlin", link: "/languages/kotlin" },
    { name: "Scala", link: "/languages/scala" },
    { name: "Python", link: "/languages/python" },
    { name: "Ruby", link: "/languages/ruby" },
    { name: "Elixir", link: "/languages/elixir" },
    { name: "PHP", link: "/languages/php" },
    { name: "Go", link: "/languages/go" },
    { name: "Dart", link: "/languages/dart" },
    { name: "Swift", link: "/languages/swift" },
    { name: "Julia", link: "/languages/julia" },
    { name: "Rust", link: "/languages/rust" },
    { name: "Haskell", link: "/languages/haskell" },
    { name: "Lua", link: "/languages/lua" },
    { name: "Clojure", link: "/languages/clojure" },
    { name: "Lisp", link: "/languages/lisp" },
    { name: "Fortran", link: "/languages/fortran" },
    { name: "Erlang", link: "/languages/erlang" },
    { name: "Zig", link: "/languages/zig" },
    { name: "R", link: "/languages/r" },
    { name: "Solidity", link: "/languages/solidity" },
    { name: "Vyper", link: "/languages/vyper" },
    { name: "SQL", link: "/languages/sql" },
    { name: "Bash", link: "/languages/bash" },
    { name: "Perl", link: "/languages/perl" },
];

const frameworkList = [
    { name: "Express", link: "/frameworks/express" },
    { name: "React", link: "/frameworks/react" },
    { name: "Next", link: "/frameworks/next" },
    { name: "Vite", link: "/frameworks/vite" },
    { name: "Vue", link: "/frameworks/vue" },
    { name: "Angular", link: "/frameworks/angular" },
    { name: "Svelte", link: "/frameworks/svelte" },
    { name: "Gatsby", link: "/frameworks/gatsby" },
    { name: "Flask", link: "/frameworks/flask" },
    { name: "Django", link: "/frameworks/django" },
    { name: "Rails", link: "/frameworks/rails" },
    { name: "Laravel", link: "/frameworks/laravel" },
    { name: "Flutter", link: "/frameworks/flutter" },
    { name: "React Native", link: "/frameworks/reactnative" },
];

const gitList = [
    { name: "Git Commands", link: "/git/gitcommands" },
    { name: "Git Branching", link: "/git/gitbranching" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [isFrameworkDropdownOpen, setFrameworkDropdownOpen] = useState(false);
    const [isGitSelectionDropdownOpen, setGitSelectionDropdownOpen] =
        useState(false);
    const node = useRef<HTMLLIElement | null>(null);
    const frameworkNode = useRef<HTMLLIElement | null>(null);
    const gitSelectionNode = useRef<HTMLLIElement | null>(null);
    const { data: session } = useSession();
    const router = useRouter();
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

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const navigateToLanguage = (link: string) => {
        router.push(link);
        setLanguageDropdownOpen(false);
    };

    const navigateToFramework = (link: string) => {
        router.push(link);
        setFrameworkDropdownOpen(false);
    };

    const navigateToGitSelection = (link: string) => {
        router.push(link);
        setGitSelectionDropdownOpen(false);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
        setFrameworkDropdownOpen(false);
        setGitSelectionDropdownOpen(false);
    };

    const toggleFrameworkDropdown = () => {
        setFrameworkDropdownOpen(!isFrameworkDropdownOpen);
        setLanguageDropdownOpen(false);
        setGitSelectionDropdownOpen(false);
    };

    const toggleGitSelectionDropdown = () => {
        setGitSelectionDropdownOpen(!isGitSelectionDropdownOpen);
        setLanguageDropdownOpen(false);
        setFrameworkDropdownOpen(false);
    };

    return (
        <>
            <nav className="bg-slate-950 text-slate-50 backdrop-blur">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="md:hidden">
                            <button onClick={toggleSideNav}>
                                {isOpen ? (
                                    <XIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        <nav className="hidden md:block">
                            <ul className="md:flex items-center space-x-1">
                                <li>
                                    <Link
                                        href="/howtocontribute"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            How to Contribute?
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/leaderboard">
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Leaderboard
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/stars">
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Stars
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/adventures">
                                        <div className="py-2 px-6 mr-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Adventures
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="py-1 px-3 mr-10 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-flex items-center space-x-2"
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
                                            width="20"
                                            height="20"
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
                                                            fontSize: "2.5rem",
                                                            color: "gold",
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            position:
                                                                "absolute",
                                                            top: "50%",
                                                            left: "50%",
                                                            transform:
                                                                "translate(-50%, -50%)",
                                                            fontSize: "12px",
                                                            fontWeight: "bold",
                                                            color: "black",
                                                        }}
                                                    >
                                                        {starCount}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            "Star us in GitHub"
                                        )}
                                    </Link>
                                </li>

                                <li className={styles.buyButton}>
                                    <Coffee />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-0 left-0 w-64 h-full pt-6 text-slate-50 bg-slate-900 overflow-auto z-20 md:hidden">
                    {session?.user ? (
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <div className="bg-gray-800 hover:bg-gray-700 py-2 px-7 block text-sm cursor-pointer hover:text-slate-100 border border-transparent font-medium">
                                {session.user.name}
                            </div>
                        </Link>
                    ) : (
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <div className="py-2 px-7 block text-sm cursor-pointer bg-gray-800 hover:bg-gray-700 hover:text-slate-100 border border-transparent font-medium">
                                LOGIN
                            </div>
                        </Link>
                    )}
                    <Link
                        className="w-full my-2 py-1 px-3 mr-10 border border-transparent text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-flex items-center space-x-2"
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
                            width="20"
                            height="20"
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
                                            fontSize: "2.5rem",
                                            color: "gold",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            color: "black",
                                        }}
                                    >
                                        {starCount}
                                    </span>
                                </div>
                            </>
                        ) : (
                            "Star us in GitHub"
                        )}
                    </Link>

                    <div className="ml-6 mb-10 mt-2">
                        <div className={styles.buyButton}>
                            <Coffee />
                        </div>
                    </div>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="px-6 mb-3 block text-sm cursor-pointer hover:scale-105">
                            <Image
                                src="/fork-commit-merge-logo.jpg"
                                alt="Fork, Commit, Merge -logo"
                                width={40}
                                height={40}
                            />
                        </div>
                    </Link>

                    <li ref={node} className="list-none">
                        <div
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            onClick={toggleLanguageDropdown}
                        >
                            Languages
                        </div>
                        {isLanguageDropdownOpen && (
                            <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                {languageList.map((lang, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            navigateToLanguage(lang.link);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                            {lang.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li ref={frameworkNode} className="list-none">
                        <div
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            onClick={toggleFrameworkDropdown}
                        >
                            Frameworks | Libraries
                        </div>
                        {isFrameworkDropdownOpen && (
                            <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                {frameworkList.map((framework, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            navigateToFramework(framework.link);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                            {framework.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li ref={gitSelectionNode} className="list-none">
                        <div
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            onClick={toggleGitSelectionDropdown}
                        >
                            Git
                        </div>
                        {isGitSelectionDropdownOpen && (
                            <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                {gitList.map((git, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            navigateToGitSelection(git.link);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                            {git.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <Link href="/ide" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            IDE:s
                        </div>
                    </Link>
                    <Link href="/resources" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Resources
                        </div>
                    </Link>
                    <Link href="/leaderboard" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Leaderboard
                        </div>
                    </Link>
                    <Link href="/stars" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Stars
                        </div>
                    </Link>
                    <Link href="/adventures" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Adventures
                        </div>
                    </Link>

                    <Link
                        href="/howtocontribute"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            How to Contribute?
                        </div>
                    </Link>
                </div>
            )}
            <header className="bg-slate-950 text-slate-50 sticky top-0 z-10 hidden md:block shadow-bottom pr-25">
                <div className="mx-auto px-12 py-1 pb-6 pr-20 shadow-top">
                    <div className="mt-3 md:flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <div className="pl-25 px-6 block text-sm cursor-pointer hover:scale-105">
                                    <Image
                                        src="/fork-commit-merge-logo.jpg"
                                        alt="Fork, Commit, Merge -logo"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-1">
                            <li ref={node} className="list-none">
                                <div
                                    className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    onClick={toggleLanguageDropdown}
                                >
                                    Languages
                                </div>
                                {isLanguageDropdownOpen && (
                                    <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50 scrollable-dropdown">
                                        {languageList.map((lang, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    navigateToLanguage(
                                                        lang.link
                                                    )
                                                }
                                            >
                                                <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                                    {lang.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li ref={frameworkNode} className="list-none">
                                <div
                                    className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    onClick={toggleFrameworkDropdown}
                                >
                                    Frameworks | Libraries
                                </div>
                                {isFrameworkDropdownOpen && (
                                    <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50 scrollable-dropdown">
                                        {frameworkList.map(
                                            (framework, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        navigateToFramework(
                                                            framework.link
                                                        )
                                                    }
                                                >
                                                    <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                                        {framework.name}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                            <li ref={gitSelectionNode} className="list-none">
                                <div
                                    className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    onClick={toggleGitSelectionDropdown}
                                >
                                    Git
                                </div>
                                {isGitSelectionDropdownOpen && (
                                    <ul className="absolute mt-2 py-1 w-48 rounded-md shadow-lg bg-slate-920 text-slate-50">
                                        {gitList.map((git, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    navigateToGitSelection(
                                                        git.link
                                                    );
                                                    setIsOpen(false);
                                                }}
                                            >
                                                <div className="text-sm cursor-pointer hover:bg-slate-800 px-4 py-2">
                                                    {git.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <Link href="/ide" onClick={() => setIsOpen(false)}>
                                <div
                                    className={
                                        "py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    }
                                >
                                    IDE:s
                                </div>
                            </Link>
                            <Link
                                href="/resources"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="py-2 px-6 mr-11 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                    Resources
                                </div>
                            </Link>

                            {session?.user ? (
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="bg-gray-800 hover:bg-gray-700 py-2 px-7 block text-sm cursor-pointer hover:text-slate-100 border border-transparent font-medium rounded-md">
                                        {session.user.name}
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="bg-gray-800 hover:bg-gray-700 py-2 px-7 block text-sm cursor-pointer hover:text-slate-100 border border-transparent font-medium rounded-md">
                                        LOGIN
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
