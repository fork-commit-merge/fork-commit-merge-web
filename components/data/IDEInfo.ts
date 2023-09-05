interface IDEInfo {
    name: string;
    description: string;
    functionalities: string[];
    supportedLanguages: string[];
    installLink: string;
}

export const ides: IDEInfo[] = [
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
        name: "Visual Studio",
        description:
            "A full-featured integrated development environment from Microsoft for developing applications for Windows, Android, and iOS, as well as modern web applications and cloud services.",
        functionalities: [
            "Code editor with IntelliSense",
            "Code navigation and refactoring",
            "Debugging and profiling tools",
            "Git integration",
            "Extensible via plugins",
        ],
        supportedLanguages: [
            "C#",
            "Visual Basic",
            "C++",
            "F#",
            "JavaScript",
            "TypeScript",
            "Python",
            "and many more through extensions",
        ],
        installLink: "https://visualstudio.microsoft.com/",
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
        name: "WebStorm",
        description:
            "A smart JavaScript IDE developed by JetBrains that provides a better development experience for modern JavaScript development.",
        functionalities: [
            "Intelligent code completion",
            "On-the-fly error detection",
            "Powerful navigation and refactoring",
            "Integrated debugger",
            "Testing support",
            "VCS integration",
        ],
        supportedLanguages: [
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Node.js",
        ],
        installLink: "https://www.jetbrains.com/webstorm/",
    },
    {
        name: "PhpStorm",
        description:
            "An Integrated Development Environment for PHP developed by JetBrains. It provides an editor for PHP, HTML, and JavaScript with on-the-fly code analysis and automated refactoring for PHP and JavaScript code.",
        functionalities: [
            "Intelligent coding assistance",
            "Smart code navigation",
            "Fast and safe refactoring",
            "Easy debugging and testing",
            "VCS integration",
        ],
        supportedLanguages: ["PHP", "HTML", "JavaScript", "CSS", "SQL"],
        installLink: "https://www.jetbrains.com/phpstorm/",
    },
    {
        name: "RubyMine",
        description:
            "A dedicated Ruby and Rails development environment created by JetBrains.",
        functionalities: [
            "Robust IDE for Ruby/Rails",
            "Intelligent code completion",
            "Refactoring capabilities",
            "Integrated debugger",
            "VCS integration",
        ],
        supportedLanguages: ["Ruby", "Rails", "JavaScript", "HTML", "CSS"],
        installLink: "https://www.jetbrains.com/ruby/",
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
    {
        name: "Vim",
        description:
            "A highly configurable text editor built to enable efficient text editing. It's often used as an IDE with various plugins.",
        functionalities: [
            "Highly customizable",
            "Extensible through plugins",
            "Syntax highlighting",
            "Search and replace",
            "Multi-window",
            "Keyboard shortcuts",
        ],
        supportedLanguages: ["Almost all through extensions"],
        installLink: "https://www.vim.org/",
    },
    {
        name: "Emacs",
        description:
            "An extensible, customizable, free text editor and computing environment, often used as an IDE.",
        functionalities: [
            "Highly extensible",
            "Syntax highlighting",
            "Project planning",
            "Shell integration",
            "Version control",
        ],
        supportedLanguages: ["Almost all through extensions"],
        installLink: "https://www.gnu.org/software/emacs/",
    },
    {
        name: "CLion",
        description:
            "A cross-platform IDE for C and C++ developed by JetBrains.",
        functionalities: [
            "Smart code analysis",
            "Code generation",
            "Refactoring",
            "Integrated debugger",
            "Integrated terminal",
        ],
        supportedLanguages: ["C", "C++"],
        installLink: "https://www.jetbrains.com/clion/",
    },
    {
        name: "Aptana Studio",
        description: "An open-source IDE primarily focused on web development.",
        functionalities: [
            "HTML, CSS, and JavaScript code assist",
            "Deployment wizard",
            "Integrated debugger",
            "Git integration",
        ],
        supportedLanguages: [
            "HTML",
            "CSS",
            "JavaScript",
            "Ruby",
            "Python",
            "PHP",
        ],
        installLink: "http://www.aptana.com/",
    },
    {
        name: "Komodo IDE",
        description:
            "A multi-language integrated development environment for end-to-end development.",
        functionalities: [
            "Code refactoring",
            "Version control",
            "Debugging",
            "Unit testing",
        ],
        supportedLanguages: [
            "Python",
            "PHP",
            "Ruby",
            "Perl",
            "HTML",
            "CSS",
            "JavaScript",
        ],
        installLink: "https://www.activestate.com/products/komodo-ide/",
    },
    {
        name: "Thonny",
        description:
            "A beginner-friendly Python IDE, useful for learning programming with Python.",
        functionalities: [
            "Easy-to-use interface",
            "Step through expression evaluation",
            "Powerful debugger",
            "Built-in Python shell",
        ],
        supportedLanguages: ["Python"],
        installLink: "https://thonny.org/",
    },

    {
        name: "KDevelop",
        description:
            "A free and open-source feature-full, plugin extensible IDE for C/C++ and many other programming languages.",
        functionalities: [
            "Syntax highlighting",
            "Code navigation",
            "Integrated debugger",
            "Git support",
        ],
        supportedLanguages: ["C", "C++", "Python", "PHP", "Java"],
        installLink: "https://www.kdevelop.org/",
    },

    {
        name: "Code::Blocks",
        description:
            "A free C, C++ and Fortran IDE that is built to meet the most demanding needs of its users.",
        functionalities: [
            "Very fast, customizable",
            "Multiple compiler support",
            "Multi-device creation",
            "Smart code completion",
        ],
        supportedLanguages: ["C", "C++", "Fortran"],
        installLink: "http://www.codeblocks.org/",
    },
    {
        name: "BlueJ",
        description:
            "A free Java development environment designed for beginners.",
        functionalities: [
            "Simple interface",
            "Interactive object creation",
            "Integrated JavaFX support",
        ],
        supportedLanguages: ["Java"],
        installLink: "https://www.bluej.org/",
    },
    {
        name: "RStudio",
        description:
            "An integrated development environment for R, a programming language for statistical computing and graphics.",
        functionalities: [
            "Syntax highlighting",
            "Code completion",
            "Integrated graphics",
            "Version control",
        ],
        supportedLanguages: ["R"],
        installLink: "https://www.rstudio.com/",
    },
    {
        name: "Light Table",
        description:
            "An open-source, next-generation, highly customizable code editor with instant feedback on code execution.",
        functionalities: ["Inline evaluation", "Lightweight", "Plugin manager"],
        supportedLanguages: [
            "Clojure",
            "JavaScript",
            "Python",
            "HTML",
            "CSS",
            "and others through plugins",
        ],
        installLink: "http://lighttable.com/",
    },
    {
        name: "Zend Studio",
        description:
            "A commercial, integrated development environment for PHP developed by Zend Technologies.",
        functionalities: [
            "PHP debugging",
            "Source code editor with code navigation",
            "Docker and Git Flow support",
        ],
        supportedLanguages: ["PHP"],
        installLink: "https://www.zend.com/products/zend-studio",
    },
];
