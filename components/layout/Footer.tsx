/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Footer = () => {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/nikohoffren/fork-commit-merge")
      .then((response) => response.json())
      .then((data) => {
        setStarCount(data.stargazers_count);
      })
      .catch((error) => {
        console.error("Failed fetching star count:", error);
      });
  }, []);

  return (
    <footer className="bg-secondary text-slate-50">
      <div className="max-w-5xl px-4 py-8 pb-6 mx-auto sm:px-0">
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:px-0">
          <div>
            <p className="mb-1 font-medium">
              We wish you all the best by{" "}
              <span className="font-bold">Fork, Commit, Merge</span>
            </p>

            <div className="max-w-md mt-6 space-y-2 leading-relaxed text-center text-black sm:max-w-xs sm:text-left">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-100 rounded shadow-lg w-fit text-sm font-bold p-1.5"
              >
                Created with
                <Image
                  src="/next.svg"
                  alt="NextJS Logo"
                  title="created with NextJS"
                  width={62}
                  height={62}
                />
              </a>

              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-100 rounded shadow-lg w-fit text-sm font-bold p-1.5"
              >
                Deployed with
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  title="deployed with Vercel"
                  width={62}
                  height={62}
                />
              </a>
              <a
                href="https://github.com/nikohoffren/fork-commit-merge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-slate-100 transition-all hover:bg-slate-300 rounded shadow-lg w-fit text-sm font-bold p-1.5 space-x-2"
              >
                <span>Github Stars</span>
                {starCount !== null ? (
                  <>
                    <StarFilled color="currentColor" width={62} height={62} />
                    {starCount}
                  </>
                ) : (
                  ""
                )}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-5 sm:grid-cols-2 md:mt-0">
            <div className="text-center sm:text-end">
              <p className="text-lg font-bold text-white">Information</p>

              <ul className="mt-4 space-y-4 text-sm [&>li>a]:transition-all">
                <li>
                  <Link
                    className="text-sm font-medium text-white transition hover:text-white/75"
                    href="https://github.com/nikohoffren/fork-commit-merge/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contributing
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm font-medium text-white transition hover:text-white/75"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm font-medium text-white transition hover:text-white/75"
                    href="https://github.com/nikohoffren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-end">
              <p className="text-lg font-bold text-white">Helpful Links</p>

              <ul className="mt-4 space-y-4 text-sm [&>li>a]:transition-all">
                <li>
                  <Link
                    className="text-sm font-medium text-white hover:text-white/75"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm font-medium text-white hover:text-white/75"
                    href="https://github.com/nikohoffren/fork-commit-merge/blob/main/CODE_OF_CONDUCT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved</span>
            </p>

            <p className="mt-4 text-sm text-gray-400 sm:order-first sm:mt-0 [&>a]">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                href="https://nikohoffren.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                Niko Hoffrén
              </Link>{" "}
              &{" "}
              <Link
                href="https://github.com/nikohoffren/fork-commit-merge#list-of-contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                GitHub community
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
