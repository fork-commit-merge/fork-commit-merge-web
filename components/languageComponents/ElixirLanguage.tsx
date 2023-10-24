/* eslint-disable @next/next/no-img-element */
const ElixirLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/elixir-%239B30FF.svg?style=for-the-badge&logo=elixir&logoColor=white"
            alt="Elixir"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Elixir?</h2>
        <p className="mb-4">
          Elixir is a functional, concurrent programming language built on the
          reliable and concurrent Erlang VM. Created by José Valim, Elixir was
          designed for building scalable and maintainable applications, with a
          focus on real-time processing and fault tolerance.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Elixir?</h2>
        <p className="mb-6">
          Elixir is well-suited for applications that demand high concurrency,
          low latency, and fault tolerance. It has found great success in fields
          like telecommunications, IoT, and web development. Elixir has strong
          support for metaprogramming, allowing for macro specification. The
          language also offers powerful libraries for asynchronous programming
          and supports distributed computing.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Elixir Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Prefer pattern matching over unwrapping values manually.</li>
          <li>- Use recursion for looping constructs.</li>
          <li>
            - Write small, reusable functions and avoid side effects when
            possible.
          </li>
          <li>
            - Adhere to Elixir&apos;s community coding standards for
            consistency.
          </li>
          <li>
            - Make use of the mix tool for dependency management and tasks.
          </li>
        </ul>
        <br />
        <a
          href="https://elixir-lang.org/docs.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Elixir - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ElixirLanguage;
