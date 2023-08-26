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
                        Here you&apos;ll find a collection of Youtube-channels
                        on a wide range of topics related to programming
                        languages, libraries, frameworks and software
                        development in general.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://www.youtube.com/@WebDevSimplified"
                                className="hover:underline text-blue-400"
                            >
                                Web Dev Simplified
                            </a>
                            <p>
                                Web Dev Simplified is all about teaching web
                                development skills and techniques in an
                                efficient and practical manner.
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@NetNinja"
                                className="hover:underline text-blue-400"
                            >
                                The Net Ninja
                            </a>
                            <p>
                                Black-belt your web development skills. Over
                                2000 free programming tutorial videos about: -
                                Modern JavaScript (beginner to advanced) -
                                Node.js - React - Vue.js - Firebase - MongoDB -
                                HTML & CSS - PHP & MySQL - Laravel - React
                                Native - Flutter - Open AI - SolidJS ...And many
                                more topics as well.
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@BroCodez"
                                className="hover:underline text-blue-400"
                            >
                                Bro Code
                            </a>
                            <p>
                                This channel is dedicated to providing free
                                education to those that can&apos;t afford
                                college, bootcamps, and whatever crap coding
                                gurus try to sell you.
                            </p>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@JamesQQuick"
                                className="hover:underline text-blue-400"
                            >
                                James Q Quick
                            </a>
                            <p>
                                I publish weekly videos about Web Development! I
                                am constantly learning the latest and greatest
                                in Web Development and am excited to help you do
                                the same.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default VideoTutorialResources;
