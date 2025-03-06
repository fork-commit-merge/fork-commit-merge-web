/* eslint-disable @next/next/no-img-element */
const FlaskFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white"
            alt="Flask"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Flask?</h2>
        <p className="mb-4">
          Flask is a lightweight, micro web framework written in Python. Created
          by Armin Ronacher, it was released in 2010. It is designed for small
          and medium web applications and offers the essentials to get an app up
          and running. It follows the WSGI standard and is compatible with
          various other libraries and extensions.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Flask?</h2>
        <p className="mb-6">
          Flask is known for its simplicity and ease of use. It offers a lot of
          flexibility and does not impose any project layout, making it suitable
          for both small and large applications. Flask has built-in support for
          unit testing, RESTful request dispatching, and contains a fast
          debugger and integrated support for secure cookies.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Flask Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Follow the PEP 8 coding style for Python.</li>
          <li>
            - Use Blueprints for better structure and reusable components.
          </li>
          <li>
            - Leverage Flask extensions like Flask-SQLAlchemy for databases.
          </li>
          <li>- Implement proper error handling.</li>
          <li>- Use environment variables for configuration settings.</li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://flask.palletsprojects.com/en/2.0.x/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Flask - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default FlaskFramework;
