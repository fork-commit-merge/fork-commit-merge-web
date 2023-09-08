/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import IndexIntro from "../components/IndexIntro";
import Descriptions from "../components/Descriptions";
import IndexMain from "../components/IndexMain";

export default function Home() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 px-4 sm:px-6 md:px-0">
                <div
                    className="mx-auto rounded-md overflow-hidden mt-6"
                    style={{ width: 100, height: 100 }}
                >
                    <Image
                        src="/fork-commit-merge-logo.jpg"
                        alt="Fork, Commit, Merge -logo"
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <IndexMain />
                <IndexIntro />
            </main>
            <div className="bg-slate-900 pb-10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto text-slate-50">
                    <Descriptions />
                </div>
            </div>
        </>
    );
}
