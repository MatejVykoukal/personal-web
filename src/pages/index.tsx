import PageTemplate from "~/components/PageTemplate";
import dynamic from "next/dynamic";
import { type LottieRef } from "lottie-react";
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

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const tech = ["Next.js", "TypeScript", "React"];


const projects = [
  {
    name: "Wallet",
    company: "BudgetBakers",
    description:
      "Core personal finance product with complex flows, performance constraints, and multi-platform UI consistency.",
    role: "Senior Frontend Engineer · Owned the full frontend and data queries for chart rendering and aggregation.",
    tags: ["Next.js", "TypeScript", "CouchDB", "PostgreSQL"],
  },
  {
    name: "Christie’s Design System",
    company: "ACTUM Digital",
    description:
      "Premium design system with reusable components, tokenized theming, and governance for multiple product teams.",
    role: "Frontend Developer · Component build-out, Storybook, cross-team reviews.",
    tags: ["Design Systems", "Storybook", "React", "Governance"],
  },
  {
    name: "aria-hooks",
    company: "ACTUM Digital",
    description:
      "Accessibility-first hooks library that standardizes keyboard and screen reader behavior.",
    role: "Frontend Developer · Accessibility strategy, reusable utilities, documentation.",
    tags: ["Accessibility", "React", "TypeScript", "DX"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "State Management", "Accessibility"],
  },
  {
    title: "Architecture",
    items: ["Design Systems", "Product UI", "Performance", "Scalable UI", "DX"],
  },
  {
    title: "Tooling",
    items: ["Storybook", "Jest", "Git", "Node.js", "CI/CD"],
  },
];

const experience = [
  {
    company: "BudgetBakers",
    logo: {
      src: "https://budgetbakers.com/logo-budgetbakers.svg",
      alt: "BudgetBakers logo",
    },
    role: "Senior Frontend Engineer",
    period: "2022–2026",
    summary:
      "Owned Wallet’s full frontend and the data queries behind chart rendering and aggregation, plus internal SaaS tooling.",
    projects: ["Wallet", "Internal SaaS Portal"],
  },
  {
    company: "ACTUM Digital",
    logo: {
      src: "/actum-logo.svg",
      alt: "ACTUM Digital logo",
    },
    role: "Frontend Developer",
    period: "2021–2022",
    summary:
      "Built reusable components and accessibility utilities for enterprise client teams, with strong documentation and review practices.",
    projects: ["Christie’s Design System", "aria-hooks", "Inoggy eContracting"],
  },
  {
    company: "Freelance",
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Anonymous_Hacker.svg",
      alt: "Anonymous hacker icon",
    },
    role: "Frontend Developer",
    period: "2019–2021",
    summary:
      "Delivered websites, landing pages, and small e-commerce projects with fast iteration and clean UI delivery.",
    projects: ["Marketing sites", "Personal brands", "E-commerce MVPs"],
  },
];

const accentPillClass =
  "rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-100";

