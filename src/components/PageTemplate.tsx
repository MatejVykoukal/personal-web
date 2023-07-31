import Head from "next/head";
import { type FC } from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const PageTemplate: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Matej Vykoukal"}</title>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-tr from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-950 dark:text-white">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default PageTemplate;
