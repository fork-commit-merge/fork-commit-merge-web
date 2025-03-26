const SelectionNotSupported = () => {
  return (
    <div className="bg-white">
      <div className="modern-container">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Selection Not <span className="text-modern-purple">Supported</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              The requested selection is currently not available in our system
            </p>
          </div>

          <div className="mt-16 grid w-full max-w-4xl gap-8 mx-auto">
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-white">What does this mean?</h2>
              <p className="mb-4 text-gray-300">
                This error occurs when you've attempted to access a selection that hasn't been implemented yet or is not supported by the current version.
              </p>
              <h3 className="mb-2 text-xl text-white">What you can do:</h3>
              <ul className="mb-4 list-disc pl-5 text-gray-300">
                <li>Check if you've entered the correct URL</li>
                <li>Try selecting a different option from the available choices</li>
                <li>Return to the previous page and try again</li>
                <li>Contact support if you believe this is an error</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-white">Available Alternatives</h2>
              <p className="mb-4 text-gray-300">
                While this selection isn't available, you might be interested in exploring these alternatives:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="/" className="rounded-lg bg-gray-700 p-4 hover:bg-gray-600 transition-colors">
                  <h3 className="text-lg font-semibold text-white">Home Page</h3>
                  <p className="text-gray-300">Return to main dashboard</p>
                </a>
                <a href="/dashboard" className="rounded-lg bg-gray-700 p-4 hover:bg-gray-600 transition-colors">
                  <h3 className="text-lg font-semibold text-white">Dashboard</h3>
                  <p className="text-gray-300">View all available options</p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/"
              className="themed-button inline-block transform rounded-md bg-modern-purple px-8 py-3 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              RETURN TO HOME PAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionNotSupported;
