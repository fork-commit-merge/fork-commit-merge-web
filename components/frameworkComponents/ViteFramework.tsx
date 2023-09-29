/* eslint-disable @next/next/no-img-element */
const ViteFramework = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/vite-%239B30FF.svg?style=for-the-badge&logo=vite&logoColor=yellow"
            alt="Vite"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Vite?</h2>
        <p className="mb-4">
          Vite is a modern front-end build tool and development server that
          leverages JavaScript&apos;s native ES modules. Created by Evan You,
          the same person behind the Vue.js framework, Vite offers extremely
          fast development and build times, out-of-the-box support for various
          modern web technologies, and advanced optimization capabilities.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Vite?</h2>
        <p className="mb-6">
          Vite offers an incredibly fast development experience with features
          like Hot Module Replacement (HMR) and optimized builds. It uses the
          native ES modules in the browser, which allows for efficient code
          splitting and lazy loading without the need for complex bundler setup.
          Vite also comes with built-in support for TypeScript, JSX, CSS
          pre-processors, and other modern web technologies.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Vite Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Leverage the `vite.config.js` for custom configurations.</li>
          <li>
            - Use the built-in support for environment variables for
            configuration management.
          </li>
          <li>
            - Take advantage of the plugin system to extend Vite’s capabilities.
          </li>
          <li>- Keep dependencies up-to-date for optimal performance.</li>
          <li>
            - Use the `import.meta.env` for accessing environment variables.
          </li>
        </ul>

        <br />
        <a
          href="https://vitejs.dev/guide/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Vite - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ViteFramework;
