/* eslint-disable @next/next/no-img-element */
const PerlLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/perl-%230D467A.svg?style=for-the-badge&logo=perl&logoColor=white"
                        alt="Perl"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">What is Perl?</h2>
                <p className="mb-4">
                    Perl (Practical Extraction and Reporting Language) is a
                    high-level, dynamic programming language that was originally
                    designed for text manipulation but has since evolved into a
                    versatile and powerful language suitable for a variety of
                    tasks, including web development, system administration, and
                    network programming.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Perl?</h2>
                <p className="mb-6">
                    Perl&apos;s text-handling capabilities are exceptional,
                    making it great for working with large text files, logs, or
                    streams of data. It is also known for its flexibility and
                    the availability of its comprehensive archive of reusable
                    modules, called CPAN (Comprehensive Perl Archive Network).
                    Perl&apos;s syntax is flexible, allowing developers to write
                    succinct and expressive code.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Perl Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use `strict` and `warnings` pragmas in your script for
                        better error reporting.
                    </li>
                    <li>- Prefer three-part version numbers for modules.</li>
                    <li>- Make use of CPAN modules whenever possible.</li>
                    <li>
                        - Avoid using global variables; use lexical variables
                        (`my`) instead.
                    </li>
                    <li>- Stick to a consistent indentation style.</li>
                </ul>
                <br />
                <a
                    href="https://perldoc.perl.org/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Perl - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default PerlLanguage;
