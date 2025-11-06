import type { ReactNode } from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router";
import github from "../assets/github-icon-1-logo-svgrepo-com.svg";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="font-roboto flex h-screen flex-col items-center gap-4">
        {children}
      </div>
    </>
  );
};

export const Nav = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <>
      <nav className="flex w-full items-center justify-center border-b p-4">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link to="" className="text-xl hover:underline">
            Blog
          </Link>
          <button
            aria-label={darkMode ? "light mode" : "dark mode"}
            className="relative flex size-10 cursor-pointer items-center justify-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            <Sun
              className={`${darkMode ? "scale-100" : "scale-0"} absolute size-8 transition-all`}
            />
            <Moon
              className={`${darkMode ? "scale-0" : "scale-100"} absolute size-8 transition-all`}
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
      <footer className="flex w-full justify-center border-t p-4">
        <div className="flex w-full max-w-5xl justify-between">
          <span className="text-lg">Blog</span>
          <a
            className="flex items-center gap-2"
            href="https://github.com/jjdavenport"
          >
            <img
              className="size-6"
              aria-hidden="true"
              src={github}
              alt="github"
            />
            jjdavenport
          </a>
        </div>
      </footer>
    </>
  );
};

export const Post = ({
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
        <span className="flex gap-1">
          <span>{month}</span>
          <span>{date}</span>, <span>{year}</span>
        </span>
        <Link className="text-2xl hover:underline" to={href}>
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
