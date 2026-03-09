import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white/40 text-sm backdrop-blur dark:border-slate-100/20 dark:bg-neutral-900/50">
      <div className="container mx-auto flex flex-col items-center gap-3 py-6 text-neutral-600 dark:text-neutral-300 md:flex-row md:justify-between">
        <span>© {year} Matěj Vykoukal</span>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="transition-colors duration-300 hover:text-primary-400"
            href="mailto:matej.vykoukal248@gmail.com"
          >
            matej.vykoukal248@gmail.com
          </a>
          <span className="text-neutral-400">·</span>
          <a
            className="transition-colors duration-300 hover:text-primary-400"
            href="https://github.com/MatejVykoukal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition-colors duration-300 hover:text-primary-400"
            href="https://www.linkedin.com/in/mat%C4%9Bj-vykoukal-159b131a9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="transition-colors duration-300 hover:text-primary-400"
            href="https://matejvykoukal.dev"
            target="_blank"
            rel="noreferrer"
          >
            matejvykoukal.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
