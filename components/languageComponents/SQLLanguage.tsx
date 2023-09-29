/* eslint-disable @next/next/no-img-element */
const SQLLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/sql-%23FF4500.svg?style=for-the-badge&logo=sqlite&logoColor=white"
            alt="SQL"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is SQL?</h2>
        <p className="mb-4">
          SQL (Structured Query Language) is a domain-specific language designed
          for managing data stored in a relational database management system
          (RDBMS). Developed in the early 1970s, SQL allows users to perform
          tasks such as querying, updating, and inserting data in a structured
          and efficient manner.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use SQL?</h2>
        <p className="mb-6">
          SQL is a foundational skill for roles such as database administrators,
          data analysts, and back-end developers. Its query language is highly
          expressive, allowing complex operations on data. SQL databases are
          known for their ACID (Atomicity, Consistency, Isolation, Durability)
          properties, making them reliable for business applications. SQL also
          has broad industry support and numerous variants tailored for specific
          use-cases.
        </p>

        <h4 className="text-2xl font-bold my-4">
          SQL Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Always use prepared statements to prevent SQL injection attacks.
          </li>
          <li>- Use meaningful table and column names.</li>
          <li>- Keep your SQL queries simple and optimize for readability.</li>
          <li>- Avoid using SELECT *; specify the columns you need.</li>
          <li>- Use indexing judiciously for performance optimization.</li>
        </ul>
        <br />
        <a
          href="https://dev.mysql.com/doc/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          MySQL - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default SQLLanguage;
