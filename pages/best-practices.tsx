import BestPracticesJavaScript from "../components/BestPracticesJavaScript";
import BestPracticesRuby from "../components/BestPracticesRuby";
import BestPracticesRust from "../components/BestPracticesRust";
import BestPracticesTypeScript from "../components/BestPracticesTypeScript";

export default function BestPractices() {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <div className="text-slate-50 mx-auto max-w-2xl pb-10">
                <h3 className="text-3xl font-bold my-4">
                    Best Practices and Coding Style Guide
                </h3>
                <p className="text-xl leading-7 pt-8">
                    Programming languages, despite their diverse syntax and
                    underlying paradigms, universally emphasize the importance
                    of adhering to best practices. These practices evolve over
                    time, influenced by shared challenges faced by developers,
                    innovations in the field, and the inherent features and
                    limitations of the languages themselves. This section serves
                    as a compass, guiding you through the idiomatic ways of
                    coding in various languages, ensuring not only that your
                    code works but also that it aligns with the conventions and
                    norms of the community.
                </p>
                <h4 className="text-2xl font-bold mt-10">
                    Why Follow Best Practices?
                </h4>
                <p className="text-xl leading-7 pt-8">
                    - Readability: Code is read more often than it&apos;s
                    written. Adopting best practices ensures your code remains
                    accessible and comprehensible to other developers, or even
                    to your future self!
                    <br />
                    - Maintainability: Idiomatic code, by adhering to
                    established patterns and standards, is easier to update,
                    debug, and expand upon.
                    <br />
                    - Performance: Often, best practices evolve in response to
                    the understanding of a language&apos;s performance
                    characteristics. Writing idiomatic code might also mean
                    squeezing the best performance out of your programs.
                    <br />
                    - Community Support: If you&apos;re writing code in the way
                    that the broader community expects, you&apos;re more likely
                    to receive help when you run into issues. Moreover, you can
                    benefit from tools, linters, and extensions built with these
                    practices in mind.
                    <br />- Reducing Errors: Many best practices are born from
                    the lessons of countless debugged issues. By adhering to
                    them, you’re sidestepping many pitfalls before they even
                    occur. In this section, you&apos;ll find guides tailored to
                    various languages. Whether you&apos;re dabbling in a new
                    language or revisiting a familiar one, these insights will
                    help ensure your code is elegant, efficient, and effective.
                </p>
                <hr className="my-6" />
                {BestPracticesJavaScript}
                <br />
                <hr className="my-6" />
                {BestPracticesTypeScript}
                <br />
                <hr className="my-6" />
                {BestPracticesRuby}
                <br />
                <hr className="my-6" />
                {BestPracticesRust}
                <br />
                <hr className="my-6" />
            </div>
        </div>
    );
}
