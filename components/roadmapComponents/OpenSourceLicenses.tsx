/* eslint-disable @next/next/no-img-element */
import { openSourceLicenses } from "../data/openSourceLicenses";

const OpenSourceLicenses = () => {
  return (
    <div className="flex justify-center items-center bg-primary py-10">
      <div className="text-center  w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Importance of Licenses in Open Source
        </h1>
        <p className="mb-4">
          In the realm of open source, licenses are paramount. They precisely
          dictate the manner in which software can be utilized, shared,
          modified, and redistributed. Think of them as a legally binding
          agreement between the developer and the end-user. Their primary aim?
          To uphold the principles of open-source by ensuring accessibility and
          freedom while safeguarding the rights of the creators.
        </p>
        <p className="mb-4">
          It&apos;s a common misconception to equate open source with &quot;free
          software&quot;. While it is true in the monetary sense, the
          &quot;freedom&quot; in open source primarily pertains to how one can
          engage with the software. This freedom hinges on the kind of license
          the software adheres to. Licenses can dictate if you can use the
          software for commercial purposes, if and how you can make alterations,
          or how to distribute it further.
        </p>
        <p className="mb-4">
          Open source licenses play a dual protective role. For creators, they
          protect intellectual rights, ensuring that their work isn&apos;t
          misused or misrepresented. For users, they guarantee the freedom to
          use, inspect, modify, and distribute the software, providing clarity
          on the boundaries within which they can operate. This symbiotic
          relationship fostered by licenses ensures the sustenance and growth of
          the open-source ecosystem.
        </p>
        <p className="mb-4">
          Finally, the choice of a license isn&apos;t arbitrary. It reflects a
          developer&apos;s philosophy, goals, and the kind of community they
          envision. Whether it&apos;s promoting collaborative enhancements,
          ensuring software remains free, or allowing integration into
          proprietary systems, the choice of a license can steer the
          software&apos;s journey in the desired direction.
        </p>
        <p className="mb-6">
          Let&apos;s delve deeper into some prominent open source licenses and
          decipher their core tenets:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-900">
            <thead>
              <tr>
                <th className="py-2 px-1 sm:px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                  License Name
                </th>
                <th className="py-2 px-1 sm:px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                  Key Features
                </th>
                <th className="py-2 px-1 sm:px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                  Conditions
                </th>
                <th className="py-2 px-1 sm:px-4 border-b border-gray-200 bg-gray-900 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                  Limitations
                </th>
              </tr>
            </thead>
            <tbody>
              {openSourceLicenses.map((license, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                >
                  <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                    {license.name}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                    {license.features}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                    {license.conditions}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 ">
                    {license.limitations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceLicenses;
