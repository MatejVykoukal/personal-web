import Link from "next/link";
import Image from "next/image";
import useScrollPosition from "~/utils/hooks/useScrollPosition";
import classNames from "classnames";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 0;

  return (
    <nav
      className={classNames(
        "sticky top-0 z-10 border-b border-transparent p-4 transition-colors duration-500",
        {
          "bg-white/40 backdrop-blur dark:border-slate-100/20 dark:bg-neutral-900/50":
            isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center gap-2 md:text-lg" href="/">
          <Image
            alt="Matěj Vykoukal logo"
            width={24}
            height={24}
            src="/logo.svg"
            className="h-6 w-6 md:h-8 md:w-8"
          ></Image>
          Matěj Vykoukal
        </Link>
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-500 px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-primary-500/90 dark:border-blue-800 dark:bg-primary-500/10 dark:hover:border-transparent dark:hover:bg-primary-500/80"
            href="/api/cv"
          >
            Get CV
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
