import { Outlet, Link } from "@tanstack/react-router";
import "./App.scss";

function App() {
  return (
    <>
      <h1 className="text-xs text-red-600">Hello tailwind</h1>
      <div className="flex-column ">
        <div>1</div>
        <div>21234</div>
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by Hallvard</small>
      </footer>
    </>
  );
}

export default App;
