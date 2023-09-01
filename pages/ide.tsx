import Link from "next/link";
import { ides } from "../components/IDEInfo";

export default function IDE() {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <div className="py-10 px-5 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-6">
                    IDEs: Integrated Development Environments
                </h1>
                <h2 className="text-3xl font-bold mb-6">What is an IDE?</h2>
                <p className="max-w-3xl text-center mb-8">
                    An Integrated Development Environment (IDE) is a software
                    application that consolidates basic tools required for
                    software testing and development. An IDE typically consists
                    of a source code editor, build automation tools, and a
                    debugger. Some IDEs, like Android Studio or Visual Studio,
                    even offer more advanced features such as version control,
                    databases, cloud services, and more. Why use an IDE? Using
                    an IDE can significantly speed up the development process by
                    offering a variety of tools and features under one roof.
                </p>
                <h4 className="text-2xl text-center mb-4">
                    Here are a few reasons why developers use IDEs:
                </h4>
                <p className="max-w-3xl text-center mb-8">
                    Efficiency: With everything in one place, developers can
                    write, test, and debug code without needing to switch
                    between different tools.
                </p>
                <p className="max-w-3xl text-center mb-8">
                    Code Assistance: Many IDEs offer features like
                    autocompletion, syntax highlighting, and suggestions, making
                    the code-writing process smoother.
                </p>
                <p className="max-w-3xl text-center mb-8">
                    Integrated Debugging: Integrated debuggers allow developers
                    to test and debug their programs within the IDE, speeding up
                    the development cycle.
                </p>
                <p className="max-w-3xl text-center mb-8">
                    Extensions & Plugins: Most modern IDEs support a wide range
                    of extensions and plugins, enabling developers to customize
                    their environment and add even more functionalities.
                </p>
                <h2 className="text-3xl font-bold mb-6">
                    A Brief History of IDEs
                </h2>
                <p className="max-w-3xl text-center mb-8">
                    The concept of an IDE dates back to the early days of
                    computing when programming tools started to be integrated
                    into a single environment. One of the earliest examples of
                    this was the Maestro I, developed in the 1970s for the
                    PDP-11 minicomputers. As computers and programming languages
                    evolved, so did IDEs. In the 1990s, with the rise of
                    graphical user interfaces, IDEs like Microsoft&apos;s Visual
                    Studio and Borland&apos;s Delphi became popular. With the
                    increasing demand for web development, IDEs evolved to
                    support a plethora of languages, platforms, and
                    technologies, leading to the diverse range of options
                    available today.
                </p>
                <p className="max-w-3xl text-center mb-8">
                    Now, let&apos;s look at some popular IDEs:
                </p>
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {ides.map((ide, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold mb-4">
                                {ide.name}
                            </h2>
                            <p className="mb-4">{ide.description}</p>
                            <h3 className="text-xl mb-2">Functionalities:</h3>
                            <ul className="list-disc pl-5 mb-4">
                                {ide.functionalities.map((func, idx) => (
                                    <li key={idx}>{func}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl mb-2">
                                Supported Languages:
                            </h3>
                            <ul className="list-disc pl-5 mb-4">
                                {ide.supportedLanguages.map((lang, idx) => (
                                    <li key={idx}>{lang}</li>
                                ))}
                            </ul>
                            <Link href={ide.installLink} passHref>
                                <span className="text-blue-400 hover:underline cursor-pointer">
                                    Install {ide.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
