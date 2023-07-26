import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-50 py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Copyright © 2023 Niko Hoffrén</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/nikohoffren/devgallery.io/blob/main/CONTRIBUTING.md"
              className="text-sm text-slate-50 hover:underline"
              target="blank"
            >
              Contributing
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-50 hover:underline"
              target="blank"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/nikohoffren/devgallery.io/blob/main/code_of_conduct.md"
              className="text-sm text-slate-50 hover:underline"
              target="blank"
            >
              Code of Conduct
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-50 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
