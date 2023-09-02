import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-950 text-slate-50 py-8">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-center w-full">
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
                            <p className="text-base text-slate-50 mt-2">
                                Email: niko.hoffren@gmail.com
                            </p>
                            <p className="text-base text-slate-50">
                                <a
                                    href="https://nikohoffren.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-red-100 pl-1"
                                >
                                    GitHub Repo of this Website
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
