/* eslint-disable @next/next/no-img-element */
import { openSourcePrinciples } from "../data/openSourcePrinciples";

const OpenSourcePhilosophy = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950 py-10">
            <div className="text-center text-slate-50 max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">
                    Understanding Open Source and Its Philosophy
                </h1>
                <p className="mb-4">
                    The term &quot;open source&quot; denotes software that&apos;s accompanied by a special kind of license, which grants individuals the freedom to peruse, adapt, and disseminate the software without any encumbrances. But if you delve deeper, open source is much more than a licensing methodology—it represents a paradigm shift in how we think about creation, ownership, and collaboration.
                </p>
                <p className="mb-4">
                    Born out of the belief that knowledge should be accessible and shared, the open-source movement champions transparency. It negates the concept of closely guarded secrets, instead inviting a global community to inspect, question, and enhance the work. This collective contribution has proven time and again to drive innovation at an unparalleled pace, fueled by diverse perspectives and expertise.
                </p>
                <p className="mb-4">
                    Beyond software, the ethos of open source permeates various domains. It&apos;s an embodiment of a world where collaboration trumps competition, where sharing and building together fosters more advanced, robust, and impactful outcomes. In this spirit, projects aren&apos;t just built by a handful of individuals but are nurtured by an entire community vested in its growth and evolution.
                </p>
                <p className="mb-4">
                    However, to ensure that this community-driven approach flourishes while safeguarding the rights and intentions of creators, certain principles have been established. These principles not only define the operational mechanics of open-source software but also elucidate the philosophical underpinnings that make open source such a transformative movement.
                </p>
                <p className="mb-6">
                    Let&apos;s explore the foundational principles that underlie open source:
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
