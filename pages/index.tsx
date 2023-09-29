/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import IndexIntro from "../components/index/IndexIntro";
import Descriptions from "../components/index/Descriptions";
import IndexMain from "../components/index/IndexMain";
import Testimonials from "../components/index/Testimonials";
import { testimonials } from "../components/data/testimonials";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-secondary px-4 sm:px-6 md:px-0">
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
      <div className="bg-secondary pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto text-slate-50 pb-6">
          <Descriptions />
        </div>
        <div className="bg-slate-950">
          <div className="mx-4">
            {testimonials.map((testimonial, index) => (
              <Testimonials key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-950 pb-10" />
    </div>
  );
}
