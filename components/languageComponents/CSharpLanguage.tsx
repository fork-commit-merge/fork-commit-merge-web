/* eslint-disable @next/next/no-img-element */
const CSharpLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
            alt="C#"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is C#?</h2>
        <p className="mb-4">
          C# (pronounced &quot;C-Sharp&quot;) is a high-level, statically-typed,
          object-oriented programming language developed by Microsoft. It was
          first released in 2000 as part of the .NET framework. C# is designed
          to be a simple, modern, and type-safe language.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use C#?</h2>
        <p className="mb-6">
          C# is versatile and can be used to develop a wide variety of
          applications, from desktop to web and mobile applications. It provides
          a large standard library, strong type checking, and robust debugging
          features. It&apos;s commonly used for building Windows desktop
          applications and games using Unity.
        </p>

        <h4 className="text-2xl font-bold my-4">
          C# Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Use PascalCase for method and property names, and camelCase for
            local variables.
          </li>
          <li>- Make use of properties instead of public fields.</li>
          <li>- Leverage LINQ for data manipulation.</li>
          <li>- Always encapsulate collection fields using properties.</li>
          <li>- Use `async` and `await` for asynchronous programming.</li>
        </ul>
        <br />
        <a
          href="https://docs.microsoft.com/en-us/dotnet/csharp/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          C# - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default CSharpLanguage;
