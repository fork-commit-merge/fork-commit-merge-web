/* eslint-disable @next/next/no-img-element */
const CherrypyFramework = () => {
  return (
    <div className='bg-primary flex items-center justify-center'>
      <div className='max-w-2xl  text-center'>
        <div className='flex flex-wrap items-center justify-center'>
          <img
            src='https://img.shields.io/badge/cherrypy-%23E34F26.svg?style=for-the-badge&logo=cherrypy&logoColor=white'
            alt='CherryPy'
            className='mb-10 h-16 rounded-sm'
          />
        </div>

        <h2 className='mb-4 text-2xl font-bold'>What is CherryPy Framework?</h2>
        <p className='mb-4'>
          CherryPy is an object-oriented web application framework for the
          Python programming language. It is designed to be both powerful and
          easy to use. CherryPy allows developers to build web applications in
          much the same way they would build any other object-oriented Python
          program. It provides the necessary tools to create web applications
          without getting in the way of the developer&apos;s workflow.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>Why Use CherryPy?</h2>
        <p className='mb-6'>
          CherryPy is a lightweight framework, favored for its minimalist design
          and user-friendly approach. With a built-in server, it simplifies
          development, eliminating the need for external configurations. Its
          flexibility allows for easy customization through plugins and
          configuration options. Efficient URL mapping supports RESTful
          applications and APIs. Compatible with Python 2 and 3, it caters to a
          wide developer base. Ideal for small to medium-sized applications, it
          ensures speedy performance and efficient request handling. Its
          template engine agnosticism permits seamless integration with various
          engines, enhancing its adaptability for diverse projects.
        </p>

        <h4 className='my-4 text-2xl font-bold'>
          CherryPy Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - PEP 8 Compliance: Adhere to the guidelines outlined in PEP 8, the
            official Python style guide. This includes guidelines for code
            layout, naming conventions, comments, and programming
            recommendations.
          </li>
          <li>
            - Consistent Indentation: Use consistent indentation (usually four
            spaces) to improve code readability and maintainability.
          </li>
          <li>
            - Descriptive Naming: Use descriptive names for variables,
            functions, and classes to enhance code understandability. Follow the
            Python naming conventions, like using lowercase letters for variable
            names and underscores for improved readability.
          </li>
          <li>
            - Separation of Concerns: Follow the principle of separation of
            concerns to keep different parts of your application modular and
            maintainable. Separate business logic from presentation logic, and
            use the CherryPy framework for handling web-related tasks.
          </li>
          <li>
            - Use of CherryPy Features: Make the most of CherryPy&apos;s
            features for URL routing, request handling, and serving static files
            to ensure efficient and effective development.
          </li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://docs.cherrypy.dev/en/latest/'
          className='text-xl font-bold underline hover:text-blue-400'
        >
          CherryPy - Official Documentation
        </a>
      </div>
    </div>
  )
}

export default CherrypyFramework
