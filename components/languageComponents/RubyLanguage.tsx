const RubyLanguage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-10">Ruby</h1>

                <h2 className="text-2xl font-bold mb-4">What is Ruby?</h2>
                <p className="mb-4">
                    Ruby is a dynamic, interpreted, object-oriented programming
                    language. Created in the mid-1990s by Yukihiro
                    &quot;Matz&quot; Matsumoto, Ruby is known for its simplicity
                    and readability. It has an elegant syntax that is easy to
                    read and write, allowing for more natural expression of
                    code.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Use Ruby?</h2>
                <p className="mb-6">
                    Ruby is often associated with the Ruby on Rails web
                    framework, which has popularized the language for web
                    development. However, Ruby is a versatile language used in
                    various fields such as data analysis, web automation, and
                    scripting. It has a rich standard library and a vibrant
                    ecosystem of open-source libraries, known as
                    &quot;gems.&quot;
                </p>

                <h4 className="text-2xl font-bold my-4">
                    Ruby Best Practices and Coding Style Guide
                </h4>
                <ul>
                    <li>- Follow the Ruby Style Guide for consistent code.</li>
                    <li>
                        - Use meaningful names for variables, methods, and
                        classes.
                    </li>
                    <li>
                        - Make use of Ruby&apos;s powerful Enumerable methods
                        for collection manipulation.
                    </li>
                    <li>
                        - Write modular code by making use of classes and
                        modules.
                    </li>
                    <li>
                        - Employ Test-Driven Development (TDD) to ensure code
                        quality.
                    </li>
                </ul>
                <br />
                <a
                    href="https://www.ruby-lang.org/en/documentation/"
                    className="text-xl font-bold underline hover:text-blue-400"
                >
                    Ruby - Official Documentation
                </a>
            </div>
        </div>
    );
};

export default RubyLanguage;
