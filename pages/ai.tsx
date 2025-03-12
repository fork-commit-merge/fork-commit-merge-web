import AIContent from '../components/ai/AIContent'

export default function AI() {
  const editorExtensions = [
    {
      name: 'Augment Code',
      editor: 'Multiple IDEs',
      description: 'AI-powered code assistant that enhances developer productivity with intelligent code completion, refactoring suggestions, and documentation generation across various development environments.',
      installSteps: [
        'Visit augmentcode.com',
        'Choose your preferred IDE',
        'Follow the IDE-specific installation guide',
        'Install the Augment Code extension',
        'Sign in with your Augment Code account'
      ],
      link: 'https://www.augmentcode.com/'
    },
    {
      name: 'Cursor',
      editor: 'Standalone Editor',
      description: 'AI-first code editor built for pair programming with AI.',
      installSteps: [
        'Visit cursor.sh',
        'Download the appropriate version for your OS',
        'Install and launch the application',
        'Sign up for a Cursor account'
      ],
      link: 'https://cursor.sh'
    },
    {
      name: 'Tabnine',
      editor: 'Multiple IDEs',
      description: 'AI code completion tool that supports multiple programming languages and IDEs.',
      installSteps: [
        'Visit tabnine.com',
        'Choose your IDE',
        'Follow IDE-specific installation instructions',
        'Create or sign in to Tabnine account'
      ],
      link: 'https://www.tabnine.com'
    }
  ]

  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/ide.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
          <h1 className='mb-6 text-center text-4xl font-bold'>
            AI in Development
          </h1>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center px-5 py-10'>
        <h2 className='mb-6 text-3xl font-bold'>What is AI in Development?</h2>
        <p className='mb-8 max-w-3xl text-center'>
          Artificial Intelligence (AI) has revolutionized software development by providing powerful tools
          that can assist with coding, debugging, and documentation. AI-powered development tools can help
          developers write better code faster, understand complex codebases, and automate repetitive tasks.
        </p>

        <h2 className='mb-6 text-3xl font-bold'>Popular AI Coding Assistants</h2>
        <AIContent />

        <div className='mt-12 max-w-4xl w-full'>
          <h2 className='mb-6 text-3xl font-bold text-center'>AI-Powered Editor Extensions</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {editorExtensions.map((ext, index) => (
              <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <h3 className='mb-2 text-2xl font-semibold'>{ext.name}</h3>
                <p className='mb-2 text-sm text-gray-400'>For {ext.editor}</p>
                <p className='mb-4'>{ext.description}</p>
                <h4 className='mb-2 text-xl'>Installation Steps:</h4>
                <ol className='mb-4 list-decimal pl-5'>
                  {ext.installSteps.map((step, stepIndex) => (
                    <li key={stepIndex} className='mb-1'>{step}</li>
                  ))}
                </ol>
                <a
                  href={ext.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer text-blue-400 hover:underline'
                >
                  Install {ext.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 max-w-3xl text-center'>
          <h2 className='mb-6 text-3xl font-bold'>Best Practices for Using AI Tools</h2>
          <ul className='list-disc text-left pl-5'>
            <li className='mb-3'>Always review and understand AI-generated code before using it</li>
            <li className='mb-3'>Use AI tools as assistants, not replacements for understanding</li>
            <li className='mb-3'>Keep security in mind when sharing code with AI services</li>
            <li className='mb-3'>Verify licenses and terms of use for AI-generated code</li>
            <li className='mb-3'>Combine multiple AI tools for better results</li>
            <li className='mb-3'>Keep your AI tools and extensions updated for the latest features</li>
            <li className='mb-3'>Use project-specific settings to maintain consistency</li>
            <li className='mb-3'>Be mindful of token usage and API rate limits</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
