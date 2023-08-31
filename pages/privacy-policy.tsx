import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-slate-950 text-slate-50 flex flex-col min-h-screen">
            <div className="flex-grow text-center flex items-center justify-center">
                <div className="pb-6">
                    <h1 className="text-3xl py-10">Privacy Policy</h1>
                    <div className="text-left px-20">
                        <h2 className="pb-2 text-2xl">1. Introduction</h2>
                        <p className="pb-3">
                            Welcome to Fork, Commit, Merge (forkcommitmerge.io).
                            This Privacy Policy governs your use of our website.
                        </p>

                        <h2 className="pb-2 text-2xl">2. Data Collection</h2>
                        <p className="pb-1">
                            We collect the following data when you use our
                            platform:
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
                                - Facilitate your learning experience about
                                contributing to open-source.
                            </li>
                            <li className="pl-4">
                                - Search for the number of issues you have made in
                                our repository by looking at all the closed
                                (merged) pull requests.
                            </li>
                        </ul>

                        <h2 className="pb-2 text-2xl">4. Data Storage</h2>
                        <p className="pb-3">
                            Your data is securely stored in MongoDB Atlas
                            database.
                        </p>

                        <h2 className="pb-2 text-2xl">5. Data Sharing</h2>
                        <p className="pb-3">We do not share your data with third parties.</p>

                        <h2 className="pb-2 text-2xl">6. Cookie Policy</h2>
                        <p className="pb-3">We do not use cookies on our website.</p>

                        <h2 className="pb-2 text-2xl">7. Changes To This Privacy Policy</h2>
                        <p className="pb-3">We may update this Privacy Policy in the future.</p>

                        <h2 className="pb-2 text-2xl">8. Contact Us</h2>
                        <p className="pb-3">
                            If you have any questions about this Privacy Policy,
                            please contact us by email:{" "}niko.hoffren@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
