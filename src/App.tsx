import { Outlet } from "react-router";
import { Wrapper, Main, Nav, Footer } from "./components/content";
import type { ConfigType } from "./types/type";

const data = import.meta.glob("./assets/config.json", {
  eager: true,
}) as Record<string, ConfigType>;

function App() {
  const config = Object.values(data)[0];
  return (
    <>
      <title>{config.title}</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={`/${config.title}/${config.icon}`}
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
