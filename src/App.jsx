import { Outlet, Link } from "@tanstack/react-router";
import "./App.scss";
import Navigation from "./components/navbar";
function App() {
  return (
    <>
      
     
      <header>
        <Navigation/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by Andrea</small>
      </footer>
    </>
  );
}

export default App;
