/* eslint-disable @next/next/no-img-element */
const LaravelFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
            alt="Laravel"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Laravel?</h2>
        <p className="mb-4">
          Laravel is a free, open-source PHP web framework designed for the
          development of web applications. Created by Taylor Otwell in 2011,
          Laravel provides an elegant syntax and a variety of tools that make it
          easier for developers to tackle common web development tasks such as
          routing, caching, authentication, and more.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Laravel?</h2>
        <p className="mb-6">
          Laravel has gained popularity for its ease of use, scalability, and
          modern toolkit. It comes with a powerful ORM called Eloquent, an
          elegant query builder, and a robust set of features for routing,
          sessions, and caching. It also includes a vibrant ecosystem of
          libraries and tools like Laravel Mix, Laravel Nova, and Laravel Vapor
          for various development needs.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Laravel Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Use Eloquent ORM for database interactions.</li>
          <li>- Follow PSR standards for code styling.</li>
          <li>
            - Leverage dependency injection and service providers for better
            code organization.
          </li>
          <li>- Utilize middleware for filtering HTTP requests.</li>
          <li>
            - Make use of Laravel’s validation methods to handle form
            validation.
          </li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://laravel.com/docs"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Laravel - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default LaravelFramework;
