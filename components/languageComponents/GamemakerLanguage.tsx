/* eslint-disable @next/next/no-img-element */
const GamemakerLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://img.shields.io/badge/Gamemaker-%50C878.svg?style=for-the-badge&logo=gamemaker&logoColor=white"
              alt="Gamemaker"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is Gamemaker?</h2>
          <p className="mb-4">
          GameMaker Language is used to program games in two different ways: by placing blocks to "write" code visually, or by writing code manually. The first option, GML Visual, is best suited for beginners and hobbyists who want to get started making their own games quickly. The second option, GML Code, allows you to harness the full power of GameMaker Language by writing your code manually. While GML Visual is easier to start with, GML Code is still an easy-to-use programming language with powerful features (Functions, Methods, Structs & Constructors, etc.).
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use Gamemaker?</h2>
          <p className="mb-6">
          GameMaker is an excellent choice for game development due to its user-friendly interface and flexibility. It caters to both beginners and experienced developers with its intuitive drag-and-drop system and the powerful GameMaker Language (GML). This combination allows for quick prototyping and the creation of complex games, making GameMaker a versatile tool in the game development toolkit.
          </p>
  
          <h4 className="text-2xl font-bold my-4">
          Gamemaker Best Practices and Coding Style Guide
          </h4>
          <ul>
            <li>- Use clear, consistent names for variables and functions.</li>
            <li>
              - Load and unload game resources efficiently.
            </li>
            <li>
              - Group related code; use scripts for modularity.
            </li>
            <li>
              - Regularly comment code for clarity.
            </li>
            <li>- Implement error handling and use the debugger often.</li>
          </ul>
          <br />
          <a
            href="https://manual.yoyogames.com/GameMaker_Language/GML_Overview/GML_Overview.htm"
            className="text-xl font-bold underline hover:text-blue-400"
          >
            Gamemaker Language - Official Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default GamemakerLanguage;
  