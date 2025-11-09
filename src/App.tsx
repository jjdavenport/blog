import { Outlet } from "react-router";
import { Wrapper, Main, Nav, Footer } from "./components/content";
import config from "./assets/config.json";
import useTheme from "./hooks/useTheme";

function App() {
  const { darkMode } = useTheme();
  return (
    <>
      <title>{config.title}</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={`/${config.title}/${darkMode ? config.iconDarkMode : config.icon}`}
      />
      <Wrapper>
        <Nav config={config} />
        <Main>
          <Outlet />
        </Main>
        <Footer config={config} />
      </Wrapper>
    </>
  );
}

export default App;
