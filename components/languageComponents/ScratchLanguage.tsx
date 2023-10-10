/* eslint-disable @next/next/no-img-element */
const ScratchLanguage = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="text-center text-slate-50 max-w-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://img.shields.io/badge/Scratch-4D97FF?style=for-the-badge&logo=Scratch&logoColor=white"
            alt="Scratch"
            className="mb-10 h-16 rounded-sm"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">What is Scratch?</h2>
        <p className="mb-4">
          Scratch is a user-friendly programming language and platform created
          by MIT for teaching coding to beginners, especially children. It
          utilizes a visual, block-based interface where users stack code blocks
          to create animations, games, and stories, eliminating the need for
          traditional coding. Scratch fosters creativity and problem-solving
          skills, making it an ideal tool for introducing programming concepts
          to learners of all ages in an engaging and interactive manner.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Use Scratch?</h2>
        <p className="mb-6">
          Scratch is ideal for learning programming due to its user-friendly,
          block-based interface, making it accessible to beginners and children.
          It encourages creativity by enabling the creation of interactive
          animations, games, and stories, making learning an enjoyable
          experience. Scratch also enhances problem-solving skills through
          debugging and project improvement. Widely used in education, it serves
          as a valuable resource for teachers and students to explore coding and
          computational thinking in an engaging and accessible manner.
        </p>

        <h4 className="text-2xl font-bold my-4">
          Scratch Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Scratch uses block-based visual programming instead of traditional
            text-based coding.
          </li>
          <li>
            - Users assemble colorful code blocks to represent programming
            instructions.
          </li>
          <li>
            - Blocks connect for sequences and control structures like loops and
            conditionals.
          </li>
          <li>
            - Personalization of sprites and backgrounds allows event-driven
            interactivity.
          </li>
          <li>
            - Scratch&apos;s design encourages creativity and learning through
            innovative project development.
          </li>
        </ul>
        <br />
        <a
          href="https://scratch.mit.edu/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Scratch - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ScratchLanguage;
