import React from 'react'

const AIContent = () => {
  const aiCodeEditors = [
    {
      name: 'Cursor',
      description:
        'An AI-first code editor that combines the power of GPT-4 with a modern development environment.',
      features: [
        'AI-powered code generation and editing',
        'Natural language to code conversion',
        'Real-time pair programming',
        'Intelligent code search and navigation',
        'Seamless integration with existing workflows'
      ],
      link: 'https://cursor.sh'
    }
  ]

  const aiCodingAssistants = [
    {
      name: 'ChatGPT',
      description:
        "OpenAI's large language model that can assist with code generation, debugging, and explaining complex programming concepts.",
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
      description:
        "Anthropic's AI assistant known for its strong coding capabilities and ability to handle complex technical discussions.",
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
      description:
        "Google's most capable AI model, offering advanced coding assistance and multimodal capabilities.",
      features: [
        'Code generation in multiple languages',
        'Understanding code from screenshots',
        'Technical problem-solving',
        'Code explanation and documentation',
        "Integration with Google's ecosystem"
      ],
      link: 'https://gemini.google.com'
    },
    {
      name: 'Grok',
      description:
        "X's (formerly Twitter) AI model known for real-time data analysis and coding assistance.",
      features: [
        'Real-time code suggestions',
        'Access to current development trends',
        'Contextual coding assistance',
        "Integration with X's platform",
        'Witty and creative problem-solving'
      ],
      link: 'https://grok.x.ai'
    },
    {
      name: 'Copilot',
      description:
        "GitHub's AI-powered coding assistant that integrates directly into your development environment.",
      features: [
        'Real-time code suggestions',
        'Context-aware completions',
        'Natural language to code conversion',
        'Multi-line code generation',
        'Documentation generation'
      ],
      link: 'https://github.com/features/copilot'
    },
    {
      name: 'Codeium',
      description:
        'A free AI-powered coding assistant that provides intelligent code completion and chat capabilities.',
      features: [
        'Free unlimited code completions',
        'AI-powered chat interface',
        'Multi-language support',
        'IDE integration',
        'Code search and navigation'
      ],
      link: 'https://codeium.com'
    },
    {
      name: 'Tabnine',
      description:
        'An AI assistant that helps developers write code faster with intelligent code completion.',
      features: [
        'AI-powered code completion',
        'Team learning capabilities',
        'Privacy-focused',
        'Multiple language support',
        'Custom model training'
      ],
      link: 'https://www.tabnine.com'
    }
  ]

  const localAIPlatforms = [
    {
      name: 'Anything LLM',
      description:
        'A full-stack application that enables you to run your own private AI assistant with local models.',
      features: [
        'Local model deployment',
        'Private document processing',
        'Customizable UI',
        'Multiple model support',
        'Document embedding and search'
      ],
      link: 'https://github.com/anythingllm/anythingllm'
    },
    {
      name: 'LocalAI',
      description:
        'A self-hosted, community-driven alternative to OpenAI API that runs on consumer hardware.',
      features: [
        'Multiple model support',
        'REST API compatible with OpenAI',
        'CPU/GPU inference',
        'Docker deployment',
        'Community-driven model support'
      ],
      link: 'https://github.com/go-skynet/LocalAI'
    },
    {
      name: 'Ollama',
      description:
        'A lightweight, extensible framework for running large language models locally.',
      features: [
        'Easy model management',
        'Simple API',
        'Multiple model support',
        'Cross-platform compatibility',
        'Lightweight and fast'
      ],
      link: 'https://ollama.ai'
    },
    {
      name: 'Text Generation WebUI',
      description:
        'A web interface for running various language models locally.',
      features: [
        'Multiple model support',
        'Chat interface',
        'Model training capabilities',
        'Extensions support',
        'GPU acceleration'
      ],
      link: 'https://github.com/oobabooga/text-generation-webui'
    }
  ]

  const aiModels = [
    {
      name: 'GPT-4',
      description:
        "OpenAI's most advanced model, offering state-of-the-art performance across various tasks.",
      features: [
        'Advanced reasoning capabilities',
        'Multimodal support',
        'Large context window',
        'High accuracy',
        'Broad knowledge base'
      ],
      link: 'https://openai.com/gpt-4'
    },
    {
      name: 'Claude 3',
      description:
        "Anthropic's latest model family, offering improved performance and safety features.",
      features: [
        'Enhanced reasoning',
        'Improved accuracy',
        'Better context understanding',
        'Advanced safety measures',
        'Multiple model sizes'
      ],
      link: 'https://www.anthropic.com/claude'
    },
    {
      name: 'Llama 2',
      description:
        "Meta's open-source large language model, available in various sizes.",
      features: [
        'Open source',
        'Multiple model sizes',
        'Commercial use allowed',
        'Strong performance',
        'Community support'
      ],
      link: 'https://ai.meta.com/llama'
    },
    {
      name: 'Mistral',
      description:
        'A series of efficient open-source language models with strong performance.',
      features: [
        'Open source',
        'Efficient inference',
        'Strong performance',
        'Multiple model sizes',
        'Commercial use allowed'
      ],
      link: 'https://mistral.ai'
    }
  ]

  const renderSection = (title: string, items: any[]) => (
    <div className='mb-12'>
      <h2 className='mb-6 text-3xl font-bold'>{title}</h2>
      <div
        className={`grid w-full max-w-4xl gap-8 ${items.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}
      >
        {items.map((item, index) => (
          <div key={index} className='bg-background-2 rounded-lg p-6 shadow-lg'>
            <h3 className='text-text-1 mb-4 text-2xl font-semibold'>
              {item.name}
            </h3>
            <p className='text-text-2 mb-4'>{item.description}</p>
            <h4 className='text-text-1 mb-2 text-xl'>Key Features:</h4>
            <ul className='text-text-2 mb-4 list-disc pl-5'>
              {item.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary cursor-pointer hover:underline'
            >
              Learn more about {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className='container mx-auto px-4 py-8'>
      {renderSection('AI Code Editors', aiCodeEditors)}
      {renderSection('AI Coding Assistants', aiCodingAssistants)}
      {renderSection('Local AI Platforms', localAIPlatforms)}
      {renderSection('AI Models', aiModels)}
    </div>
  )
}

export default AIContent
