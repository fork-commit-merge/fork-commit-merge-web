import React from 'react';

const ConventionalCommits: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/git.png')" }}>
        <div className="mb-10 flex flex-col items-center justify-center p-24 text-center text-white">
          <h1 className="text-4xl font-bold">Conventional Commits</h1>
          <p className="mt-4 text-xl">
            A specification for adding human and machine-readable meaning to commit messages
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">What are Conventional Commits?</h2>
        <p className="mb-6">
          Conventional Commits is a lightweight convention on top of commit messages. It provides
          an easy set of rules for creating an explicit commit history that makes it easier to write
          automated tools and generate changelogs.
        </p>

        <h2 className="text-2xl font-bold mb-6">Common Commit Types</h2>
        <div className="grid gap-4 mb-8">
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">feat:</code>
            <span className="ml-2">A new feature</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">fix:</code>
            <span className="ml-2">A bug fix</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">docs:</code>
            <span className="ml-2">Documentation only changes</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">style:</code>
            <span className="ml-2">Changes that do not affect the meaning of the code</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">refactor:</code>
            <span className="ml-2">A code change that neither fixes a bug nor adds a feature</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">perf:</code>
            <span className="ml-2">A code change that improves performance</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">test:</code>
            <span className="ml-2">Adding missing tests or correcting existing tests</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">build:</code>
            <span className="ml-2">Changes that affect the build system or external dependencies</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">ci:</code>
            <span className="ml-2">Changes to CI configuration files and scripts</span>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <code className="font-bold text-green-400">chore:</code>
            <span className="ml-2">Other changes that don't modify src or test files</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Commit Message Structure</h2>
        <pre className="bg-secondary p-4 rounded-lg mb-6 overflow-x-auto">
          <code>{`type(scope): subject

body

footer`}</code>
        </pre>
        <ul className="list-disc pl-6 mb-8">
          <li className="mb-2"><strong>Type:</strong> The type of change (from the list above)</li>
          <li className="mb-2"><strong>Scope:</strong> Optional, describes what part of the code is affected</li>
          <li className="mb-2"><strong>Subject:</strong> A short description of the change</li>
          <li className="mb-2"><strong>Body:</strong> Optional, detailed description of the change</li>
          <li className="mb-2"><strong>Footer:</strong> Optional, for referencing issues or breaking changes</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">Examples</h2>
        <pre className="bg-secondary p-4 rounded-lg mb-4 overflow-x-auto">
          <code>{`feat(auth): add user authentication system

Implement JWT-based authentication with refresh tokens.

Closes #123`}</code>
        </pre>
        <pre className="bg-secondary p-4 rounded-lg mb-8 overflow-x-auto">
          <code>{`fix(api): resolve user data fetch timeout

Increase request timeout to 30s and add retry logic.

Fixes #456`}</code>
        </pre>

        <h2 className="text-2xl font-bold mb-6">Benefits</h2>
        <ul className="list-disc pl-6 mb-8">
          <li className="mb-2">Automatically generated changelogs</li>
          <li className="mb-2">Simple navigation through Git history</li>
          <li className="mb-2">Clear communication of change intent</li>
          <li className="mb-2">Structured commit messages that are easy to follow</li>
          <li className="mb-2">Better collaboration in team environments</li>
        </ul>
      </div>
    </div>
  );
};

export default ConventionalCommits;