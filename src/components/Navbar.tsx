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
      className={classNames("sticky top-0 z-10 p-4 dark:border-slate-100/20", {
        "border-b bg-white/40 backdrop-blur  dark:bg-neutral-900/80 ":
          isScrolled,
      })}
    >
      <div className="container mx-auto flex justify-between">
        <Link className="flex items-center gap-2 md:text-lg" href="/">
          <Image
            alt="Matej Vykoukal logo"
            width={24}
            height={24}
            src="/logo.svg"
            className="h-6 w-6 md:h-8 md:w-8"
          ></Image>
          Matej Vykoukal
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
