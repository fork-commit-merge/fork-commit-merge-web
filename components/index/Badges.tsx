/* eslint-disable @next/next/no-img-element */
import React from "react";
import { badgesData } from "../data/badgesData";

const Badges: React.FC = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center mb-6 max-w-4xl mx-auto">
                {badgesData.map((badge, index) => (
                    <img
                        key={index}
                        src={badge.src}
                        alt={badge.alt}
                        className={`mr-1 mb-1 animate-wave-scale`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    />
                ))}
            </div>
        </>
    );
};

export default Badges;
