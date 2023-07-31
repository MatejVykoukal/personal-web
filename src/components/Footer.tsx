import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-white/40 text-sm backdrop-blur  dark:border-slate-100/20 dark:bg-neutral-900/50
    "
    >
      <div className="container mx-auto flex flex-col items-center gap-4 py-6 ">
        <span>Matej Vykoukal © 2023</span>
        <div className="flex items-center gap-2">
          <a
            className="inline-flex justify-center rounded-full border bg-primary-500 p-1 text-white  transition-colors duration-300 dark:border-white dark:bg-transparent dark:hover:border-transparent dark:hover:bg-primary-500/80"
            href=""
          >
            <IconBrandGithub size={20} />
          </a>
          <a
            className="inline-flex justify-center rounded-full border bg-primary-500 p-1  text-white transition-colors duration-300 dark:border-white dark:bg-transparent dark:hover:border-transparent dark:hover:bg-primary-500/80"
            href=""
          >
            <IconBrandLinkedin size={20} />
          </a>

          <a
            className="flex items-center gap-2"
            href="mailto:matej.vykoukal248@gmail.com"
          >
            <span className="text-2xl font-light">|</span>
            matej.vykoukal248@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
