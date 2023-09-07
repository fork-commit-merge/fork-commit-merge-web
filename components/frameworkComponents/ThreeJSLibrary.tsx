/* eslint-disable @next/next/no-img-element */
const ThreeJSLibrary = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <div className="flex flex-wrap justify-center items-center">
                    <img
                        src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"
                        alt="ThreeJS"
                        className="mb-10 h-16 rounded-sm"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">What is ThreeJS?</h2>
                <p className="mb-4">
                    ThreeJS is a 3D library which leverages and expands the
                    canvas API, webgl among other tools to create a rich library
                    for creating and interacting with 3D designs and animations
                    on websites. This library is rich with versatile tools for
                    working with 3D and is widely accepted for creating 3d
                    interfaces by developers. This project was first released on
                    the 24th of April, 2010 and has been contributed to by
                    different developers since then to make the program better.
                    This library also embraces the latest ES modules to improve
                    the software and improve developer experience.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use ThreeJS?</h2>
                <p className="mb-6">
                    ThreeJS delivers a rich set of tools to deliver rich
                    animations with its ready to use tools like Mesh, Geometry,
                    Materials among others. It also supports different model
                    types like GLB, GLTF, OBJ and many more and also provides
                    APIs to help load and interact with them. This library also
                    has a rich support by other developers and a forum for
                    helping people use it.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    ThreeJS Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Always check the browser console for error messages.
                    </li>
                    <li>
                        - Make sure you have light on your scene to help you
                        work on your scene. Your scene may not show if the light
                        is not there.
                    </li>
                    <li>
                        - Always set your camera to help you see what you are
                        working on. A project may load but be out of view of the
                        camera hence will not show.
                    </li>
                    <li>
                        - The best way to keep your project responsive is to get
                        the window height and width divided by 2. This should be
                        in your resize event listener to help whenever browser
                        is resized.
                    </li>
                </ul>

                <br />
                <a
                    href="https://threejs.org/docs/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    ThreeJS - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default ThreeJSLibrary;
