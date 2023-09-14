/* eslint-disable @next/next/no-img-element */
import { openSourceLicenses } from "../data/openSourceLicenses";

const OpenSourceLicenses = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">
                    Importance of Licenses in Open Source
                </h1>
                <p className="mb-4">
                    In the open source world, licenses define the rules for how
                    others can use, distribute, and contribute to the software.
                    They act as a contract between the software creator and its
                    users, ensuring that the software remains open and free to
                    use, while also respecting the wishes of its creators.
                </p>
                <p className="mb-4">
                    Open source licenses protect both the creators and the users
                    of the software. They ensure that the software remains free
                    and that credit is given where it&apos;s due. By choosing an
                    appropriate license, creators can decide how their software
                    is used and how contributions are managed.
                </p>
                <p className="mb-6">
                    Below are some common open source licenses and their key
                    characteristics:
                </p>
                <table className="min-w-full bg-slate-900">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                License Name
                            </th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                Key Features
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {openSourceLicenses.map((license, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-900"
                                        : "bg-gray-800"
                                }
                            >
                                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                    {license.name}
                                </td>
                                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                    {license.features}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenSourceLicenses;
