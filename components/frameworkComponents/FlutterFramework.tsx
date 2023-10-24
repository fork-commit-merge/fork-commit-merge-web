/* eslint-disable @next/next/no-img-element */
const FlutterFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"
            alt="Flutter"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Flutter?</h2>
        <p className="mb-4">
          Flutter is an open-source UI toolkit for building natively compiled
          applications for mobile, web, and desktop from a single codebase.
          Developed by Google, Flutter allows developers to craft high-quality
          native interfaces on both iOS and Android platforms.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Flutter?</h2>
        <p className="mb-6">
          Flutter offers a robust set of widgets and a highly customizable UI,
          enabling a rich user experience. It allows developers to write code
          once and run it on multiple platforms, reducing both development time
          and cost. Its hot-reload feature enhances developer productivity by
          allowing instant updates without losing the app state. Flutter also
          has a strong community and a wide range of plugins, making it easier
          to add functionality to apps.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Flutter Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Make use of Flutter’s extensive set of widgets.</li>
          <li>
            - Use state management solutions like Provider or Riverpod for
            better code organization.
          </li>
          <li>- Follow effective Dart style guide for better readability.</li>
          <li>
            - Leverage Flutter’s build-in animations for smoother user
            experiences.
          </li>
          <li>
            - Keep an eye on performance metrics and optimize accordingly.
          </li>
        </ul>

        <br />
        <a
          href="https://flutter.dev/docs"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Flutter - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default FlutterFramework;
