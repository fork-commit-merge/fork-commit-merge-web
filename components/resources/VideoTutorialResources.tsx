import React from "react";

const VideoTutorialResources: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-20">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Programming Video Tutorials
          </h2>
          <p className="mb-4 max-w-prose">
            Here you&apos;ll find a collection of Youtube-channels on a wide
            range of topics related to programming languages, libraries,
            frameworks and software development in general.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@WebDevSimplified"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Web Dev Simplified</span>
                <p className="text-sm mt-1">Web Dev Simplified is all about teaching web development skills and techniques in an efficient and practical manner.</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@NetNinja"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">The Net Ninja</span>
                <p className="text-sm mt-1">Black-belt your web development skills. Over 2000 free programming tutorial videos about: - Modern JavaScript (beginner to advanced) - Node.js - React - Vue.js - Firebase - MongoDB - HTML & CSS - PHP & MySQL - Laravel - React Native - Flutter - Open AI - SolidJS ...And many more topics as well.</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@BroCodez"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">Bro Code</span>
                <p className="text-sm mt-1">This channel is dedicated to providing free education to those that can&apos;t afford college or bootcamps.</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@JamesQQuick"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">James Q Quick</span>
                <p className="text-sm mt-1">I publish weekly videos about Web Development! I am constantly learning the latest and greatest in Web Development and am excited to help you do the same.</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/c/Freecodecamp"
                className="block p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="font-medium">freeCodeCamp</span>
                <p className="text-sm mt-1">Learn to code for free. freeCodeCamp is a community of people from all around the world who are learning to code together. You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VideoTutorialResources;
