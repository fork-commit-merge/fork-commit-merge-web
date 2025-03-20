const DocumentationOverview = () => {
  return (
    <div className='bg-primary flex items-center justify-center py-10'>
      <div className='max-w-2xl text-center'>
        <h1 className='mb-6 text-3xl font-bold'>
          Overview of Essential Open Source Documentation
        </h1>
        <p className='mb-4'>
          In the realm of open-source, proper documentation is the bridge
          between developers, contributors, and end users. More than just
          detailing code, documentation lays out the ethos of a project,
          navigates contributors through its intricacies, and fosters a
          community built on trust and respect. Let&apos;s delve deeper into the
          three pillars of open-source documentation: README, CONTRIBUTING
          guidelines, and CODE_OF_CONDUCT.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>README</h2>
        <p className='mb-4'>
          <strong>README</strong> is not just an introduction; it&apos;s a
          handshake, a first impression. Serving as the front page of any
          repository, it provides a clear overview of the project, its purpose,
          and its significance. Newcomers can find detailed setup instructions,
          understand the architecture, and get a sense of the project&apos;s
          roadmap. By creating a comprehensive README, maintainers ensure that
          anyone, irrespective of their familiarity, can get started with the
          project seamlessly.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>CONTRIBUTING Guidelines</h2>
        <p className='mb-4'>
          The heart of open source lies in its community-driven nature.{' '}
          <strong>CONTRIBUTING guidelines</strong> are the compass for this
          community. They chart out the path for those eager to contribute,
          detailing everything from setting up a development environment to the
          intricacies of submitting a pull request. They often cover code
          styles, testing protocols, and the process for reporting bugs or
          suggesting new features. By setting clear guidelines, projects can
          maintain code quality while ensuring contributions align with the
          project&apos;s direction.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>CODE_OF_CONDUCT</h2>
        <p className='mb-6'>
          Beyond code and contributions lies the heart and soul of any
          open-source community: its members. The{' '}
          <strong>CODE_OF_CONDUCT</strong> ensures this community thrives in a
          positive, inclusive environment. It outlines the behavior expected
          from every community member, from seasoned maintainers to first-time
          contributors. More than just setting rules, it lays the foundation for
          a culture of respect, tolerance, and support. Violations of this code
          are treated seriously, ensuring every member feels safe and respected.
        </p>

        <p>
          In essence, these documents are more than just text; they&apos;re the
          pillars of a successful open-source project. They guide, nurture, and
          protect the community, ensuring that the spirit of open-source
          collaboration remains vibrant and inclusive.
        </p>
      </div>
    </div>
  )
};

export default DocumentationOverview;
