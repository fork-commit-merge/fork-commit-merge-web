/* eslint-disable @next/next/no-img-element */
const SolidityLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white"
            alt="Solidity"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Solidity?</h2>
        <p className="mb-4">
          Solidity is a statically-typed programming language designed for
          writing smart contracts on blockchain platforms like Ethereum. First
          proposed in 2014, it is tailored for the Ethereum Virtual Machine
          (EVM). Solidity enables the development of applications that execute
          contracts, handle tokenization of assets, and manage decentralized
          applications (dApps).
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Solidity?</h2>
        <p className="mb-6">
          Solidity is essential for building smart contracts on Ethereum and
          other EVM-compatible blockchains. It provides a range of built-in
          functions for cryptographic operations, data manipulation, and
          contract control. The language has a strong community and ecosystem,
          including extensive libraries and tools for development and debugging.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Solidity Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use the latest version of the Solidity compiler for improved
            security features.
          </li>
          <li>
            - Leverage Solidity&apos;s modifiers for function-level access
            control.
          </li>
          <li>
            - Be cautious with arithmetic operations to avoid overflow and
            underflow errors.
          </li>
          <li>
            - Utilize events to provide external consumers with contract state
            changes.
          </li>
          <li>
            - Be mindful of gas costs and optimize your code for efficiency.
          </li>
        </ul>

        <br />
        <a
          href="https://soliditylang.org/docs/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Solidity - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default SolidityLanguage;
