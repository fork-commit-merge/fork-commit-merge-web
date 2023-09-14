/* eslint-disable @next/next/no-img-element */
import { openSourcePrinciples } from "../data/openSourcePrinciples";

const OpenSourcePhilosophy = () => {
    return (
        <div className="flex justify-center items-center bg-slate-900">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">
                    Understanding Open Source and Its Philosophy
                </h1>
                <p className="mb-4">
                    Open source refers to a type of software that&apos;s
                    released with a license allowing anyone to inspect, modify,
                    and distribute the software as they see fit. Beyond the
                    technical aspects, open source promotes the idea of
                    collaboration, transparency, and community-driven projects.
                </p>
                <p className="mb-4">
                    At its core, open source is about freedom, innovation, and
                    collaboration. It&apos;s more than just software—it&apos;s a
                    philosophy that influences sectors beyond technology, from
                    science to business.
                </p>
                <p className="mb-6">
                    Here are some foundational principles of open source:
                </p>
                <table className="min-w-full bg-slate-900">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                Principle
                            </th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {openSourcePrinciples.map((principle, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-900"
                                        : "bg-gray-800"
                                }
                            >
                                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                    {principle.name}
                                </td>
                                <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-100">
                                    {principle.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OpenSourcePhilosophy;
