/* eslint-disable @next/next/no-img-element */
const SolidJSFramework = () => {
  return (
    <div className='bg-primary flex items-center justify-center'>
      <div className='max-w-2xl text-center'>
        <div className='flex flex-wrap items-center justify-center'>
          <img
            src='https://img.shields.io/badge/Solid%20JS-blue?style=for-the-badge&logo=solid&logoColor=white'
            alt='SolidJS'
            className='mb-10 h-16 rounded-sm'
          />
        </div>

        <h2 className='mb-4 text-2xl font-bold'>What is Solid.js?</h2>
        <p className='mb-4'>
          Solid is a declarative JavaScript library for building user
          interfaces, developed by Ryan Carniato. It focuses on fine grained
          reactivity and compiler optimized rendering, enabling highly
          performant applications with minimal overhead. Solid uses JSX for
          templating, but unlike virtual DOM frameworks, it compiles templates
          to real DOM updates at build time.
        </p>

        <h2 className='mb-4 text-2xl font-bold'>Why Use Solid.js?</h2>
        <p className='mb-6'>
          Solid is ideal for developers seeking top-tier performance without
          sacrificing modern developer ergonomics. With no virtual DOM and a
          highly efficient reactivity model, Solid delivers blazing-fast
          rendering and extremely low memory usage. It's especially well-suited
          for performance-critical applications, interactive UIs, and projects
          that value fine control over reactivity.
        </p>

        <h4 className='my-4 text-2xl font-bold'>
          Solid.js Best Practices and Coding Style Guide
        </h4>
        <ul>
          <li>
            - Leverage Solid’s reactive primitives like `createSignal`,
            `createEffect`, and `createMemo`.
          </li>
          <li>
            - Avoid unnecessary state nesting to keep reactivity fine-grained.
          </li>
          <li>
            - Use JSX as the templating language, but remember it compiles to
            DOM instructions.
          </li>
          <li>
            - Minimize the use of external state management libraries. Solid's
            built-in reactivity is often sufficient.
          </li>
          <li>
            - Prefer composable functions and reusable components for clean,
            modular code.
          </li>
        </ul>

        <br />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://docs.solidjs.com/'
          className='text-xl font-bold underline hover:text-blue-400'
        >
          Solid.js - Official Documentation
        </a>
      </div>
    </div>
  )
}

export default SolidJSFramework
