/* eslint-disable @next/next/no-img-element */
const HTMLLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML5"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is HTML?</h2>
        <p className="mb-4">
          HTML (HyperText Markup Language) is the standard markup language used
          to create web pages. It structures the content on the web, allowing
          you to define elements such as headings, paragraphs, links, and
          multimedia. HTML is a foundational technology upon which the entire
          web is built.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use HTML?</h2>
        <p className="mb-6">
          HTML is essential for web development and is universally supported
          across all web browsers. It is simple to learn, yet powerful,
          providing the flexibility to create complex web applications. HTML
          also integrates seamlessly with other web technologies like CSS for
          styling and JavaScript for functionality.
        </p>

        <h4 className="text-2xl font-bold my-4">
          HTML Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use semantic HTML elements to improve the structure and
            readability of your code.
          </li>
          <li>- Always declare the document type and character set.</li>
          <li>- Use lowercase tag names and attribute names.</li>
          <li>
            - Always close your tags and keep the nesting clear and indented.
          </li>
          <li>
            - Use alt attributes for images to make the content more accessible.
          </li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          MDN - HTML Documentation
        </a>
      </div>
    </div>
  );
};

export default HTMLLanguage;
