import { gitCommands } from "../components/GitCommands";

export default function GitCommands() {
    return (
        <>
            <div className="bg-slate-950 min-h-screen">
                <div className="max-w-4xl mx-auto pt-8 p-6 text-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">
                        Important Git Commands
                    </h1>
                    <p className="mb-6">
                        Here are some essential Git commands that you may find
                        useful:
                    </p>
                    <table className="min-w-full bg-slate-900">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                    Command
                                </th>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gitCommands.map((cmd, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? "bg-gray-900"
                                            : "bg-gray-800"
                                    }
                                >
                                    <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                        {cmd.command}
                                    </td>
                                    <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                        {cmd.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
