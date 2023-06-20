import PageTemplate from "~/components/PageTemplate";
import Lottie, { type LottieRef } from "lottie-react";
import codingAnimation from "~/../public/coding_animation.json";
import { useRef } from "react";
import TypingAnimation from "~/components/TypingAnimation";
import Link from "next/link";

export default function Home() {
  const lottieRef: LottieRef = useRef(null);

  lottieRef.current?.setSpeed(1.2);

  return (
    <PageTemplate>
      <div className="container mx-auto px-4 sm:pt-[10vmax] xl:max-w-5xl xl:pt-[10vh]">
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
              className="h-[7.5rem] w-full text-center text-4xl font-bold xs:h-[4.5rem] md:h-min lg:text-left"
            >
              <TypingAnimation
                staticText="Hi, I'm "
                typedTextArray={[
                  "Matej Vykoukal",
                  "Web Developer",
                  "Fullstack Developer",
                  "AI Enthusiast",
                ]}
                typedTextProps={{ className: "text-primary-500" }}
              />
            </h1>
            <p className="max-w-md  text-center lg:text-left">
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
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-primary-500 px-4 py-1">
                Contact me
              </button>
              <Link className="text-primary-500 underline" href="#about-me">
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
