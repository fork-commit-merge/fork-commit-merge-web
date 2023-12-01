/* eslint-disable @next/next/no-img-element */
const D3JSLibrary = () => {
  return (
    <div className='bg-primary flex items-center justify-center'>
      <div className='max-w-2xl  text-center'>
        <div className='flex flex-wrap items-center justify-center'>
          <img
            src='https://img.shields.io/badge/d3.js-black?style=for-the-badge&logo=d3.js&logoColor=orange'
            alt='D3.js'
            className='mb-10 h-16 rounded-sm'
          />
        </div>

        <h2 className='mb-4 text-2xl font-bold'>What is D3.js?</h2>
        <p className='mb-4'>
          D3 (or D3.js) is a free, open-source JavaScript library for
          visualizing data. Its low-level approach built on web standards offers
          unparalleled flexibility in authoring dynamic, data-driven graphics.
          For more than a decade D3 has powered groundbreaking and award-winning
          visualizations, become a foundational building block of higher-level
          chart libraries, and fostered a vibrant community of data
          practitioners around the world.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>Why Use D3.js?</h2>
        <p className='mb-6'>
          The name “D3” is short for data-driven documents, where documents
          refers to the Document Object Model (DOM) standard that represents the
          contents of a webpage. While some of D3’s modules (such as selections
          and transitions) touch the DOM, others (including scales and shapes)
          only operate on data. D3 can also be paired with web frameworks such
          as React, Vue, and Svelte.
        </p>

        <h4 className='my-4 text-2xl font-bold'>
          D3.js Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>Choose the right chart type.</li>
          <li>Optimize the data processing.</li>
          <li>Use scales and axes wisely.</li>
          <li>Add interactivity and animation.</li>
          <li>Apply design principles.</li>
          <li>Test and debug.</li>
        </ul>

        <br />
        <a
          href='https://d3js.org/getting-started'
          className='text-xl font-bold underline hover:text-blue-400'
        >
          D3.js - Official Documentation
        </a>
      </div>
    </div>
  )
}

export default D3JSLibrary
