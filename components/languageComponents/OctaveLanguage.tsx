/* eslint-disable @next/next/no-img-element */
const OctaveLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683"
                        alt="Octave"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Octave?</h2>
                <p className="mb-4">
                    Octave is a high-level open-source programming language
                    tailored for numerical computations and data analysis. It
                    serves as an accessible alternative to MATLAB, offering a
                    rich ecosystem for tasks such as signal processing, image
                    analysis, and scientific modeling. Octave boasts a
                    user-friendly interface, an extensive library of
                    mathematical functions, and compatibility with MATLAB code,
                    making it a favored tool for engineers, scientists, and
                    researchers.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Octave?</h2>
                <p className="mb-6">
                    Octave is chosen for its capabilities in numerical
                    computing, data analysis, and scientific research. Its
                    open-source nature makes it an affordable option for
                    individuals and organizations. Octave's compatibility with
                    MATLAB simplifies code migration, and its extensive library
                    of mathematical functions streamlines complex calculations.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Octave Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Keep lines of code at 79 characters or fewer, using
                        spaces for indentation and indenting by 2 spaces at a
                        time.
                    </li>
                    <li>
                        - Place spaces after commas and before parentheses when
                        calling functions.
                    </li>
                    <li>
                        - Prefer lowercase names for variables, and uppercase is
                        acceptable for variables consisting of 1-2 letters.
                        Avoid mixed case names. Function names should be in
                        lowercase.
                    </li>
                    <li>
                        - Since function names are global, choose them
                        thoughtfully and avoid potential conflicts.
                    </li>
                    <li>
                        - Use # for comments exclusively and refrain from mixing
                        % and # in the same file.
                    </li>
                </ul>
                <br />
                <a
                    href="https://docs.octave.org/latest/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Octave - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default OctaveLanguage;
