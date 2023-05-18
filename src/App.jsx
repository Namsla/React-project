import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <p>There is never a best time to learn coding than now. So, go Nams!</p>
      <h3>Daily Motivation:</h3>
      <ol>
        <li>practice, practice, practice</li>
        <li>Start Right Now</li>
        <li>Eat, Sleep, Code, and Repeat</li>
      </ol>
    </>
  );
}

export default App;
