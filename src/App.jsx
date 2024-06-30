import { useState } from "react";
import reactLogo from "./assets/github.png";
import viteLogo from "./assets/smile.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://atanu16.vercel.app/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/atanu16" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coming soon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          The site you want to access is under development and has not been
          released yet.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Atanu&apos;s and github&apos;s logo to learn more
      </p>
    </>
  );
}

export default App;
