import PageTemplate from "~/components/PageTemplate";
import Lottie, { type LottieRef } from "lottie-react";
import codingAnimation from "~/../public/coding_animation.json";
import wawingHandsAnimation from "~/../public/waving_hands_animation.json";
import githubProfile from "~/../public/github_matej.png";
import githubProfileLight from "~/../public/github_matej_light.png";
import { useRef } from "react";
import TypingAnimation from "~/components/TypingAnimation";
import Image from "next/image";
import { useLocalStorage } from "@mantine/hooks";
import { type ColorScheme } from "~/types/global.types";
import classNames from "classnames";
import { sleep } from "~/utils/time";
import Footer from "~/components/Footer";

export default function Home() {
  const codingAnimationRef: LottieRef = useRef(null);
  const wawingHandAnimationRef: LottieRef = useRef(null);

  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  codingAnimationRef.current?.setSpeed(1.2);
  wawingHandAnimationRef.current?.setSpeed(2);

  const links = [
    {
      name: "Portfolio",
      href: "https://github.com/MatejVykoukal",
      external: true,
    },
    {
      name: "Pubic profile",
      href: "https://www.linkedin.com/in/mat%C4%9Bj-vykoukal-159b131a9/",
      external: true,
    },
    { name: "Read more", href: "#about-me" },
  ];
  const stats = [
    { name: "Years of Experience", value: "5+" },
    { name: "Git Contributions", value: "5 000+" },
    { name: "Hours per week", value: "40" },
    { name: "Enthusiasm", value: "Unlimited" },
  ];

  const handleWawingAnimationComplete = async () => {
    if (Math.random() > 0.5) {
      wawingHandAnimationRef.current?.stop();
      await sleep(2000);
      wawingHandAnimationRef.current?.setSpeed(2);
      wawingHandAnimationRef.current?.play();
    }
  };

  return (
    <PageTemplate>
      <Bubbles />
      <section
        aria-label="Hero section"
        className="container mx-auto max-w-7xl px-4 sm:pt-[10vmax]  xl:pt-[10vh]"
      >
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
          <Lottie
            lottieRef={codingAnimationRef}
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
            <div className="z-10 max-w-md text-center text-lg  leading-8 dark:text-gray-300 lg:text-left">
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
              <a
                className="inline-flex justify-center rounded-full border bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 dark:border-blue-800 dark:bg-primary-500/10 dark:hover:border-transparent dark:hover:bg-primary-500/80"
                href="mailto:matej.vykoukal248@gmail.com"
              >
                <span>
                  Contact{" "}
                  <span aria-hidden="true" className="sm:inline">
                    →
                  </span>
                </span>
              </a>
              <a
                className="text-base font-semibold leading-7 "
                href="#about-me"
              >
                Learn more about me &rarr;
              </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  {...(link.external ? { target: "_blank" } : {})}
                >
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
      <section>
        <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-neutral-700/20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg
                x="50%"
                y={-1}
                className="overflow-visible fill-gray-50 dark:fill-neutral-800/50"
              >
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="relative text-base font-semibold leading-7 text-primary-600">
                    My expertise
                  </p>
                  <h2
                    id="about-me"
                    className="tracki#id smooth scrollng-tight relative mt-2 scroll-mt-32 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
                  >
                    Who am I ?
                    <Lottie
                      className=" absolute bottom-0 left-40 -z-10 max-w-[100px] opacity-50"
                      animationData={wawingHandsAnimation}
                      loop={true}
                      onLoopComplete={() =>
                        void handleWawingAnimationComplete()
                      }
                      lottieRef={wawingHandAnimationRef}
                    />
                  </h2>
                  <p className="dark:text mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">
                    I am experienced in building web applications using modern
                    technologies such as Next.js, Typescript, tRPC, Prisma,
                    TailwindCSS and many more.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <div className="relative aspect-video w-[48rem]  max-w-none  overflow-hidden rounded-xl shadow-xl dark:bg-gray-900 sm:w-[57rem]">
                <Image
                  src={githubProfile}
                  fill
                  className={classNames(
                    "rounded-xl  object-cover opacity-0 transition-opacity duration-300 ease-linear",
                    { "opacity-100": colorScheme === "dark" }
                  )}
                  alt=""
                />{" "}
                <Image
                  src={githubProfileLight}
                  fill
                  className={classNames(
                    "rounded-xl object-cover opacity-0 transition-opacity duration-300 ease-linear",
                    { "opacity-100": colorScheme === "light" }
                  )}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
                  <ul
                    role="list"
                    className="space-y-8 text-gray-600 dark:text-gray-300"
                  >
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          Beginnings.
                        </strong>{" "}
                        I started programming when I was 15 years old. I started
                        with HTML, CSS and Vanilla Javascript courses on Udemy.
                        I was learning for about 2 years. In the meantime I
                        started working on my first projects. I was building
                        client applications using React and Node.js(build &
                        development). I was learning about Javascript Ecosystem,
                        how internet communication works and overall building my
                        knowledge about web development.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          Server Side.
                        </strong>{" "}
                        My first server-side technology/language was PHP. I was
                        working with Wordpress and creating custom themes using
                        PHP and CSS. I also started touching Databases and
                        learned a bit of SQL. I was utilizing those skills in
                        building websites for relatives and local businesses.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          Hardening Frontend Skills.
                        </strong>{" "}
                        In 2021, after high-school, I got my first full-time
                        programming job as a Junior Frontend Developer at{" "}
                        <a
                          href="https://www.linkedin.com/company/actumdigital/"
                          target="_blank"
                          className="text-primary-500"
                        >
                          Actum Digital
                        </a>
                        . I started learning about Web Accesibility and
                        completed Web Accesibilty Course with certificate at{" "}
                        <a
                          href="https://dequeuniversity.com/"
                          target="_blank"
                          className="text-primary-500"
                        >
                          Deque University
                        </a>
                        . I was working mostly with React & Typescript. I build
                        a strong foundation in those technologies.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          Fullstack.{" "}
                        </strong>
                        Next year I dove into the world of Fullstack
                        development. I was developing many personal projects
                        such as messaging app, note taking app, social app
                        clone, etc. to learn more about backend development. I
                        remained in JavaScript ecosystem and started using
                        Node.js, Express.js and MongoDB, Firebase. I was focused
                        on interconnecting Frontend and Backend code, so I
                        learned alot about type-safe APIs(tRPC), type-safe
                        database queries(Prisma), client-side rendering vs
                        server-side rendering, caching and many more.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          Fullstack+{" "}
                        </strong>
                        Currently I work for{" "}
                        <a
                          href="https://www.linkedin.com/company/walletapp/mycompany/"
                          target="_blank"
                          className="text-primary-500"
                        >
                          BudgetBakers
                        </a>
                        . Where I focus on developing high quality, safe and
                        accessible web applications. I am expanding my knowledge
                        mostly about Backend development, DevOps and Web
                        Security. Also in my spare time I am learning about AI
                        technologies and creating ways to integrate those
                        technologies into development process and make it more
                        efficient.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageTemplate>
  );
}

const Bubbles = () => {
  return (
    <>
      {/* Bubbles */}
      <div
        aria-hidden="true"
        className="absolute right-1/4 top-14  h-52 w-52 rounded-full bg-gradient-to-br from-primary-500/80 to-primary-800 opacity-40 dark:opacity-70  dark:blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute left-1/3  top-[50vh] z-0 h-52 w-52 rounded-full bg-gradient-to-br from-primary-500 to-primary-800 opacity-10 dark:opacity-20 dark:blur-3xl "
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-14 right-7  h-52 w-52 rounded-full bg-gradient-to-br from-primary-500 to-primary-800 opacity-50 dark:opacity-40 dark:blur-3xl "
      ></div>
    </>
  );
};
