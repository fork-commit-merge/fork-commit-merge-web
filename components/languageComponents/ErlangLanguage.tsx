/* eslint-disable @next/next/no-img-element */
const ErlangLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533"
            alt="Erlang"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Erlang?</h2>
        <p className="mb-4">
          Erlang is a functional, concurrent, general-purpose programming
          language and runtime environment. Developed by Ericsson in the late
          1980s, it was initially designed for telecommunication systems but has
          since found applications in various other sectors like ecommerce,
          computer telephony, and instant messaging.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Erlang?</h2>
        <p className="mb-6">
          Erlang is well-suited for systems that are distributed,
          fault-tolerant, and soft real-time. It has strong support for
          concurrent processes and offers features for hot-swapping running
          code, making it easier to upgrade systems without downtime.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Erlang Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Make use of pattern matching and recursion for logic flow.</li>
          <li>
            - Follow the &quot;Let it crash&quot; philosophy for error-handling.
          </li>
          <li>
            - Leverage OTP (Open Telecom Platform) for building robust
            applications.
          </li>
          <li>- Keep functions small and focused.</li>
          <li>- Document your code using meaningful comments.</li>
        </ul>
        <br />
        <a
          href="https://erlang.org/doc/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Erlang - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ErlangLanguage;
