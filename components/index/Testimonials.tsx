/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Testimonial as TestimonialType } from "../../types";

const Testimonial: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-primary">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 text-gray-400"
          fill="none"
          viewBox="0 0 20 14"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 4v8l-4-4H3V4h6zm8 0v8l-4-4h-2V4h6z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center">
        <p className="mb-4 text-center text-gray-200 max-w-xl text-xl font-primary">
          {testimonial.text}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <a href={testimonial.url} target="_blank" rel="noopener noreferrer">
          <img
            className="w-28 mr-8 mt-4 rounded-full border border-gray-200"
            src={testimonial.imageUrl}
            alt={testimonial.name}
          />
        </a>

        <span className="text-gray-400 text-2xl">{testimonial.name}</span>
      </div>

      <hr className="mt-10 max-w-2xl mx-auto border-t-1 border-slate-700" />
    </div>
  );
};

export default Testimonial;
