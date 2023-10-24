/* eslint-disable @next/next/no-img-element */
const AstroFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Astro-5A67D8?style=for-the-badge&logo=astro&logoColor=white"
            alt="Astro"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Astro?</h2>
        <p className="mb-4">
          Astro is a modern front-end framework that enables developers to build
          faster websites with less effort. Unlike traditional JavaScript-heavy
          frameworks, Astro delivers lightning-fast performance by only sending
          the necessary JavaScript to the browser. With Astro, you can write
          components using your favorite JavaScript framework (like React, Vue,
          or Svelte) or even use multiple frameworks in the same project.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Astro?</h2>
        <p className="mb-6">
          Astro&apos;s primary advantage lies in its performance. By focusing on
          optimized builds and minimal JavaScript delivery, Astro websites are
          lightweight and incredibly fast. Astro also offers flexibility by
          allowing developers to use multiple frameworks, or no framework at
          all, giving them the freedom to choose the best tools for their
          specific needs. Lastly, its component-based architecture makes
          development modular and maintainable.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Astro Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Optimize your assets and utilize partial hydration for best
            performance.
          </li>
          <li>
            - Keep components focused and modular to improve maintainability.
          </li>
          <li>
            - Use Astro&apos;s built-in tools and plugins to simplify the
            development process.
          </li>
          <li>
            - Ensure compatibility when mixing and matching different JavaScript
            frameworks.
          </li>
          <li>
            - Stay updated with the Astro documentation for the latest features
            and best practices.
          </li>
        </ul>
        <br />
        <a
          href="https://docs.astro.build/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Astro - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default AstroFramework;
