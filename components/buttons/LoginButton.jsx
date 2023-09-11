import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
    fetchGitHubUsername,
    fetchClosedPullRequests,
} from "../../pages/api/fetchClosedPullRequests";

export default function LoginButton() {
    const { data: session } = useSession();
    const [pullRequests, setPullRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isConsentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        if (session?.user?.email) {
            setIsLoading(true);
            fetchGitHubUsername(session.user.email)
                .then((username) => fetchClosedPullRequests(username))
                .then((prs) => {
                    setPullRequests(prs);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setIsLoading(false);
                });
        }
    }, [session]);

    const handleConsentChange = () => {
        setConsentGiven(!isConsentGiven);
    };

    const handleSignIn = async () => {
        if (!isConsentGiven) {
            alert("You must agree to the Privacy Policy to proceed.");
            return;
        }

        setIsSigningIn(true);
        try {
            await signIn("github");
        } catch (error) {
            console.error("Sign in failed", error);
        } finally {
            setIsSigningIn(false);
        }
    };

    const size = 190;

    if (session?.user) {
        return (
            <div className="text-slate-50 text-center">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center border rounded-lg shadow-lg bg-slate-950 px-4 py-2">

                    <div className="md:mr-10">
                        <h2 className="mt-6 mb-10 text-4xl font-extrabold">
                        {session.user.name || "User"}
                        </h2>

                        <p className="my-5">{session.user.email}</p>
                    </div>
                    <div
                        style={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: size,
                            height: size,
                        }}
                        className="mb-6 md:mb-0"
                    >
                        <Image
                            src={session.user.image}
                            alt="User avatar"
                            width={size}
                            height={size}
                        />

                    </div>
                </div>

                {isLoading && (
                    <div className="flex justify-center items-center h-[200px]">
                        <div className="spinner"></div>
                    </div>
                )}

                {pullRequests.length > 0 && (
                    <div className="py-4">
                        <hr className="my-6" />
                        <h3 className="text-2xl py-6">
                            Successfully Merged Pull Requests:
                        </h3>
                        <table className="min-w-full bg-slate-900">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                        Issue
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pullRequests.map((pr, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-900"
                                                : "bg-gray-800"
                                        }
                                    >
                                        <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                            {pr.title}
                                        </td>
                                        <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                            {pr.issue}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <button
                    onClick={() => signOut()}
                    className="py-4 px-6 my-8 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign out
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="text-slate-50 text-center">
                <div>
                    <h2 className="mt-6 mb-10 text-center text-3xl font-extrabold text-slate-50">
                        Sign in with GitHub
                    </h2>
                </div>
                <div className="consent-checkbox">
                    <input
                        type="checkbox"
                        id="consentCheckbox"
                        checked={isConsentGiven}
                        onChange={handleConsentChange}
                    />
                    <label htmlFor="consentCheckbox" className="pl-2">
                        I agree to the{" "}
                        <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Privacy Policy
                        </a>
                    </label>
                </div>
                <button
                    onClick={handleSignIn}
                    className="py-4 px-6 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-flex items-center space-x-2"
                >
                    {isSigningIn ? (
                        <div className="spinner"></div>
                    ) : (
                        <>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                width="24"
                                height="24"
                                className="mr-2"
                            >
                                <title>GitHub icon</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                            LOGIN
                        </>
                    )}
                </button>
            </div>
        </>
    );
}
