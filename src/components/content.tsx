import type { ReactNode } from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router";
import Github from "../assets/github-icon-1-logo-svgrepo-com.svg?react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="font-roboto flex h-screen flex-col items-center gap-4 bg-white dark:bg-neutral-950">
        {children}
      </div>
    </>
  );
};

export const Nav = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <>
      <nav className="flex w-full items-center justify-center border-b p-4 dark:border-b-white">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link to="" className="text-xl hover:underline dark:text-white">
            Blog
          </Link>
          <button
            aria-label={darkMode ? "light mode" : "dark mode"}
            className="relative flex size-10 cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300 focus:outline-4 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:outline-white"
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

export const Footer = () => {
  return (
    <>
      <footer className="flex w-full justify-center border-t p-4 dark:border-t-white">
        <div className="flex w-full max-w-5xl justify-between">
          <span className="text-lg dark:text-white">Blog</span>
          <a
            className="flex items-center gap-2 hover:underline dark:text-white"
            href="https://github.com/jjdavenport"
          >
            <Github className="size-6 dark:fill-white" />
            jjdavenport
          </a>
        </div>
      </footer>
    </>
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
          <span>{date}</span>, <span>{year}</span>
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
  content: string;
  month: string;
  date: number;
  year: number;
}) => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-4">
        <span className="text-2xl dark:text-white">{title}</span>
        <span className="flex gap-1 dark:text-white">
          <span>{month}</span>
          <span>{date}</span>, <span>{year}</span>
        </span>
        <p className="text-white">{content}</p>
      </div>
    </>
  );
};
