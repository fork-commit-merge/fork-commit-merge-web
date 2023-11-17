/* eslint-disable @next/next/no-img-element */
const PonyLanguage = () => {
    return (
      <div className="flex justify-center items-center bg-primary">
        <div className="text-center  max-w-2xl">
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqupcFCVVJ8ygtf8GnIJ28aft1hrHIOGf47RR2MqY0nQ&s"
              alt="Pony"
              className="mb-10 h-16 rounded-sm"
            />
          </div>
  
          <h2 className="text-2xl font-bold mb-4">What is Pony?</h2>
          <p className="mb-4">
            Pony is an open-source, object-oriented, actor-model, capabilities-secure, 
            high-performance programming language. Pony was designed by Sylvan Clebsch 
            and open-sourced in May 2015.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Why Use Pony?</h2>
          <p className="mb-6">
            Pony makes it easy to write fast, safe, efficient, highly 
            concurrent programs. The Pony type system introduces a novel concept: 
            “reference capabilities”. Reference capabilities allow you to label different 
            bits of data based on how that data can be shared. The Pony compiler will then 
            verify that you are in fact correctly using the data based on the labels you 
            provide. Reference capabilities combined with Pony&apos;s actor model of concurrency 
            makes for a powerful pairing
          </p>
  
          <h4 className="text-2xl font-bold my-4">
            Pony Best Practices and Coding Style Guide
          </h4>
          <ul>
            <li>- Use reference capabilities to safely pass data.</li>
            <li>
              - The relationship in reference capabilities can be thought of in terms 
              of three distinct categories - mutable, immutable, and opaque.
            </li>
            <li>
              - To maximise performance you need to design your code to 
              allocate as few objects as possible while triggering as few allocations from 
              the pool allocator.
            </li>
            <li>
              - Where possible use simple error messages for specific error cases.
            </li>
          </ul>
          <br />
          <a
            href="https://devdocs.io/pony/"
            className="text-xl font-bold underline hover:text-blue-400"
          >
            Pony - Official Documentation
          </a>
        </div>
      </div>
    );
  };
  
  export default PonyLanguage;
  