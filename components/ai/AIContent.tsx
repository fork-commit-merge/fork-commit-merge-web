import React from 'react'

const AIContent = () => {
  const aiTools = [
    {
      name: 'ChatGPT',
      description: 'OpenAI\'s large language model that can assist with code generation, debugging, and explaining complex programming concepts.',
      features: [
        'Code generation and completion',
        'Code review and optimization',
        'Documentation writing',
        'Debugging assistance',
        'Natural language programming explanations'
      ],
      link: 'https://chat.openai.com'
    },
    {
      name: 'Claude',
      description: 'Anthropic\'s AI assistant known for its strong coding capabilities and ability to handle complex technical discussions.',
      features: [
        'Advanced code analysis',
        'Technical documentation',
        'System design discussions',
        'Code refactoring suggestions',
        'Security best practices'
      ],
      link: 'https://claude.ai'
    },
    {
      name: 'Gemini',
      description: 'Google\'s most capable AI model, offering advanced coding assistance and multimodal capabilities.',
      features: [
        'Code generation in multiple languages',
        'Understanding code from screenshots',
        'Technical problem-solving',
        'Code explanation and documentation',
        'Integration with Google\'s ecosystem'
      ],
      link: 'https://gemini.google.com'
    },
    {
      name: 'Grok',
      description: 'X\'s (formerly Twitter) AI model known for real-time data analysis and coding assistance.',
      features: [
        'Real-time code suggestions',
        'Access to current development trends',
        'Contextual coding assistance',
        'Integration with X\'s platform',
        'Witty and creative problem-solving'
      ],
      link: 'https://grok.x.ai'
    },
    {
      name: 'Copilot',
      description: 'GitHub\'s AI-powered coding assistant that integrates directly into your development environment.',
      features: [
        'Real-time code suggestions',
        'Context-aware completions',
        'Natural language to code conversion',
        'Multi-line code generation',
        'Documentation generation'
      ],
      link: 'https://github.com/features/copilot'
    }
  ]

  return (
    <div className='grid w-full max-w-4xl gap-8 md:grid-cols-2'>
      {aiTools.map((tool, index) => (
        <div key={index} className='rounded-lg bg-gray-800 p-6 shadow-lg'>
          <h2 className='mb-4 text-2xl font-semibold'>{tool.name}</h2>
          <p className='mb-4'>{tool.description}</p>
          <h3 className='mb-2 text-xl'>Key Features:</h3>
          <ul className='mb-4 list-disc pl-5'>
            {tool.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          <a
            href={tool.link}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-blue-400 hover:underline'
          >
            Try {tool.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default AIContent
