import Link from 'next/link'
import { ides } from '../components/data/IDEInfo'

export default function IDE() {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/ide.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
          <h1 className='mb-6 text-center text-4xl font-bold'>
            IDEs: Integrated Development Environments
          </h1>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center px-5 py-10'>
        <h2 className='mb-6 text-3xl font-bold'>What is an IDE?</h2>
        <p className='mb-8 max-w-3xl text-center'>
          An Integrated Development Environment (IDE) is a software application
          that consolidates basic tools required for software testing and
          development. An IDE typically consists of a source code editor, build
          automation tools, and a debugger. Some IDEs, like Android Studio or
          Visual Studio, even offer more advanced features such as version
          control, databases, cloud services, and more. Why use an IDE? Using an
          IDE can significantly speed up the development process by offering a
          variety of tools and features under one roof.
        </p>
        <h4 className='mb-4 text-center text-2xl'>
          Here are a few reasons why developers use IDEs:
        </h4>
        <p className='mb-8 max-w-3xl text-center'>
          Efficiency: With everything in one place, developers can write, test,
          and debug code without needing to switch between different tools.
        </p>
        <p className='mb-8 max-w-3xl text-center'>
          Code Assistance: Many IDEs offer features like autocompletion, syntax
          highlighting, and suggestions, making the code-writing process
          smoother.
        </p>
        <p className='mb-8 max-w-3xl text-center'>
          Integrated Debugging: Integrated debuggers allow developers to test
          and debug their programs within the IDE, speeding up the development
          cycle.
        </p>
        <p className='mb-8 max-w-3xl text-center'>
          Extensions & Plugins: Most modern IDEs support a wide range of
          extensions and plugins, enabling developers to customize their
          environment and add even more functionalities.
        </p>
        <h2 className='mb-6 text-3xl font-bold'>A Brief History of IDEs</h2>
        <p className='mb-8 max-w-3xl text-center'>
          The concept of an IDE dates back to the early days of computing when
          programming tools started to be integrated into a single environment.
          One of the earliest examples of this was the Maestro I, developed in
          the 1970s for the PDP-11 minicomputers. As computers and programming
          languages evolved, so did IDEs. In the 1990s, with the rise of
          graphical user interfaces, IDEs like Microsoft&apos;s Visual Studio
          and Borland&apos;s Delphi became popular. With the increasing demand
          for web development, IDEs evolved to support a plethora of languages,
          platforms, and technologies, leading to the diverse range of options
          available today.
        </p>
        <p className='mb-8 max-w-3xl text-center'>
          Now, let&apos;s look at some popular IDEs:
        </p>
        <div className='grid w-full max-w-4xl gap-8 md:grid-cols-2'>
          {ides.map((ide, index) => (
            <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
              <h2 className='mb-4 text-2xl font-semibold'>{ide.name}</h2>
              <p className='mb-4'>{ide.description}</p>
              <h3 className='mb-2 text-xl'>Functionalities:</h3>
              <ul className='mb-4 list-disc pl-5'>
                {ide.functionalities.map((func, idx) => (
                  <li key={idx}>{func}</li>
                ))}
              </ul>
              <h3 className='mb-2 text-xl'>Supported Languages:</h3>
              <ul className='mb-4 list-disc pl-5'>
                {ide.supportedLanguages.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
              <Link href={ide.installLink} passHref>
                <span className='cursor-pointer text-blue-400 hover:underline'>
                  Install {ide.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
