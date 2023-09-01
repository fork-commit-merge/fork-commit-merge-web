const LuaLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Lua</h1>

                <h2 className="text-2xl font-bold mb-4">What is Lua?</h2>
                <p className="mb-4">
                    Lua is a lightweight, high-level, scripting language
                    designed for embedded use in applications. Created in 1993,
                    Lua is widely used for configuration, scripting, and
                    data-description tasks. It&apos;s designed with a focus on
                    simplicity, efficiency, and portability.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Lua?</h2>
                <p className="mb-6">
                    Lua is known for its speed and lightweight footprint, making
                    it ideal for embedding in games, hardware devices, and other
                    software that requires a performant scripting language. It
                    has a straightforward syntax that enables quick learning and
                    productivity. Additionally, Lua is highly extensible and can
                    be easily integrated with C and other languages.
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Lua Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>
                        - Prefer local variables over global variables for
                        performance and scoping.
                    </li>
                    <li>
                        - Use meaningful variable names and follow a consistent
                        naming convention.
                    </li>
                    <li>
                        - Utilize Lua&apos;s tables for complex data structures.
                    </li>
                    <li>
                        - Error checking is crucial; always validate external
                        inputs.
                    </li>
                    <li>- Use comments and documentation for code clarity.</li>
                </ul>
                <br />
                <a
                    href="https://www.lua.org/manual/5.1/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Lua - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default LuaLanguage;
