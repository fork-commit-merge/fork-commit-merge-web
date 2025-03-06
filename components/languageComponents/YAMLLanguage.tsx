/* eslint-disable @next/next/no-img-element */
const YAMLLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center  max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Yaml-60B5CC?style=for-the-badge&logo=yaml&logoColor=white"
            alt="Yaml"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is YAML?</h2>
        <p className="mb-4">
          YAML Ain&apos;t Markup Language (YAML) is a data serialization
          language that is consistently listed as one of the most popular
          programming languages. It&apos;s often used as a format for
          configuration files, but its object serialization abilities make it a
          viable replacement for languages like JSON.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use YAML?</h2>
        <p className="mb-6">
          YAML is often used to build configuration files, such as github
          actions or AWS and Kubernetes to define application configurations, or
          processes such as CI/CD automations. It relies less on punctuation in
          comparisson to JSON. This prompts to have much cleaner and concise
          files.
        </p>

        <h4 className="text-2xl font-bold my-4">
          YAML Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>- Indentation: An indentation of 2 spaces must be used.</li>
          <li>
            - Booleans: We should avoid the use of truthy boolean values in
            YAML. They often throw off people new to YAML. Therefore, we only
            allow the use of true and false as boolean values, in lower case.
          </li>
          <li>Strings are preferably quoted with double quotes (`&quot;`).</li>
          <li>
            - Comments: Comments should start with a capital letter and have a
            space between the comment hash # and the start of the comment.
          </li>
          <li>
            - Mappings: can be written in different styles, however, we only
            allow the use of block style mappings.
          </li>
          <li>
            - Null values should be implicitly marked. The use of explicit null
            values should be avoided (~ and null).
          </li>
        </ul>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yaml.org/"
          className="text-xl font-bold underline hover:text-blue-400">
          YAML - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default YAMLLanguage;
