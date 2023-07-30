import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-950 text-slate-50 pb-6 pt-10">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <p className="text-sm mr-2">Deployed with</p>
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div>
                            <p className="text-sm">
                                Copyright © 2023
                                <Link
                                    href="https://nikohoffren.com"
                                    className="hover:underline"
                                    target="blank"
                                >
                                    Niko Hoffrén
                                </Link>
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge/blob/main/CONTRIBUTING.md"
                                className="text-sm text-slate-50 hover:underline"
                                target="blank"
                            >
                                Contributing
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-sm text-slate-50 hover:underline"
                                target="blank"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge/blob/main/code_of_conduct.md"
                                className="text-sm text-slate-50 hover:underline"
                                target="blank"
                            >
                                Code of Conduct
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm text-slate-50 hover:underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
