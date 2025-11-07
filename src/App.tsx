import { Outlet } from "react-router";
import { Wrapper, Main, Nav, Footer } from "./components/content";
import config from "./assets/config.json";

document.title = config.title;

function App() {
  return (
    <>
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
