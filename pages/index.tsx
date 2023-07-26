// pages/index.tsx
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-950">
      <div className="mb-10">
        <Image
          className="mx-auto"
          src="/dev-gallery.png"
          alt="Dev Gallery Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="mt-5 text-5xl font-bold text-slate-50">
          Welcome to devgallery.io
        </h1>
        <p className="mt-2 text-lg font-light text-gray-100">
          Explore amazing projects developed by talented developers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
            <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
        <ProjectCard
          projectName="Project 1"
          developerName="Developer 1"
          imageUrl="/project1.jpg"
          content="This is a brief description of the project."
          projectLink="https://project1.example.com"
        />
      </div>
    </main>
  );
}
