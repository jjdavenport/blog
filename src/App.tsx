import { Outlet } from "react-router";
import { Wrapper, Main, Nav, Footer } from "./components/content";

function App() {
  return (
    <>
      <Wrapper>
        <Nav />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
