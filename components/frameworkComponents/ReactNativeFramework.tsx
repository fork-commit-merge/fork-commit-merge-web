/* eslint-disable @next/next/no-img-element */
const ReactNativeFramework = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React Native"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is React Native?</h2>
        <p className="mb-4">
          React Native is an open-source mobile application framework created by
          Facebook. It is used to build natively-rendered mobile applications
          for iOS and Android using JavaScript and React. Unlike hybrid
          frameworks, React Native compiles to native app components, which
          makes it possible to build mobile applications that are
          indistinguishable from those built with native languages like Swift or
          Kotlin.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use React Native?</h2>
        <p className="mb-6">
          React Native offers the advantage of code reusability across iOS and
          Android platforms, resulting in faster development cycles. It provides
          a rich ecosystem of libraries and tools, and its performance is
          comparable to native applications. It is particularly useful for teams
          that already have React experience, as it allows for a unified
          development process across web and mobile platforms.
        </p>

        <h4 className="text-2xl font-bold my-4">
          React Native Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Optimize components with PureComponent or shouldComponentUpdate.
          </li>
          <li>
            - Use state management libraries like Redux or MobX for complex
            state logic.
          </li>
          <li>- Leverage native modules for computational-heavy tasks.</li>
          <li>- Utilize lazy loading and code splitting techniques.</li>
          <li>- Prioritize accessibility features for a more inclusive app.</li>
        </ul>

        <br />
        <a
          href="https://reactnative.dev/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          React Native - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ReactNativeFramework;
