/* eslint-disable @next/next/no-sync-scripts */
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Coffee from "./Coffee";
import styles from "../styles/Coffee.module.css";
import React from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const node = React.useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            return;
        }
        setDropdownOpen(false);
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="bg-slate-950 text-slate-50 backdrop-blur">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/">
                                <div className="py-2 px-6 block text-sm cursor-pointer hover:scale-105">
                                    <Image
                                        src="/dev-gallery.png"
                                        alt="devgallery.io logo"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </Link>
                        </div>
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
                                    <Link href="//add-project">
                                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Getting Started
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/nikohoffren/devgallery.io"
                                        target="blank"
                                    >
                                        <div className="py-2 px-6 mr-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                            Contribute in GitHub
                                        </div>
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
                    <div className="ml-6 mb-6">
                        <div className={styles.buyButton}>
                            <Coffee />
                        </div>
                    </div>
                    <Link href="/getting-started">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Getting Started
                        </div>
                    </Link>
                    <Link
                        href="https://github.com/nikohoffren/devgallery.io"
                        target="blank"
                    >
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Contribute in GitHub
                        </div>
                    </Link>
                    <div className="relative" ref={node}>
                        <button
                            onClick={toggleDropdown}
                            className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                        >
                            Projects
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 w-48 py-2 mt-2 bg-slate-900 rounded-lg shadow-xl">
                                <Link
                                    href="/projects/websites"
                                    className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                >
                                    Websites
                                </Link>
                                <Link
                                    href="/projects/mobile-apps"
                                    className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                >
                                    Mobile Apps
                                </Link>
                                <Link
                                    href="/projects/desktop-apps"
                                    className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                >
                                    Desktop Apps
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/developers">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Developers
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            About
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                            Contact
                        </div>
                    </Link>
                </div>
            )}
            <header className="bg-slate-950 text-slate-50 sticky top-0 z-10 hidden md:block">
                <div className="container mx-auto px-6 py-1 pb-6">
                    <div className="mt-3 md:flex items-center space-x-1 justify-end">
                        <div className="relative" ref={node}>
                            <button
                                onClick={toggleDropdown}
                                className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100"
                            >
                                Projects
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 w-48 py-2 mt-2 bg-slate-900 rounded-lg shadow-xl">
                                    <Link
                                        href="/projects/websites"
                                        className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    >
                                        Websites
                                    </Link>
                                    <Link
                                        href="/projects/mobile-apps"
                                        className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    >
                                        Mobile Apps
                                    </Link>
                                    <Link
                                        href="/projects/desktop-apps"
                                        className="block px-4 py-2 text-sm cursor-pointer hover:underline hover:text-slate-100"
                                    >
                                        Desktop Apps
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/developers">
                            <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                Developers
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                About
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                Contact
                            </div>
                        </Link>
                        <Link href="/login">
                            <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                LOGIN
                            </div>
                        </Link>
                        <Link href="/sign-up">
                            <div className="py-2 px-6 block text-sm cursor-pointer hover:underline hover:text-slate-100">
                                SIGN UP
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
