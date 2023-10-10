/* eslint-disable @next/next/no-img-element */
const ThreeJSLibrary = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/three.js-black?style=for-the-badge&logo=three.js&logoColor=white"
            alt="ThreeJS"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Three.js?</h2>
        <p className="mb-4">
          Three (or Three.js) is a 3D library that extends the Canvas API and
          WebGL. It offers a comprehensive set of features for creating and
          interacting with 3D designs and animations in web applications. First
          released on April 24, 2010, the library has received contributions
          from various developers to enhance its capabilities. It also utilizes
          the latest ES modules to improve both the library and the developer
          experience.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Three.js?</h2>
        <p className="mb-6">
          Three.js comes with a robust set of features for delivering
          high-quality animations. It includes ready-to-use tools such as Mesh,
          Geometry, and Materials. The library supports various model types like
          GLB, GLTF, and OBJ and provides APIs for easy loading and interaction.
          Additionally, it has a strong community backing and a dedicated forum
          for support.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Three.js Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>Always check the browser console for error messages.</li>
          <li>
            Ensure you add light to your scene; otherwise, your objects may not
            be visible.
          </li>
          <li>
            Properly set up your camera to ensure all elements are within view.
          </li>
          <li>
            To keep your project responsive, adjust the window height and width
            by dividing them by 2. Add this logic to your resize event listener.
          </li>
        </ul>

        <br />
        <a
          href="https://threejs.org/docs/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Three.js - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ThreeJSLibrary;
