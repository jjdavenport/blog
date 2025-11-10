import { describe, expect, it, beforeEach } from "vitest";
import MatchMediaMock from "vitest-matchmedia-mock";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../src/App";
import { MainPage } from "../src/pages/content";
import config from "../src/assets/config.json";

describe("renders the app home page in dark mode", () => {
  let matchMediaMock;

  beforeEach(() => {
    matchMediaMock = new MatchMediaMock();
    matchMediaMock.useMediaQuery("(prefers-color-scheme: dark)");
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
  });

  it("test if the light/dark mode button has the correct aria label", () => {
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "light mode",
    );
  });
});

describe("renders the app home page in light mode", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
  });

  it("tests if the light/dark mode button has the correct aria label", () => {
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "light mode",
    );
  });

  it("checks the nav title matches the config title", () => {
    expect(screen.getByTestId("title").textContent).toMatch(config.title);
  });
});

describe("renders the main page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainPage />
      </MemoryRouter>,
    );
  });

  it("tests if the main heading has posts as text", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Posts",
    );
  });
});
