import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-primary text-slate-50 flex flex-col">
      <div className="min-h-screen mx-auto max-w-4xl">
        <div className="flex-grow text-center flex items-center justify-center">
          <div className="pb-6">
            <h1 className="text-3xl py-10">Privacy Policy</h1>
            <div className="text-left px-20">
              <h2 className="pb-2 text-2xl">1. Introduction</h2>
              <p className="pb-3">
                Welcome to Fork, Commit, Merge (forkcommitmerge.io). This
                Privacy Policy governs your use of our website. This SERVICE is
                provided by Fork, Commit, Merge at no cost and is intended for
                use as is.
              </p>

              <h2 className="pb-2 text-2xl">2. Data Collection</h2>
              <p className="pb-1">
                We collect the following data if you choose to login with your
                Github credentials to our platform:
              </p>
              <ul>
                <li className="pl-4">- Username</li>
                <li className="pl-4">- Email</li>
                <li className="pl-4">- Name</li>
              </ul>

              <h2 className="pb-2 text-2xl">3. How We Use Your Data</h2>
              <p className="pb-1">We use your data to:</p>
              <ul className="pb-2">
                <li className="pl-4">
                  - Facilitate your learning experience about contributing to
                  open-source.
                </li>
                <li className="pl-4">
                  - Search for the number of issues you have made in our
                  repository by looking at all the closed (merged) pull
                  requests.
                </li>
              </ul>

              <h2 className="pb-2 text-2xl">4. Data Storage</h2>
              <p className="pb-3">
                Your data is securely stored in MongoDB Atlas database. We do
                not store your password in our database. We use the OAuth2
                protocol to authenticate you with Github.
              </p>

              <h2 className="pb-2 text-2xl">5. Data Sharing</h2>
              <p className="pb-3">
                We do not share your data with third parties. We do not sell
                your data to third parties. We do not use your data for
                marketing purposes.
              </p>

              <h2 className="pb-2 text-2xl">6. Cookie Policy</h2>
              <p className="pb-3">We do not use cookies on our website.</p>

              <h2 className="pb-2 text-2xl">
                7. Changes To This Privacy Policy
              </h2>
              <p className="pb-3">
                We may update this Privacy Policy in the future. You are advised
                to review this page periodically for any changes. We will notify
                you of any changes by posting the new Privacy Policy on this
                page. These changes are effective immediately after they are
                posted on this page.
              </p>

              <h2 className="pb-2 text-2xl">8. Contact Us</h2>
              <p className="pb-3">
                If you have any questions about this Privacy Policy, please
                contact us by email: niko.hoffren@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
