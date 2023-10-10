/* eslint-disable @next/next/no-img-element */
const AspNetCoreFramework = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/ASP.NET%20Core-%2523DB0031.svg?logo=dotnet&logoColor=rgb(202,112,213)&color=rgb(9,31,44)"
            alt="Asp.Net Core"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is ASP.NET Core?</h2>
        <p className="mb-4">
          ASP.NET Core is a cross-platform, high-performance, open-source
          framework for building modern, cloud-based, and internet-connected
          applications. Developed by Microsoft, it is a reimagining of the
          original ASP.NET framework with a focus on flexibility, performance,
          and support for a wide range of platforms, including Windows, macOS,
          and Linux.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use ASP.NET Core?</h2>
        <p className="mb-6">
          ASP.NET Core provides a versatile and modular framework for developing
          web applications, APIs, and microservices. It supports multiple
          programming languages, integrates seamlessly with popular client-side
          frameworks, and enables efficient development through features like
          dependency injection and middleware. ASP.NET Core is known for its
          high performance, scalability, and support for modern development
          practices.
        </p>

        <h4 className="text-2xl font-bold my-4">
          ASP.NET Core Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Adopt the Dependency Injection pattern for better modularization.
          </li>
          <li>- Use the MVC architectural pattern for organizing code.</li>
          <li>
            - Leverage middleware components for handling cross-cutting
            concerns.
          </li>
          <li>
            - Implement authentication and authorization using built-in
            features.
          </li>
          <li>
            - Optimize performance through features like caching and
            asynchronous programming.
          </li>
        </ul>
        <br />
        <a
          href="https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          ASP.Net Core - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default AspNetCoreFramework;
