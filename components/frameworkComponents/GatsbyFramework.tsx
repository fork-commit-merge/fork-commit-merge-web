/* eslint-disable @next/next/no-img-element */
const GatsbyFramework = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white"
            alt="Gatsby.js"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Gatsby?</h2>
        <p className="mb-4">
          Gatsby (or Gatsby.js) is an open-source, modern website framework
          built on top of React. It leverages GraphQL and other data sources to
          generate static websites. Gatsby is widely praised for its performance
          optimization, which includes code splitting, image optimization,
          lazy-loading, and much more.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Gatsby?</h2>
        <p className="mb-6">
          Gatsby provides a fast and secure way to build websites. Its focus on
          performance optimization makes for exceptionally quick load times.
          Gatsby&apos;s rich plugin ecosystem allows for flexible and powerful
          data sourcing and transformation. It&apos;s an excellent choice for
          SEO-focused websites and can be a powerful tool for building
          Progressive Web Apps (PWAs).
        </p>

        <h4 className="text-2xl font-bold my-4">
          Gatsby Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Take advantage of the Gatsby Image API for optimized image
            loading.
          </li>
          <li>
            - Use GraphQL queries efficiently to pull in only the data you need.
          </li>
          <li>
            - Keep the &apos;gatsby-config.js&apos; clean and well-organized.
          </li>
          <li>
            - Leverage Gatsby&apos;s server-side rendering for SEO benefits.
          </li>
          <li>- Always consider accessibility and use semantic HTML markup.</li>
        </ul>

        <br />
        <a
          href="https://www.gatsbyjs.com/docs/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Gatsby - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default GatsbyFramework;
