import Link from "next/link";

export default function Adventures() {
    return (
        <>
            <div className="bg-slate-900 text-white px-10 py-10 flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-3xl font-bold mb-16">
                    Adventure Games in Markdown
                </h1>
                <div className="my-5 font-light text-gray-100 mx-auto max-w-2xl">
                    <p className="mb-6">
                        This page contains a collection of adventure games
                        written in Markdown by our contributors. The games
                        relate to the
                        <span className="mr-2"></span>
                        <Link
                            href="https://github.com/nikohoffren/fork-commit-merge/issues/372"
                            target="blank"
                            className="underline hover:text-blue-300"
                        >
                            Markdown - Hard issue
                        </Link>
                        <span className="mr-2"></span>
                        in the Fork, Commit, Merge repository.
                    </p>
                    <h3 className="mt-10 mb-6 text-2xl">List of games:</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge/blob/main/adventures/adventure-game-nitin-pandita.md"
                                target="blank"
                                className="underline hover:text-blue-300"
                            >
                                Adventure Game by nitin-pandita
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/nikohoffren/fork-commit-merge/blob/main/adventures/mysterious-forest-krushnarout.md"
                                target="blank"
                                className="underline hover:text-blue-300"
                            >
                                Mysterious Forest by krushnarout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
