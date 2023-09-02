const SvelteFramework = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Svelte</h1>

                <h2 className="text-2xl font-bold mb-4">What is Svelte?</h2>
                <p className="mb-4">
                    Svelte is a modern framework for building user interfaces.
                    Unlike traditional frameworks that work on the client-side
                    to manipulate the DOM, Svelte compiles components to highly
                    efficient vanilla JavaScript at build time, eliminating the
                    need for a virtual DOM.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Svelte?</h2>
                <p className="mb-6">
                    Svelte offers a simpler approach to building web
                    applications by reducing the boilerplate code. The framework
                    optimizes performance by eliminating the virtual DOM and
                    updating the real DOM directly. This leads to faster
                    rendering and a more straightforward development experience.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Svelte Best Practices
                </h4>
                <ul>
                    <li>- Use reactive statements for automatic updates.</li>
                    <li>- Leverage Svelte stores for state management.</li>
                    <li>
                        - Prefer built-in actions over manually manipulating the
                        DOM.
                    </li>
                    <li>
                        - Use the Svelte compiler warnings and recommendations.
                    </li>
                    <li>
                        - Take advantage of Svelte’s built-in transitions for
                        animations.
                    </li>
                </ul>
                <br />
                <a
                    href="https://svelte.dev/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Svelte - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default SvelteFramework;
