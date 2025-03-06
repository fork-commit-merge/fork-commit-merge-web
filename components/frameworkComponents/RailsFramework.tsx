/* eslint-disable @next/next/no-img-element */
const RailsFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
            alt="Rails"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Ruby on Rails?</h2>
        <p className="mb-4">
          Ruby on Rails, often referred to as Rails, is a web application
          framework written in Ruby. Created by David Heinemeier Hansson and
          first released in 2004, Rails follows the model-view-controller (MVC)
          architectural pattern. It aims to simplify web application development
          by providing a collection of conventions and best practices, letting
          developers focus more on business logic rather than setup and
          configuration.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Ruby on Rails?</h2>
        <p className="mb-6">
          Rails is known for its developer-friendly environment, rapid
          development capabilities, and strong community support. Its
          &quot;onvention over configuration&quot; and &quot;don&apos;t repeat
          yourself&quot; (DRY) principles make it easier to write clean,
          maintainable code. Rails also comes with a rich set of libraries and
          tools, providing built-in support for things like database migrations,
          testing, and RESTful API design.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Ruby on Rails Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Follow RESTful design principles for your resources.</li>
          <li>- Use partials to DRY up views.</li>
          <li>
            - Leverage Rails&apos; built-in ActiveRecord for database queries.
          </li>
          <li>- Utilize background jobs for long-running tasks.</li>
          <li>
            - Keep business logic out of controllers and views; place it in
            models or service objects.
          </li>
        </ul>

        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://guides.rubyonrails.org/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Ruby on Rails - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default RailsFramework;
