import PageTemplate from "~/components/PageTemplate";
import Lottie, { type LottieRef } from "lottie-react";
import codingAnimation from "~/../public/coding_animation.json";
import { useRef } from "react";
import TypingAnimation from "~/components/TypingAnimation";
import Link from "next/link";

export default function Home() {
  const lottieRef: LottieRef = useRef(null);

  lottieRef.current?.setSpeed(1.2);

  const links = [
    { name: "Portfolio", href: "https://github.com/MatejVykoukal" },
    {
      name: "Pubic profile",
      href: "https://www.linkedin.com/in/mat%C4%9Bj-vykoukal-159b131a9/",
    },
  ];
  const stats = [
    { name: "Years of Experience", value: "5+" },
    { name: "Git Contributions", value: "5 000+" },
    { name: "Hours per week", value: "40" },
    { name: "Enthusiasm", value: "Unlimited" },
  ];

  return (
    <PageTemplate>
      {/* Bubbles */}
      <div
        aria-hidden="true"
        className="absolute right-1/4 top-14  h-52 w-52 rounded-full bg-gradient-to-br from-primary-500/80 to-primary-800 dark:opacity-70  dark:blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0  hidden h-52 w-52 rounded-full bg-gradient-to-br from-primary-500 to-primary-800 dark:block  dark:opacity-40 dark:blur-3xl "
      ></div>
      <div
        aria-hidden="true"
        className="absolute left-1/3  top-[50vh] hidden h-52 w-52 rounded-full bg-gradient-to-br from-primary-500 to-primary-800 dark:block dark:opacity-20 dark:blur-3xl "
      ></div>
      <section
        aria-label="Hero section"
        className="container mx-auto max-w-7xl px-4 sm:pt-[10vmax]  xl:pt-[10vh]"
      >
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
          <Lottie
            lottieRef={lottieRef}
            className=" max-w-[200px] flex-grow lg:max-w-[500px]"
            animationData={codingAnimation}
            loop={true}
          />
          <div className="flex w-full flex-col items-center gap-4 lg:items-start lg:px-10">
            <h1
              aria-label="Hi I'm Matej Vykoukal, Web Developer, Fullstack Developer, AI Enthusiast"
              className="h-[7.5rem] w-full text-center text-4xl font-bold xs:h-[4.5rem] sm:h-[7.5rem] sm:text-6xl  lg:text-left"
            >
              <TypingAnimation
                staticText="Hi, I'm "
                typedTextArray={[
                  "Matej Vykoukal",
                  "Web Developer",
                  "AI Enthusiast",
                  "Tech guy",
                ]}
                typedTextProps={{ className: "text-primary-500" }}
              />
            </h1>
            <div className="max-w-md  text-center text-lg  leading-8 dark:text-gray-300 lg:text-left">
              <p className="mb-4">
                I&apos;m a fullstack web developer with a passion for JavaScript
                and its ecosystem, AI technologies and web accessibility.
              </p>
              <p>
                I&apos;m currently working at{" "}
                <a
                  href="https://www.linkedin.com/company/walletapp/mycompany/"
                  target="_blank"
                  className="text-primary-500"
                >
                  BudgetBakers
                </a>{" "}
                as a Frontend Engineer. I work mostly with Next.js, tRPC and
                React.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-primary-500 px-4 py-1 text-lg text-white hover:bg-primary-600">
                Contact me
              </button>
              <Link
                className="text-base font-semibold leading-7 "
                href="#about-me"
              >
                Learn more about me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-10 overflow-hidden py-24  sm:py-32 lg:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              The Software Engineer you need!
            </h2>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300">
              I have 5+ years of experience in web development. I&apos;ve worked
              on many projects and I&apos;m always looking for new challenges.
              I&apos;m a fast learner and I&apos;m always trying to improve my
              skills.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} target="_blank" href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7  dark:text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="animate-bounce text-2xl font-bold leading-9 tracking-tight text-primary-500 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
