/* eslint-disable @next/next/no-img-element */
const RLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white"
            alt="R"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is R?</h2>
        <p className="mb-4">
          R is a programming language and free software environment for
          statistical computing and graphics. It was first developed in the
          early 1990s, and has since become a popular choice for data analysis,
          visualization, and machine learning. R is highly extensible and offers
          a wide array of packages for specialized tasks.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use R?</h2>
        <p className="mb-6">
          R is favored for its rich ecosystem of packages that can handle nearly
          any data manipulation or analysis task. It is widely used in academia
          and industry alike, and its plotting capabilities are considered to be
          one of the best in the programming world. Moreover, R has strong
          community support and a plethora of free resources for learning and
          troubleshooting.
        </p>

        <h4 className="text-2xl font-bold my-4">
          R Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Always comment and indent your code for better readability.</li>
          <li>
            - Make use of R&apos;s vectorized operations rather than loops for
            better performance.
          </li>
          <li>
            - Use meaningful variable names and keep the code DRY (Don&apos;t
            Repeat Yourself).
          </li>
          <li>
            - Prefer tidyverse packages for data manipulation and ggplot2 for
            data visualization.
          </li>
          <li>- Include error handling in your scripts to make them robust.</li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.r-project.org/docs.html"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          R - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default RLanguage;
