import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light py-5">
        <span className="navbar">
          <img src="/logo.svg" className="img-fluid logo" alt="logo" />
        </span>
        <span className="bar">
          <ul className="nav cast">
            <li className="item">
              <a
                className=" link active me-3"
                aria-current="page"
                href="home.js"
              >
                Home
              </a>
            </li>
            <li className="item">
              <a href="home.js" className="link me-3">
                Features
              </a>
            </li>
            <li className="item">
              <a href="home.js" className="link me-3">
                About us
              </a>
            </li>
            <li className="item">
              <a href="home.js" className="link me-3">
                Product
              </a>
            </li>
            <li className="item">
              <a href="home.js" className="link me-5">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="items ">
              <a className="log me-3" href="Home.js">
                Log in
              </a>
            </li>
            <li className="items">
              <a className="sign" href="home.js">
                Sign up
              </a>
            </li>
          </ul>
        </span>
      </nav>
      <Home />
      <About />
    </div>
  );
}
