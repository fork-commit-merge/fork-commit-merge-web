/* eslint-disable @next/next/no-img-element */
const VyperLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/Vyper-%23363636.svg?style=for-the-badge&logo=vyper&logoColor=white"
                        alt="Vyper"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is Vyper?</h2>
                <p className="mb-4">
                    Vyper is a Python-like programming language designed for
                    Ethereum smart contracts. It is intended to be a more
                    readable and secure alternative to Solidity, focusing on
                    simplicity and ease of auditing. Unlike Solidity, Vyper
                    deliberately avoids some advanced features to ensure greater
                    security and readability.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Vyper?</h2>
                <p className="mb-6">
                    Vyper offers a smaller attack surface due to its simplicity,
                    making it a strong choice for projects prioritizing
                    security. It produces more straightforward and easily
                    auditable bytecode, facilitating code reviews and
                    verification. Vyper also provides native support for common
                    programming patterns in smart contracts.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Vyper Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Stick to the established naming conventions for better
                        readability.
                    </li>
                    <li>
                        - Use comments and docstrings generously for easier code
                        audits.
                    </li>
                    <li>
                        - Be mindful of gas optimization, as Vyper contracts can
                        be less gas-efficient than their Solidity counterparts.
                    </li>
                    <li>
                        - Use Vyper&apos;s built-in decorators like @public and
                        @private for better function visibility.
                    </li>
                </ul>

                <br />
                <a
                    href="https://vyper.readthedocs.io/en/latest/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Vyper - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default VyperLanguage;