export default function Home() {
  const codingAnimationRef: LottieRef = useRef(null);
  const wawingHandAnimationRef: LottieRef = useRef(null);

  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  codingAnimationRef.current?.setSpeed(1.2);
  wawingHandAnimationRef.current?.setSpeed(2);

  const handleWawingAnimationComplete = async () => {
    if (Math.random() > 0.5) {
      wawingHandAnimationRef.current?.stop();
      await sleep(2000);
      wawingHandAnimationRef.current?.setSpeed(2);
      wawingHandAnimationRef.current?.play();
    }
  };

  return (
    <PageTemplate title="Matěj Vykoukal — Senior Frontend Engineer">
      <Bubbles />
      <section
        aria-label="Hero section"
        className="container mx-auto max-w-7xl px-4 pb-16 sm:pb-20 sm:pt-[10vmax] lg:pb-24 xl:pt-[10vh]"
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
              aria-label="Hi I'm Matěj Vykoukal, Senior Frontend Engineer"
              className="h-[7.5rem] w-full text-center text-4xl font-bold xs:h-[4.5rem] sm:h-[7.5rem] sm:text-6xl  lg:text-left"
            >
              <TypingAnimation
                staticText="Hi, I'm "
                typedTextArray={[
                  "Matěj Vykoukal",
                  "Senior Frontend Engineer",
                  "Product-Focused UI Builder",
                ]}
                typedTextProps={{ className: "text-primary-500" }}
              />
            </h1>
            <div className="z-10 max-w-md text-center text-lg leading-8 dark:text-gray-300 lg:text-left">
              <p className="mb-4">
                Senior Frontend Engineer building scalable, accessible web
                products with React, Next.js, and TypeScript.
              </p>
              <p>
                Most recently at{" "}
                <a
                  href="https://www.linkedin.com/company/walletapp/mycompany/"
                  target="_blank"
                  className="text-primary-500"
                  rel="noreferrer"
                >
                  BudgetBakers
                </a>{" "}
                leading frontend work across Wallet and internal SaaS tools.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                5+ years of experience across product and client-facing web
                platforms.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-300 lg:justify-start">
              {tech.map((item) => (
                <span
                  key={item}
                  className={accentPillClass}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                className="inline-flex justify-center rounded-full border bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 dark:border-blue-800 dark:bg-primary-500/10 dark:hover:border-transparent dark:hover:bg-primary-500/80"
                href="/api/cv"
              >
                <span>
                  Get CV{" "}
                  <span aria-hidden="true" className="sm:inline">
                    →
                  </span>
                </span>
              </a>
              <a
                className="text-base font-semibold leading-7 text-white/80 transition hover:text-white"
                href="https://github.com/MatejVykoukal"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
              <a
                className="text-base font-semibold leading-7 text-white/80 transition hover:text-white"
                href="https://www.linkedin.com/in/mat%C4%9Bj-vykoukal-159b131a9/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 lg:mt-24">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
                    Experience Highlights
                  </p>
                  <h2
                    id="about"
                    className="relative mt-2 scroll-mt-32 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
                  >
                    Who am I?
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
                    I build product-grade UI that balances clean architecture,
                    accessibility, and performance — with a strong eye for
                    design systems and scalable frontend delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 mt-4 p-12 lg:sticky lg:top-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <div className="relative aspect-video w-[48rem]  max-w-none  overflow-hidden rounded-xl shadow-xl dark:bg-gray-900 sm:w-[57rem]">
                <Image
                  src={githubProfile}
                  fill
                  className={classNames(
                    "rounded-xl  object-cover opacity-0 transition-opacity duration-300 ease-linear",
                    { "opacity-100": colorScheme === "dark" }
                  )}
                  alt="GitHub profile preview"
                />{" "}
                <Image
                  src={githubProfileLight}
                  fill
                  className={classNames(
                    "rounded-xl object-cover opacity-0 transition-opacity duration-300 ease-linear",
                    { "opacity-100": colorScheme === "light" }
                  )}
                  alt="GitHub profile preview"
                />
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
                  <ul role="list" className="space-y-6 text-gray-300">
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-white">
                          Product-first frontend.
                        </strong>{" "}
                        I translate product goals into fast, reliable
                        interfaces, balancing UX polish with long-term
                        maintainability.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-white">
                          Accessibility & quality.
                        </strong>{" "}
                        I build with WCAG-aligned patterns, keyboard support,
                        and thoughtful UI states as a default.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-white">
                          Frontend architecture.
                        </strong>{" "}
                        Design systems, component governance, and predictable
                        state management to keep teams aligned and shipping
                        quickly.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-white">
                          Collaboration.
                        </strong>{" "}
                        I work closely with product, design, and backend to
                        deliver cohesive product experiences.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section
        id="projects"
        className="relative mt-10 overflow-hidden py-24 sm:py-32 lg:mt-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
              Selected Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight  sm:text-6xl">
              Product work with depth.
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary-500/70"></div>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300">
              A focused selection of product platforms, accessibility tooling,
              and scalable design systems I&apos;ve shipped.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/5 backdrop-blur transition-colors duration-300 hover:border-primary-500/50"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-gray-400">
                  <span>{project.company}</span>
                  <span>Case Study</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-gray-400">{project.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={accentPillClass}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
              Skills & Expertise
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
              Built for scale.
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary-500/70"></div>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300">
              Modern frontend tooling and product architecture, grouped for
              clarity.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={accentPillClass}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
              Career Experience
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
              Trusted in production.
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary-500/70"></div>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300">
              Roles where I delivered large-scale frontend work, accessibility
              initiatives, and product-grade UI.
            </p>
          </div>
          <div className="mt-12 grid gap-6">
            {experience.map((role) => (
              <div
                key={role.company}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {typeof role.logo === "string" ? (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white">
                        {role.logo}
                      </div>
                    ) : role.logo.src ? (
                      <div className="flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/90 px-3">
                        <img
                          src={role.logo.src}
                          alt={role.logo.alt}
                          className="h-5 w-auto"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold ${role.logo.className}`}
                      >
                        {role.logo.text}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {role.company}
                      </h3>
                      <p className="text-sm text-gray-400">{role.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200">
                    {role.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-300">{role.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.projects.map((project) => (
                    <span key={project} className={accentPillClass}>
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s build something exceptional.
                </h2>
                <div className="mt-4 h-0.5 w-12 bg-primary-500/70"></div>
                <p className="mt-4 text-lg leading-8 dark:text-gray-300">
                  Open to senior frontend roles, product collaborations, or
                  advisory work. Reach out and I&apos;ll respond quickly.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                  <a
                    className="transition-colors duration-300 hover:text-primary-400"
                    href="mailto:matej.vykoukal248@gmail.com"
                  >
                    matej.vykoukal248@gmail.com
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
              <div className="flex flex-col items-start gap-4 lg:items-end lg:pt-6">
                <a
                  className="inline-flex justify-center rounded-full border bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 dark:border-blue-800 dark:bg-primary-500/10 dark:hover:border-transparent dark:hover:bg-primary-500/80"
                  href="/api/cv"
                >
                  Get CV
                </a>
                <a
                  className="text-base font-semibold leading-7 text-white/80 transition hover:text-white"
                  href="https://github.com/MatejVykoukal"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
                <a
                  className="text-base font-semibold leading-7 text-white/80 transition hover:text-white"
                  href="https://www.linkedin.com/in/mat%C4%9Bj-vykoukal-159b131a9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
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
