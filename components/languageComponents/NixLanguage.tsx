/* eslint-disable @next/next/no-img-element */
const NixLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-gray-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/-Nix-7FDBFF?style=for-the-badge&logo=nixos&logoColor=white"
                        alt="Nix"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Nix?</h2>
                <p className="mb-4">
                    Nix is a purely functional package manager and build system.
                    It allows multiple versions of the same package to coexist
                    on the same system, and ensures that dependencies are always
                    satisfied. Nix also provides a declarative language for
                    describing packages and their dependencies, making it easy
                    to reproduce builds across different systems.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Nix?</h2>
                <p className="mb-6">
                    Nix offers reproducible builds, which means that you can
                    easily recreate the same environment on different machines.
                    It also allows you to manage multiple versions of the same
                    package, which is useful for development and testing. Nix
                    has a large and growing package repository, and can be used
                    for a wide range of applications, from web development to
                    scientific computing.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Nix Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Use the `nix-shell` command to create an isolated
                        environment for your project.
                    </li>
                    <li>
                        - Use the `nix-build` command to build your project in a
                        reproducible way.
                    </li>
                    <li>
                        - Use the `nix-env` command to manage your user-level
                        packages.
                    </li>
                    <li>
                        - Use the `nixos-rebuild` command to manage your
                        system-level packages.
                    </li>
                    <li>
                        - Use the `nix-store` command to inspect the contents of
                        the Nix store.
                    </li>
                </ul>
                <br />
                <a
                    href="https://nixos.org/nix/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Nix - Official Website
                </a>
            </div>
        </div>
    );
};

export default NixLanguage;
