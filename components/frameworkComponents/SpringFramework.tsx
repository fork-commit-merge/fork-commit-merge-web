/* eslint-disable @next/next/no-img-element */
const SpringFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Spring-%2523DB0031.svg?logo=spring&logoColor=rgb(108,181,45)&color=white"
            alt="Spring"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Spring?</h2>
        <p className="mb-4">
          Spring is a comprehensive framework for building enterprise-level Java
          applications. It provides a wide range of infrastructure support,
          making it easier to develop robust and scalable applications. The
          Spring framework includes various modules such as Spring Core, Spring
          MVC, Spring Boot, and more, each addressing specific aspects of
          application development.{" "}
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Spring?</h2>
        <p className="mb-6">
          Spring simplifies Java development by offering features like
          dependency injection, aspect-oriented programming, and abstraction
          over complex enterprise-level concerns. It promotes the use of best
          practices, modularization, and testability. Spring Boot, a part of the
          Spring ecosystem, further streamlines the development process by
          providing convention-over-configuration and out-of-the-box defaults
          for building production-ready applications.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Spring Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Embrace the Dependency Injection principle for loose coupling.
          </li>
          <li>
            - Utilize Spring MVC for building scalable and well-organized web
            applications.
          </li>
          <li>
            - Leverage Spring Boot for rapid development and microservices
            architecture.
          </li>
          <li>
            - Apply aspect-oriented programming for cross-cutting concerns.
          </li>
          <li>
            - Implement unit and integration testing using the Spring Testing
            framework.
          </li>
        </ul>
        <br />
        <a
          href="https://spring.io/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Spring - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default SpringFramework;
