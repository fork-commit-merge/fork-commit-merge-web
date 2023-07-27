import React from 'react'

export default function AddProject() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        const response = await fetch("/api/addProject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            console.log("Project data submission failed.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Project Image URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" name="imageUrl" required />
                    </div>
                    <div className="w-full md:w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Project Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="projectName" required />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Developer Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="developerName" required />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Project Description
                        </label>
                        <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" name="projectDescription" required />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Project Links
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" name="projectLink" required />
                    </div>
                    <div className="w-full md:w-full px-3">
                        <button className="shadow bg-slate-500 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
