/* eslint-disable @next/next/no-img-element */
const EmberFramework = () => {
  return (
    <div className="flex items-center justify-center bg-primary">
      <div className="max-w-2xl text-center ">
        <div className="flex flex-wrap items-center justify-center">
          <img
            src="https://img.shields.io/badge/ember.js-1C1E24?style=for-the-badge&logo=ember.js&logoColor=#D04A37"
            alt="Ember"
            className="h-16 mb-10 rounded-sm"
          />
        </div>

        <h2 className="mb-4 text-2xl font-bold">What is Ember.js?</h2>
        <p className="mb-4">
          Ember (or Ember.js) is a productive, battle-tested JavaScript
          framework for building modern web applications. It includes everything
          you need to build rich UIs that work on any device. With scalable UI
          architecture baked-in from the start, you&apos;ll be working with the
          same patterns these organizations use every step of the way.
        </p>

        <h2 className="mb-4 text-2xl font-bold">Why Use Ember.js?</h2>
        <p className="mb-6">
          Ember&apos;s out-of-the-box experience has everything you need to
          start building on day one and keep shipping for years. Benefit from
          our years of experience to help your team be productive—faster. Ember
          CLI streamlines Ember app development with code generators, built-in
          development tools, and easy production deployment. Its powerful router
          supports dynamic URLs and async data loading. Ember Data simplifies
          data access, while comprehensive testing tools ensure code quality.
          Ember&apos;s Glimmer rendering engine ensures top-notch performance,
          with seamless version upgrades and a supportive community.
        </p>

        <h4 className="my-4 text-2xl font-bold">Ember.js Best Practices</h4>
        <ul>
          <li>
            - Emphasize the use of Ember Data for managing data in your
            application. It simplifies data handling and maintains data
            consistency effectively.
          </li>
          <li>
            - Make it a point to follow Ember&apos;s established naming and
            coding conventions. This practice will make your code more
            understandable and easier to maintain.
          </li>
          <li>
            - Embrace Ember&apos;s component-based architecture. It allows you
            to create modular and reusable UI elements, making your development
            process more efficient.
          </li>
          <li>
            - Develop a thorough testing strategy. This should include unit,
            integration, and acceptance tests to ensure your Ember application
            is reliable and robust.
          </li>
        </ul>
        <br />
        <a
          href="https://guides.emberjs.com/release/tutorial/part-1/"
          className="text-xl font-bold underline hover:text-blue-400"
        >
          Ember.js - Official Documentation
        </a>
      </div>
    </div>
  );
};

export default EmberFramework;
