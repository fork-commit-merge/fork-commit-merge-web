/* eslint-disable @next/next/no-img-element */
const DelphiLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Delphi-E62431?style=for-the-badge&logo=delphi"
            alt="Delphi"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Delphi?</h2>
        <p className="mb-4">
          Delphi is a powerful and versatile programming language and integrated
          development environment (IDE) known for its rapid application
          development capabilities. It was originally developed by Borland, now
          Embarcadero Technologies, and is based on the Object Pascal language.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Delphi?</h2>
        <p className="mb-6">
          Delphi is widely used for building Windows desktop applications and has
          a strong focus on creating user-friendly, visual applications. It
          offers a comprehensive library of components and supports database
          connectivity, making it suitable for various software development
          projects, including database-driven applications and GUI-based tools.
        </p>

        <h4 className="text-2xl font-bold my-4">Delphi Best Practices and Tips</h4>
        <ul>
          <li>- Familiarize yourself with the Delphi component library.</li>
          <li>- Leverage visual design tools for GUI development.</li>
          <li>- Practice good software architecture principles for maintainability.</li>
          <li>- Explore Delphi&apos;s support for multi-platform development.</li>
          <li>- Stay updated with the latest Delphi releases and community resources.</li>
        </ul>
        <br />
        <a
          href="https://www.embarcadero.com/products/delphi"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Learn more about Delphi on Embarcadero&apos;s website
        </a>
      </div>
    </div>
  );
};

export default DelphiLanguage;
