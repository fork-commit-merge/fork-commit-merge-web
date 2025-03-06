/* eslint-disable @next/next/no-img-element */
const VisualBasicLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://mspoweruser.com/wp-content/uploads/2020/03/visual-basic.jpg"
              alt="VisualBasicLanguage"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is VisualBasic?</h2>
          <p className="mb-4">
            Visual Basic (VB) is an object-oriented programming language (OOP) 
            introduced by Microsoft in 1991. It derives from an earlier programming 
            language called BASIC, which stands for &quot;Beginners All-purpose Symbolic 
            Instruction Code&quot;. VB was designed to enable rapid application development 
            (RAD) of graphical-user interface-based (GUI-based) applications and access 
            to local and remote databases.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use VisualBasic?</h2>
          <p className="mb-6">
            The best part about Visual Basic programming is its flexibility. Front-End 
            Developers and Full-Stack Developers can use VB to create customized applications 
            that run in Windows or web applications. Plus, it can run from any browser or device.
            VB is still one of the quickest and easiest ways to create applications that rely 
            on forms, selections, and inputs. It&apos;s also a popular choice for developing console 
            applications — applications that run using only a command line rather than a GUI.
          </p>
  
          <h4 className="text-2xl font-bold my-4">
            VisualBasic Best Practices and Coding Style Guide
          </h4>
          <ul>
            <li>
              - Do not use &quot;My&quot; or &quot;my&quot; as part of a variable name. This 
                practice creates confusion with the My objects.
            </li>
            <li>
              - Insert tabs as spaces, and use smart indenting with four-space indents.
            </li>
            <li>
              - Insert one space between the comment delimiter (&apos;) and the comment text.
            </li>
            <li>
              - Use string interpolation to concatenate short strings.
            </li>
          </ul>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.adobe.com/en_US/as3/dev/as3_devguide.pdf"
            className="text-xl font-bold underline hover:text-blue-400"
          >
            VisualBasic - Official Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default VisualBasicLanguage;
  