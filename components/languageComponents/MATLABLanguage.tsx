/* eslint-disable @next/next/no-img-element */
const MATLABLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/MATLAB-%23ED8B00?style=for-the-badge&logo=matlab&logoColor=fcd683"
            alt="MATLAB"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is MATLAB?</h2>
        <p className="mb-4">
          MATLAB is a high-level language and interactive environment used for
          numerical computation, visualization, and programming. Developed by
          MathWorks, MATLAB allows matrix manipulations, plotting of functions
          and data, implementation of algorithms, and creation of user
          interfaces. It&apos;s widely used by engineers, scientists, and
          researchers for various applications including signal processing,
          machine learning, and control systems.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use MATLAB?</h2>
        <p className="mb-6">
          MATLAB is renowned for its flexibility and power in numerical
          computing and data analysis. Its vast library of toolboxes and
          built-in functions facilitate complex calculations and
          problem-solving. Furthermore, its Simulink platform enables
          multidomain simulation and model-based designs, making it an
          indispensable tool for professionals in various technical fields.
        </p>

        <h4 className="text-2xl font-bold my-4">
          MATLAB Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use meaningful variable names and follow camelCase naming
            conventions.
          </li>
          <li>
            - Comment your code thoroughly, providing explanations for complex
            algorithms or calculations.
          </li>
          <li>
            - Organize code into functions and scripts to maintain modularity
            and improve readability.
          </li>
          <li>
            - Use MATLAB&apos;s error handling mechanisms to gracefully manage
            unexpected issues.
          </li>
          <li>
            - Regularly save and back up your MATLAB workspaces and files.
          </li>
        </ul>
        <br />
        <a
          href="https://www.mathworks.com/help/matlab/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          MATLAB - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default MATLABLanguage;
