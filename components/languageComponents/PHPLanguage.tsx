/* eslint-disable @next/next/no-img-element */
const PHPLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/php-%23007BCC.svg?style=for-the-badge&logo=php&logoColor=white"
                        alt="PHP"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is PHP?</h2>
                <p className="mb-4">
                    PHP (Hypertext Preprocessor) is a general-purpose scripting
                    language especially suited for web development. Originally
                    created by Rasmus Lerdorf in 1994, PHP has evolved to become
                    one of the most widely used server-side languages, known for
                    its role in dynamic web page creation.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use PHP?</h2>
                <p className="mb-6">
                    PHP is renowned for its simplicity and ease of use for
                    newcomers. It provides robust support for various databases
                    and web servers. It also boasts an extensive standard
                    library and a vibrant community that contributes to an
                    ever-growing ecosystem of libraries and frameworks, such as
                    Laravel and Symfony.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    PHP Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Stick to the PSR-1, PSR-2, and PSR-4 coding standards
                        for community consistency.
                    </li>
                    <li>- Use Composer for dependency management.</li>
                    <li>
                        - Prefer prepared statements for database interactions
                        to avoid SQL injection.
                    </li>
                    <li>
                        - Make use of PHP’s OOP features for better code
                        organization and reusability.
                    </li>
                    <li>- Always validate and sanitize user input.</li>
                </ul>
                <br />
                <a
                    href="https://www.php.net/manual/en/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    PHP - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default PHPLanguage;
