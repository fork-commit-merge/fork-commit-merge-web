import React from "react";
import Link from "next/link";

export default function Success() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
            <p className="text-lg mb-6">
                Your project has been successfully added to our website. We
                appreciate your contribution.
            </p>
            <Link
                href="/add-project"
                className="text-white bg-slate-500 hover:bg-slate-400 py-2 px-4 rounded"
            >
                Add More Projects
            </Link>
        </div>
    );
}
