/* eslint-disable @next/next/no-img-element */
const LispLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/lisp-%23000000.svg?style=for-the-badge&logo=lisp&logoColor=red"
            alt="Lisp"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Lisp?</h2>
        <p className="mb-4">
          Lisp, short for List Processing, is one of the oldest high-level
          programming languages, designed by John McCarthy in 1958. It&apos;s
          known for its symbolic expression syntax, and its ability to treat
          code as data and data as code, a property known as
          &quot;homoiconicity.&quot;
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Lisp?</h2>
        <p className="mb-6">
          Lisp is highly extensible, allowing for a great deal of customization
          and manipulation of the language itself. It&apos;s often used in areas
          like artificial intelligence, machine learning, and symbolic
          reasoning. The language&apos;s longevity and flexibility make it a
          powerful tool for complex problem-solving.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Lisp Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Use meaningful variable and function names.</li>
          <li>- Leverage Lisp’s powerful macro system judiciously.</li>
          <li>- Make use of standard libraries and community packages.</li>
          <li>
            - Stick to a consistent code formatting and indentation style.
          </li>
          <li>
            - Employ modular programming and keep functions small and focused.
          </li>
        </ul>
        <br />
        <a
          href="https://www.gnu.org/software/emacs/manual/html_node/cl/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Lisp - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default LispLanguage;
