import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    question: 'How Do I Start Contributing?',
    answer:
      "Begin by finding a project that aligns with your skills and interests. Read the project's contribution guidelines and start with beginner-friendly issues. You can find more information about contributing to open source in our How to Contribute and Resources sections.",
    category: 'Getting Started'
  },
  {
    question: 'Can I Monetize Open Source Projects?',
    answer:
      'Yes, but it depends on the license and your business model. Many projects make money through donations, sponsorships, or dual licensing.',
    category: 'Business'
  },
  {
    question: 'What is a License?',
    answer:
      "A license defines what others can and can't do with the project's code. Make sure to follow the license terms when using or contributing to a project.",
    category: 'Legal'
  },
  {
    question: 'How Do I Choose an Open Source License?',
    answer:
      'Consider your project goals. If you want to encourage collaboration, a permissive license like MIT or Apache may be suitable. For more control, a copyleft license like GPL could be a better fit.',
    category: 'Legal'
  },
  {
    question: 'What are the Best Practices for Code Contributions?',
    answer:
      "Always follow the project's contribution guidelines. Create a new branch for each feature or fix, keep your code clean, and make your commit messages descriptive.",
    category: 'Best Practices'
  },
  {
    question: 'How Do I Find Beginner-Friendly Projects?',
    answer:
      'Look for projects with "good first issue" or "beginner-friendly" labels on GitHub. Many projects also have dedicated sections for newcomers. You can also join open source communities on Discord, Slack, or forums to get recommendations.',
    category: 'Getting Started'
  },
  {
    question: 'What Should I Do Before Submitting a Pull Request?',
    answer:
      "Before submitting a PR, ensure your code follows the project's style guide, write tests if required, update documentation, and make sure all tests pass. It's also good practice to discuss significant changes with maintainers first.",
    category: 'Best Practices'
  },
  {
    question: 'How Can I Build a Portfolio Through Open Source?',
    answer:
      'Contributing to open source projects helps you build a visible portfolio of work. Focus on projects that align with your career goals, document your contributions, and highlight your work on your resume and personal website.',
    category: 'Career'
  },
  {
    question: 'What Are the Different Types of Open Source Licenses?',
    answer:
      'Common licenses include MIT (very permissive), Apache (permissive with patent rights), GPL (copyleft requiring derivative works to also be open source), and BSD (permissive with minimal restrictions). Each has different implications for how code can be used and distributed.',
    category: 'Legal'
  },
  {
    question: 'How Do I Handle Rejection of My Contributions?',
    answer:
      'Rejection is common in open source. Take feedback constructively, ask for clarification if needed, and be willing to revise your work. Remember that maintainers are volunteers with limited time, so be patient and respectful.',
    category: 'Community'
  },
  {
    question: 'Can I Contribute Without Coding?',
    answer:
      'Absolutely! Open source projects need help with documentation, testing, bug reporting, design, community management, and more. Many projects have non-coding tasks labeled as "good first issue" or "documentation".',
    category: 'Getting Started'
  },
  {
    question: 'How Do I Maintain an Open Source Project?',
    answer:
      "Maintaining a project involves reviewing contributions, responding to issues, planning features, and ensuring code quality. It's important to set clear contribution guidelines, establish a code of conduct, and build a community of contributors.",
    category: 'Project Management'
  },
  {
    question: 'What Are the Tax Implications of Open Source Work?',
    answer:
      'Tax implications vary by country and how you receive compensation. Donations and sponsorships may be considered income. For significant earnings, consult a tax professional. Many countries have specific rules for open source income.',
    category: 'Business'
  },
  {
    question: 'How Do I Deal with Toxic Community Members?',
    answer:
      'Establish and enforce a clear code of conduct. Document unacceptable behavior, provide warnings when necessary, and be prepared to take action against repeat offenders. Focus on creating an inclusive environment for all contributors.',
    category: 'Community'
  },
  {
    question: 'What Tools Should I Use for Open Source Development?',
    answer:
      'Essential tools include Git for version control, GitHub/GitLab for hosting, issue trackers for project management, CI/CD tools for testing, and communication platforms like Discord or Slack. Many projects also use specific linters and formatters.',
    category: 'Best Practices'
  }
]

const categories = Array.from(new Set(faqs.map(faq => faq.category)))

const FAQAccordion = ({
  faq,
  isOpen,
  onToggle
}: {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div className='mb-4'>
      <button
        onClick={onToggle}
        className='flex w-full items-center justify-between rounded-lg bg-gray-50 p-6 text-left transition-all duration-200 hover:bg-gray-100'
      >
        <h3 className='text-xl font-semibold text-gray-900'>{faq.question}</h3>
        <svg
          className={`h-6 w-6 text-modern-purple transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <div className='rounded-b-lg bg-white p-6 shadow-sm'>
              <p className='text-gray-600'>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter(faq => faq.category === activeCategory)

  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Frequently Asked{' '}
              <span className='text-modern-purple'>Questions</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Find answers to common questions about open source contribution
              and development
            </p>
          </div>

          {/* Category Filter */}
          <div className='mt-12 flex flex-wrap justify-center gap-2'>
            <button
              onClick={() => setActiveCategory('All')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'bg-modern-purple text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-modern-purple text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className='mx-auto mt-16 max-w-3xl'>
            {filteredFaqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                faq={faq}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
