import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-950 text-slate-50 pb-6 pt-10 inset-x-0 bottom-0 h-auto md:h-16 flex flex-col md:flex-row items-center justify-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center">
                            <p className="text-sm mr-2">Deployed with</p>
                            <Link href="https://vercel.com" target="blank">
                                <Image
                                    className="bg-white py-1 px-1 rounded-md shadow-lg"
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm pr-1">Copyright © 2023</p>
                            <Link
                                href="https://nikohoffren.com"
                                className="hover:underline text-sm text-red-100"
                                target="blank"
                            >
                                Niko Hoffrén
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge/blob/main/CONTRIBUTING.md"
                                className="text-sm text-slate-50 hover:underline pt-2"
                                target="blank"
                            >
                                Contributing
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-sm text-slate-50 hover:underline"
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
                                href="https://github.com/nikohoffren"
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
