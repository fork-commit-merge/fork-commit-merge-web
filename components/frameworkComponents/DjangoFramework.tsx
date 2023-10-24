/* eslint-disable @next/next/no-img-element */
const DjangoFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
            alt="Django"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Django?</h2>
        <p className="mb-4">
          Django is a high-level Python web framework that encourages rapid
          development and clean, pragmatic design. Created by Adrian Holovaty
          and Simon Willison, it was first released in 2005. Django follows the
          &quot;batteries-included&quot; philosophy, offering a wide array of
          built-in features like an admin panel, ORM, and authentication support
          to help developers build robust web applications.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Django?</h2>
        <p className="mb-6">
          Django is a versatile framework suitable for both small and large
          projects. Its &apos;batteries-included&apos; philosophy means that
          developers can accomplish more with less code, focusing on writing the
          app rather than boilerplate. It also offers strong community support,
          excellent documentation, and a variety of third-party packages.
          Security features like SQL injection protection, CSRF protection, and
          password hashing are built-in, making it a secure choice for web
          development.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Django Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Use class-based views for better reusability.</li>
          <li>- Leverage the Django ORM for database operations.</li>
          <li>
            - Use Django&apos;s built-in form handling for data validation.
          </li>
          <li>
            - Always keep your applicatio&apos;s `requirements.txt` updated.
          </li>
          <li>
            - Use Django&apos;s built-in authentication and authorization
            mechanisms for security.
          </li>
        </ul>

        <br />
        <a
          href="https://docs.djangoproject.com/en/stable/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Django - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default DjangoFramework;
