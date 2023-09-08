import Link from "next/link";

export default function Adventures() {
    return (
        <>
            <div className="bg-slate-900 text-white px-10 py-10 flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-3xl font-bold mb-4">
                    Adventure Games in Markdown
                </h1>
                <div className="my-5 font-light text-gray-100 mx-auto max-w-2xl">
                    <p className="mb-4">
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
                        in the Fork, Commit, Merge repository. Below you can
                        find some description of the task.
                    </p>
                    <p className="mb-6">
                        The goal is to create a text-based adventure game that
                        is entirely navigable through hyperlinks in different
                        Markdown files. Each Markdown file represents a
                        &quot;room&quot; or &quot;event&quot;, and options for
                        players are presented as hyperlinks to other Markdown
                        files. There is a folder called `adventure` in
                        `tasks/markdown/hard` directory, in which you can create
                        various of Markdown files representing different stages
                        or events in the game.
                        <br />
                        <br />
                        First you have to Write a brief description of the
                        scenario and provide options to the player (as links
                        pointing to other Markdown files). For instance, you
                        could have options like Go north and Go south which
                        point to `north.md` and `south.md`, respectively. Create
                        the Markdown files for all possible paths in the game.
                        Each file should describe the current situation and
                        provide further options to the player. Make sure to
                        include a way to win and a way to lose the game.
                        Expected outcome is fully playable text-based adventure
                        game made entirely of linked Markdown files.
                        <br />
                        <br />
                        The game should be complex enough to provide some level
                        of challenge to the player, with a variety of different
                        paths, outcomes, and choices. Creating this game might
                        be quite complex, as it requires planning the
                        game&apos;s structure, writing engaging text, and
                        managing many interconnected Markdown files. However, it
                        will be a great exercise for you to learn advanced
                        Markdown usage.
                        <br />
                        <br />
                        Markdown code can be tested in a editor like{" "}
                        <a
                            href="https://stackedit.io/"
                            target="blank"
                            className="underline hover:text-blue-300"
                        >
                            https://stackedit.io
                        </a>
                        .
                    </p>
                    <h3 className="mt-10 mb-6 text-2xl">
                        List of finished games:
                    </h3>
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
