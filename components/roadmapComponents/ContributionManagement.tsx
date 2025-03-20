const ContributionManagement = () => {
  return (
    <div className='bg-primary flex items-center justify-center'>
      <div className='max-w-2xl py-10 text-center'>
        <h1 className='mb-6 text-3xl font-bold'>
          Reviewing and Managing Contributions
        </h1>
        <p className='mb-4'>
          The heartbeat of any open-source project lies in its contributions.
          Ensuring the quality and relevance of these contributions is
          paramount. This not only guarantees the robustness and reliability of
          the software but also nurtures a culture of excellence within the
          community. Let&apos;s delve into the core aspects of managing
          contributions.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          Best Practices for Code Reviews
        </h2>
        <p className='mb-4'>
          Code reviews serve as the gateway to quality. They facilitate
          knowledge transfer, prevent bugs, and ensure consistency. When
          reviewing, it&apos;s essential to:
          <ul className='mt-2 list-disc pl-5'>
            <li>Understand the context and purpose of the contribution.</li>
            <li>
              Ensure code aligns with the project&apos;s style and standards.
            </li>
            <li>Check for potential security vulnerabilities.</li>
            <li>Encourage simplicity and readability over cleverness.</li>
          </ul>
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          Providing Constructive Feedback
        </h2>
        <p className='mb-4'>
          Feedback bridges the gap between the present and potential. When
          offering feedback:
          <ul className='mt-2 list-disc pl-5'>
            <li>Be specific and clear in your comments.</li>
            <li>Highlight the positives along with areas of improvement.</li>
            <li>Ask questions instead of giving direct orders.</li>
            <li>Remember the human aspect – be kind and empathetic.</li>
          </ul>
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          Continuous Integration (CI) and Continuous Deployment (CD)
        </h2>
        <p className='mb-6'>
          CI/CD pipelines automate the process of testing and deploying code,
          ensuring that contributions are continuously merged and delivered to
          the production environment. In open source:
          <ul className='mt-2 list-disc pl-5'>
            <li>
              CI helps maintain code quality by automatically testing
              contributions against predefined criteria.
            </li>
            <li>
              CD ensures that validated contributions are smoothly integrated
              into the live environment.
            </li>
            <li>
              Together, they reduce manual efforts, speed up the release
              process, and amplify the reliability of the software.
            </li>
          </ul>
        </p>

        <p>
          In conclusion, effectively managing contributions is the linchpin to a
          thriving open-source project. It upholds the project&apos;s quality
          while fostering a culture of collaboration, respect, and continuous
          improvement.
        </p>
      </div>
    </div>
  )
};

export default ContributionManagement;
