/* eslint-disable @next/next/no-img-element */
const CSSLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS3"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is CSS?</h2>
        <p className="mb-4">
          CSS (Cascading Style Sheets) is a stylesheet language used for
          describing the look and formatting of a document written in HTML. CSS
          describes how elements should be rendered on screen, on paper, in
          speech, or on other media.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use CSS?</h2>
        <p className="mb-6">
          CSS enables the separation of presentation and content, including
          layout, colors, and fonts. This makes it easier to maintain websites,
          share styles across multiple pages, and tailor pages to different
          environments. It&apos;s also essential for responsive design and
          enhancing the user experience.
        </p>

        <h4 className="text-2xl font-bold my-4">
          CSS Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Use classes over IDs for reusable components.</li>
          <li>- Stick to a naming convention like BEM or SMACSS.</li>
          <li>- Keep your styles modular and organized.</li>
          <li>- Use shorthand properties where applicable.</li>
          <li>
            - Prefer using relative units like `em` and `rem` over absolute
            units like `px`.
          </li>
        </ul>
        <br />
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          MDN - CSS Documentation
        </a>
      </div>
    </div>
  );
};

export default CSSLanguage;
