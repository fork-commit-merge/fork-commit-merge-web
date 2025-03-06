/* eslint-disable @next/next/no-img-element */
const VueFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
            alt="Vue"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Vue.js?</h2>
        <p className="mb-4">
          Vue (or Vue.js) is a progressive JavaScript framework for building
          user interfaces. Unlike monolithic frameworks, Vue is designed from
          the ground up to be incrementally adoptable. This makes it easy to
          integrate with projects using other technologies or to be used for
          standalone complex Single Page Applications.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Vue.js?</h2>
        <p className="mb-6">
          Vue is known for its simplicity and ease of integration. Its core
          library focuses on the view layer only, making it easy to pick up and
          integrate with other libraries or existing projects. Vue is also
          extremely flexible, allowing you to structure your app the way you
          want it to be. Moreover, it has a vibrant community and ecosystem,
          with a wide array of reusable components and libraries.
        </p>

        <h4 className="text-2xl font-bold my-4">Vue.js Best Practices</h4>
        <ul>
          <li>- Always use `key` attribute when using `v-for` directive.</li>
          <li>
            - Make use of single-file components for better maintainability.
          </li>
          <li>- Use computed properties for optimized reactivity.</li>
          <li>
            - Structure your application using Vue’s official style guide.
          </li>
          <li>
            - Make use of Vuex for state management in larger applications.
          </li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vuejs.org/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Vue.js - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default VueFramework;
