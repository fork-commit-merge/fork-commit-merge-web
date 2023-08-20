import Link from "next/link";

interface IDEInfo {
    name: string;
    description: string;
    functionalities: string[];
    supportedLanguages: string[];
    installLink: string;
}

const ides: IDEInfo[] = [
    {
        name: "Visual Studio Code",
        description:
            "A free source-code editor made by Microsoft for Windows, Linux and macOS.",
        functionalities: [
            "Syntax highlighting",
            "Debugging support",
            "Git integration",
            "Extensions marketplace",
            "Integrated terminal",
            "Live share and collaboration",
        ],
        supportedLanguages: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Go",
            "Java",
            "C#",
            "C++",
            "Ruby",
            "PHP",
            "and many more through extensions",
        ],
        installLink: "https://code.visualstudio.com/",
    },
    {
        name: "IntelliJ IDEA",
        description:
            "An integrated development environment (IDE) written in Java for developing computer software.",
        functionalities: [
            "Deep code understanding",
            "Smart code navigation",
            "Built-in tools and integrations",
            "Framework-specific assistance",
            "Database tools",
            "Version control",
        ],
        supportedLanguages: ["Java", "Kotlin", "Groovy", "Scala"],
        installLink: "https://www.jetbrains.com/idea/",
    },
    {
        name: "PyCharm",
        description:
            "A dedicated Python IDE from JetBrains offering a huge collection of tools out of the box.",
        functionalities: [
            "Python profiling",
            "Django support",
            "Database & SQL support",
            "Jupyter notebook integration",
        ],
        supportedLanguages: ["Python"],
        installLink: "https://www.jetbrains.com/pycharm/",
    },
    {
        name: "Eclipse",
        description:
            "A widely-used Java IDE with capabilities for multiple languages.",
        functionalities: [
            "Extensible via plugins",
            "Integrated debugger",
            "Git integration",
            "Maven build automation tool",
        ],
        supportedLanguages: ["Java", "C", "C++", "Python", "PHP", "Ruby"],
        installLink: "https://www.eclipse.org/",
    },
    {
        name: "Xcode",
        description:
            "The official development environment for macOS, iOS, iPadOS, watchOS, and tvOS.",
        functionalities: [
            "Interface builder",
            "Code review",
            "Source control",
            "Continuous integration",
        ],
        supportedLanguages: ["Swift", "Objective-C"],
        installLink: "https://developer.apple.com/xcode/",
    },
    {
        name: "Sublime Text",
        description: "A sophisticated text editor for code, markup, and prose.",
        functionalities: [
            "Goto Anything for quick navigation",
            "Multiple selections for simultaneous editing",
            "Command palette",
            "Distraction-free writing mode",
            "Split editing",
            "Customizable with JSON settings",
        ],
        supportedLanguages: ["Almost all through extensions"],
        installLink: "https://www.sublimetext.com/",
    },
    {
        name: "Android Studio",
        description:
            "The official Integrated Development Environment (IDE) for Android app development.",
        functionalities: [
            "Flexible build system based on Gradle",
            "Rich layout editor with support for drag and drop UI components",
            "APK analyzer",
            "Fast emulator with play store",
            "Integrated ProGuard and app-signing capabilities",
        ],
        supportedLanguages: ["Java", "Kotlin", "C++"],
        installLink: "https://developer.android.com/studio",
    },
    {
        name: "Notepad++",
        description:
            "A free source code editor and Notepad replacement that supports several languages.",
        functionalities: [
            "Syntax highlighting and folding",
            "WYSIWYG editor",
            "Auto-completion",
            "Multi-view (same document side by side, or two different documents)",
            "Zoom in and out",
            "Multi-language environment supported",
        ],
        supportedLanguages: [
            "C",
            "C++",
            "Java",
            "C#",
            "XML",
            "HTML",
            "PHP",
            "JavaScript",
            "Python",
            "SQL",
            "and many more",
        ],
        installLink: "https://notepad-plus-plus.org/downloads/",
    },
    {
        name: "Atom",
        description:
            "A hackable text editor for the 21st Century developed by GitHub.",
        functionalities: [
            "Cross-platform editing",
            "Built-in package manager",
            "Smart autocompletion",
            "File system browser",
            "Multiple panes",
            "Find and replace",
        ],
        supportedLanguages: ["Almost all through packages"],
        installLink: "https://atom.io/",
    },
    {
        name: "NetBeans",
        description:
            "An open-source integrated development environment that supports multiple languages.",
        functionalities: [
            "Javafx scene builder integration",
            "Code templates",
            "Coding tips",
            "Easy navigation",
            "Static analysis tools",
        ],
        supportedLanguages: ["Java", "HTML5", "JavaScript", "PHP", "C/C++"],
        installLink: "https://netbeans.apache.org/",
    },
];

export default function IDE() {
    return (
        <div className="bg-slate-950 text-white min-h-screen">
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
                    Now, with the introduction complete, let&apos;s look at some
                    popular IDEs:
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
