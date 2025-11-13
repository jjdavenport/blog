import type { ReactNode } from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router";
import config from "../assets/config.json";
import { Mail } from "lucide-react";
import type { ConfigType } from "../types/type";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="font-roboto flex h-screen flex-col items-center gap-4 bg-white dark:bg-neutral-950">
        {children}
      </div>
    </>
  );
};

export const Nav = ({ config }: { config: { title: string } }) => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <>
      <nav className="flex w-full items-center justify-center border-b p-4 dark:border-b-white">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link
            to=""
            data-testid="title"
            className="text-2xl hover:underline dark:text-white"
          >
            {config.title}
          </Link>
          <button
            aria-label={darkMode ? "light mode" : "dark mode"}
            className="relative flex size-10 cursor-pointer items-center justify-center rounded-lg bg-gray-900/10 transition duration-300 ease-in-out hover:bg-gray-900/15 focus:outline-4 dark:bg-neutral-50/5 dark:hover:bg-neutral-50/10 dark:focus:outline-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            <Sun
              className={`${darkMode ? "scale-100" : "scale-0"} absolute size-6 transition-all dark:text-white`}
            />
            <Moon
              className={`${darkMode ? "scale-0" : "scale-100"} absolute size-6 transition-all`}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export const Footer = ({ config }: { config: ConfigType }) => {
  return (
    <footer className="flex w-full justify-center border-t p-4 dark:border-t-white">
      <div className="flex w-full max-w-5xl justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-lg dark:text-white">{config.title}</span>
          <p className="dark:text-white">{config.description}</p>
        </div>
        <ul className="flex h-fit w-fit max-w-sm flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between">
          {config.links.map((i, index) => {
            if (i.type === "link") {
              return (
                <li className="flex h-fit" key={index}>
                  <a
                    className="flex w-fit items-center gap-2 hover:underline dark:text-white"
                    href={i.href}
                  >
                    <img
                      className="size-6 dark:invert"
                      src={`/${config.title}/${i.src}`}
                      alt={i.alt}
                    />
                    {i.value}
                  </a>
                </li>
              );
            }

            if (i.type === "email") {
              return (
                <li className="flex h-fit" key={index}>
                  <a
                    className="flex w-fit items-center gap-2 hover:underline dark:text-white"
                    href={`mailto:${i.href}`}
                  >
                    <Mail />
                    {i.href}
                  </a>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </footer>
  );
};

export const PostLink = ({
  title,
  href,
  month,
  date,
  year,
}: {
  href: string;
  title: string;
  month: string;
  date: number;
  year: number;
}) => {
  return (
    <>
      <li className="flex flex-col gap-1">
        <span className="flex gap-1 dark:text-white">
          <span>{month}</span>
          <span>{`${date},`}</span>
          <span>{year}</span>
        </span>
        <Link
          className="w-fit text-2xl hover:underline dark:text-white"
          to={href}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center px-4">
        {children}
      </main>
    </>
  );
};

export const Post = ({
  title,
  content,
  month,
  date,
  year,
}: {
  title: string;
  content: (
    | {
        type: "text";
        value: string;
      }
    | {
        type: "link";
        value: string;
        href: string;
      }
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "div";
      }
  )[];
  month: string;
  date: number;
  year: number;
}) => {
  return (
    <>
      <article className="flex w-full max-w-5xl flex-col gap-4">
        <header>
          <h1 className="text-4xl dark:text-white">{title}</h1>
        </header>
        <span className="flex gap-1 dark:text-white">
          <span>{month}</span>
          <span>{`${date},`}</span>
          <span>{year}</span>
        </span>
        {content.map((i, index) => {
          if (i.type === "div") {
            return <hr className="h-px w-full dark:text-white"></hr>;
          }
          if (Array.isArray(i)) {
            return (
              <p key={index} className="flex gap-1 dark:text-white">
                {i.map((i, index) => {
                  if (i.type === "text") {
                    return i.value;
                  }
                  if (i.type === "link" && i.value !== "") {
                    return (
                      <>
                        <a
                          key={index}
                          href={i.href}
                          target="_blank"
                          className="text-blue-400 underline"
                        >
                          {i.value}
                        </a>
                      </>
                    );
                  }
                  return null;
                })}
              </p>
            );
          }
          if (i.type === "text") {
            return (
              <p key={index} className="dark:text-white">
                {i.value}
              </p>
            );
          }
          if (i.type === "image") {
            return (
              <img
                key={index}
                className="dark:text-white"
                src={`/${config.title}/${i.src}`}
                alt={i.alt}
              />
            );
          }
          if (i.type === "link" && i.value !== "") {
            return (
              <a
                key={index}
                href={i.href}
                target="_blank"
                className="text-blue-400 underline"
              >
                {i.value}
              </a>
            );
          }
          return null;
        })}
      </article>
    </>
  );
};
