/* eslint-disable @next/next/no-img-element */
const ActionScriptLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/0f/ActionScript_icon.png"
              alt="ActionScriptLanguage"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is ActionScript?</h2>
          <p className="mb-4">
            ActionScript 3 is an object-oriented programming language originally 
            created by Macromedia Inc., which continued to evolve after being 
            acquired by Adobe Systems. It is a superset of the ECMAScript standard 
            (more widely known as JavaScript) with a stronger focus on classes, 
            interfaces, and objects.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use ActionScript?</h2>
          <p className="mb-6">
            ActionScript is used primarily for the development of websites 
            and software targeting the Adobe Flash platform, originally finding 
            use on web pages in the form of embedded SWF files. ActionScript 3 
            is also used with the Adobe AIR system for the development of desktop 
            and mobile applications.
          </p>
  
          <h4 className="text-2xl font-bold my-4">
            ActionScript Best Practices and Coding Style Guide
          </h4>
          <ul>
            <li>
              - The less AS used, the better the file performance. Always 
                minimize the amount of code written to perform a given task.
            </li>
            <li>
              - Publish SWFs to Flash version 8 or better.
            </li>
            <li>
              - Avoid heavy string manipulation.
            </li>
            <li>
              - Do not use &apos;with&apos; statements inside functions. This operator turns off optimizations.
            </li>
            <li>
              - Use the &quot;var&quot; keyword whenever possible.
            </li>
          </ul>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.adobe.com/en_US/as3/dev/as3_devguide.pdf"
            className="text-xl font-bold underline hover:text-blue-400"
          >
            ActionScript - Official Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default ActionScriptLanguage;
  