import { Outlet, Link } from "@tanstack/react-router";
import "./App.scss";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
